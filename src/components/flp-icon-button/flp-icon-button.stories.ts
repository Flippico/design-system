import { html } from 'lit';
import { Story } from '../../types/storybook';
import { IconButton } from './flp-icon-button.types';
import './flp-icon-button';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Icon-button',
  component: 'flp-icon-button',
}

const defaultProps: IconButton = {};

const Template: Story<IconButton> = (
  props: IconButton,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-icon-button name="gear" label="Settings">
      Icon-button
    </flp-icon-button>
    <flp-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></flp-icon-button>
    <flp-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></flp-icon-button>
    <flp-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></flp-icon-button>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
