import { FlpSwitch as FlpSwitchRaw } from './flp-switch.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';
import { FlpBlurEvent, FlpChangeEvent, FlpInputEvent, FlpFocusEvent, FlpInvalidEvent } from '../../events/index.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-switch': FlpSwitchRaw;
  }
}

const FlpSwitch = createComponent({
  tagName: 'flp-switch',
  elementClass: FlpSwitchRaw,
  react: React,
  events: {
    onFlpBlur: 'flp-blur' as EventName<FlpBlurEvent>,
    onFlpChange: 'flp-change' as EventName<FlpChangeEvent>,
    onFlpInput: 'flp-input' as EventName<FlpInputEvent>,
    onFlpFocus: 'flp-focus' as EventName<FlpFocusEvent>,
    onFlpInvalid: 'flp-invalid' as EventName<FlpInvalidEvent>
  },
  displayName: 'FlpSwitch'
});

export {
  FlpSwitch
};