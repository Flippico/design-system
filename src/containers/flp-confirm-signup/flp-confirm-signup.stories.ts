import { html } from 'lit';
import { Story } from '../../types/storybook';
import { ConfirmSignup } from './flp-confirm-signup.types';
import './flp-confirm-signup';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'containers/ConfirmSignup',
  component: 'flp-confirm-signup',
}

const defaultProps: ConfirmSignup = {};

const Template: Story<ConfirmSignup> = (
  props: ConfirmSignup,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-confirm-signup>
    </flp-confirm-signup>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
