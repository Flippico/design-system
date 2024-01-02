import { FlpInput as FlpInputRaw } from './flp-input.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';
import { FlpBlurEvent, FlpChangeEvent, FlpClearEvent, FlpFocusEvent, FlpInputEvent } from '../../events/index.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-input': FlpInputRaw;
  }
}

const FlpInput = createComponent({
  tagName: 'flp-input',
  elementClass: FlpInputRaw,
  react: React,
  events: {
    onFlpClear: 'flp-clear' as EventName<FlpClearEvent>,
    onFlpInput: 'flp-input' as EventName<FlpInputEvent>,
    onFlpChange: 'flp-change' as EventName<FlpChangeEvent>,
    onFlpBlur: 'flp-blur' as EventName<FlpBlurEvent>,
    onFlpFocus: 'flp-focus' as EventName<FlpFocusEvent>,
  },
  displayName: 'FlpInput'
});

export { FlpInput };