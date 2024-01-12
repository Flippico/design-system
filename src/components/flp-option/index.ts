import { FlpOption as FlpOptionRaw } from './flp-option.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-option': FlpOptionRaw;
  }
}

const FlpOption = createComponent({
  tagName: 'flp-option',
  elementClass: FlpOptionRaw,
  react: React,
  events: {
  },
  displayName: 'FlpOption'
});

export {
  FlpOption
};