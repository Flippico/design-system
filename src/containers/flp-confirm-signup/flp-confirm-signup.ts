import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import {customElement, property, state} from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { flippico } from './flp-confirm-signup.styles';

/**
 * @summary This the flp-confirm-signup component
 *
 * @tag flp-confirm-signup
 */
 @customElement("flp-confirm-signup")
export class FlpConfirmSignup extends FlpElement {
  static styles: CSSResultGroup = [flippico];

  @property({ type: String, attribute: "tenant_key" }) tenantKey = '';
  @property({ type: String, attribute: "login_callback" }) loginCallback = '';
  @property({ type: String, attribute: "logout_callback" }) logoutCallback = '';
  @property({ type: String, attribute: "name" }) name = '';
  @property({ type: Boolean, attribute: "staging" }) staging = false;

  baseUrl = this.staging ? "https://staging.amadeus.flippi.co" : "https://amadeus.flippi.co";

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
    fetch(`${this.baseUrl}/${formData.get('tenant-key')}/signup`, {
      method: "POST",
      body: formData,
    })
    .then(res => res.json())
    .then((res) => {
      window.location.replace(`${this.loginCallback}/${res.message.token}`);
    })
    .finally(() => this.loginPending = false);
  }

  render() {
    return html`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          <flp-logo></flp-logo>
        </div>
        <h2 class="text-align-center">Confirm your account</h2>
        <flp-input class="mb-small"  type="number" required name="code" label="Code"></flp-input>
        <flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${ifDefined(this.loginPending)} 
          .disabled=${ifDefined(this.loginPending)}
        >Confirm</flp-button>
      </form>
    </flp-card>`;
  }
}
