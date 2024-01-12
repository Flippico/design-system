import { FlpMenuLabel as FlpMenuLabelRaw } from './flp-menu-label.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-menu-label': FlpMenuLabelRaw;
  }
}

const FlpMenuLabel = createComponent({
  tagName: 'flp-menu-label',
  elementClass: FlpMenuLabelRaw,
  react: React,
  events: {
  },
  displayName: 'FlpMenuLabel'
});

export {
  FlpMenuLabel
};