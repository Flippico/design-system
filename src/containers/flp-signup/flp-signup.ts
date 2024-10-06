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
  @property({ type: String, attribute: "login_callback" }) loginCallback = '';
  @property({ type: String, attribute: "logout_callback" }) logoutCallback = '';
  @property({ type: String, attribute: "name" }) name = '';
  @property({ type: Boolean, attribute: "staging" }) staging = false;
  @property({ type: Boolean, attribute: "develop" }) develop = false;

  @state() loginPending = false;

  onSubmitHandle(event: any) {
    event.preventDefault();
    this.loginPending = true;
    const formData = new FormData(event.target);
    if (Array.from(formData.values()).some(item => item === '')) {
      this.loginPending = false;
      return;
    }
    const urlencoded = new URLSearchParams();
    urlencoded.append("tenant_key", this.tenantKey);
    urlencoded.append("login_callback", this.loginCallback);
    urlencoded.append("logout_callback", this.logoutCallback);
    urlencoded.append("name", formData.get("name") as string);
    urlencoded.append("email", formData.get("email") as string);
    urlencoded.append("password", formData.get("password") as string);

    fetch(`${getApiUrl(this.staging, this.develop)}/api/${this.tenantKey}/signup`, {
      method: "POST",
      body: urlencoded,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then((response) => {
      if (response.status >= 300 && response.status < 400) {
        window.location.href = response.headers.get('Location');
      }
    })
    .finally(() => this.loginPending = false);
  }

  render() {
    return html`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          <flp-logo></flp-logo>
        </div>
        <h2 class="text-align-center">Create your account</h2>
        <flp-input class="mb-small"  type="text" required name="name" label="Name"></flp-input>
        <flp-input class="mb-small"  type="email" required name="email" label="Email"></flp-input>
        <flp-input class="mb-medium"  name="password" required type="password" label="Password" password-toggle></flp-input>
        <input type="hidden" name="tenant_key" value=${this.tenantKey}/>
        <input type="hidden" name="login_callback" value=${this.loginCallback} />
        <input type="hidden" name="logout_callback" value=${this.logoutCallback} />
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
          <flp-button class="login--button" variant="text" href=${`${getApiUrl(this.staging, this.develop)}/${this.tenantKey}/login`}>Login</flp-button>
        </div>
      </form>
    </flp-card>`;
  }
}
