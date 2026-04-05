export type FlpLoginMfaSetupRequiredEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-login-mfa-setup-required': FlpLoginMfaSetupRequiredEvent;
  }
}
