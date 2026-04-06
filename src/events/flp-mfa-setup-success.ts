export type FlpMfaSetupSuccessEvent = CustomEvent<{ method: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-mfa-setup-success': FlpMfaSetupSuccessEvent;
  }
}
