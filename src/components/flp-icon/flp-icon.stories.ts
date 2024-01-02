import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Icon } from './flp-icon.types';
import './flp-icon';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Icon',
  component: 'flp-icon',
}

const defaultProps: Icon = {};

const Template: Story<Icon> = (
  props: Icon,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-icon name="8-square"></flp-icon>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
