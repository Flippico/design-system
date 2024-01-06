export type FlpHide = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-hide': FlpHide;
  }
}
