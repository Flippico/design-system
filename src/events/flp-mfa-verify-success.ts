export type FlpMfaVerifySuccessEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-mfa-verify-success': FlpMfaVerifySuccessEvent;
  }
}
