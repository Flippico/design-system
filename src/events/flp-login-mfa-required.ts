export type FlpLoginMfaRequiredEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-login-mfa-required': FlpLoginMfaRequiredEvent;
  }
}
