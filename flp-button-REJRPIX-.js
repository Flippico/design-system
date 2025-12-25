import{H as w}from"./slot-BCTpRhJ5.js";import{F as x,t as k}from"./custom-element-ChNscFG9.js";import{n as l}from"./property-ce-uMPVx.js";import{r as y}from"./state-DiCaT3Q5.js";import{e as $}from"./query-BApjzB0v.js";import{i as C,b as B}from"./lit-element-9a6qN07w.js";import{c as F}from"./component.styles-G8qf-zGh.js";import{F as S,v as z}from"./form-DpMOf5Do.js";import{o as b}from"./if-defined-zn2kxLsi.js";import{w as V}from"./watch-CEsCE2EF.js";import{a as D}from"./class-map-CUwhKOqL.js";const P=C`
  ${F}

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
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=Symbol.for(""),O=t=>{if((t==null?void 0:t.r)===_)return t==null?void 0:t._$litStatic$},g=(t,...n)=>({_$litStatic$:n.reduce((u,e,a)=>u+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(e)+t[a+1],t[0]),r:_}),m=new Map,j=t=>(n,...u)=>{const e=u.length;let a,i;const s=[],f=[];let d,c=0,h=!1;for(;c<e;){for(d=n[c];c<e&&(i=u[c],(a=O(i))!==void 0);)d+=a+n[++c],h=!0;c!==e&&f.push(i),s.push(d),c++}if(c===e&&s.push(n[e]),h){const v=s.join("$$lit$$");(n=m.get(v))===void 0&&(s.raw=s,m.set(v,n=s)),u=f}return t(n,...u)},p=j(B);var E=Object.defineProperty,I=Object.getOwnPropertyDescriptor,r=(t,n,u,e)=>{for(var a=e>1?void 0:e?I(n,u):n,i=t.length-1,s;i>=0;i--)(s=t[i])&&(a=(e?s(n,u,a):s(a))||a);return e&&a&&E(n,u,a),a};let o=class extends x{constructor(){super(...arguments),this.formControlController=new S(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new w(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:z}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("flp-blur")}handleFocus(){this.hasFocus=!0,this.emit("flp-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),n=t?g`a`:g`button`;return p`
      <${n}
        part="base"
        class=${D({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${b(t?void 0:this.disabled)}
        type=${b(t?void 0:this.type)}
        title=${this.title}
        name=${b(t?void 0:this.name)}
        value=${b(t?void 0:this.value)}
        href=${b(t?this.href:void 0)}
        target=${b(t?this.target:void 0)}
        download=${b(t?this.download:void 0)}
        rel=${b(t?this.rel:void 0)}
        role=${b(t?void 0:"button")}
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
        ${this.caret?p` <flp-icon part="caret" class="button__caret" library="system" name="caret"></flp-icon> `:""}
        ${this.loading?p`<flp-spinner part="spinner"></flp-spinner>`:""}
      </${n}>
    `}};o.styles=[P];r([$(".button")],o.prototype,"button",2);r([y()],o.prototype,"hasFocus",2);r([y()],o.prototype,"invalid",2);r([l()],o.prototype,"title",2);r([l({reflect:!0})],o.prototype,"variant",2);r([l({reflect:!0})],o.prototype,"size",2);r([l({type:Boolean,reflect:!0})],o.prototype,"caret",2);r([l({type:Boolean,reflect:!0})],o.prototype,"disabled",2);r([l({type:Boolean,reflect:!0})],o.prototype,"loading",2);r([l({type:Boolean,reflect:!0})],o.prototype,"outline",2);r([l({type:Boolean,reflect:!0})],o.prototype,"pill",2);r([l({type:Boolean,reflect:!0})],o.prototype,"circle",2);r([l()],o.prototype,"type",2);r([l()],o.prototype,"name",2);r([l()],o.prototype,"value",2);r([l()],o.prototype,"href",2);r([l()],o.prototype,"target",2);r([l()],o.prototype,"rel",2);r([l()],o.prototype,"download",2);r([l()],o.prototype,"form",2);r([l({attribute:"formaction"})],o.prototype,"formAction",2);r([l({attribute:"formenctype"})],o.prototype,"formEnctype",2);r([l({attribute:"formmethod"})],o.prototype,"formMethod",2);r([l({attribute:"formnovalidate",type:Boolean})],o.prototype,"formNoValidate",2);r([l({attribute:"formtarget"})],o.prototype,"formTarget",2);r([V("disabled",{waitUntilFirstUpdate:!0})],o.prototype,"handleDisabledChange",1);o=r([k("flp-button")],o);export{o as F};
//# sourceMappingURL=flp-button-REJRPIX-.js.map
