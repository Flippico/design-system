export type FlpLoginSuccessEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-login-success': FlpLoginSuccessEvent;
  }
}
