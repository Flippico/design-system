import { FlpDrawer as FlpDrawerRaw } from './flp-drawer.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';
import { FlpAfterHideEvent } from '../../events/flp-after-hide.js';
import { FlpAfterShowEvent } from '../../events/flp-after-show.js';
import { FlpInitialFocusEvent } from '../../events/flp-initial-focus.js';
import { FlpRequestCloseEvent } from '../../events/flp-request-close.js';
import { FlpShowEvent } from '../../events/flp-show.js';
import { FlpHideEvent } from '../../events/flp-hide.js';

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
    onFlpAfterHideEvent: 'flp-after-hide' as EventName<FlpAfterHideEvent>,
    onFlpAfterShowEvent: 'flp-after-show' as EventName<FlpAfterShowEvent>,
    onFlpInitialFocusEvent: 'flp-initial-focus' as EventName<FlpInitialFocusEvent>,
    onFlpRequestCloseEvent: 'flp-request-close' as EventName<FlpRequestCloseEvent>,
    onFlpShow: 'flp-show' as EventName<FlpShowEvent>,
    onFlpShowHide: 'flp-hide' as EventName<FlpHideEvent>,
  },
  displayName: 'FlpDrawer'
});

export {
  FlpDrawer
};