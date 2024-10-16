import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Login } from './flp-login.types';
import "./../../components/flp-card";
import "./../../components/flp-button";
import "./../../components/flp-input";
import "./../../components/flp-logo";
import "./../../components/flp-divider";
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
    <flp-login logo="https://flippico-assets.s3.eu-central-1.amazonaws.com/bajkomat/appstore.png" .develop=${true} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback"></flp-login>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
