import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Badge } from './flp-badge.types';
import './flp-badge';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Badge',
  component: 'flp-badge',
}

const defaultProps: Badge = {};

const Template: Story<Badge> = (
  props: Badge,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-badge>
      Badge
    </flp-badge>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
