import { CSSResultGroup } from 'lit';
import FlpElement from '../../utils/flippico-element';
import {customElement, property} from 'lit/decorators.js';

import { flippico } from './flp-divider.styles';
import { watch } from '../../utils/watch';

/**
 * @summary This the flp-divider component
 *
 * @tag flp-divider
 */
 @customElement("flp-divider")
export class FlpDivider extends FlpElement {
  static styles: CSSResultGroup = [flippico];

  @property({ type: Boolean, reflect: true }) vertical = false;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'separator');
  }

  @watch('vertical')
  handleVerticalChange() {
    this.setAttribute('aria-orientation', this.vertical ? 'vertical' : 'horizontal');
  }
}
