import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import {customElement, property} from 'lit/decorators.js';

import { flippico } from './flp-card.styles';
import { HasSlotController } from '../../utils/slot';
import { classMap } from 'lit/directives/class-map.js';

/**
 * @summary This the flp-card component
 *
 * @tag flp-card
 */
 @customElement("flp-card")
export class FlpCard extends FlpElement {
  static styles: CSSResultGroup = [flippico];

  private readonly hasSlotController = new HasSlotController(this, 'footer', 'header', 'image');

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          card: true,
          'card--has-footer': this.hasSlotController.test('footer'),
          'card--has-image': this.hasSlotController.test('image'),
          'card--has-header': this.hasSlotController.test('header')
        })}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `;
  }
}
