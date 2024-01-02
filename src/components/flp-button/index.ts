import { FlpButton as FlpButtonRaw } from './flp-button.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';
import type { FlpBlurEvent, FlpFocusEvent, FlpInvalidEvent } from '../../events/index.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-button': FlpButtonRaw;
  }
}

const FlpButton = createComponent({
  tagName: 'flp-button',
  elementClass: FlpButtonRaw,
  react: React,
  events: {
    onFlpBlur: 'flp-blur' as EventName<FlpBlurEvent>,
    onFlpFocus: 'flp-focus' as EventName<FlpFocusEvent>,
    onFlpInvalid: 'flp-invalid' as EventName<FlpInvalidEvent>
  },
  displayName: 'FlpButton'
});

export { 
  FlpButton
};