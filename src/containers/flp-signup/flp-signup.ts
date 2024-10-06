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
    
    console.log('email', formData.get('email'));
    console.log('password', formData.get('password'));
    console.log('name', formData.get('name'));
    console.log('tenant-key', formData.get('tenant-key'));
    console.log('login-callback', formData.get('login-callback'));
    console.log('logout-callback', formData.get('logout-callback'));
    fetch(`${getApiUrl(this.staging, this.develop)}/${formData.get('tenant-key')}/signup`, {
      method: "POST",
      body: formData,
    })
    .then(res => res.json())
    .then((res) => {
      window.location.replace(`${this.loginCallback}/api/${res.message.token}`);
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
        <input type="hidden" name="tenant-key" value=${this.tenantKey}/>
        <input type="hidden" name="login-callback" value=${this.loginCallback} />
        <input type="hidden" name="logout-callback" value=${this.logoutCallback} />
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
