export type FlpMfaSetupSuccessEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-mfa-setup-success': FlpMfaSetupSuccessEvent;
  }
}
