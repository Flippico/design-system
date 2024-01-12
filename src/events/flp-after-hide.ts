export type FlpAfterHideEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-after-hide': FlpAfterHideEvent;
  }
}
