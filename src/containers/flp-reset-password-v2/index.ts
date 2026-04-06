import { FlpResetPasswordV2 as FlpResetPasswordV2Raw } from './flp-reset-password-v2.js';
import * as React from 'react';
import { createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-reset-password-v2': FlpResetPasswordV2Raw;
  }
}

const FlpResetPasswordV2 = createComponent({
  tagName: 'flp-reset-password-v2',
  elementClass: FlpResetPasswordV2Raw,
  react: React,
  events: {},
  displayName: 'FlpResetPasswordV2'
});

export { FlpResetPasswordV2 };
