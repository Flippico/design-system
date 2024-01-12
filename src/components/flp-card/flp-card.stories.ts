import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Card } from './flp-card.types';
import './flp-card';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Card',
  component: 'flp-card',
}

const defaultProps: Card = {};

const Template: Story<Card> = (
  props: Card,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-card>
      Card
    </flp-card>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
