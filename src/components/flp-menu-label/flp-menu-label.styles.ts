import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export const flippico = css`
${componentStyles}

:host {
  display: block;
}

.menu-label {
  display: inline-block;
  font-family: var(--flp-font-sans);
  font-size: var(--flp-font-size-small);
  font-weight: var(--flp-font-weight-semibold);
  line-height: var(--flp-line-height-normal);
  letter-spacing: var(--flp-letter-spacing-normal);
  color: var(--flp-color-neutral-500);
  padding: var(--flp-spacing-2x-small) var(--flp-spacing-x-large);
  user-select: none;
  -webkit-user-select: none;
}
`;