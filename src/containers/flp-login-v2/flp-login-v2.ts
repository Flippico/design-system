import { CSSResultGroup, html, nothing } from 'lit';
import FlpElement from '../../utils/flippico-element';
import { customElement, property, state } from 'lit/decorators.js';
import "./../../components/flp-card";
import "./../../components/flp-button";
import "./../../components/flp-input";
import "./../../components/flp-logo";
import "./../../components/flp-divider";
import "./../../components/flp-icon";
import "./../../components/flp-spinner";
import { flippico } from '../flp-login/flp-login.styles';
import { ifDefined } from 'lit/directives/if-defined.js';


interface ProviderMethod {
  method_type: string;
}

interface Provider {
  name: string;
  platform: string;
  methods: ProviderMethod[];
}

interface TenantConfig {
  tenant_key: string;
  mfa_mode: string;
  providers: Provider[];
}

/**
 * @summary Login v2 component — dynamic providers via API, MFA support, provider_id routing
 * @tag flp-login-v2
 */
@customElement("flp-login-v2")
export class FlpLoginV2 extends FlpElement {
  static styles: CSSResultGroup = [flippico];

  @property({ type: String, attribute: "tenant_key" }) tenantKey = '';
  @property({ type: String, attribute: "provider_id" }) providerId = '';
  @property({ type: String, attribute: "logo" }) logo = '';
  @property({ type: String, attribute: "signup_url" }) signUpUrl = '';
  @property({ type: String, attribute: "reset_password_url" }) resetPasswordUrl = '';
  @property({ type: Boolean, attribute: "staging" }) staging = false;
  @property({ type: Boolean, attribute: "develop" }) develop = false;
  @property({ type: Boolean, attribute: "mobile_login" }) mobileLogin = false;
  @property({ attribute: "is_admin_panel" }) _isAdminPanel = false;
  /** JSON array of method types for Storybook testing, e.g. '["google","apple","email_password"]'. Skips API fetch when set. */
  @property({ type: String, attribute: "mock_methods" }) mockMethods = '';

  @state() errorText: null | string = null;
  @state() loginPending: boolean = false;
  @state() configLoaded: boolean = false;
  @state() providers: Provider[] = [];
  @state() mfaMode: string = 'disabled';
  @state() mfaRequired: boolean = false;
  @state() mfaChallengeToken: string = '';
  @state() mfaMethods: string[] = [];

  get isAdminPanel() {
    return (this._isAdminPanel as any) === "true";
  }

  get oauthMethods(): ProviderMethod[] {
    const seen = new Set<string>();
    const methods: ProviderMethod[] = [];
    for (const p of this.providers) {
      for (const m of p.methods) {
        if (m.method_type !== 'email_password' && !seen.has(m.method_type)) {
          seen.add(m.method_type);
          methods.push(m);
        }
      }
    }
    return methods;
  }

  get hasEmailPassword(): boolean {
    if (!this.configLoaded || this.providers.length === 0) return true;
    return this.providers.some(p => p.methods.some(m => m.method_type === 'email_password'));
  }

  private get providerPath(): string {
    return this.providerId ? `${this.tenantKey}/${this.providerId}` : this.tenantKey;
  }

