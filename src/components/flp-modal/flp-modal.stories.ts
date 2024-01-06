import { html } from 'lit';
import { Story } from '../../types/storybook';
import { Modal } from './flp-modal.types';
import './flp-modal';
import './../../themes/light.css';
import './../../themes/dark.css';
import '../flp-button/flp-button';

export default {
  title: 'components/Modal',
  component: 'flp-modal',
}

const defaultProps: Modal = {};

const Template: Story<Modal> = (
  props: Modal,
  {
    globals: { theme },
  }: {
    globals: { theme: string };
  }
) => {
  return html`
  <div class="flp-theme-light">
    <flp-modal id="modal" label="Dialog sdfsdf" class="dialog-overview">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </flp-modal>
    <flp-button @click=${() => document.getElementById('modal')?.setAttribute('open', 'true')}>Open Modal</flp-button>
  </div>`;
}

export const Default = Template.bind({});
Default.args = defaultProps;
