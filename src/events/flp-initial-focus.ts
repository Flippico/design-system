export type FlpInitialFocus = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-initial-focus': FlpInitialFocus;
  }
}
