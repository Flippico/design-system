import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Divider } from './flp-divider.types';
import './flp-divider';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Divider',
  component: 'flp-divider',
}

const defaultProps: Divider = {};

const Template: Story<Divider> = (
  props: Divider,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-divider>
      Divider
    </flp-divider>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