  firstUpdated() {
    if (this.mockMethods) {
      this.applyMockMethods();
    } else {
      this.fetchConfig();
    }
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('mockMethods') && this.mockMethods) {
      this.applyMockMethods();
    }
  }

  private applyMockMethods() {
    try {
      const types: string[] = JSON.parse(this.mockMethods);
      this.providers = [{
        name: 'Mock',
        platform: 'web',
        methods: types.map(t => ({ method_type: t })),
      }];
    } catch {
      this.providers = [];
    }
    this.configLoaded = true;
  }

  private async fetchConfig() {
    try {
      const res = await fetch(`/api/${this.providerPath}/config`);
      if (res.ok) {
        const data = await res.json();
        const config: TenantConfig = data.message;
        this.providers = config.providers;
        this.mfaMode = config.mfa_mode;
      }
    } catch {
      // Silently fail — fall back to legacy buttons
    }
    this.configLoaded = true;
  }

  private getMethodLabel(method: string): string {
    const labels: Record<string, string> = {
      google: 'Zaloguj się z Google',
      apple: 'Zaloguj się z Apple',
      microsoft: 'Zaloguj się z Microsoft',
      github: 'Zaloguj się z GitHub',
      facebook: 'Zaloguj się z Facebook',
    };
    return labels[method] || `Zaloguj się z ${method}`;
  }

  async loginByOAuth(methodType: string) {
    this.loginPending = true;
    fetch(`/api/${this.providerPath}/${methodType}`, {
      method: "GET",
    })
      .then(response => {
        if (response.ok) return response.json();
        this.errorText = "Login failed";
        throw new Error("OAuth redirect failed");
      })
      .then((response: any) => {
        window.location.href = response.message.redirect_url;
      })
      .catch(console.error)
      .finally(() => this.loginPending = false);
  }

  async onSubmitHandle(event: any) {
    event.preventDefault();
    this.loginPending = true;
    const formData = new FormData(event.target);
    if (Array.from(formData.values()).some(item => item === '')) {
      this.errorText = 'Password or email is empty';
      this.loginPending = false;
      return;
    }
    const urlencoded = new URLSearchParams();
    urlencoded.append("tenant_key", this.tenantKey);
    urlencoded.append("email", formData.get("email") as string);
    urlencoded.append("password", formData.get("password") as string);

    this.errorText = null;
    fetch(`/api/${this.providerPath}/login`, {
      method: "POST",
      body: urlencoded,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
      .then(response => {
        if (response.ok) return response.json();
        if (response.status === 404) { this.errorText = "User not found"; throw new Error("User not found"); }
        if (response.status === 403) { this.errorText = "Incorrect password"; throw new Error("Incorrect password"); }
        throw new Error("Login failed");
      })
      .then((response: any) => {
        const msg = response.message;
        if (msg.mfa_required) {
          this.mfaRequired = true;
          this.mfaChallengeToken = msg.challenge_token;
          this.mfaMethods = msg.methods;
          this.emit('flp-login-mfa-required', msg);
          window.parent.postMessage({ type: 'LOGIN_MFA_REQUIRED', payload: msg }, '*');
          return;
        }
        if (msg.mfa_setup_required) {
          this.emit('flp-login-mfa-setup-required', msg);
          window.parent.postMessage({ type: 'LOGIN_MFA_SETUP_REQUIRED', payload: msg }, '*');
          if (msg.setup_url) window.location.href = msg.setup_url;
          return;
        }
        this.emit('flp-login-success', msg);
        window.parent.postMessage({ type: 'LOGIN_SUCCESS', payload: msg }, '*');
        if (msg.redirect_url) window.location.href = msg.redirect_url;
      })
      .catch(console.error)
      .finally(() => this.loginPending = false);
  }

  async onMfaSubmit(event: any) {
    event.preventDefault();
    this.loginPending = true;
    this.errorText = null;
    const formData = new FormData(event.target);
    const code = formData.get("mfa_code") as string;
    const method = formData.get("mfa_method") as string || 'totp';

    fetch(`/api/mfa/${this.tenantKey}/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ challenge_token: this.mfaChallengeToken, code, method })
    })
      .then(response => {
        if (response.ok) return response.json();
        this.errorText = "Invalid code";
        throw new Error("MFA verification failed");
      })
      .then((response: any) => {
        const msg = response.message;
        this.emit('flp-login-success', msg);
        window.parent.postMessage({ type: 'LOGIN_SUCCESS', payload: msg }, '*');
        if (msg.redirect_url) window.location.href = msg.redirect_url;
      })
      .catch(console.error)
      .finally(() => this.loginPending = false);
  }

  async requestSmsCode() {
    fetch(`/api/mfa/${this.tenantKey}/sms/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ challenge_token: this.mfaChallengeToken })
    }).catch(console.error);
  }

  private renderOAuthButtons() {
    if (!this.configLoaded) return nothing;

    const methods = this.oauthMethods;
    if (methods.length === 0) return nothing;

    return html`
      ${methods.map(m => html`
        <flp-button size="large" variant="default" @click=${() => this.loginByOAuth(m.method_type)} style="margin-bottom: 8px;">
          <flp-icon slot="prefix" name=${m.method_type}></flp-icon>
          ${this.getMethodLabel(m.method_type)}
        </flp-button>
      `)}
    `;
  }

  render() {
    if (this.mfaRequired) {
      return html`
      <flp-card class="auth-container">
        <div class="logo-container text-align-center">
          ${this.logo ? html`<img .src=${this.logo} alt="logo" width="150" height="auto" />` : html`<flp-logo></flp-logo>`}
        </div>
        <h2 class="text-align-center">Weryfikacja dwuetapowa</h2>
        <form @submit=${this.onMfaSubmit}>
          ${this.mfaMethods.includes('sms') ? html`
            <div style="text-align: center; margin-bottom: 16px;">
              <flp-button variant="text" @click=${this.requestSmsCode}>Wyślij kod SMS</flp-button>
            </div>
          ` : nothing}
          <flp-input class="email--input" type="text" required name="mfa_code" label="Kod weryfikacyjny" placeholder="000000"></flp-input>
          <select name="mfa_method" style="width: 100%; padding: 8px; margin-bottom: 16px; border: 1px solid #ccc; border-radius: 4px;">
            ${this.mfaMethods.map(m => html`<option value=${m}>${m === 'totp' ? 'Aplikacja (TOTP)' : m === 'sms' ? 'SMS' : m}</option>`)}
            <option value="backup">Kod zapasowy</option>
          </select>
          <flp-button class="mb-small" size="large" variant="primary" type="submit"
            .loading=${ifDefined(this.loginPending)} .disabled=${ifDefined(this.loginPending)}
          >Zweryfikuj</flp-button>
          <div class="error">${this.errorText}</div>
        </form>
        <flp-button variant="text" @click=${() => { this.mfaRequired = false; this.mfaChallengeToken = ''; }}>Powrót do logowania</flp-button>
      </flp-card>`;
    }

    const showOAuth = this.oauthMethods.length > 0;
    const showDivider = showOAuth && this.hasEmailPassword;

    return html`
    <flp-card class="auth-container">
      <div class="logo-container text-align-center">
        ${this.logo ? html`<img .src=${this.logo} alt="logo" width="150" height="auto" />` : html`<flp-logo></flp-logo>`}
      </div>
      <h2 class="text-align-center">Witaj!</h2>

      ${this.renderOAuthButtons()}

      ${showDivider ? html`
        <div class="login-by-email-text">
          <div class="login-by-email-text--line"></div>
          <div class="text-align-center">Lub zaloguj się przez email</div>
          <div class="login-by-email-text--line"></div>
        </div>
      ` : nothing}

      ${this.hasEmailPassword ? html`
        <form @submit=${this.onSubmitHandle}>
          <flp-input class="email--input" type="email" required name="email" label="Email"></flp-input>
          <div class="password--and-forgot-password-link--container">
            <flp-input name="password" required type="password" label="Hasło" password-toggle></flp-input>
            ${this.isAdminPanel ? nothing : html`
              <div class="forgot-password-link--container">
                <flp-button variant="text" href=${this.resetPasswordUrl}>Zresetuj hasło</flp-button>
              </div>
            `}
          </div>
          <input type="hidden" name="tenant_key" value=${this.tenantKey}/>
          <flp-button class="mb-small" size="large" variant="primary" type="submit"
            .loading=${ifDefined(this.loginPending)} .disabled=${ifDefined(this.loginPending)}
          >Zaloguj się</flp-button>
          ${this.isAdminPanel ? nothing : html`
            <flp-button class="mb-medium" href=${this.signUpUrl} variant="primary" size="large" outline>Utwórz nowe konto przez email</flp-button>
          `}
          <div class="error">${this.errorText}</div>
        </form>
      ` : nothing}
    </flp-card>`;
  }
}
