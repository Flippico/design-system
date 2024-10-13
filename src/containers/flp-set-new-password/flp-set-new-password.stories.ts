import { html } from 'lit';
import { Story } from '../../types/storybook';
import { SetNewPassword } from './flp-set-new-password.types';
import './flp-set-new-password';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'containers/SetNewPassword',
  component: 'flp-set-new-password',
}

const defaultProps: SetNewPassword = {};

const Template: Story<SetNewPassword> = (
  props: SetNewPassword,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-set-new-password token="some_token" tenant_key="tenant_key"></flp-set-new-password>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
