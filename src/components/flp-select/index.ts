import { FlpSelect as FlpSelectRaw } from './flp-select.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';
import { FlpAfterHideEvent, FlpAfterShowEvent, FlpBlurEvent, FlpChangeEvent, FlpClearEvent, FlpFocusEvent, FlpHideEvent, FlpInputEvent, FlpInvalidEvent, FlpShowEvent } from '../../events/index.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-select': FlpSelectRaw;
  }
}

const FlpSelect = createComponent({
  tagName: 'flp-select',
  elementClass: FlpSelectRaw,
  react: React,
  events: {
    onFlpChange: 'flp-change' as EventName<FlpChangeEvent>,
    onFlpClear: 'flp-clear' as EventName<FlpClearEvent>,
    onFlpInput: 'flp-input' as EventName<FlpInputEvent>,
    onFlpFocus: 'flp-focus' as EventName<FlpFocusEvent>,
    onFlpBlur: 'flp-blur' as EventName<FlpBlurEvent>,
    onFlpShow: 'flp-show' as EventName<FlpShowEvent>,
    onFlpAfterShow: 'flp-after-show' as EventName<FlpAfterShowEvent>,
    onFlpHide: 'flp-hide' as EventName<FlpHideEvent>,
    onFlpAfterHide: 'flp-after-hide' as EventName<FlpAfterHideEvent>,
    onFlpInvalid: 'flp-invalid' as EventName<FlpInvalidEvent>
  },
  displayName: 'FlpSelect'
});

export {
  FlpSelect
};