export type FlpInitialFocusEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-initial-focus': FlpInitialFocusEvent;
  }
}
