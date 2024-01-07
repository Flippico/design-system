import { FlpDrawer as FlpDrawerRaw } from './flp-drawer.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';

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
  },
  displayName: 'FlpDrawer'
});

export {
  FlpDrawer
};