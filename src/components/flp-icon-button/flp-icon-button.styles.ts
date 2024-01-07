import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export const flippico = css`
${componentStyles}

:host {
  display: inline-block;
  color: var(--flp-color-neutral-600);
}

.icon-button {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  border-radius: var(--flp-border-radius-medium);
  font-size: inherit;
  color: inherit;
  padding: var(--flp-spacing-x-small);
  cursor: pointer;
  transition: var(--flp-transition-x-fast) color;
  -webkit-appearance: none;
}

.icon-button:hover:not(.icon-button--disabled),
.icon-button:focus-visible:not(.icon-button--disabled) {
  color: var(--flp-color-primary-600);
}

.icon-button:active:not(.icon-button--disabled) {
  color: var(--flp-color-primary-700);
}

.icon-button:focus {
  outline: none;
}

.icon-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.icon-button:focus-visible {
  outline: var(--flp-focus-ring);
  outline-offset: var(--flp-focus-ring-offset);
}

.icon-button__icon {
  pointer-events: none;
}
`;