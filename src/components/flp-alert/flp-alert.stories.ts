import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Alert } from './flp-alert.types';
import './flp-alert';
import './../flp-icon/flp-icon';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Alert',
  component: 'flp-alert',
}

const defaultProps: Alert = {};

const Template: Story<Alert> = (
  props: Alert,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-alert open>
      <flp-icon slot="icon" name="info-circle"></flp-icon>
      Some text
    </flp-alert>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
