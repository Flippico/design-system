import { html } from 'lit';
import { Story } from '../../types/storybook';
import './flp-spinner';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Spinner',
  component: 'flp-range',
}

const defaultProps = {};

const Template: Story<Range> = (
  props: Range,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light" style="margin-top: 10px;">
    <flp-spinner></flp-spinner>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
