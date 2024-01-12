import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export const flippico = css`
${componentStyles}

:host {
  display: block;
  position: relative;
  background: var(--flp-panel-background-color);
  border: solid var(--flp-panel-border-width) var(--flp-panel-border-color);
  border-radius: var(--flp-border-radius-medium);
  padding: var(--flp-spacing-x-small) 0;
  overflow: auto;
  overscroll-behavior: none;
}

::slotted(sl-divider) {
  --spacing: var(--flp-spacing-x-small);
}
`;