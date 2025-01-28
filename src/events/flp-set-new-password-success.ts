export type FlpSetNewPasswordSuccessEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-set-new-password-success': FlpSetNewPasswordSuccessEvent;
  }
}
