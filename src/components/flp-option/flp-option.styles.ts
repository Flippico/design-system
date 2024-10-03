import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export const flippico = css`
${componentStyles}

:host {
  display: block;
  user-select: none;
  -webkit-user-select: none;
}

:host(:focus) {
  outline: none;
}

.option {
  position: relative;
  display: flex;
  align-items: center;
  font-family: var(--flp-font-light);
  font-size: var(--flp-font-size-medium);
  font-weight: var(--flp-font-weight-normal);
  line-height: var(--flp-line-height-normal);
  letter-spacing: var(--flp-letter-spacing-normal);
  color: var(--flp-color-neutral-700);
  padding: var(--flp-spacing-x-small) var(--flp-spacing-medium) var(--flp-spacing-x-small) var(--flp-spacing-x-small);
  transition: var(--flp-transition-fast) fill;
  cursor: pointer;
}

.option--hover:not(.option--current):not(.option--disabled) {
  background-color: var(--flp-color-neutral-100);
  color: var(--flp-color-neutral-1000);
}

.option--current,
.option--current.option--disabled {
  background-color: var(--flp-color-primary-600);
  color: var(--flp-color-neutral-0);
  opacity: 1;
}

.option--disabled {
  outline: none;
  opacity: 0.5;
  cursor: not-allowed;
}

.option__label {
  flex: 1 1 auto;
  display: inline-block;
  line-height: var(--flp-line-height-dense);
}

.option .option__check {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  padding-inline-end: var(--flp-spacing-2x-small);
}

.option--selected .option__check {
  visibility: visible;
}

.option__prefix,
.option__suffix {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.option__prefix::slotted(*) {
  margin-inline-end: var(--flp-spacing-x-small);
}

.option__suffix::slotted(*) {
  margin-inline-start: var(--flp-spacing-x-small);
}

@media (forced-colors: active) {
  :host(:hover:not([aria-disabled='true'])) .option {
    outline: dashed 1px SelectedItem;
    outline-offset: -1px;
  }
}
`;