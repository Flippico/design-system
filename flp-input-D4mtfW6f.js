import{i as f,x as u}from"./lit-element-UdLzEcH-.js";import{F as m,t as b}from"./custom-element-_dbbq29R.js";import{n as l}from"./property-Cw6hBOl6.js";import{r as g}from"./state-DfeXbQig.js";import{e as v}from"./query-BApjzB0v.js";import{c as _}from"./component.styles-BhDG6Xff.js";import{f as y}from"./form-control.styles-BpfJCVAq.js";import{F as w}from"./form-DpMOf5Do.js";import{H as x}from"./slot-BCTpRhJ5.js";import{w as c}from"./watch-CEsCE2EF.js";import{a as h}from"./class-map-B1m419Bd.js";import{o as n}from"./if-defined-CeGyAtVP.js";import{l as k}from"./live-PHw1x3wN.js";import{d as C}from"./default-value-B18UwA06.js";const $=f`
  ${_}
  ${y}

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
`;var V=Object.defineProperty,I=Object.getOwnPropertyDescriptor,i=(e,o,a,s)=>{for(var r=s>1?void 0:s?I(o,a):o,p=e.length-1,d;p>=0;p--)(d=e[p])&&(r=(s?d(o,a,r):d(r))||r);return s&&r&&V(o,a,r),r};let t=class extends m{constructor(){super(...arguments),this.formControlController=new w(this,{assumeInteractionOn:["flp-blur","flp-input"]}),this.hasSlotController=new x(this,"help-text","label"),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("flp-blur")}handleChange(){this.value=this.input.value,this.emit("flp-change")}handleClearClick(e){this.value="",this.emit("flp-clear"),this.emit("flp-input"),this.emit("flp-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("flp-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("flp-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const o=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!o&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,o,a="none"){this.input.setSelectionRange(e,o,a)}setRangeText(e,o,a,s="preserve"){const r=o??this.input.selectionStart,p=a??this.input.selectionEnd;this.input.setRangeText(e,r,p,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),a=this.label?!0:!!e,s=this.helpText?!0:!!o,r=this.clearable&&!this.disabled&&!this.readonly,p=r&&(typeof this.value=="number"||this.value.length>0);return u`
      <div
        part="form-control"
        class=${h({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":a,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${h({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${n(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${n(this.placeholder)}
              minlength=${n(this.minlength)}
              maxlength=${n(this.maxlength)}
              min=${n(this.min)}
              max=${n(this.max)}
              step=${n(this.step)}
              .value=${k(this.value)}
              autocapitalize=${n(this.autocapitalize)}
              autocorrect=${n(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${n(this.pattern)}
              enterkeyhint=${n(this.enterkeyhint)}
              inputmode=${n(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?u`
                  <button
                    part="clear-button"
                    class=${h({input__clear:!0,"input__clear--visible":p})}
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
            ${this.passwordToggle&&!this.disabled?u`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.passwordVisible?"hidePassword":"showPassword"}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?u`
                          <slot name="show-password-icon">
                            <flp-icon name="eye-slash" library="system"></flp-icon>
                          </slot>
                        `:u`
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};t.styles=[$];i([v(".input__control")],t.prototype,"input",2);i([g()],t.prototype,"hasFocus",2);i([l()],t.prototype,"title",2);i([l({reflect:!0})],t.prototype,"type",2);i([l()],t.prototype,"name",2);i([l()],t.prototype,"value",2);i([C()],t.prototype,"defaultValue",2);i([l({reflect:!0})],t.prototype,"size",2);i([l({type:Boolean,reflect:!0})],t.prototype,"filled",2);i([l({type:Boolean,reflect:!0})],t.prototype,"pill",2);i([l()],t.prototype,"label",2);i([l({attribute:"help-text"})],t.prototype,"helpText",2);i([l({type:Boolean})],t.prototype,"clearable",2);i([l({type:Boolean,reflect:!0})],t.prototype,"disabled",2);i([l()],t.prototype,"placeholder",2);i([l({type:Boolean,reflect:!0})],t.prototype,"readonly",2);i([l({attribute:"password-toggle",type:Boolean})],t.prototype,"passwordToggle",2);i([l({attribute:"password-visible",type:Boolean})],t.prototype,"passwordVisible",2);i([l({attribute:"no-spin-buttons",type:Boolean})],t.prototype,"noSpinButtons",2);i([l({reflect:!0})],t.prototype,"form",2);i([l({type:Boolean,reflect:!0})],t.prototype,"required",2);i([l()],t.prototype,"pattern",2);i([l({type:Number})],t.prototype,"minlength",2);i([l({type:Number})],t.prototype,"maxlength",2);i([l()],t.prototype,"min",2);i([l()],t.prototype,"max",2);i([l()],t.prototype,"step",2);i([l()],t.prototype,"autocapitalize",2);i([l()],t.prototype,"autocorrect",2);i([l()],t.prototype,"autocomplete",2);i([l({type:Boolean})],t.prototype,"autofocus",2);i([l()],t.prototype,"enterkeyhint",2);i([l({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],t.prototype,"spellcheck",2);i([l()],t.prototype,"inputmode",2);i([c("disabled",{waitUntilFirstUpdate:!0})],t.prototype,"handleDisabledChange",1);i([c("step",{waitUntilFirstUpdate:!0})],t.prototype,"handleStepChange",1);i([c("value",{waitUntilFirstUpdate:!0})],t.prototype,"handleValueChange",1);t=i([b("flp-input")],t);export{t as F};
//# sourceMappingURL=flp-input-D4mtfW6f.js.map
