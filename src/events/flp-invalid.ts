export type FlpInvalidEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-invalid': FlpInvalidEvent;
  }
}
