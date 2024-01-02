import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Input } from './flp-input.types';
import './flp-input';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Input',
  component: 'flp-input',
}

const defaultProps: Input = {};

const Template: Story<Input> = (
  props: Input,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-input label="What is your name?"></flp-input>
    <br/>
    <flp-input type="password" placeholder="Password Toggle" password-toggle></flp-input>
    <br/>
    <flp-input type="date" placeholder="Date"></flp-input>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
