import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import {customElement, property} from 'lit/decorators.js';

import { flippico } from './flp-menu-label.styles';

/**
 * @summary This the flp-menu-label component
 *
 * @tag flp-menu-label
 */
 @customElement("flp-menu-label")
export class FlpMenuLabel extends FlpElement {
  static styles: CSSResultGroup = [flippico];

  render() {
    return html` <slot part="base" class="menu-label"></slot> `;
  }
}
