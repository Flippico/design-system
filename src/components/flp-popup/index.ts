import { FlpPopup as FlpPopupRaw } from './flp-popup.js';
import * as React from 'react';
import { EventName, createComponent } from '@lit/react';
import { FlpRepositionEvent } from '../../events/index.js';

declare global {
  interface HTMLElementTagNameMap {
    'flp-popup': FlpPopupRaw;
  }
}

const FlpPopup = createComponent({
  tagName: 'flp-popup',
  elementClass: FlpPopupRaw,
  react: React,
  events: {
    onFlpReposition: 'flp-reposition' as EventName<FlpRepositionEvent>
  },
  displayName: 'FlpPopup'
});

export {
  FlpPopup
};