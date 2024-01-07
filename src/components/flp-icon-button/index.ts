import { FlpIconButton as FlpIconButtonRaw } from './flp-icon-button.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';
import { FlpFocusEvent } from '../../events/flp-focus.js';
import { FlpBlurEvent } from '../../events/flp-blur.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-icon-button': FlpIconButtonRaw;
  }
}

const FlpIconButton = createComponent({
  tagName: 'flp-icon-button',
  elementClass: FlpIconButtonRaw,
  react: React,
  events: {
    onFlpBlur: 'flp-blur' as EventName<FlpBlurEvent>,
    onFlpFocus: 'flp-focus' as EventName<FlpFocusEvent>
  },
  displayName: 'FlpIcon-button'
});

export {
  FlpIconButton
};