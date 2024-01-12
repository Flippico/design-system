import { FlpDivider as FlpDividerRaw } from './flp-divider.js';
import * as React from 'react';
import { createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-divider': FlpDividerRaw;
  }
}

const FlpDivider = createComponent({
  tagName: 'flp-divider',
  elementClass: FlpDividerRaw,
  react: React,
  events: {
  },
  displayName: 'FlpDivider'
});

export {
  FlpDivider
};