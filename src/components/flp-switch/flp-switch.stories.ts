import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Switch } from './flp-switch.types';
import './flp-switch';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Switch',
  component: 'flp-switch',
}

const defaultProps: Switch = {};

const Template: Story<Switch> = (
  props: Switch,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-switch>
      Switch
    </flp-switch>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
