import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Checkbox } from './flp-checkbox.types';
import './flp-checkbox';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Checkbox',
  component: 'flp-checkbox',
}

const defaultProps: Checkbox = {};

const Template: Story<Checkbox> = (
  props: Checkbox,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-checkbox>
      Checkbox
    </flp-checkbox>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
