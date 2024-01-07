import{i as $,w as b,T as z,u as w,x as c}from"./lit-element-w72SgdYd.js";import{F as I,t as V}from"./custom-element-fmFNofkQ.js";import{c as A,r as P,n as l}from"./dark-AvrCScmp.js";import{b as B,i as E,t as u,e as S,a as g,o as s}from"./class-map-SwSVD6RK.js";import{F as D,H as F}from"./form-uNZv1GjO.js";import{w as v}from"./watch-jbmnu0Mo.js";import{f as O,m as U}from"./directive-helpers-Yey3jZal.js";const R=$`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--flp-input-label-color);
    margin-bottom: var(--flp-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--flp-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--flp-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--flp-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--flp-input-required-content);
    margin-inline-start: var(--flp-input-required-content-offset);
    color: var(--flp-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--flp-input-help-text-color);
    margin-top: var(--flp-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--flp-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--flp-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--flp-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--flp-spacing-2x-small);
  }
`,q=$`
  ${A}
  ${R}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--flp-input-font-family);
    font-weight: var(--flp-input-font-weight);
    letter-spacing: var(--flp-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--flp-transition-fast) color,
      var(--flp-transition-fast) border,
      var(--flp-transition-fast) box-shadow,
      var(--flp-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--flp-input-background-color);
    border: solid var(--flp-input-border-width) var(--flp-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--flp-input-background-color-hover);
    border-color: var(--flp-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--flp-input-background-color-focus);
    border-color: var(--flp-input-border-color-focus);
    box-shadow: 0 0 0 var(--flp-focus-ring-width) var(--flp-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--flp-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--flp-input-background-color-disabled);
    border-color: var(--flp-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--flp-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--flp-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--flp-input-filled-background-color);
    color: var(--flp-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--flp-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--flp-input-filled-background-color-focus);
    outline: var(--flp-focus-ring);
    outline-offset: var(--flp-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--flp-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--flp-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--flp-input-height-large) var(--flp-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--flp-color-primary-500);
    caret-color: var(--flp-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--flp-input-height-large) var(--flp-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--flp-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--flp-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--flp-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--flp-input-border-radius-small);
    font-size: var(--flp-input-font-size-small);
    height: var(--flp-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--flp-input-height-small) - var(--flp-input-border-width) * 2);
    padding: 0 var(--flp-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--flp-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--flp-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--flp-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--flp-input-border-radius-medium);
    font-size: var(--flp-input-font-size-medium);
    height: var(--flp-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--flp-input-height-medium) - var(--flp-input-border-width) * 2);
    padding: 0 var(--flp-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--flp-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--flp-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--flp-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--flp-input-border-radius-large);
    font-size: var(--flp-input-font-size-large);
    height: var(--flp-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--flp-input-height-large) - var(--flp-input-border-width) * 2);
    padding: 0 var(--flp-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--flp-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--flp-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--flp-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--flp-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--flp-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--flp-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--flp-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--flp-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--flp-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=B(class extends E{constructor(t){if(super(t),t.type!==u.PROPERTY&&t.type!==u.ATTRIBUTE&&t.type!==u.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!O(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[o]){if(o===b||o===z)return o;const n=t.element,r=t.name;if(t.type===u.PROPERTY){if(o===n[r])return b}else if(t.type===u.BOOLEAN_ATTRIBUTE){if(!!o===n.hasAttribute(r))return b}else if(t.type===u.ATTRIBUTE&&n.getAttribute(r)===o+"")return b;return U(t),o}}),H=(t="value")=>(o,n)=>{const r=o.constructor,a=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(p,d,_){const m=r.getPropertyOptions(t),T=typeof m.attribute=="string"?m.attribute:t;if(p===T){const h=m.converter||w,y=(typeof h=="function"?h:(h==null?void 0:h.fromAttribute)??w.fromAttribute)(_,m.type);this[t]!==y&&(this[n]=y)}a.call(this,p,d,_)}};var j=Object.defineProperty,K=Object.getOwnPropertyDescriptor,i=(t,o,n,r)=>{for(var a=r>1?void 0:r?K(o,n):o,p=t.length-1,d;p>=0;p--)(d=t[p])&&(a=(r?d(o,n,a):d(a))||a);return r&&a&&j(o,n,a),a};let e=class extends I{constructor(){super(...arguments),this.formControlController=new D(this,{assumeInteractionOn:["flp-blur","flp-input"]}),this.hasSlotController=new F(this,"help-text","label"),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("flp-blur")}handleChange(){this.value=this.input.value,this.emit("flp-change")}handleClearClick(t){this.value="",this.emit("flp-clear"),this.emit("flp-input"),this.emit("flp-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("flp-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("flp-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const o=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!o&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,o,n="none"){this.input.setSelectionRange(t,o,n)}setRangeText(t,o,n,r="preserve"){const a=o??this.input.selectionStart,p=n??this.input.selectionEnd;this.input.setRangeText(t,a,p,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),n=this.label?!0:!!t,r=this.helpText?!0:!!o,a=this.clearable&&!this.disabled&&!this.readonly,p=a&&(typeof this.value=="number"||this.value.length>0);return c`
      <div
        part="form-control"
        class=${g({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${g({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${s(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${s(this.placeholder)}
              minlength=${s(this.minlength)}
              maxlength=${s(this.maxlength)}
              min=${s(this.min)}
              max=${s(this.max)}
              step=${s(this.step)}
              .value=${N(this.value)}
              autocapitalize=${s(this.autocapitalize)}
              autocorrect=${s(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${s(this.pattern)}
              enterkeyhint=${s(this.enterkeyhint)}
              inputmode=${s(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${a?c`
                  <button
                    part="clear-button"
                    class=${g({input__clear:!0,"input__clear--visible":p})}
                    type="button"
                    aria-label="clearEntry"
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <flp-icon name="x-circle-fill" library="system"></flp-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?c`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.passwordVisible?"hidePassword":"showPassword"}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?c`
                          <slot name="show-password-icon">
                            <flp-icon name="eye-slash" library="system"></flp-icon>
                          </slot>
                        `:c`
                          <slot name="hide-password-icon">
                            <flp-icon name="eye" library="system"></flp-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};e.styles=[q];i([S(".input__control")],e.prototype,"input",2);i([P()],e.prototype,"hasFocus",2);i([l()],e.prototype,"title",2);i([l({reflect:!0})],e.prototype,"type",2);i([l()],e.prototype,"name",2);i([l()],e.prototype,"value",2);i([H()],e.prototype,"defaultValue",2);i([l({reflect:!0})],e.prototype,"size",2);i([l({type:Boolean,reflect:!0})],e.prototype,"filled",2);i([l({type:Boolean,reflect:!0})],e.prototype,"pill",2);i([l()],e.prototype,"label",2);i([l({attribute:"help-text"})],e.prototype,"helpText",2);i([l({type:Boolean})],e.prototype,"clearable",2);i([l({type:Boolean,reflect:!0})],e.prototype,"disabled",2);i([l()],e.prototype,"placeholder",2);i([l({type:Boolean,reflect:!0})],e.prototype,"readonly",2);i([l({attribute:"password-toggle",type:Boolean})],e.prototype,"passwordToggle",2);i([l({attribute:"password-visible",type:Boolean})],e.prototype,"passwordVisible",2);i([l({attribute:"no-spin-buttons",type:Boolean})],e.prototype,"noSpinButtons",2);i([l({reflect:!0})],e.prototype,"form",2);i([l({type:Boolean,reflect:!0})],e.prototype,"required",2);i([l()],e.prototype,"pattern",2);i([l({type:Number})],e.prototype,"minlength",2);i([l({type:Number})],e.prototype,"maxlength",2);i([l()],e.prototype,"min",2);i([l()],e.prototype,"max",2);i([l()],e.prototype,"step",2);i([l()],e.prototype,"autocapitalize",2);i([l()],e.prototype,"autocorrect",2);i([l()],e.prototype,"autocomplete",2);i([l({type:Boolean})],e.prototype,"autofocus",2);i([l()],e.prototype,"enterkeyhint",2);i([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],e.prototype,"spellcheck",2);i([l()],e.prototype,"inputmode",2);i([v("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1);i([v("step",{waitUntilFirstUpdate:!0})],e.prototype,"handleStepChange",1);i([v("value",{waitUntilFirstUpdate:!0})],e.prototype,"handleValueChange",1);e=i([V("flp-input")],e);const et={title:"components/Input",component:"flp-input"},L={},M=(t,{globals:{theme:o}})=>c`
  <div class="flp-theme-light">
    <flp-input label="What is your name?"></flp-input>
    <br/>
    <flp-input type="password" placeholder="Password Toggle" password-toggle></flp-input>
    <br/>
    <flp-input type="date" placeholder="Date"></flp-input>
  </div>
`,f=M.bind({});f.args=L;var x,k,C;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`(props: Input, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-input label="What is your name?"></flp-input>
    <br/>
    <flp-input type="password" placeholder="Password Toggle" password-toggle></flp-input>
    <br/>
    <flp-input type="date" placeholder="Date"></flp-input>
  </div>
\``,...(C=(k=f.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const it=["Default"];export{f as Default,it as __namedExportsOrder,et as default};
//# sourceMappingURL=flp-input.stories-dplvNOrQ.js.map
