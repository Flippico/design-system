export type FlpBlurEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-blur': FlpBlurEvent;
  }
}
