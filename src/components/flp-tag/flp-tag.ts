import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import {customElement, property} from 'lit/decorators.js';

import { flippico } from './flp-tag.styles';
import { classMap } from 'lit/directives/class-map.js';

/**
 * @summary This the flp-tag component
 *
 * @tag flp-tag
 */
 @customElement("flp-tag")
export class FlpTag extends FlpElement {
  static styles: CSSResultGroup = [flippico];
  @property({ reflect: true }) variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text' = 'neutral';

  /** The tag's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Draws a pill-style tag with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** Makes the tag removable and shows a remove button. */
  @property({ type: Boolean }) removable = false;

  private handleRemoveClick() {
    this.emit('flp-remove');
  }

  render() {
    return html`
      <span
        part="base"
        class=${classMap({
          tag: true,

          // Types
          'tag--primary': this.variant === 'primary',
          'tag--success': this.variant === 'success',
          'tag--neutral': this.variant === 'neutral',
          'tag--warning': this.variant === 'warning',
          'tag--danger': this.variant === 'danger',
          'tag--text': this.variant === 'text',

          // Sizes
          'tag--small': this.size === 'small',
          'tag--medium': this.size === 'medium',
          'tag--large': this.size === 'large',

          // Modifiers
          'tag--pill': this.pill,
          'tag--removable': this.removable
        })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable
          ? html`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label="remove"
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `
          : ''}
      </span>
    `;
  }
}
