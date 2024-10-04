import { FlpConfirmSignup as FlpConfirmSignupRaw } from './flp-confirm-signup.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-confirm-signup': FlpConfirmSignupRaw;
  }
}

const FlpConfirmSignup = createComponent({
  tagName: 'flp-confirm-signup',
  elementClass: FlpConfirmSignupRaw,
  react: React,
  events: {
  },
  displayName: 'FlpConfirmSignup'
});

export {
  FlpConfirmSignup
};