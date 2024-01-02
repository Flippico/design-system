export type FlpFocusEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-focus': FlpFocusEvent;
  }
}
