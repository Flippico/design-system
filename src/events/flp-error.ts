export type FlpErrorEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-error': FlpErrorEvent;
  }
}
