import { createComponent } from '@lit/react';
import {FlpRange as FlpRangeRaw} from './flp-range.js';
import React from 'react';

export * from './flp-range.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-range': FlpRangeRaw;
  }
}

const FlpRange = createComponent({
  tagName: 'flp-range',
  elementClass: FlpRangeRaw,
  react: React,
  events: {
  },
  displayName: 'FlpOption'
});

export {
  FlpRange
};