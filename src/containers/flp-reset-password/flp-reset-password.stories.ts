import { html } from 'lit';
import { Story } from '../../types/storybook';
import { ResetPassword } from './flp-reset-password.types';
import './flp-reset-password';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'containers/ResetPassword',
  component: 'flp-reset-password',
}

const defaultProps: ResetPassword = {};

const Template: Story<ResetPassword> = (
  props: ResetPassword,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-reset-password tenant_key="some_key"></flp-reset-password>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
