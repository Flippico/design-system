export type FlpSignUpSuccessEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-signup-success': FlpSignUpSuccessEvent;
  }
}
