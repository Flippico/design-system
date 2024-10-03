import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import {customElement, property} from 'lit/decorators.js';
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


  @property() tenantId = '';

  onSubmitHandle(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('email', formData.get('email'))
    console.log('password', formData.get('password'))
  }

  render() {
    return html`
    <flp-card>
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container">
          <flp-logo></flp-logo>
        </div>
        <flp-divider></flp-divider>
        <flp-input type="email" required name="email" label="Email"></flp-input>
        <flp-input name="password" error="sds" required type="password" label="Password" password-toggle></flp-input>
        <flp-button variant="primary" type="submit">Login</flp-button>
        <br/>
        <br/>
        <span class="error">Error</span>
      </form>
    </flp-card>`;
  }
}
