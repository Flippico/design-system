import { FlpIcon as FlpIconRaw } from './flp-icon.js';
import * as React from 'react';
import { createComponent } from '@lit/react';

export * from './flp-icon.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-icon': FlpIconRaw;
  }
}

const FlpIcon = createComponent({
  tagName: 'flp-icon',
  elementClass: FlpIconRaw,
  react: React,
  events: {
  },
  displayName: 'FlpIcon'
});

export {
  FlpIcon
};