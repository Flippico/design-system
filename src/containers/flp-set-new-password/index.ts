import { FlpSetNewPassword as FlpSetNewPasswordRaw } from './flp-set-new-password.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-set-new-password': FlpSetNewPasswordRaw;
  }
}

const FlpSetNewPassword = createComponent({
  tagName: 'flp-set-new-password',
  elementClass: FlpSetNewPasswordRaw,
  react: React,
  events: {
  },
  displayName: 'FlpSetNewPassword'
});

export {
  FlpSetNewPassword
};