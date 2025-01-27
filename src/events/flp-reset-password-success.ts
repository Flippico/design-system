export type FlpResetPasswordSuccessEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-reset-password-success': FlpResetPasswordSuccessEvent;
  }
}
