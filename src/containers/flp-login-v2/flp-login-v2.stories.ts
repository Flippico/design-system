import { html } from 'lit';
import { Story } from '../../types/storybook';
import { LoginV2 } from './flp-login-v2.types';
import "./../../components/flp-card";
import "./../../components/flp-button";
import "./../../components/flp-input";
import "./../../components/flp-logo";
import "./../../components/flp-divider";
import "./../../components/flp-icon";
import './flp-login-v2';
import './../../themes/light.css';
import './../../themes/dark.css';

interface LoginV2Args {
  google: boolean;
  apple: boolean;
  microsoft: boolean;
  github: boolean;
  facebook: boolean;
  email_password: boolean;
  is_admin_panel: string;
}

function buildMockMethods(args: LoginV2Args): string {
  const methods: string[] = [];
  if (args.google) methods.push('google');
  if (args.apple) methods.push('apple');
  if (args.microsoft) methods.push('microsoft');
  if (args.github) methods.push('github');
  if (args.facebook) methods.push('facebook');
  if (args.email_password) methods.push('email_password');
  return JSON.stringify(methods);
}

export default {
  title: 'containers/Login V2',
  component: 'flp-login-v2',
  argTypes: {
    google: { control: 'boolean', description: 'Enable Google login', table: { category: 'Login Methods' } },
    apple: { control: 'boolean', description: 'Enable Apple login', table: { category: 'Login Methods' } },
    microsoft: { control: 'boolean', description: 'Enable Microsoft login', table: { category: 'Login Methods' } },
    github: { control: 'boolean', description: 'Enable GitHub login', table: { category: 'Login Methods' } },
    facebook: { control: 'boolean', description: 'Enable Facebook login', table: { category: 'Login Methods' } },
    email_password: { control: 'boolean', description: 'Enable email/password login', table: { category: 'Login Methods' } },
    is_admin_panel: { control: 'select', options: ['false', 'true'], description: 'Admin panel mode', table: { category: 'Settings' } },
  },
}

const defaultArgs: LoginV2Args = {
  google: true,
  apple: true,
  microsoft: false,
  github: false,
  facebook: false,
  email_password: true,
  is_admin_panel: 'false',
};

const Template: Story<LoginV2Args> = (args: LoginV2Args) => html`
  <div class="flp-theme-light">
    <flp-login-v2
      logo="https://flippico-assets.s3.eu-central-1.amazonaws.com/bajkomat/appstore.png"
      .develop=${true}
      tenant_key="somekey"
      provider_id="some-provider-id"
      signup_url="/somekey/some-provider-id/signup"
      reset_password_url="/somekey/some-provider-id/reset-password"
      is_admin_panel=${args.is_admin_panel}
      mock_methods=${buildMockMethods(args)}
    ></flp-login-v2>
  </div>
`;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const OAuthOnly = Template.bind({});
OAuthOnly.args = { ...defaultArgs, email_password: false };

export const EmailOnly = Template.bind({});
EmailOnly.args = { ...defaultArgs, google: false, apple: false };

export const AllMethods = Template.bind({});
AllMethods.args = { ...defaultArgs, microsoft: true, github: true, facebook: true };

export const AdminPanel = Template.bind({});
AdminPanel.args = { ...defaultArgs, google: false, apple: false, is_admin_panel: 'true' };

export const NoMethods = Template.bind({});
NoMethods.args = { google: false, apple: false, microsoft: false, github: false, facebook: false, email_password: false, is_admin_panel: 'false' };
