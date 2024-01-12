export type FlpRemoveEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-remove': FlpRemoveEvent;
  }
}
