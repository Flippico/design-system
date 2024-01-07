import { FlpDrawer as FlpDrawerRaw } from './flp-drawer.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';
import { FlpAfterHide } from '../../events/flp-after-hide.js';
import { FlpAfterShow } from '../../events/flp-after-show.js';
import { FlpInitialFocus } from '../../events/flp-initial-focus.js';
import { FlpRequestClose } from '../../events/flp-request-close.js';
import { FlpShow } from '../../events/flp-show.js';
import { FlpHide } from '../../events/flp-hide.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-drawer': FlpDrawerRaw;
  }
}

const FlpDrawer = createComponent({
  tagName: 'flp-drawer',
  elementClass: FlpDrawerRaw,
  react: React,
  events: {
    onFlpAfterHide: 'flp-after-hide' as EventName<FlpAfterHide>,
    onFlpAfterShow: 'flp-after-show' as EventName<FlpAfterShow>,
    onFlpInitialFocus: 'flp-initial-focus' as EventName<FlpInitialFocus>,
    onFlpRequestClose: 'flp-request-close' as EventName<FlpRequestClose>,
    onFlpShow: 'flp-show' as EventName<FlpShow>,
    onFlpShowHide: 'flp-hide' as EventName<FlpHide>,
  },
  displayName: 'FlpDrawer'
});

export {
  FlpDrawer
};