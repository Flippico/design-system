import { FlpResetPassword as FlpResetPasswordRaw } from './flp-reset-password.js';
import * as React from 'react';
import { createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-reset-password': FlpResetPasswordRaw;
  }
}

const FlpResetPassword = createComponent({
  tagName: 'flp-reset-password',
  elementClass: FlpResetPasswordRaw,
  react: React,
  events: {
  },
  displayName: 'FlpResetPassword'
});

export {
  FlpResetPassword
};