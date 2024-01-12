import { FlpTag as FlpTagRaw } from './flp-tag.js';
import * as React from 'react';
import { createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-tag': FlpTagRaw;
  }
}

const FlpTag = createComponent({
  tagName: 'flp-tag',
  elementClass: FlpTagRaw,
  react: React,
  events: {
  },
  displayName: 'FlpTag'
});

export {
  FlpTag
};