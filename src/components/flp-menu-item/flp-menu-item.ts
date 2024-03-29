import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import {customElement, property, query} from 'lit/decorators.js';

import { flippico } from './flp-menu-item.styles';
import { HasSlotController, getTextContent } from '../../utils/slot';
import { SubmenuController } from './submenu-controller';
import { watch } from '../../utils/watch';
import { classMap } from 'lit/directives/class-map.js';

/**
 * @summary This the flp-menu-item component
 *
 * @tag flp-menu-item
 */
 @customElement("flp-menu-item")
export class FlpMenuItem extends FlpElement {
  static styles: CSSResultGroup = [flippico];

  private cachedTextLabel: string;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('.menu-item') menuItem: HTMLElement;

  /** The type of menu item to render. To use `checked`, this value must be set to `checkbox`. */
  @property() type: 'normal' | 'checkbox' = 'normal';

  /** Draws the item in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
  @property() value = '';

  /** Draws the menu item in a loading state. */
  @property({ type: Boolean, reflect: true }) loading = false;

  /** Draws the menu item in a disabled state, preventing selection. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  private readonly hasSlotController = new HasSlotController(this, 'submenu');
  private submenuController: SubmenuController = new SubmenuController(this, this.hasSlotController);

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.handleHostClick);
    this.addEventListener('mouseover', this.handleMouseOver);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleHostClick);
    this.removeEventListener('mouseover', this.handleMouseOver);
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

  private handleHostClick = (event: MouseEvent) => {
    // Prevent the click event from being emitted when the button is disabled or loading
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  };

  private handleMouseOver = (event: MouseEvent) => {
    this.focus();
    event.stopPropagation();
  };

  @watch('checked')
  handleCheckedChange() {
    // For proper accessibility, users have to use type="checkbox" to use the checked attribute
    if (this.checked && this.type !== 'checkbox') {
      this.checked = false;
      console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
      return;
    }

    // Only checkbox types can receive the aria-checked attribute
    if (this.type === 'checkbox') {
      this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    } else {
      this.removeAttribute('aria-checked');
    }
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  @watch('type')
  handleTypeChange() {
    if (this.type === 'checkbox') {
      this.setAttribute('role', 'menuitemcheckbox');
      this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    } else {
      this.setAttribute('role', 'menuitem');
      this.removeAttribute('aria-checked');
    }
  }

  /** Returns a text label based on the contents of the menu item's default slot. */
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }

  isSubmenu() {
    return this.hasSlotController.test('submenu');
  }

  render() {
    const isRtl = false;
    const isSubmenuExpanded = this.submenuController.isExpanded();

    return html`
      <div
        id="anchor"
        part="base"
        class=${classMap({
          'menu-item': true,
          'menu-item--rtl': isRtl,
          'menu-item--checked': this.checked,
          'menu-item--disabled': this.disabled,
          'menu-item--loading': this.loading,
          'menu-item--has-submenu': this.isSubmenu(),
          'menu-item--submenu-expanded': isSubmenuExpanded
        })}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${isSubmenuExpanded ? true : false}"
      >
        <span part="checked-icon" class="menu-item__check">
          <flp-icon name="check" library="system" aria-hidden="true"></flp-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <flp-icon name=${isRtl ? 'chevron-left' : 'chevron-right'} library="system" aria-hidden="true"></flp-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading ? html` <flp-spinner part="spinner" exportparts="base:spinner__base"></flp-spinner> ` : ''}
      </div>
    `;
  }
}
