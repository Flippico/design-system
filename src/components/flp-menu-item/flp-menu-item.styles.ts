import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export const flippico = css`
${componentStyles}

:host {
  --submenu-offset: -2px;

  display: block;
}

:host([inert]) {
  display: none;
}

.menu-item {
  position: relative;
  display: flex;
  align-items: stretch;
  font-family: var(--flp-font-light);
  font-size: var(--flp-font-size-medium);
  font-weight: var(--flp-font-weight-normal);
  line-height: var(--flp-line-height-normal);
  letter-spacing: var(--flp-letter-spacing-normal);
  color: var(--flp-color-neutral-700);
  padding: var(--flp-spacing-2x-small) var(--flp-spacing-2x-small);
  transition: var(--flp-transition-fast) fill;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;
  cursor: pointer;
}

.menu-item.menu-item--disabled {
  outline: none;
  opacity: 0.5;
  cursor: not-allowed;
}

.menu-item.menu-item--loading {
  outline: none;
  cursor: wait;
}

.menu-item.menu-item--loading *:not(sl-spinner) {
  opacity: 0.5;
}

.menu-item--loading sl-spinner {
  --indicator-color: currentColor;
  --track-width: 1px;
  position: absolute;
  font-size: 0.75em;
  top: calc(50% - 0.5em);
  left: 0.65rem;
  opacity: 1;
}

.menu-item .menu-item__label {
  flex: 1 1 auto;
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
}

.menu-item .menu-item__prefix {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.menu-item .menu-item__prefix::slotted(*) {
  margin-inline-end: var(--flp-spacing-x-small);
}

.menu-item .menu-item__suffix {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.menu-item .menu-item__suffix::slotted(*) {
  margin-inline-start: var(--flp-spacing-x-small);
}

/* Safe triangle */
.menu-item--submenu-expanded::after {
  content: '';
  position: fixed;
  z-index: calc(var(--flp-z-index-dropdown) - 1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: tomato;
  clip-path: polygon(
    var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
    var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
    var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
  );
}

:host(:focus-visible) {
  outline: none;
}

:host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
.menu-item--submenu-expanded {
  background-color: var(--flp-color-neutral-100);
  color: var(--flp-color-neutral-1000);
}

:host(:focus-visible) .menu-item {
  outline: none;
  background-color: var(--flp-color-primary-600);
  color: var(--flp-color-neutral-0);
  opacity: 1;
}

.menu-item .menu-item__check,
.menu-item .menu-item__chevron {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5em;
  visibility: hidden;
}

.menu-item--checked .menu-item__check,
.menu-item--has-submenu .menu-item__chevron {
  visibility: visible;
}

/* Add elevation and z-index to submenus */
sl-popup::part(popup) {
  box-shadow: var(--flp-shadow-large);
  z-index: var(--flp-z-index-dropdown);
  margin-left: var(--submenu-offset);
}

.menu-item--rtl sl-popup::part(popup) {
  margin-left: calc(-1 * var(--submenu-offset));
}

@media (forced-colors: active) {
  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(:focus-visible) .menu-item {
    outline: dashed 1px SelectedItem;
    outline-offset: -1px;
  }
}
`;