import { html } from 'lit';
import { Story } from '../../types/storybook';
import { SignupV2 } from './flp-signup-v2.types';
import './flp-signup-v2';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'containers/Signup V2',
  component: 'flp-signup-v2',
}

const defaultProps: SignupV2 = {};

const Template: Story<SignupV2> = (
  props: SignupV2,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-signup-v2
      .develop=${true}
      tenant_key="somekey"
      provider_id="some-provider-id"
      login_url="/somekey/some-provider-id/login"
    ></flp-signup-v2>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
