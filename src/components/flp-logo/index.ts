import { FlpLogo as FlpLogoRaw } from './flp-logo.js';
import * as React from 'react';
import { createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-logo': FlpLogoRaw;
  }
}

const FlpLogo = createComponent({
  tagName: 'flp-logo',
  elementClass: FlpLogoRaw,
  react: React,
  events: {
  },
  displayName: 'FlpLogo'
});

export {
  FlpLogo
};