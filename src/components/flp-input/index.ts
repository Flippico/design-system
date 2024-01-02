import { FlpInput } from './flp-input.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';
import { FlpBlurEvent, FlpChangeEvent, FlpClearEvent, FlpFocusEvent, FlpInputEvent } from '../../events/index.js';

export * from './flp-input.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-input': FlpInput;
  }
}

const reactWrapper = createComponent({
  tagName: 'flp-input',
  elementClass: FlpInput,
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

export default reactWrapper;