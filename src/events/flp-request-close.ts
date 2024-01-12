export type FlpRequestCloseEvent = CustomEvent<{ source: 'close-button' | 'keyboard' | 'overlay' }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-request-close': FlpRequestCloseEvent;
  }
}
