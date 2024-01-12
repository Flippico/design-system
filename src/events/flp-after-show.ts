export type FlpAfterShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-after-show': FlpAfterShowEvent;
  }
}
