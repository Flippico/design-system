import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import {customElement} from 'lit/decorators.js';

import { flippico } from './flp-header.styles';

/**
 * @summary This the flp-header component
 *
 * @tag flp-header
 */
 @customElement("flp-header")
export class FlpHeader extends FlpElement {
  static styles: CSSResultGroup = [flippico];

  render() {
    return html`<h1><slot></slot></h1>`;
  }
}
