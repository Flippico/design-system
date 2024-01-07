import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import {customElement, property, query, state} from 'lit/decorators.js';

import { flippico } from './flp-icon-button.styles';
import { literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';

/**
 * @summary This the flp-icon-button component
 *
 * @tag flp-icon-button
 */
 @customElement("flp-icon-button")
export class FlpIconButton extends FlpElement {
  static styles: CSSResultGroup = [flippico];

  @query('.icon-button') button: HTMLButtonElement | HTMLLinkElement;

  @state() private hasFocus = false;

  /** The name of the icon to draw. Available names depend on the icon library being used. */
  @property() name?: string;

  /** The name of a registered custom icon library. */
  @property() library?: string;

  /**
   * An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
   * can result in XSS attacks.
   */
  @property() src?: string;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property() href?: string;

  /** Tells the browser where to open the link. Only used when `href` is set. */
  @property() target?: '_blank' | '_parent' | '_self' | '_top';

  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  @property() download?: string;

  /**
   * A description that gets read by assistive devices. For optimal accessibility, you should always include a label
   * that describes what the icon button does.
   */
  @property() label = '';

  /** Disables the button. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  private handleBlur() {
    this.hasFocus = false;
    this.emit('flp-blur');
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('flp-focus');
  }

  private handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }

  /** Sets focus on the icon button. */
  focus(options?: FocusOptions) {
    this.button.focus(options);
  }

  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }

  render() {
    const isLink = this.href ? true : false;

    /* eslint-disable lit/binding-positions, lit/no-invalid-html */
    return html`
      <button
        part="base"
        class=${classMap({
          'icon-button': true,
          'icon-button--disabled': !isLink && this.disabled,
          'icon-button--focused': this.hasFocus
        })}
        ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
        type=${ifDefined(isLink ? undefined : 'button')}
        href=${ifDefined(isLink ? this.href : undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        download=${ifDefined(isLink ? this.download : undefined)}
        rel=${ifDefined(isLink && this.target ? 'noreferrer noopener' : undefined)}
        role=${ifDefined(isLink ? undefined : 'button')}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        aria-label="${this.label}"
        tabindex=${this.disabled ? '-1' : '0'}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <flp-icon
          class="icon-button__icon"
          name=${ifDefined(this.name)}
          library=${ifDefined(this.library)}
          src=${ifDefined(this.src)}
          aria-hidden="true"
        ></flp-icon>
      </button>
    `;
  }
}
