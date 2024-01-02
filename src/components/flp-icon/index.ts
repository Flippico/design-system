import { FlpIcon } from './flp-icon.js';
import * as React from 'react';
import { createComponent } from '@lit/react';

export * from './flp-icon.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-icon': FlpIcon;
  }
}

const reactWrapper = createComponent({
  tagName: 'flp-icon',
  elementClass: FlpIcon,
  react: React,
  events: {
  },
  displayName: 'FlpIcon'
});

export default reactWrapper;