export type FlpRepositionEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-reposition': FlpRepositionEvent;
  }
}
