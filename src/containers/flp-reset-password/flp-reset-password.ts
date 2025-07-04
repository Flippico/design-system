import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import { customElement, property, state } from 'lit/decorators.js';
import "./../../components/flp-icon";

import { flippico } from './flp-reset-password.styles';
import { getApiUrl } from '../../utils/get-api-url';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * @summary This the flp-reset-password component
 *
 * @tag flp-reset-password
 */
@customElement("flp-reset-password")
export class FlpResetPassword extends FlpElement {
  static styles: CSSResultGroup = [flippico];

  @property({ type: String, attribute: "tenant_key" }) tenantKey = '';
  @property({ type: String, attribute: "logo" }) logo = '';
  @property({ type: Boolean, attribute: "staging" }) staging = false;
  @property({ type: Boolean, attribute: "develop" }) develop = false;

  @state() errorText: null | string;
  @state() loginPending: boolean = false;
  @state() successState: boolean = false;

  async onSubmitHandle(event: any) {
    event.preventDefault();
    this.loginPending = true;
    const formData = new FormData(event.target);
    if (Array.from(formData.values()).some(item => item === '')) {
      this.errorText = 'Email is empty';
      this.loginPending = false;
      return;
    }
    const urlencoded = new URLSearchParams();
    urlencoded.append("email", formData.get("email") as string);

    this.errorText = null;
    fetch(`${getApiUrl(this.staging, this.develop)}/api/${this.tenantKey}/reset-password`, {
      method: "POST",
      body: urlencoded,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        this.errorText = "Something went wrong, try again";
        event.target.reset();
        throw new Error("Something went wrong, try again");
      })
      .then(() => {
        this.emit('flp-reset-password-success');
        window.parent.postMessage({ type: 'RESET_PASSWORD_SUCCESS', payload: {} }, '*');
        this.successState = true;
      })
      .catch(console.error)
      .finally(() => this.loginPending = false);
  }

  render() {
    return html`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          ${this.logo ? html`<img .src=${this.logo} alt="logo" width="150" height="auto" />` : html`<flp-logo></flp-logo>`}
        </div>
        <h2 class="text-align-center">Zapomniane hasło?</h2>
        <div class="mb-medium text-align-center">
          <span class="text-align-center">Nie ma problemu, wyślemy Ci nowe</span>
        </div>
        <flp-input class="mb-small" type="email" required name="email" label="Email"></flp-input>
        ${this.successState ? html`<maui-icon name="envelope-at"></maui-icon>` : html`<flp-button
          class="mb-small"
          size="large"
          variant="primary"
          type="submit"
          .loading=${ifDefined(this.loginPending)}
          .disabled=${ifDefined(this.loginPending)}
        >Wyślij nowe hasło</flp-button>`}
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`;
  }
}
