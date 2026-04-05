import { CSSResultGroup, html, nothing, css } from 'lit';
import FlpElement from '../../utils/flippico-element';
import { customElement, property, state } from 'lit/decorators.js';
import "./../../components/flp-card";
import "./../../components/flp-button";
import "./../../components/flp-input";
import "./../../components/flp-logo";
import { ifDefined } from 'lit/directives/if-defined.js';
import { getApiUrl } from '../../utils/get-api-url';

/**
 * @summary MFA setup component for TOTP (authenticator app) and SMS
 * @tag flp-mfa-setup
 */
@customElement("flp-mfa-setup")
export class FlpMfaSetup extends FlpElement {
  static styles: CSSResultGroup = [css`
    .auth-container { max-width: 450px; width: 100%; }
    flp-button { width: 100%; }
    .mb-small { margin-bottom: 10px; }
    .error { color: var(--flp-color-warning-700); }
    .success { color: var(--flp-color-success-700, green); }
    h2 { font-family: var(--flp-font-medium); }
    .text-align-center { text-align: center; }
    .qr-container { text-align: center; margin: 16px 0; padding: 16px; background: #f9f9f9; border-radius: 8px; }
    .secret-code { font-family: monospace; font-size: 14px; word-break: break-all; padding: 8px; background: #eee; border-radius: 4px; margin: 8px 0; }
    .backup-codes { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 16px 0; }
    .backup-code { font-family: monospace; padding: 6px 10px; background: #f0f0f0; border-radius: 4px; text-align: center; }
    .tab-buttons { display: flex; gap: 8px; margin-bottom: 20px; }
    .tab-buttons flp-button { flex: 1; }
  `];

  @property({ type: String, attribute: "tenant_key" }) tenantKey = '';
  @property({ type: String, attribute: "auth_token" }) authToken = '';
  @property({ type: String, attribute: "logo" }) logo = '';
  @property({ type: Boolean, attribute: "staging" }) staging = false;
  @property({ type: Boolean, attribute: "develop" }) develop = false;

  @state() activeTab: 'totp' | 'sms' = 'totp';
  @state() errorText: null | string = null;
  @state() pending: boolean = false;

  // TOTP state
  @state() totpSecret: string = '';
  @state() totpUrl: string = '';
  @state() totpSetupDone: boolean = false;
  @state() backupCodes: string[] = [];

  // SMS state
  @state() smsCodeSent: boolean = false;
  @state() smsSetupDone: boolean = false;

