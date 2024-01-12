import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Menu } from './flp-menu.types';
import './flp-menu';
import './../flp-menu-item/flp-menu-item';
import './../flp-divider/flp-divider';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Menu',
  component: 'flp-menu',
}

const defaultProps: Menu = {};

const Template: Story<Menu> = (
  props: Menu,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
  <flp-menu style="max-width: 200px;">
    <flp-menu-item value="1">Some</flp-menu-item>
    <flp-menu-item value="2">Menu</flp-menu-item>
    <flp-divider></flp-divider>
    <flp-menu-item value="3">Item 1</flp-menu-item>
  </flp-menu>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
