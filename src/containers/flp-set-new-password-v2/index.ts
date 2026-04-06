import { FlpSetNewPasswordV2 as FlpSetNewPasswordV2Raw } from './flp-set-new-password-v2.js';
import * as React from 'react';
import { createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-set-new-password-v2': FlpSetNewPasswordV2Raw;
  }
}

const FlpSetNewPasswordV2 = createComponent({
  tagName: 'flp-set-new-password-v2',
  elementClass: FlpSetNewPasswordV2Raw,
  react: React,
  events: {},
  displayName: 'FlpSetNewPasswordV2'
});

export { FlpSetNewPasswordV2 };
