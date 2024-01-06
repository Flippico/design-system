import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import {customElement, property, query} from 'lit/decorators.js';

import { flippico } from './flp-modal.styles';
import { HasSlotController } from '../../utils/slot';
import ModalRaw from '../../utils/modal-raw';
import { lockBodyScrolling, unlockBodyScrolling } from '../../utils/scroll';
import { getAnimation } from '../../utils/animation-registry';
import { animateTo, stopAnimations } from '../../utils/animate';
import { waitForEvent } from '../../utils/event';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { watch } from '../../utils/watch';

/**
 * @summary This the flp-modal component
 *
 * @tag flp-modal
 */
 @customElement("flp-modal")
export class FlpModal extends FlpElement {
  static styles: CSSResultGroup = [flippico];

  private readonly hasSlotController = new HasSlotController(this, 'footer');
  private originalTrigger: HTMLElement | null;
  public modal = new ModalRaw(this);

  @query('.dialog') dialog: HTMLElement;
  @query('.dialog__panel') panel: HTMLElement;
  @query('.dialog__overlay') overlay: HTMLElement;

  /**
   * Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the dialog's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * The dialog's label as displayed in the header. You should always include a relevant label even when using
   * `no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.
   */
  @property({ reflect: true }) label = '';

  /**
   * Disables the header. This will also remove the default close button, so please ensure you provide an easy,
   * accessible way for users to dismiss the dialog.
   */
  @property({ attribute: 'no-header', type: Boolean, reflect: true }) noHeader = false;

  firstUpdated() {
    this.dialog.hidden = !this.open;

    if (this.open) {
      this.addOpenListeners();
      this.modal.activate();
      lockBodyScrolling(this);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.modal.deactivate();
    unlockBodyScrolling(this);
  }

  private requestClose(source: 'close-button' | 'keyboard' | 'overlay') {
    const flpRequestClose = this.emit('flp-request-close', {
      cancelable: true,
      detail: { source }
    });

    if (flpRequestClose.defaultPrevented) {
      const animation = getAnimation(this, 'dialog.denyClose', { dir: 'ltr' });
      animateTo(this.panel, animation.keyframes, animation.options);
      return;
    }

    this.hide();
  }

  private addOpenListeners() {
    document.addEventListener('keydown', this.handleDocumentKeyDown);
  }

  private removeOpenListeners() {
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
  }

  private handleDocumentKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.modal.isActive() && this.open) {
      event.stopPropagation();
      this.requestClose('keyboard');
    }
  };

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      // Show
      this.emit('flp-show');
      this.addOpenListeners();
      this.originalTrigger = document.activeElement as HTMLElement;
      this.modal.activate();

      lockBodyScrolling(this);

      // When the dialog is shown, Safari will attempt to set focus on whatever element has autofocus. This can cause
      // the dialogs's animation to jitter (if it starts offscreen), so we'll temporarily remove the attribute, call
      // `focus({ preventScroll: true })` ourselves, and add the attribute back afterwards.
      //
      // Related: https://github.com/shoelace-style/shoelace/issues/693
      //
      const autoFocusTarget = this.querySelector('[autofocus]');
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute('autofocus');
      }

      await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
      this.dialog.hidden = false;

      // Set initial focus
      requestAnimationFrame(() => {
        const flpInitialFocus = this.emit('flp-initial-focus', { cancelable: true });

        if (!flpInitialFocus.defaultPrevented) {
          // Set focus to the autofocus target and restore the attribute
          if (autoFocusTarget) {
            (autoFocusTarget as HTMLInputElement).focus({ preventScroll: true });
          } else {
            this.panel.focus({ preventScroll: true });
          }
        }

        // Restore the autofocus attribute
        if (autoFocusTarget) {
          autoFocusTarget.setAttribute('autofocus', '');
        }
      });

      const panelAnimation = getAnimation(this, 'dialog.show', { dir: 'ltr' });
      const overlayAnimation = getAnimation(this, 'dialog.overlay.show', { dir: 'ltr' });
      await Promise.all([
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);

      this.emit('flp-after-show');
    } else {
      // Hide
      this.emit('flp-hide');
      this.removeOpenListeners();
      this.modal.deactivate();

      await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
      const panelAnimation = getAnimation(this, 'dialog.hide', { dir: 'ltr' });
      const overlayAnimation = getAnimation(this, 'dialog.overlay.hide', { dir: 'ltr' });

      // Animate the overlay and the panel at the same time. Because animation durations might be different, we need to
      // hide each one individually when the animation finishes, otherwise the first one that finishes will reappear
      // unexpectedly. We'll unhide them after all animations have completed.
      await Promise.all([
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(() => {
          this.overlay.hidden = true;
        }),
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options).then(() => {
          this.panel.hidden = true;
        })
      ]);

      this.dialog.hidden = true;

      // Now that the dialog is hidden, restore the overlay and panel for next time
      this.overlay.hidden = false;
      this.panel.hidden = false;

      unlockBodyScrolling(this);

      // Restore focus to the original trigger
      const trigger = this.originalTrigger;
      if (typeof trigger?.focus === 'function') {
        setTimeout(() => trigger.focus());
      }

      this.emit('flp-after-hide');
    }
  }

  /** Shows the dialog. */
  async show() {
    if (this.open) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'flp-after-show');
  }

  /** Hides the dialog */
  async hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'flp-after-hide');
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          dialog: true,
          'dialog--open': this.open,
          'dialog--has-footer': this.hasSlotController.test('footer')
        })}
      >
        <div part="overlay" class="dialog__overlay" @click=${() => this.requestClose('overlay')} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? 'false' : 'true'}
          aria-label=${ifDefined(this.noHeader ? this.label : undefined)}
          aria-labelledby=${ifDefined(!this.noHeader ? 'title' : undefined)}
          tabindex="-1"
        >
          ${!this.noHeader
            ? html`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <flp-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label="close"
                      library="system"
                      @click="${() => this.requestClose('close-button')}"
                    ></flp-icon-button>
                  </div>
                </header>
              `
            : ''}
          ${
            '' /* The tabindex="-1" is here because the body is technically scrollable if overflowing. However, if there's no focusable elements inside, you won't actually be able to scroll it via keyboard. Previously this was just a <slot>, but tabindex="-1" on the slot causes children to not be focusable. https://github.com/shoelace-style/shoelace/issues/1753#issuecomment-1836803277 */
          }
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
}
