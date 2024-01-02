import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Button } from './flp-button.types';
import './flp-button';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Button',
  component: 'flp-button',
}

const defaultProps: Button = {};

const Template: Story<Button> = (
  props: Button,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div>
    <div class="flp-theme-light">
      <flp-button title="Light button">Light button</flp-button>
    </div>
    <br/>
    <div class="flp-theme-dark">
      <flp-button title="Dark button">Dark button</flp-button>
    </div>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
