import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import {customElement, property, state} from 'lit/decorators.js';
import "./../../components/flp-card";
import "./../../components/flp-button";
import "./../../components/flp-input";
import "./../../components/flp-logo";
import "./../../components/flp-divider";
import { flippico } from './flp-login.styles';

/**
 * @summary This the flp-login component
 *
 * @tag flp-login
 */
 @customElement("flp-login")
export class FlpLogin extends FlpElement {
  static styles: CSSResultGroup = [flippico];

  @property({ attribute: "tenant_key" }) tenantKey = '';
  @property({ attribute: "login_callback" }) loginCallback = '';
  @property({ attribute: "logout_callback" }) logoutCallback = '';

  @state() errorText: null | string;

  async onSubmitHandle(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    if (Array.from(formData.values()).some(item => item === '')) {
      this.errorText = 'Error'
      return;
    }
    console.log('email', formData.get('email'));
    console.log('password', formData.get('password'));
    console.log('tenant_key', formData.get('tenant_key'));
    console.log('login_callback', formData.get('login_callback'));
    console.log('logout_callback', formData.get('logout_callback'));
    this.errorText = null;
    const res = await fetch(`https://staging.amadeus.flippi.co/${formData.get('tenant_key')}/login`, {
      method: "POST",
      body: formData,
    }).catch(err => this.errorText = "Error while send to API");
    console.log('res', res);
  }

  render() {
    return html`
    <flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container">
          <flp-logo></flp-logo>
        </div>
        <flp-divider></flp-divider>
        <flp-input type="email" required name="email" label="Email"></flp-input>
        <flp-input name="password" error="sds" required type="password" label="Password" password-toggle></flp-input>
        <flp-button variant="primary" type="submit">Login</flp-button>
        <input type="hidden" name="tenant_key" value=${this.tenantKey}/>
        <input type="hidden" name="login_callback" value=${this.loginCallback} />
        <input type="hidden" name="logout_callback" value=${this.logoutCallback} />
        <br/>
        <br/>
        <span class="error">${this.errorText}</span>
      </form>
    </flp-card>`;
  }
}
