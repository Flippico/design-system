import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import {customElement, property, state} from 'lit/decorators.js';
import "./../../components/flp-card";
import "./../../components/flp-button";
import "./../../components/flp-input";
import "./../../components/flp-logo";
import "./../../components/flp-divider";
import { flippico } from './flp-signup.styles';
import { ifDefined } from 'lit/directives/if-defined.js';
import { getApiUrl } from '../../utils/get-api-url';

/**
 * @summary This the flp-signup component
 *
 * @tag flp-signup
 */
 @customElement("flp-signup")
export class FlpSignup extends FlpElement {
  static styles: CSSResultGroup = [flippico];

  @property({ type: String, attribute: "tenant_key" }) tenantKey = '';
  @property({ type: String, attribute: "logo" }) logo = '';
  @property({ type: String, attribute: "login_url" }) loginUrl = '';
  @property({ type: Boolean, attribute: "staging" }) staging = false;
  @property({ type: Boolean, attribute: "develop" }) develop = false;

  @state() errorText: null | string;
  @state() loginPending = false;

  onSubmitHandle(event: any) {
    event.preventDefault();
    this.loginPending = true;
    const formData = new FormData(event.target);
    if (Array.from(formData.values()).some(item => item === '')) {
      this.loginPending = false;
      return;
    }
    if (!/^(?=.*\d.*\d)[A-Za-z\d]{6,}$/.test(formData.get("password") as string)) {
      this.errorText = 'At least 8 characters and at least two numbers';
      this.loginPending = false;
      return;
    }
    this.errorText = null;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    const urlencoded = new URLSearchParams();
    urlencoded.append("name", formData.get("name") as string);
    urlencoded.append("email", formData.get("email") as string);
    urlencoded.append("password", formData.get("password") as string);
    fetch(`${getApiUrl(this.staging, this.develop)}/api/${this.tenantKey}/signup`, {
      method: "POST",
      body: urlencoded,
      headers: myHeaders,
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.ok) {
        window.location.href = response.message.redirect_url;
        return;
      }
      if (response.status === 403) {
        this.errorText = "User already exist";
      }
      event.target.reset();
    })
    .catch(console.error)
    .finally(() => this.loginPending = false);
  }

  render() {
    return html`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          ${this.logo ? html`<img .src=${this.logo} alt="logo" width="150" height="150" />` : html`<flp-logo></flp-logo>`}
        </div>
        <h2 class="text-align-center">Create your account</h2>
        <flp-input class="mb-small"  type="text" required name="name" label="Name"></flp-input>
        <flp-input class="mb-small"  type="email" required name="email" label="Email"></flp-input>
        <flp-input class="mb-medium"  name="password" help-text="At least 8 characters and at least two numbers" required type="password" label="Password" password-toggle></flp-input>
        <flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${ifDefined(this.loginPending)} 
          .disabled=${ifDefined(this.loginPending)}
        >Signup</flp-button>
        <div class="login-container">
          <span>Already have account?</span>
          <flp-button class="login--button" variant="text" href=${this.loginUrl}>Login</flp-button>
        </div>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`;
  }
}
