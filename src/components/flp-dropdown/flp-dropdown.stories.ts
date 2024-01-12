import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Dropdown } from './flp-dropdown.types';
import './flp-dropdown';
import './../flp-menu/flp-menu';
import './../flp-menu-item/flp-menu-item';
import './../flp-icon/flp-icon';
import './../flp-divider/flp-divider';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Dropdown',
  component: 'flp-dropdown',
}

const defaultProps: Dropdown = {};

const Template: Story<Dropdown> = (
  props: Dropdown,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-dropdown>
      <flp-button slot="trigger" caret>Dropdown</flp-button>
      <flp-menu>
        <flp-menu-item>Item 1</flp-menu-item>
        <flp-menu-item type="checkbox" checked>Checkbox</flp-menu-item>
        <flp-divider></flp-divider>
        <flp-menu-item>
          Pen
          <flp-icon slot="suffix" name="pen"></flp-icon>
        </flp-menu-item>
      </flp-menu>
    </flp-dropdown>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
