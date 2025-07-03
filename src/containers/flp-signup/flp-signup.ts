import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import { customElement, property, state } from 'lit/decorators.js';
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
    if (!/^(?=.*\d.*\d)[A-Za-z\d!@#$%^&*()_+\-=[\]{};':",.<>?\/]{6,}$/.test(formData.get("password") as string)) {
      this.errorText = 'Minimum 8 znaków oraz minimum dwie liczby';
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
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 403) {
          this.errorText = "User already exist";
          event.target.reset();
          throw new Error("User already exist");
        }
      })
      .then((response) => {
        this.emit('flp-signup-success', response.message);
        window.parent.postMessage({ type: 'SIGNUP_SUCCESS', payload: response.message }, '*');
        window.location.href = response.message.redirect_url;
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
        <h2 class="text-align-center">Stwórz nowe konto</h2>
        <flp-input class="mb-small"  type="text" required name="name" label="Imię"></flp-input>
        <flp-input class="mb-small"  type="email" required name="email" label="Email"></flp-input>
        <flp-input class="mb-medium"  name="password" help-text="Minimum 8 znaków oraz minimum dwie liczby" required type="password" label="Hasło" password-toggle></flp-input>
        <flp-button
          class="mb-small"
          size="large"
          variant="primary"
          type="submit"
          .loading=${ifDefined(this.loginPending)}
          .disabled=${ifDefined(this.loginPending)}
        >Zarejestruj się</flp-button>
        <div class="login-container">
          <span>Masz już konto?</span>
          <flp-button class="login--button" variant="text" href=${this.loginUrl}>Zaloguj się</flp-button>
        </div>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`;
  }
}
