import { html } from 'lit';
import { Story } from '../../types/storybook';
import { MfaSetup } from './flp-mfa-setup.types';
import "./../../components/flp-card";
import "./../../components/flp-button";
import "./../../components/flp-input";
import "./../../components/flp-logo";
import './flp-mfa-setup';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'containers/MFA Setup',
  component: 'flp-mfa-setup',
}

const defaultProps: MfaSetup = {};

const Template: Story<MfaSetup> = (
  props: MfaSetup,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-mfa-setup
      logo="https://flippico-assets.s3.eu-central-1.amazonaws.com/bajkomat/appstore.png"
      .develop=${true}
      tenant_key="somekey"
      auth_token="fake-jwt-token"
    ></flp-mfa-setup>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
