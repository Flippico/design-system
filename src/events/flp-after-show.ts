export type FlpAfterShow = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-after-show': FlpAfterShow;
  }
}
