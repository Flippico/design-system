import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Header } from './flp-header.types';
import './flp-header';

export default {
  title: 'components/Header',
  component: 'flp-header',
}

const defaultProps: Header = {};

const Template: Story<Header> = (
  props: Header,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flippico">
    <flp-header .theme=${theme}>
      Header
    </flp-header>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
