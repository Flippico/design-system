import FlpSpinner from './flp-spinner.js';

export * from './flp-spinner.js';

FlpSpinner.define('flp-spinner');

declare global {
  interface HTMLElementTagNameMap {
    'flp-spinner': FlpSpinner;
  }
}

export {FlpSpinner};