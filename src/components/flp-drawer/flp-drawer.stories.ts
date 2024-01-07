import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Drawer } from './flp-drawer.types';
import './flp-drawer';
import './../flp-button/flp-button';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Drawer',
  component: 'flp-drawer',
}

const defaultProps: Drawer = {};

const Template: Story<Drawer> = (
  props: Drawer,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-drawer id="drawer" label="drawer">
      Drawer
    </flp-drawer>
    <flp-button @click=${() => document.getElementById('drawer')?.setAttribute('open', 'true')}>Open Drawer</flp-button>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
