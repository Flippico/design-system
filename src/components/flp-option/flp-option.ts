import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import {customElement, property, query, state} from 'lit/decorators.js';
import './../flp-icon/flp-icon';

import { flippico } from './flp-option.styles';
import { watch } from '../../utils/watch';
import { classMap } from 'lit/directives/class-map.js';

/**
 * @summary This the flp-option component
 *
 * @tag flp-option
 */
 @customElement("flp-option")
export class FlpOption extends FlpElement {
  static styles: CSSResultGroup = [flippico];

  private cachedTextLabel: string;

  @query('.option__label') defaultSlot: HTMLSlotElement;

  @state() current = false; // the user has keyed into the option, but hasn't selected it yet (shows a highlight)
  @state() selected = false; // the option is selected and has aria-selected="true"
  @state() hasHover = false; // we need this because Safari doesn't honor :hover styles while dragging

  /**
   * The option's value. When selected, the containing form control will receive this value. The value must be unique
   * from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
   * multiple values.
   */
  @property({ reflect: true }) value = '';

  /** Draws the option in a disabled state, preventing selection. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'option');
    this.setAttribute('aria-selected', 'false');
  }

  private handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();

    // Ignore the first time the label is set
    if (typeof this.cachedTextLabel === 'undefined') {
      this.cachedTextLabel = textLabel;
      return;
    }

    // When the label changes, emit a slotchange event so parent controls see it
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit('slotchange', { bubbles: true, composed: false, cancelable: false });
    }
  }

  private handleMouseEnter() {
    this.hasHover = true;
  }

  private handleMouseLeave() {
    this.hasHover = false;
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  @watch('selected')
  handleSelectedChange() {
    this.setAttribute('aria-selected', this.selected ? 'true' : 'false');
  }

  @watch('value')
  handleValueChange() {
    // Ensure the value is a string. This ensures the next line doesn't error and allows framework users to pass numbers
    // instead of requiring them to cast the value to a string.
    if (typeof this.value !== 'string') {
      this.value = String(this.value);
    }

    if (this.value.includes(' ')) {
      console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`, this);
      this.value = this.value.replace(/ /g, '_');
    }
  }

  /** Returns a plain text label based on the option's content. */
  getTextLabel() {
    return (this.textContent ?? '').trim();
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          option: true,
          'option--current': this.current,
          'option--disabled': this.disabled,
          'option--selected': this.selected,
          'option--hover': this.hasHover
        })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <flp-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></flp-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `;
  }
}
