import { FlpAvatar as FlpAvatarRaw } from './flp-avatar.js';
import * as React from 'react';
import { createComponent } from '@lit/react';

declare global {
  interface HTMLElementTagNameMap {
    'flp-avatar': FlpAvatarRaw;
  }
}

const FlpAvatar = createComponent({
  tagName: 'flp-avatar',
  elementClass: FlpAvatarRaw,
  react: React,
  events: {

  },
  displayName: 'FlpAvatar'
});

export {
  FlpAvatar
};