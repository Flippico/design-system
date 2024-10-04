import { FlpSignup as FlpSignupRaw } from './flp-signup.js';
import * as React from 'react';
import { createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-signup': FlpSignupRaw;
  }
}

const FlpSignup = createComponent({
  tagName: 'flp-signup',
  elementClass: FlpSignupRaw,
  react: React,
  events: {
  },
  displayName: 'FlpSignup'
});

export {
  FlpSignup
};