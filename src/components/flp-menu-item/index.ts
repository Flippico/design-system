import { FlpMenuItem as FlpMenuItemRaw } from './flp-menu-item.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-menu-item': FlpMenuItemRaw;
  }
}

const FlpMenuItem = createComponent({
  tagName: 'flp-menu-item',
  elementClass: FlpMenuItemRaw,
  react: React,
  events: {
  },
  displayName: 'FlpMenuItem'
});

export {
  FlpMenuItem
};