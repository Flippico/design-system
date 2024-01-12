import { FlpDropdown as FlpDropdownRaw } from './flp-dropdown.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';
import { FlpAfterHideEvent, FlpAfterShowEvent, FlpHideEvent, FlpShowEvent } from '../../events/index.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-dropdown': FlpDropdownRaw;
  }
}

const FlpDropdown = createComponent({
  tagName: 'flp-dropdown',
  elementClass: FlpDropdownRaw,
  react: React,
  events: {
    onFlpShow: 'flp-show' as EventName<FlpShowEvent>,
    onFlpAfterShow: 'flp-after-show' as EventName<FlpAfterShowEvent>,
    onFlpHide: 'flp-hide' as EventName<FlpHideEvent>,
    onFlpAfterHide: 'flp-after-hide' as EventName<FlpAfterHideEvent>
  },
  displayName: 'FlpDropdown'
});

export {
  FlpDropdown
};