import { FlpLogin as FlpLoginRaw } from './flp-login.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-login': FlpLoginRaw;
  }
}

const FlpLogin = createComponent({
  tagName: 'flp-login',
  elementClass: FlpLoginRaw,
  react: React,
  events: {
  },
  displayName: 'FlpLogin'
});

export {
  FlpLogin
};