  private get apiBase() { return getApiUrl(this.staging, this.develop); }
  private get headers() {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`,
    };
  }

  async setupTotp() {
    this.pending = true;
    this.errorText = null;
    try {
      const res = await fetch(`${this.apiBase}/api/mfa/${this.tenantKey}/totp/setup`, {
        method: 'POST', headers: this.headers,
      });
      if (!res.ok) throw new Error('Setup failed');
      const data = await res.json();
      this.totpSecret = data.message.secret;
      this.totpUrl = data.message.otpauth_url;
    } catch { this.errorText = 'Failed to start TOTP setup'; }
    this.pending = false;
  }

  async verifyTotp(event: any) {
    event.preventDefault();
    this.pending = true;
    this.errorText = null;
    const code = new FormData(event.target).get('code') as string;
    try {
      const res = await fetch(`${this.apiBase}/api/mfa/${this.tenantKey}/totp/verify-setup`, {
        method: 'POST', headers: this.headers,
        body: JSON.stringify({ code }),
      });
      if (!res.ok) { this.errorText = 'Invalid code'; this.pending = false; return; }
      const data = await res.json();
      this.backupCodes = data.message.backup_codes;
      this.totpSetupDone = true;
      this.emit('flp-mfa-setup-success', { method: 'totp' });
      window.parent.postMessage({ type: 'MFA_SETUP_SUCCESS', payload: { method: 'totp' } }, '*');
    } catch { this.errorText = 'Verification failed'; }
    this.pending = false;
  }

  async setupSms(event: any) {
    event.preventDefault();
    this.pending = true;
    this.errorText = null;
    const phone = new FormData(event.target).get('phone') as string;
    try {
      const res = await fetch(`${this.apiBase}/api/mfa/${this.tenantKey}/sms/setup`, {
        method: 'POST', headers: this.headers,
        body: JSON.stringify({ phone_number: phone }),
      });
      if (!res.ok) throw new Error('SMS setup failed');
      this.smsCodeSent = true;
    } catch { this.errorText = 'Failed to send SMS code'; }
    this.pending = false;
  }

  async verifySms(event: any) {
    event.preventDefault();
    this.pending = true;
    this.errorText = null;
    const code = new FormData(event.target).get('code') as string;
    try {
      const res = await fetch(`${this.apiBase}/api/mfa/${this.tenantKey}/sms/verify-setup`, {
        method: 'POST', headers: this.headers,
        body: JSON.stringify({ code }),
      });
      if (!res.ok) { this.errorText = 'Invalid code'; this.pending = false; return; }
      const data = await res.json();
      this.backupCodes = data.message.backup_codes;
      this.smsSetupDone = true;
      this.emit('flp-mfa-setup-success', { method: 'sms' });
      window.parent.postMessage({ type: 'MFA_SETUP_SUCCESS', payload: { method: 'sms' } }, '*');
    } catch { this.errorText = 'Verification failed'; }
    this.pending = false;
  }

  private renderBackupCodes() {
    if (this.backupCodes.length === 0) return nothing;
    return html`
      <div style="margin-top: 20px;">
        <h3 class="text-align-center">Kody zapasowe</h3>
        <p class="text-align-center" style="font-size: 13px; color: #666;">Zapisz te kody w bezpiecznym miejscu. Każdy kod można użyć tylko raz.</p>
        <div class="backup-codes">
          ${this.backupCodes.map(c => html`<div class="backup-code">${c}</div>`)}
        </div>
      </div>
    `;
  }

  private renderTotpSetup() {
    if (this.totpSetupDone) {
      return html`
        <p class="success text-align-center">TOTP skonfigurowany pomyślnie!</p>
        ${this.renderBackupCodes()}
      `;
    }

    if (!this.totpSecret) {
      return html`
        <p class="text-align-center">Skonfiguruj aplikację uwierzytelniającą (Google Authenticator, Authy itp.)</p>
        <flp-button class="mb-small" size="large" variant="primary" @click=${this.setupTotp}
          .loading=${ifDefined(this.pending)} .disabled=${ifDefined(this.pending)}
        >Rozpocznij konfigurację TOTP</flp-button>
      `;
    }

    return html`
      <div class="qr-container">
        <p>Zeskanuj kod QR w aplikacji uwierzytelniającej:</p>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(this.totpUrl)}" alt="QR Code" width="200" height="200" />
        <p style="font-size: 12px; color: #666;">Lub wprowadź klucz ręcznie:</p>
        <div class="secret-code">${this.totpSecret}</div>
      </div>
      <form @submit=${this.verifyTotp}>
        <flp-input name="code" type="text" required label="Kod z aplikacji" placeholder="000000"></flp-input>
        <br/>
        <flp-button class="mb-small" size="large" variant="primary" type="submit"
          .loading=${ifDefined(this.pending)} .disabled=${ifDefined(this.pending)}
        >Zweryfikuj</flp-button>
      </form>
    `;
  }

  private renderSmsSetup() {
    if (this.smsSetupDone) {
      return html`
        <p class="success text-align-center">SMS MFA skonfigurowany pomyślnie!</p>
        ${this.renderBackupCodes()}
      `;
    }

    if (!this.smsCodeSent) {
      return html`
        <p class="text-align-center">Wprowadź numer telefonu, na który będą wysyłane kody SMS</p>
        <form @submit=${this.setupSms}>
          <flp-input name="phone" type="tel" required label="Numer telefonu" placeholder="+48 600 000 000"></flp-input>
          <br/>
          <flp-button class="mb-small" size="large" variant="primary" type="submit"
            .loading=${ifDefined(this.pending)} .disabled=${ifDefined(this.pending)}
          >Wyślij kod weryfikacyjny</flp-button>
        </form>
      `;
    }

    return html`
      <p class="text-align-center">Kod SMS został wysłany. Wprowadź go poniżej.</p>
      <form @submit=${this.verifySms}>
        <flp-input name="code" type="text" required label="Kod SMS" placeholder="000000"></flp-input>
        <br/>
        <flp-button class="mb-small" size="large" variant="primary" type="submit"
          .loading=${ifDefined(this.pending)} .disabled=${ifDefined(this.pending)}
        >Zweryfikuj</flp-button>
      </form>
    `;
  }

  render() {
    return html`
    <flp-card class="auth-container">
      <div class="logo-container text-align-center">
        ${this.logo ? html`<img .src=${this.logo} alt="logo" width="150" height="auto" />` : html`<flp-logo></flp-logo>`}
      </div>
      <h2 class="text-align-center">Konfiguracja weryfikacji dwuetapowej</h2>

      <div class="tab-buttons">
        <flp-button variant=${this.activeTab === 'totp' ? 'primary' : 'default'} @click=${() => this.activeTab = 'totp'}>
          Aplikacja (TOTP)
        </flp-button>
        <flp-button variant=${this.activeTab === 'sms' ? 'primary' : 'default'} @click=${() => this.activeTab = 'sms'}>
          SMS
        </flp-button>
      </div>

      ${this.activeTab === 'totp' ? this.renderTotpSetup() : this.renderSmsSetup()}

      <div class="error">${this.errorText}</div>
    </flp-card>`;
  }
}
