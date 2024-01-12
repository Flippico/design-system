import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export const flippico = css`
${componentStyles}

:host {
  display: contents;

  /* For better DX, we'll reset the margin here so the base part can inherit it */
  margin: 0;
}

.alert {
  position: relative;
  display: flex;
  align-items: stretch;
  background-color: var(--flp-panel-background-color);
  border: solid var(--flp-panel-border-width) var(--flp-panel-border-color);
  border-top-width: calc(var(--flp-panel-border-width) * 3);
  border-radius: var(--flp-border-radius-medium);
  font-family: var(--flp-font-sans);
  font-size: var(--flp-font-size-small);
  font-weight: var(--flp-font-weight-normal);
  line-height: 1.6;
  color: var(--flp-color-neutral-700);
  margin: inherit;
}

.alert:not(.alert--has-icon) .alert__icon,
.alert:not(.alert--closable) .alert__close-button {
  display: none;
}

.alert__icon {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  font-size: var(--flp-font-size-large);
  padding-inline-start: var(--flp-spacing-large);
}

.alert--primary {
  border-top-color: var(--flp-color-primary-600);
}

.alert--primary .alert__icon {
  color: var(--flp-color-primary-600);
}

.alert--success {
  border-top-color: var(--flp-color-success-600);
}

.alert--success .alert__icon {
  color: var(--flp-color-success-600);
}

.alert--neutral {
  border-top-color: var(--flp-color-neutral-600);
}

.alert--neutral .alert__icon {
  color: var(--flp-color-neutral-600);
}

.alert--warning {
  border-top-color: var(--flp-color-warning-600);
}

.alert--warning .alert__icon {
  color: var(--flp-color-warning-600);
}

.alert--danger {
  border-top-color: var(--flp-color-danger-600);
}

.alert--danger .alert__icon {
  color: var(--flp-color-danger-600);
}

.alert__message {
  flex: 1 1 auto;
  display: block;
  padding: var(--flp-spacing-large);
  overflow: hidden;
}

.alert__close-button {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  font-size: var(--flp-font-size-medium);
  padding-inline-end: var(--flp-spacing-medium);
}
`;