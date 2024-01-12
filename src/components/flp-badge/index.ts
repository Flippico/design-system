import { FlpBadge as FlpBadgeRaw } from './flp-badge.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-badge': FlpBadgeRaw;
  }
}

const FlpBadge = createComponent({
  tagName: 'flp-badge',
  elementClass: FlpBadgeRaw,
  react: React,
  events: {
  },
  displayName: 'FlpBadge'
});

export {
  FlpBadge
};