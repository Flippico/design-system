export type FlpRepositionEvent = CustomEvent<{ source: 'close-button' | 'keyboard' | 'overlay' }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-reposition': FlpRepositionEvent;
  }
}
