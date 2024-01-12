import { FlpModal as FlpModalRaw } from './flp-modal.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';
import { FlpAfterHideEvent } from '../../events/flp-after-hide.js';
import { FlpAfterShowEvent } from '../../events/flp-after-show.js';
import { FlpInitialFocusEvent } from '../../events/flp-initial-focus.js';
import { FlpShow } from '../../events/flp-show.js';
import { FlpRequestCloseEvent } from '../../events/flp-request-close.js';
import { FlpHideEvent } from '../../events/flp-hide.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-modal': FlpModalRaw;
  }
}

const FlpModal = createComponent({
  tagName: 'flp-modal',
  elementClass: FlpModalRaw,
  react: React,
  events: {
    onFlpAfterHideEvent: 'flp-after-hide' as EventName<FlpAfterHideEvent>,
    onFlpAfterShowEvent: 'flp-after-show' as EventName<FlpAfterShowEvent>,
    onFlpInitialFocusEvent: 'flp-initial-focus' as EventName<FlpInitialFocusEvent>,
    onFlpRequestCloseEvent: 'flp-request-close' as EventName<FlpRequestCloseEvent>,
    onFlpShow: 'flp-show' as EventName<FlpShow>,
    onFlpShowHide: 'flp-hide' as EventName<FlpHideEvent>,
  },
  displayName: 'FlpModal'
});

export {
  FlpModal
};