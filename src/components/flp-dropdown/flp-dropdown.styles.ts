import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export const flippico = css`
${componentStyles}

:host {
  display: inline-block;
}

.dropdown::part(popup) {
  z-index: var(--flp-z-index-dropdown);
}

.dropdown[data-current-placement^='top']::part(popup) {
  transform-origin: bottom;
}

.dropdown[data-current-placement^='bottom']::part(popup) {
  transform-origin: top;
}

.dropdown[data-current-placement^='left']::part(popup) {
  transform-origin: right;
}

.dropdown[data-current-placement^='right']::part(popup) {
  transform-origin: left;
}

.dropdown__trigger {
  display: block;
}

.dropdown__panel {
  font-family: var(--flp-font-sans);
  font-size: var(--flp-font-size-medium);
  font-weight: var(--flp-font-weight-normal);
  box-shadow: var(--flp-shadow-large);
  border-radius: var(--flp-border-radius-medium);
  pointer-events: none;
}

.dropdown--open .dropdown__panel {
  display: block;
  pointer-events: all;
}

/* When users slot a menu, make sure it conforms to the popup's auto-size */
::slotted(sl-menu) {
  max-width: var(--auto-size-available-width) !important;
  max-height: var(--auto-size-available-height) !important;
}
`;