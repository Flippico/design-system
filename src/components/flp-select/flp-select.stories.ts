import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Select } from './flp-select.types';
import './flp-select';
import './../flp-option/flp-option';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Select',
  component: 'flp-select',
}

const defaultProps: Select = {};

const Template: Story<Select> = (
  props: Select,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-select>
      <flp-option value="option-1">Option 1</flp-option>
      <flp-option value="option-2">Option 2</flp-option>
      <flp-option value="option-3">Option 3</flp-option>
      <flp-option value="option-4">Option 4</flp-option>
      <flp-option value="option-5">Option 5</flp-option>
      <flp-option value="option-6">Option 6</flp-option>
    </flp-select>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
