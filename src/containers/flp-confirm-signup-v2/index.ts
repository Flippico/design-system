import { FlpConfirmSignupV2 as FlpConfirmSignupV2Raw } from './flp-confirm-signup-v2.js';
import * as React from 'react';
import { createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-confirm-signup-v2': FlpConfirmSignupV2Raw;
  }
}

const FlpConfirmSignupV2 = createComponent({
  tagName: 'flp-confirm-signup-v2',
  elementClass: FlpConfirmSignupV2Raw,
  react: React,
  events: {},
  displayName: 'FlpConfirmSignupV2'
});

export { FlpConfirmSignupV2 };
