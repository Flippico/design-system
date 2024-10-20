import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export const flippico = css`
${componentStyles}

:host {
  display: inline-block;
  width: 1em;
  height: 1em;
  box-sizing: content-box !important;
}

svg {
  display: block;
  height: 100%;
  width: 100%;
}`;