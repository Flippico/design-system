import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Tag } from './flp-tag.types';
import './flp-tag';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Tag',
  component: 'flp-tag',
}

const defaultProps: Tag = {};

const Template: Story<Tag> = (
  props: Tag,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
  <flp-tag variant="primary">Primary</flp-tag>
  <flp-tag variant="success">Success</flp-tag>
  <flp-tag variant="neutral">Neutral</flp-tag>
  <flp-tag variant="warning">Warning</flp-tag>
  <flp-tag variant="danger">Danger</flp-tag>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
