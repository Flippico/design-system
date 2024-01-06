export type FlpRequestClose = CustomEvent<{ source: 'close-button' | 'keyboard' | 'overlay' }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-request-close': FlpRequestClose;
  }
}
