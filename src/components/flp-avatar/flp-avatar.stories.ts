import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Avatar } from './flp-avatar.types';
import './flp-avatar';
import './../../themes/light.css';
import './../../themes/dark.css';

export default {
  title: 'components/Avatar',
  component: 'flp-avatar',
}

const defaultProps: Avatar = {};

const Template: Story<Avatar> = (
  props: Avatar,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => html`
  <div class="flp-theme-light">
    <flp-avatar shape="rounded" image="https://flippico-storage-cdk.s3.eu-central-1.amazonaws.com/321058520_909165450453057_2617745252442870984_n_c1c1580f8a.jpeg"></flp-avatar>
    <flp-avatar image="https://flippico-storage-cdk.s3.eu-central-1.amazonaws.com/321058520_909165450453057_2617745252442870984_n_c1c1580f8a.jpeg"></flp-avatar>
    <flp-avatar image="https://avatars.githubusercontent.com/u/15210655?v=4"></flp-avatar>
    <flp-avatar shape="square" image="https://avatars.githubusercontent.com/u/15210655?v=4"></flp-avatar>
  </div>
`;

export const Default = Template.bind({});
Default.args = defaultProps;
