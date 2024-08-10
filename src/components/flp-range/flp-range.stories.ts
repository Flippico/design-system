import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Range } from './flp-range.types';
import './flp-range';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Range',
  component: 'flp-range',
}

const defaultProps: Range = {};

const Template: Story<Range> = (
  props: Range,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light" style="margin-top: 200px;">
    <flp-range min="200" max="5000" step="20"></flp-range>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
