import { FlpButton } from './flp-button.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';
import type { FlpBlurEvent, FlpFocusEvent, FlpInvalidEvent } from '../../events/index.js';

export * from './flp-button.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-button': FlpButton;
  }
}

const reactWrapper = createComponent({
  tagName: 'flp-button',
  elementClass: FlpButton,
  react: React,
  events: {
    onFlpBlur: 'flp-blur' as EventName<FlpBlurEvent>,
    onFlpFocus: 'flp-focus' as EventName<FlpFocusEvent>,
    onFlpInvalid: 'flp-invalid' as EventName<FlpInvalidEvent>
  },
  displayName: 'FlpButton'
});

export default reactWrapper;