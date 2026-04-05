import { FlpLoginV2 as FlpLoginV2Raw } from './flp-login-v2.js';
import * as React from 'react';
import { createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-login-v2': FlpLoginV2Raw;
  }
}

const FlpLoginV2 = createComponent({
  tagName: 'flp-login-v2',
  elementClass: FlpLoginV2Raw,
  react: React,
  events: {
  },
  displayName: 'FlpLoginV2'
});

export {
  FlpLoginV2
};
