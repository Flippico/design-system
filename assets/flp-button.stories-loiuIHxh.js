import{i as m,x as c}from"./lit-element-w72SgdYd.js";import{e as y,F as _,H as x,v as w,a as k,o as a}from"./if-defined-y2hKh_N8.js";import{F as C,t as $}from"./custom-element-fmFNofkQ.js";import{c as B,r as g,n,w as S}from"./dark-eo65Sget.js";const D=m`
  ${B}

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
 */const z=Symbol.for(""),p=(r,...e)=>({_$litStatic$:e.reduce((s,u,l)=>s+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(u)+r[l+1],r[0]),r:z});var F=Object.defineProperty,V=Object.getOwnPropertyDescriptor,o=(r,e,s,u)=>{for(var l=u>1?void 0:u?V(e,s):e,i=r.length-1,d;i>=0;i--)(d=r[i])&&(l=(u?d(e,s,l):d(l))||l);return u&&l&&F(e,s,l),l};let t=class extends C{constructor(){super(...arguments),this.formControlController=new _(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new x(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:w}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("flp-blur")}handleFocus(){this.hasFocus=!0,this.emit("flp-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(r){this.button.focus(r)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(r){this.isButton()&&(this.button.setCustomValidity(r),this.formControlController.updateValidity())}render(){const r=this.isLink();return r?p`a`:p`button`,c`
      <button
        part="base"
        class=${k({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${a(r?void 0:this.disabled)}
        type=${a(r?void 0:this.type)}
        title=${this.title}
        name=${a(r?void 0:this.name)}
        value=${a(r?void 0:this.value)}
        href=${a(r?this.href:void 0)}
        target=${a(r?this.target:void 0)}
        download=${a(r?this.download:void 0)}
        rel=${a(r?this.rel:void 0)}
        role=${a(r?void 0:"button")}
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
        ${this.caret?c` <flp-icon part="caret" class="button__caret" library="system" name="caret"></flp-icon> `:""}
        ${this.loading?c`<flp-spinner part="spinner"></flp-spinner>`:""}
      </button>
    `}};t.styles=[D];o([y(".button")],t.prototype,"button",2);o([g()],t.prototype,"hasFocus",2);o([g()],t.prototype,"invalid",2);o([n()],t.prototype,"title",2);o([n({reflect:!0})],t.prototype,"variant",2);o([n({reflect:!0})],t.prototype,"size",2);o([n({type:Boolean,reflect:!0})],t.prototype,"caret",2);o([n({type:Boolean,reflect:!0})],t.prototype,"disabled",2);o([n({type:Boolean,reflect:!0})],t.prototype,"loading",2);o([n({type:Boolean,reflect:!0})],t.prototype,"outline",2);o([n({type:Boolean,reflect:!0})],t.prototype,"pill",2);o([n({type:Boolean,reflect:!0})],t.prototype,"circle",2);o([n()],t.prototype,"type",2);o([n()],t.prototype,"name",2);o([n()],t.prototype,"value",2);o([n()],t.prototype,"href",2);o([n()],t.prototype,"target",2);o([n()],t.prototype,"rel",2);o([n()],t.prototype,"download",2);o([n()],t.prototype,"form",2);o([n({attribute:"formaction"})],t.prototype,"formAction",2);o([n({attribute:"formenctype"})],t.prototype,"formEnctype",2);o([n({attribute:"formmethod"})],t.prototype,"formMethod",2);o([n({attribute:"formnovalidate",type:Boolean})],t.prototype,"formNoValidate",2);o([n({attribute:"formtarget"})],t.prototype,"formTarget",2);o([S("disabled",{waitUntilFirstUpdate:!0})],t.prototype,"handleDisabledChange",1);t=o([$("flp-button")],t);const E={title:"components/Button",component:"flp-button"},P={},T=(r,{globals:{theme:e}})=>c`
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
`,b=T.bind({});b.args=P;var f,h,v;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`(props: Button, {
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
\``,...(v=(h=b.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const I=["Default"];export{b as Default,I as __namedExportsOrder,E as default};
//# sourceMappingURL=flp-button.stories-loiuIHxh.js.map
