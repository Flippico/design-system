import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Logo } from './flp-logo.types';
import './flp-logo';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Logo',
  component: 'flp-logo',
}

const defaultProps: Logo = {};

const Template: Story<Logo> = (
  props: Logo,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <div>
      <span>Flippico</span>
      <flp-logo variant="flippico" size="medium"></flp-logo>
      <flp-logo variant="flippico" size="small"></flp-logo>
      <flp-logo variant="flippico" size="large"></flp-logo>
      <flp-logo variant="flippico" rounded size="large"></flp-logo>
    </div>
    <div>
      <span>KW</span>
      <flp-logo variant="kw" size="medium"></flp-logo>
      <flp-logo variant="kw" size="small"></flp-logo>
      <flp-logo variant="kw" size="large"></flp-logo>
      <flp-logo variant="kw" rounded size="large"></flp-logo>
    </div>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
