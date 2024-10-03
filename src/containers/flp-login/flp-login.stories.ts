import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Login } from './flp-login.types';
import './flp-login';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'containers/Login',
  component: 'flp-login',
}

const defaultProps: Login = {};

const Template: Story<Login> = (
  props: Login,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-login></flp-login>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
