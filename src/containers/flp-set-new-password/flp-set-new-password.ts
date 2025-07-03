import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import { customElement, property, state } from 'lit/decorators.js';

import { flippico } from './flp-set-new-password.styles';
import { ifDefined } from 'lit/directives/if-defined.js';
import { getApiUrl } from '../../utils/get-api-url';

/**
 * @summary This the flp-set-new-password component
 *
 * @tag flp-set-new-password
 */
@customElement("flp-set-new-password")
export class FlpSetNewPassword extends FlpElement {
  static styles: CSSResultGroup = [flippico];

  @property({ type: String, attribute: "tenant_key" }) tenantKey = '';
  @property({ type: String, attribute: "token" }) token = '';
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
      this.errorText = 'Password is empty';
      this.loginPending = false;
      return;
    }
    const urlencoded = new URLSearchParams();
    if (!/^(?=.*\d.*\d)[A-Za-z\d!@#$%^&*()_+\-=[\]{};':",.<>?\/]{6,}$/.test(formData.get("password") as string)) {
      this.errorText = 'At least 8 characters and at least two numbers';
      this.loginPending = false;
      return;
    }
    if (formData.get("new_password") !== formData.get("password")) {
      this.errorText = 'Passwords are different';
      this.loginPending = false;
      return;
    }
    urlencoded.append("new_password", formData.get("new_password") as string);
    urlencoded.append("password", formData.get("password") as string);
    urlencoded.append("token", formData.get("token") as string);

    this.errorText = null;
    fetch(`${getApiUrl(this.staging, this.develop)}/api/${this.tenantKey}/set-password/${formData.get("token")}`, {
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
      .then((response) => {
        this.emit('flp-set-new-password-success');
        window.parent.postMessage({ type: 'SET_NEW_PASSWORD_SUCCESS', payload: {} }, '*');
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
        <h2 class="text-align-center">Ustaw nowe hasło</h2>
        <div class="mb-medium text-align-center">
          <span class="text-align-center">Upewnij się, że nowe hasło zostało zapisane w bezpiecznym miejscu</span>
        </div>
        <flp-input class="mb-small" name="password" required type="password" label="Hasło" help-text="Minimum 8 znaków oraz minimum dwie liczby" password-toggle></flp-input>
        <flp-input class="mb-small" name="new_password" required type="password" label="Powtórz hasło" password-toggle></flp-input>
        <input name="token" value=${this.token} type="hidden">
        ${this.successState ? html`<maui-icon name="check-circle"></maui-icon>` : html`<flp-button
          class="mb-small"
          size="large"
          variant="primary"
          type="submit"
          .loading=${ifDefined(this.loginPending)}
          .disabled=${ifDefined(this.loginPending)}
        >Ustaw nowe hasło</flp-button>`}
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`;
  }
}
