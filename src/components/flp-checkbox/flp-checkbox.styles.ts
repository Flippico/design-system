import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export const flippico = css`
${componentStyles}

:host {
  display: inline-block;
}

.checkbox {
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  font-family: var(--flp-input-font-family);
  font-weight: var(--flp-input-font-weight);
  color: var(--flp-input-label-color);
  vertical-align: middle;
  cursor: pointer;
}

.checkbox--small {
  --toggle-size: var(--flp-toggle-size-small);
  font-size: var(--flp-input-font-size-small);
}

.checkbox--medium {
  --toggle-size: var(--flp-toggle-size-medium);
  font-size: var(--flp-input-font-size-medium);
}

.checkbox--large {
  --toggle-size: var(--flp-toggle-size-large);
  font-size: var(--flp-input-font-size-large);
}

.checkbox__control {
  flex: 0 0 auto;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--toggle-size);
  height: var(--toggle-size);
  border: solid var(--flp-input-border-width) var(--flp-input-border-color);
  border-radius: 2px;
  background-color: var(--flp-input-background-color);
  color: var(--flp-color-neutral-0);
  transition:
    var(--flp-transition-fast) border-color,
    var(--flp-transition-fast) background-color,
    var(--flp-transition-fast) color,
    var(--flp-transition-fast) box-shadow;
}

.checkbox__input {
  position: absolute;
  opacity: 0;
  padding: 0;
  margin: 0;
  pointer-events: none;
}

.checkbox__checked-icon,
.checkbox__indeterminate-icon {
  display: inline-flex;
  width: var(--toggle-size);
  height: var(--toggle-size);
}

/* Hover */
.checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
  border-color: var(--flp-input-border-color-hover);
  background-color: var(--flp-input-background-color-hover);
}

/* Focus */
.checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
  outline: var(--flp-focus-ring);
  outline-offset: var(--flp-focus-ring-offset);
}

/* Checked/indeterminate */
.checkbox--checked .checkbox__control,
.checkbox--indeterminate .checkbox__control {
  border-color: var(--flp-color-primary-600);
  background-color: var(--flp-color-primary-600);
}

/* Checked/indeterminate + hover */
.checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
.checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
  border-color: var(--flp-color-primary-500);
  background-color: var(--flp-color-primary-500);
}

/* Checked/indeterminate + focus */
.checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
.checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
  outline: var(--flp-focus-ring);
  outline-offset: var(--flp-focus-ring-offset);
}

/* Disabled */
.checkbox--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.checkbox__label {
  display: inline-block;
  color: var(--flp-input-label-color);
  line-height: var(--toggle-size);
  margin-inline-start: 0.5em;
  user-select: none;
  -webkit-user-select: none;
}

:host([required]) .checkbox__label::after {
  content: var(--flp-input-required-content);
  margin-inline-start: var(--flp-input-required-content-offset);
}
`;