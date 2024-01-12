import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Popup } from './flp-popup.types';
import './flp-popup';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Popup',
  component: 'flp-popup',
}

const defaultProps: Popup = {};

const Template: Story<Popup> = (
  props: Popup,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-popup>
      <span slot="anchor"></span>
      <div class="box"></div>
    </flp-popup>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
