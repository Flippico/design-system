import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export const flippico = css`
${componentStyles}

:host {
  display: inline-block;
}

.tag {
  display: flex;
  align-items: center;
  border: solid 1px;
  line-height: 1;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
}

.tag__remove::part(base) {
  color: inherit;
  padding: 0;
}

/*
 * Variant modifiers
 */

.tag--primary {
  background-color: var(--flp-color-primary-50);
  border-color: var(--flp-color-primary-200);
  color: var(--flp-color-primary-800);
}

.tag--primary:active > sl-icon-button {
  color: var(--flp-color-primary-600);
}

.tag--success {
  background-color: var(--flp-color-success-50);
  border-color: var(--flp-color-success-200);
  color: var(--flp-color-success-800);
}

.tag--success:active > sl-icon-button {
  color: var(--flp-color-success-600);
}

.tag--neutral {
  background-color: var(--flp-color-neutral-50);
  border-color: var(--flp-color-neutral-200);
  color: var(--flp-color-neutral-800);
}

.tag--neutral:active > sl-icon-button {
  color: var(--flp-color-neutral-600);
}

.tag--warning {
  background-color: var(--flp-color-warning-50);
  border-color: var(--flp-color-warning-200);
  color: var(--flp-color-warning-800);
}

.tag--warning:active > sl-icon-button {
  color: var(--flp-color-warning-600);
}

.tag--danger {
  background-color: var(--flp-color-danger-50);
  border-color: var(--flp-color-danger-200);
  color: var(--flp-color-danger-800);
}

.tag--danger:active > sl-icon-button {
  color: var(--flp-color-danger-600);
}

/*
 * Size modifiers
 */

.tag--small {
  font-size: var(--flp-button-font-size-small);
  height: calc(var(--flp-input-height-small) * 0.8);
  line-height: calc(var(--flp-input-height-small) - var(--flp-input-border-width) * 2);
  border-radius: var(--flp-input-border-radius-small);
  padding: 0 var(--flp-spacing-x-small);
}

.tag--medium {
  font-size: var(--flp-button-font-size-medium);
  height: calc(var(--flp-input-height-medium) * 0.8);
  line-height: calc(var(--flp-input-height-medium) - var(--flp-input-border-width) * 2);
  border-radius: var(--flp-input-border-radius-medium);
  padding: 0 var(--flp-spacing-small);
}

.tag--large {
  font-size: var(--flp-button-font-size-large);
  height: calc(var(--flp-input-height-large) * 0.8);
  line-height: calc(var(--flp-input-height-large) - var(--flp-input-border-width) * 2);
  border-radius: var(--flp-input-border-radius-large);
  padding: 0 var(--flp-spacing-medium);
}

.tag__remove {
  margin-inline-start: var(--flp-spacing-x-small);
}

/*
 * Pill modifier
 */

.tag--pill {
  border-radius: var(--flp-border-radius-pill);
}
`;