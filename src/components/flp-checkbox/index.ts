import { FlpCheckbox as FlpCheckboxRaw } from './flp-checkbox.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';
import { FlpBlurEvent, FlpChangeEvent, FlpFocusEvent, FlpInputEvent, FlpInvalidEvent } from '../../events/index.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-checkbox': FlpCheckboxRaw;
  }
}

const FlpCheckbox = createComponent({
  tagName: 'flp-checkbox',
  elementClass: FlpCheckboxRaw,
  react: React,
  events: {
    onFlpBlur: 'flp-blur' as EventName<FlpBlurEvent>,
    onFlpChange: 'flp-change' as EventName<FlpChangeEvent>,
    onFlpFocus: 'flp-focus' as EventName<FlpFocusEvent>,
    onFlpInput: 'flp-input' as EventName<FlpInputEvent>,
    onFlpInvalid: 'flp-invalid' as EventName<FlpInvalidEvent>
  },
  displayName: 'FlpCheckbox'
});

export {
  FlpCheckbox
};