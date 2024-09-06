import * as React from 'react';
import {FlpSpinner as FlpSpinnerRaw} from './flp-spinner.js';
import { createComponent } from '@lit/react';

export * from './flp-spinner.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-spinner': FlpSpinnerRaw;
  }
}

const FlpSpinner = createComponent({
  tagName: 'flp-spinner',
  elementClass: FlpSpinnerRaw,
  react: React,
  events: {},
  displayName: 'FlpSpinner'
});

export {FlpSpinner};