import { FlpCard as FlpCardRaw } from './flp-card.js';
import * as React from 'react';
import { createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-card': FlpCardRaw;
  }
}

const FlpCard = createComponent({
  tagName: 'flp-card',
  elementClass: FlpCardRaw,
  react: React,
  events: {
  },
  displayName: 'FlpCard'
});

export {
  FlpCard
};