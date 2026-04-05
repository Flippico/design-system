import { FlpSignupV2 as FlpSignupV2Raw } from './flp-signup-v2.js';
import * as React from 'react';
import { createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-signup-v2': FlpSignupV2Raw;
  }
}

const FlpSignupV2 = createComponent({
  tagName: 'flp-signup-v2',
  elementClass: FlpSignupV2Raw,
  react: React,
  events: {
  },
  displayName: 'FlpSignupV2'
});

export {
  FlpSignupV2
};
