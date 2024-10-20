import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import {customElement, property, state} from 'lit/decorators.js';
import "./../../components/flp-card";
import "./../../components/flp-button";
import "./../../components/flp-input";
import "./../../components/flp-logo";
import "./../../components/flp-divider";
import "./../../components/flp-icon";
import "./../../components/flp-spinner";
import { flippico } from './flp-login.styles';
import { ifDefined } from 'lit/directives/if-defined.js';
import { getApiUrl } from '../../utils/get-api-url';

/**
 * @summary This the flp-login component
 *
 * @tag flp-login
 */
 @customElement("flp-login")
export class FlpLogin extends FlpElement {
  static styles: CSSResultGroup = [flippico];

  @property({ type: String, attribute: "tenant_key" }) tenantKey = '';
  @property({ type: String, attribute: "logo" }) logo = '';
  @property({ type: String, attribute: "signup_url" }) signUpUrl = '';
  @property({ type: String, attribute: "reset_password_url" }) resetPasswordUrl = '';
  @property({ type: Boolean, attribute: "staging" }) staging = false;
  @property({ type: Boolean, attribute: "develop" }) develop = false;
  @property({ type: Boolean, attribute: "mobile_login" }) mobileLogin = false;

  @state() errorText: null | string;
  @state() loginPending: boolean = false;

  async loginByGoogle() {
    fetch(`${getApiUrl(this.staging, this.develop)}/api/${this.tenantKey}/google`, {
      method: "GET",
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 404) {
        this.errorText = "User not found";
        throw new Error("User not found");
      }
      if (response.status === 403) {
        this.errorText = "Incorrect password";
        throw new Error("Incorrect password");
      }
    })
    .then((response: any) => {
      window.location.href = response.message.redirect_url;
    })
    .catch(console.error)
    .finally(() => this.loginPending = false);
  }

  async loginByApple() {
    console.log('login by apple');
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
    fetch(`${getApiUrl(this.staging, this.develop)}/api/${this.tenantKey}/login`, {
      method: "POST",
      body: urlencoded,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 404) {
        this.errorText = "User not found";
        throw new Error("User not found");
      }
      if (response.status === 403) {
        this.errorText = "Incorrect password";
        throw new Error("Incorrect password");
      }
    })
    .then((response: any) => {
      window.location.href = response.message.redirect_url;
    })
    .catch(console.error)
    .finally(() => this.loginPending = false);
  }

  render() {
    return html`
    <flp-card class="auth-container">
      <form .action=${`/api/${this.tenantKey}/google`} method="get">
        <div class="logo-container text-align-center">
          ${this.logo ? html`<img .src=${this.logo} alt="logo" width="150" height="150" />` : html`<flp-logo></flp-logo>`}
        </div>
        <h2 class="text-align-center">Hello again!</h2>
        <flp-button size="large" variant="default" type="submit">
          <flp-icon slot="prefix" name="google"></flp-icon>
          Login by Google
        </flp-button>
      </form>
      <br/>
      <form .action=${`/api/${this.tenantKey}/apple`} method="get"></form>
        <flp-button size="large" variant="default" type="submit">
          <flp-icon slot="prefix" name="apple"></flp-icon>
          Login by Apple
        </flp-button>
        <div class="login-by-email-text">
          <div class="login-by-email-text--line"></div>
          <div class="text-align-center">or login by email</div>
          <div class="login-by-email-text--line"></div>
        </div>
      </form>
      <form @submit=${this.onSubmitHandle}>
        <flp-input class="email--input" type="email" required name="email" label="Email"></flp-input>
        <div class="password--and-forgot-password-link--container">
          <flp-input name="password" required type="password" label="Password" password-toggle></flp-input>
          <div class="forgot-password-link--container">
            <flp-button variant="text" href=${this.resetPasswordUrl}>Fogrot your password?</flp-button>
          </div>
        </div>
        <input type="hidden" name="tenant_key" value=${this.tenantKey}/>
        <flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${ifDefined(this.loginPending)} 
          .disabled=${ifDefined(this.loginPending)}
        >Login</flp-button>
        <flp-button class="mb-medium" href=${this.signUpUrl} variant="primary" size="large" outline>Create new account by email</flp-button>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`;
  }
}
