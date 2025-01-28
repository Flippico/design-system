import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import {customElement, property, state} from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { flippico } from './flp-confirm-signup.styles';
import { getApiUrl } from '../../utils/get-api-url';

/**
 * @summary This the flp-confirm-signup component
 *
 * @tag flp-confirm-signup
 */
 @customElement("flp-confirm-signup")
export class FlpConfirmSignup extends FlpElement {
  static styles: CSSResultGroup = [flippico];

  @property({ type: String, attribute: "tenant_key" }) tenantKey = '';
  @property({ type: String, attribute: "token" }) token = '';
  @property({ type: String, attribute: "logo" }) logo = '';
  @property({ type: Boolean, attribute: "staging" }) staging = false;
  @property({ type: Boolean, attribute: "develop" }) develop = false;
  @property({ type: Boolean, attribute: "use_event" }) useEvent = false;

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
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    const urlencoded = new URLSearchParams();
    urlencoded.append("token", formData.get("token") as string);
    urlencoded.append("code", formData.get("code") as string);
    fetch(`${getApiUrl(this.staging, this.develop)}/api/${this.tenantKey}/confirm-account`, {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      this.errorText = "Something went wrong, try again";
      event.target.reset();
      throw new Error("Something went wrong, try again");
    })
    .then((response) => {
      this.emit('flp-confirm-signup-success', response.message);
      window.parent.postMessage({ type: 'CONFIRM_SUCCESS', payload: response.message }, '*');
      window.location.href = response.message.redirect_url;
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
        <h2 class="text-align-center">Confirm your account</h2>
        <flp-input class="mb-small" type="number" required min="1000" max="9000" name="code" label="Code"></flp-input>
        <input type="hidden" value=${this.token} name="token" />
        <flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${ifDefined(this.loginPending)} 
          .disabled=${ifDefined(this.loginPending)}
        >Confirm</flp-button>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`;
  }
}
