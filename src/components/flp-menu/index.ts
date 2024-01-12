import { FlpMenu as FlpMenuRaw } from './flp-menu.js';
import * as React from 'react';
import { createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-menu': FlpMenuRaw;
  }
}

const FlpMenu = createComponent({
  tagName: 'flp-menu',
  elementClass: FlpMenuRaw,
  react: React,
  events: {
  },
  displayName: 'FlpMenu'
});

export {
  FlpMenu
};