import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Signup } from './flp-signup.types';
import './flp-signup';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'containers/Signup',
  component: 'flp-signup',
}

const defaultProps: Signup = {};

const Template: Story<Signup> = (
  props: Signup,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-signup>
    </flp-signup>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
