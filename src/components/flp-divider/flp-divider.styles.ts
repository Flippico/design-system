import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export const flippico = css`
${componentStyles}

:host {
  --color: var(--flp-panel-border-color);
  --width: var(--flp-panel-border-width);
  --spacing: var(--flp-spacing-medium);
}

:host(:not([vertical])) {
  display: block;
  border-top: solid var(--width) var(--color);
  margin: var(--spacing) 0;
}

:host([vertical]) {
  display: inline-block;
  height: 100%;
  border-left: solid var(--width) var(--color);
  margin: 0 var(--spacing);
}
`;