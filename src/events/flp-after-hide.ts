export type FlpAfterHide = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-after-hide': FlpAfterHide;
  }
}
