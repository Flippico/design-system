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
    <flp-signup .develop=${true} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback">
    </flp-signup>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
