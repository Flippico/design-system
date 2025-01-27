export type FlpConfirmSignupSuccessEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-confirm-signup-success': FlpConfirmSignupSuccessEvent;
  }
}
