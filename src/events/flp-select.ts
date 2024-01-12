import type { FlpMenuItem } from "../components/flp-menu-item/flp-menu-item";

export type FlpSelectEvent = CustomEvent<{ item: FlpMenuItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'flp-select': FlpSelectEvent;
  }
}
