import { CSSResultGroup, html } from 'lit';
import { FLPComponent } from '../../flp-component';
import {customElement, property} from 'lit/decorators.js';

import { flippico } from './flp-header.styles';

/**
 * @summary This the flp-header component
 *
 * @tag flp-header
 */
 @customElement("flp-header")
export class FLPHeader extends FLPComponent {
  static styles: CSSResultGroup = [flippico];

  render() {
    return html`<h1><slot></slot></h1>`;
  }
}
