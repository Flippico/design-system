import { FlpModal } from './flp-modal.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';

export * from './flp-modal.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-modal': FlpModal;
  }
}

const reactWrapper = createComponent({
  tagName: 'flp-modal',
  elementClass: FlpModal,
  react: React,
  events: {
  },
  displayName: 'FlpModal'
});

export default reactWrapper;