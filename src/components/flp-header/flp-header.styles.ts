import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export const flippico = css`
  ${componentStyles}

  :host {
    display: block;
    font-family: var(--flp-font-medium);
  }
`;