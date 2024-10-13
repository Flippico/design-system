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
  @property({ type: String, attribute: "signup_url" }) signUpUrl = '';
  @property({ type: String, attribute: "reset_password_url" }) resetPasswordUrl = '';
  @property({ type: Boolean, attribute: "staging" }) staging = false;
  @property({ type: Boolean, attribute: "develop" }) develop = false;
  @property({ type: Boolean, attribute: "mobile_login" }) mobileLogin = false;

  @state() errorText: null | string;
  @state() loginPending: boolean = false;

  async loginByGoogle() {
    console.log('login by google');
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
    urlencoded.append("name", formData.get("name") as string);
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
    .then((response) => response.json())
    .then((response) => {
      if (this.mobileLogin) {
        window.location.href = `${response.message.redirect_url}?token=${response.message.token}`;  
        return;
      }
      window.location.href = response.message.redirect_url;
    })
    .catch(console.error)
    .finally(() => this.loginPending = false);
  }

  render() {
    return html`
    <flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          <flp-logo></flp-logo>
        </div>
        <h2 class="text-align-center">Hello again!</h2>
        <flp-button size="large" variant="default" @click=${this.loginByGoogle}>
          <flp-icon slot="prefix" name="google"></flp-icon>
          Login by Google
        </flp-button>
        <br/>
        <br/>
        <flp-button size="large" variant="default" @click=${this.loginByApple}>
          <flp-icon slot="prefix" name="apple"></flp-icon>
          Login by Apple
        </flp-button>

        <div class="login-by-email-text">
          <div class="login-by-email-text--line"></div>
          <div class="text-align-center">or login by email</div>
          <div class="login-by-email-text--line"></div>
        </div>

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
