import { FlpAlert as FlpAlertRaw } from './flp-alert.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';
import { FlpAfterShowEvent } from '../../events/flp-after-show.js';
import { FlpShowEvent, FlpHideEvent, FlpAfterHideEvent } from '../../events/index.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-alert': FlpAlertRaw;
  }
}

const FlpAlert = createComponent({
  tagName: 'flp-alert',
  elementClass: FlpAlertRaw,
  react: React,
  events: {
    onFlpShow: 'flp-show' as EventName<FlpShowEvent>,
    onFlpAfterShowEvent: 'flp-after-show' as EventName<FlpAfterShowEvent>,
    onFlpHide: 'flp-hide' as EventName<FlpHideEvent>,
    onFlpAfterHideEvent: 'flp-after-hide' as EventName<FlpAfterHideEvent>
  },
  displayName: 'FlpAlert'
});

export {
  FlpAlert
};