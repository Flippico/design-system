import { html } from 'lit';
import styles from './flp-spinner.styles.js';
import type { CSSResultGroup } from 'lit';
import FlpElement from '../../utils/flippico-element.js';
import { customElement } from 'lit/decorators.js';

@customElement("flp-spinner")
export default class FlpSpinner extends FlpElement {
  static styles: CSSResultGroup = styles;


  render() {
    return html`
      <svg part="base" class="spinner" role="progressbar" aria-label="loading">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
}
