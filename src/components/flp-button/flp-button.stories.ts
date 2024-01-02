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
      <h3>Light variant</h3>
      <flp-button>Default</flp-button>
      <flp-button variant="primary">Primary</flp-button>
      <flp-button variant="success">Success</flp-button>
      <flp-button variant="neutral">Neutral</flp-button>
      <flp-button variant="danger">Danger</flp-button>
      <flp-button variant="warning">Warning</flp-button>
      <flp-button variant="text">Text</flp-button>
    </div>
    <br/>
    <div class="flp-theme-dark">
      <h3>Dark variant</h3>
      <flp-button>Default</flp-button>
      <flp-button variant="primary">Primary</flp-button>
      <flp-button variant="success">Success</flp-button>
      <flp-button variant="neutral">Neutral</flp-button>
      <flp-button variant="danger">Danger</flp-button>
      <flp-button variant="warning">Warning</flp-button>
      <flp-button variant="text">Text</flp-button>
    </div>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
