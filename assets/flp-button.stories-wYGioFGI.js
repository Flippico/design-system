import{u as B,f as A,i as F,T,w as O,x as y}from"./lit-element-w72SgdYd.js";import{F as U,t as L}from"./custom-element-fmFNofkQ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:A},I=(e=z,t,r)=>{const{kind:o,metadata:n}=r;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),a.set(r.name,e),o==="accessor"){const{name:l}=r;return{set(d){const c=t.get.call(this);t.set.call(this,d),this.requestUpdate(l,c,e)},init(d){return d!==void 0&&this.C(l,void 0,e),d}}}if(o==="setter"){const{name:l}=r;return function(d){const c=this[l];t.call(this,d),this.requestUpdate(l,c,e)}}throw Error("Unsupported decorator location: "+o)};function u(e){return(t,r)=>typeof r=="object"?I(e,t,r):((o,n,a)=>{const l=n.hasOwnProperty(a);return n.constructor.createProperty(a,l?{...o,wrapped:!0}:o),l?Object.getOwnPropertyDescriptor(n,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function D(e){return u({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(e,t){return(r,o,n)=>{const a=l=>{var d;return((d=l.renderRoot)==null?void 0:d.querySelector(e))??null};if(t){const{get:l,set:d}=typeof o=="object"?r:n??(()=>{const c=Symbol();return{get(){return this[c]},set(p){this[c]=p}}})();return C(r,o,{get(){let c=l.call(this);return c===void 0&&(c=a(this),(c!==null||this.hasUpdated)&&d.call(this,c)),c}})}return C(r,o,{get(){return a(this)}})}}class P{constructor(t,...r){this.slotNames=[],this.handleSlotChange=o=>{const n=o.target;(this.slotNames.includes("[default]")&&!n.name||n.name&&this.slotNames.includes(n.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=r}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const r=t;if(r.tagName.toLowerCase()==="flp-visually-hidden")return!1;if(!r.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}}const M=F`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,j=F`
  ${M}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--flp-input-border-width);
    font-family: var(--flp-input-font-family);
    font-weight: var(--flp-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--flp-transition-x-fast) background-color,
      var(--flp-transition-x-fast) color,
      var(--flp-transition-x-fast) border,
      var(--flp-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--flp-focus-ring);
    outline-offset: var(--flp-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(flp-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--flp-color-neutral-0);
    border-color: var(--flp-color-neutral-300);
    color: var(--flp-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--flp-color-primary-50);
    border-color: var(--flp-color-primary-300);
    color: var(--flp-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--flp-color-primary-100);
    border-color: var(--flp-color-primary-400);
    color: var(--flp-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--flp-color-primary-600);
    border-color: var(--flp-color-primary-600);
    color: var(--flp-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--flp-color-primary-500);
    border-color: var(--flp-color-primary-500);
    color: var(--flp-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--flp-color-primary-600);
    border-color: var(--flp-color-primary-600);
    color: var(--flp-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--flp-color-success-600);
    border-color: var(--flp-color-success-600);
    color: var(--flp-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--flp-color-success-500);
    border-color: var(--flp-color-success-500);
    color: var(--flp-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--flp-color-success-600);
    border-color: var(--flp-color-success-600);
    color: var(--flp-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--flp-color-neutral-600);
    border-color: var(--flp-color-neutral-600);
    color: var(--flp-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--flp-color-neutral-500);
    border-color: var(--flp-color-neutral-500);
    color: var(--flp-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--flp-color-neutral-600);
    border-color: var(--flp-color-neutral-600);
    color: var(--flp-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--flp-color-warning-600);
    border-color: var(--flp-color-warning-600);
    color: var(--flp-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--flp-color-warning-500);
    border-color: var(--flp-color-warning-500);
    color: var(--flp-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--flp-color-warning-600);
    border-color: var(--flp-color-warning-600);
    color: var(--flp-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--flp-color-danger-600);
    border-color: var(--flp-color-danger-600);
    color: var(--flp-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--flp-color-danger-500);
    border-color: var(--flp-color-danger-500);
    color: var(--flp-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--flp-color-danger-600);
    border-color: var(--flp-color-danger-600);
    color: var(--flp-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--flp-color-neutral-300);
    color: var(--flp-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--flp-color-primary-600);
    background-color: var(--flp-color-primary-600);
    color: var(--flp-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--flp-color-primary-700);
    background-color: var(--flp-color-primary-700);
    color: var(--flp-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--flp-color-primary-600);
    color: var(--flp-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--flp-color-primary-600);
    color: var(--flp-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--flp-color-primary-700);
    background-color: var(--flp-color-primary-700);
    color: var(--flp-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--flp-color-success-600);
    color: var(--flp-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--flp-color-success-600);
    color: var(--flp-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--flp-color-success-700);
    background-color: var(--flp-color-success-700);
    color: var(--flp-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--flp-color-neutral-600);
    color: var(--flp-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--flp-color-neutral-600);
    color: var(--flp-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--flp-color-neutral-700);
    background-color: var(--flp-color-neutral-700);
    color: var(--flp-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--flp-color-warning-600);
    color: var(--flp-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--flp-color-warning-600);
    color: var(--flp-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--flp-color-warning-700);
    background-color: var(--flp-color-warning-700);
    color: var(--flp-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--flp-color-danger-600);
    color: var(--flp-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--flp-color-danger-600);
    color: var(--flp-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--flp-color-danger-700);
    background-color: var(--flp-color-danger-700);
    color: var(--flp-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--flp-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--flp-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--flp-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--flp-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--flp-input-height-small);
    font-size: var(--flp-button-font-size-small);
    line-height: calc(var(--flp-input-height-small) - var(--flp-input-border-width) * 2);
    border-radius: var(--flp-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--flp-input-height-medium);
    font-size: var(--flp-button-font-size-medium);
    line-height: calc(var(--flp-input-height-medium) - var(--flp-input-border-width) * 2);
    border-radius: var(--flp-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--flp-input-height-large);
    font-size: var(--flp-button-font-size-large);
    line-height: calc(var(--flp-input-height-large) - var(--flp-input-border-width) * 2);
    border-radius: var(--flp-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--flp-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--flp-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--flp-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--flp-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--flp-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--flp-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading flp-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(flp-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(flp-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--flp-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--flp-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--flp-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--flp-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--flp-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--flp-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--flp-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--flp-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--flp-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--flp-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--flp-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--flp-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--flp-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--flp-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--flp-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.flp-button-group__button--first:not(.flp-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.flp-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.flp-button-group__button--last:not(.flp-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.flp-button-group__button:not(.flp-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--flp-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .flp-button-group__button:not(
          .flp-button-group__button--first,
          .flp-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.flp-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.flp-button-group__button--focus),
  :host(.flp-button-group__button[checked]) {
    z-index: 2;
  }
`,f=new WeakMap,h=new WeakMap,m=new WeakMap,_=new WeakSet,g=new WeakMap;class R{constructor(t,r){this.handleFormData=o=>{const n=this.options.disabled(this.host),a=this.options.name(this.host),l=this.options.value(this.host),d=this.host.tagName.toLowerCase()==="flp-button";!n&&!d&&typeof a=="string"&&a.length>0&&typeof l<"u"&&(Array.isArray(l)?l.forEach(c=>{o.formData.append(a,c.toString())}):o.formData.append(a,l.toString()))},this.handleFormSubmit=o=>{var l;const n=this.options.disabled(this.host),a=this.options.reportValidity;this.form&&!this.form.noValidate&&((l=f.get(this.form))==null||l.forEach(d=>{this.setUserInteracted(d,!0)})),this.form&&!this.form.noValidate&&!n&&!a(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),g.set(this.host,[])},this.handleInteraction=o=>{const n=g.get(this.host);n.includes(o.type)||n.push(o.type),n.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const n of o)if(typeof n.checkValidity=="function"&&!n.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const n of o)if(typeof n.reportValidity=="function"&&!n.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:o=>{const n=o.form;if(n){const l=o.getRootNode().getElementById(n);if(l)return l}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>o.disabled??!1,reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,n)=>o.value=n,assumeInteractionOn:["flp-input"],...r}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),g.set(this.host,[]),this.options.assumeInteractionOn.forEach(r=>{this.host.addEventListener(r,this.handleInteraction)})}hostDisconnected(){this.detachForm(),g.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,f.has(this.form)?f.get(this.form).add(this.host):f.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),h.has(this.form)||(h.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),m.has(this.form)||(m.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=f.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),h.has(this.form)&&(this.form.reportValidity=h.get(this.form),h.delete(this.form)),m.has(this.form)&&(this.form.checkValidity=m.get(this.form),m.delete(this.form)),this.form=void 0))}setUserInteracted(t,r){r?_.add(t):_.delete(t),t.requestUpdate()}doAction(t,r){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",r&&(o.name=r.name,o.value=r.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(n=>{r.hasAttribute(n)&&o.setAttribute(n,r.getAttribute(n))})),this.form.append(o),o.click(),o.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const r=this.host,o=!!_.has(r),n=!!r.required;r.toggleAttribute("data-required",n),r.toggleAttribute("data-optional",!n),r.toggleAttribute("data-invalid",!t),r.toggleAttribute("data-valid",t),r.toggleAttribute("data-user-invalid",!t&&o),r.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const r=new CustomEvent("flp-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||r.preventDefault(),this.host.dispatchEvent(r)||t==null||t.preventDefault()}}const w=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze({...w,valid:!1,valueMissing:!0});Object.freeze({...w,valid:!1,customError:!0});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=e=>e??T;function W(e,t){const r={waitUntilFirstUpdate:!1,...t};return(o,n)=>{const{update:a}=o,l=Array.isArray(e)?e:[e];o.update=function(d){l.forEach(c=>{const p=c;if(d.has(p)){const k=d.get(p),x=this[p];k!==x&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[n](k,x)}}),a.call(this,d)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=Symbol.for(""),V=(e,...t)=>({_$litStatic$:t.reduce((r,o,n)=>r+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[n+1],e[0]),r:q});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},X=e=>(...t)=>({_$litDirective$:e,values:t});class Y{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=X(class extends Y{constructor(e){var t;if(super(e),e.type!==H.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var o,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!((o=this.st)!=null&&o.has(a))&&this.it.add(a);return this.render(t)}const r=e.element.classList;for(const a of this.it)a in t||(r.remove(a),this.it.delete(a));for(const a in t){const l=!!t[a];l===this.it.has(a)||(n=this.st)!=null&&n.has(a)||(l?(r.add(a),this.it.add(a)):(r.remove(a),this.it.delete(a)))}return O}});var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,s=(e,t,r,o)=>{for(var n=o>1?void 0:o?K(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(o?l(t,r,n):l(n))||n);return o&&n&&J(t,r,n),n};let i=class extends U{constructor(){super(...arguments),this.formControlController=new R(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new P(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:w}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("flp-blur")}handleFocus(){this.hasFocus=!0,this.emit("flp-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink();return e?V`a`:V`button`,y`
      <button
        part="base"
        class=${G({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${b(e?void 0:this.disabled)}
        type=${b(e?void 0:this.type)}
        title=${this.title}
        name=${b(e?void 0:this.name)}
        value=${b(e?void 0:this.value)}
        href=${b(e?this.href:void 0)}
        target=${b(e?this.target:void 0)}
        download=${b(e?this.download:void 0)}
        rel=${b(e?this.rel:void 0)}
        role=${b(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?y` <flp-icon part="caret" class="button__caret" library="system" name="caret"></flp-icon> `:""}
        ${this.loading?y`<flp-spinner part="spinner"></flp-spinner>`:""}
      </button>
    `}};i.styles=[j];s([N(".button")],i.prototype,"button",2);s([D()],i.prototype,"hasFocus",2);s([D()],i.prototype,"invalid",2);s([u()],i.prototype,"title",2);s([u({reflect:!0})],i.prototype,"variant",2);s([u({reflect:!0})],i.prototype,"size",2);s([u({type:Boolean,reflect:!0})],i.prototype,"caret",2);s([u({type:Boolean,reflect:!0})],i.prototype,"disabled",2);s([u({type:Boolean,reflect:!0})],i.prototype,"loading",2);s([u({type:Boolean,reflect:!0})],i.prototype,"outline",2);s([u({type:Boolean,reflect:!0})],i.prototype,"pill",2);s([u({type:Boolean,reflect:!0})],i.prototype,"circle",2);s([u()],i.prototype,"type",2);s([u()],i.prototype,"name",2);s([u()],i.prototype,"value",2);s([u()],i.prototype,"href",2);s([u()],i.prototype,"target",2);s([u()],i.prototype,"rel",2);s([u()],i.prototype,"download",2);s([u()],i.prototype,"form",2);s([u({attribute:"formaction"})],i.prototype,"formAction",2);s([u({attribute:"formenctype"})],i.prototype,"formEnctype",2);s([u({attribute:"formmethod"})],i.prototype,"formMethod",2);s([u({attribute:"formnovalidate",type:Boolean})],i.prototype,"formNoValidate",2);s([u({attribute:"formtarget"})],i.prototype,"formTarget",2);s([W("disabled",{waitUntilFirstUpdate:!0})],i.prototype,"handleDisabledChange",1);i=s([L("flp-button")],i);const rt={title:"components/Button",component:"flp-button"},Q={},Z=(e,{globals:{theme:t}})=>y`
  <div>
    <div class="flp-theme-light">
      <h3>Light variant</h3>
      <flp-button>Default</flp-button>
      <flp-button variant="primary">Primary</flp-button>
      <flp-button variant="success">Success</flp-button>
      <flp-button variant="neutral">Neutral</flp-button>
      <flp-button variant="danger">Danger</flp-button>
      <flp-button variant="warning">Warning</flp-button>
      <flp-button variant="text">Text</flp-button>
    </div>
    <br/>
    <div class="flp-theme-dark">
      <h3>Dark variant</h3>
      <flp-button>Default</flp-button>
      <flp-button variant="primary">Primary</flp-button>
      <flp-button variant="success">Success</flp-button>
      <flp-button variant="neutral">Neutral</flp-button>
      <flp-button variant="danger">Danger</flp-button>
      <flp-button variant="warning">Warning</flp-button>
      <flp-button variant="text">Text</flp-button>
    </div>
  </div>
`,v=Z.bind({});v.args=Q;var S,E,$;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`(props: Button, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div>
    <div class="flp-theme-light">
      <h3>Light variant</h3>
      <flp-button>Default</flp-button>
      <flp-button variant="primary">Primary</flp-button>
      <flp-button variant="success">Success</flp-button>
      <flp-button variant="neutral">Neutral</flp-button>
      <flp-button variant="danger">Danger</flp-button>
      <flp-button variant="warning">Warning</flp-button>
      <flp-button variant="text">Text</flp-button>
    </div>
    <br/>
    <div class="flp-theme-dark">
      <h3>Dark variant</h3>
      <flp-button>Default</flp-button>
      <flp-button variant="primary">Primary</flp-button>
      <flp-button variant="success">Success</flp-button>
      <flp-button variant="neutral">Neutral</flp-button>
      <flp-button variant="danger">Danger</flp-button>
      <flp-button variant="warning">Warning</flp-button>
      <flp-button variant="text">Text</flp-button>
    </div>
  </div>
\``,...($=(E=v.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};const et=["Default"];export{v as Default,et as __namedExportsOrder,rt as default};
//# sourceMappingURL=flp-button.stories-wYGioFGI.js.map
