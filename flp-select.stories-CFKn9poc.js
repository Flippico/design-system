import{i as $,D as y,R as z,k as h}from"./lit-element-CPYlYYac.js";import{c as D,F as T,t as L}from"./component.styles-CJs1ohMC.js";import{n}from"./property-CcHbFR6H.js";import{r as u}from"./state-Cw-lAQBx.js";import{e as f}from"./query-BApjzB0v.js";import{f as A}from"./form-control.styles-qMh6M_JA.js";import{H as E}from"./slot-BCTpRhJ5.js";import{F}from"./form-DpMOf5Do.js";import{d as V}from"./default-value-DEpNiEhc.js";import{i as P,t as B,e as M,R as g}from"./class-map-635SZfYW.js";import{w as m}from"./watch-CEsCE2EF.js";import{b as I,s as _,g as x,a as w,w as O}from"./event-DI7budSv.js";import{s as H}from"./scroll-Xz6hnXoZ.js";import"./flp-icon-__xIW49_.js";/* empty css             */import"./directive-helpers-CHX3h6dV.js";const j=$`
  ${D}
  ${A}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--flp-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--flp-input-font-family);
    font-weight: var(--flp-input-font-weight);
    letter-spacing: var(--flp-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--flp-transition-fast) color,
      var(--flp-transition-fast) border,
      var(--flp-transition-fast) box-shadow,
      var(--flp-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--flp-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--flp-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--flp-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--flp-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--flp-input-background-color);
    border: solid var(--flp-input-border-width) var(--flp-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--flp-input-background-color-disabled);
    border-color: var(--flp-input-border-color-disabled);
    color: var(--flp-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--flp-input-background-color-focus);
    border-color: var(--flp-input-border-color-focus);
    box-shadow: 0 0 0 var(--flp-focus-ring-width) var(--flp-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--flp-input-filled-background-color);
    color: var(--flp-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--flp-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--flp-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--flp-input-filled-background-color-focus);
    outline: var(--flp-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--flp-input-border-radius-small);
    font-size: var(--flp-input-font-size-small);
    min-height: var(--flp-input-height-small);
    padding-block: 0;
    padding-inline: var(--flp-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--flp-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--flp-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--flp-input-border-radius-medium);
    font-size: var(--flp-input-font-size-medium);
    min-height: var(--flp-input-height-medium);
    padding-block: 0;
    padding-inline: var(--flp-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--flp-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--flp-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--flp-input-border-radius-large);
    font-size: var(--flp-input-font-size-large);
    min-height: var(--flp-input-height-large);
    padding-block: 0;
    padding-inline: var(--flp-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--flp-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--flp-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--flp-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--flp-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--flp-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--flp-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
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

  .select__clear:hover {
    color: var(--flp-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--flp-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--flp-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--flp-font-light);
    font-size: var(--flp-font-size-medium);
    font-weight: var(--flp-font-weight-normal);
    box-shadow: var(--flp-shadow-large);
    background: var(--flp-panel-background-color);
    border: solid var(--flp-panel-border-width) var(--flp-panel-border-color);
    border-radius: var(--flp-border-radius-medium);
    padding-block: var(--flp-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--flp-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--flp-font-size-small);
    font-weight: var(--flp-font-weight-semibold);
    color: var(--flp-color-neutral-500);
    padding-block: var(--flp-spacing-x-small);
    padding-inline: var(--flp-spacing-x-large);
  }
  `;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class v extends P{constructor(t){if(super(t),this.it=y,t.type!==B.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===y||t==null)return this._t=void 0,this.it=t;if(t===z)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const l=[t];return l.raw=l,this._t={_$litType$:this.constructor.resultType,strings:l,values:[]}}}v.directiveName="unsafeHTML",v.resultType=1;const K=M(v);var R=Object.defineProperty,U=Object.getOwnPropertyDescriptor,o=(e,t,l,s)=>{for(var a=s>1?void 0:s?U(t,l):t,p=e.length-1,r;p>=0;p--)(r=e[p])&&(a=(s?r(t,l,a):r(a))||a);return s&&a&&R(t,l,a),a};let i=class extends T{constructor(){super(...arguments),this.formControlController=new F(this,{assumeInteractionOn:["flp-blur","flp-input"]}),this.hasSlotController=new E(this,"help-text","label"),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>h`
      <flp-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @flp-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </flp-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,l=t.closest(".select__clear")!==null,s=t.closest("flp-icon-button")!==null;if(!(l||s)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("flp-input"),this.emit("flp-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const a=this.getAllOptions(),p=a.indexOf(this.currentOption);let r=Math.max(0,p);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(r=p+1,r>a.length-1&&(r=0)):e.key==="ArrowUp"?(r=p-1,r<0&&(r=a.length-1)):e.key==="Home"?r=0:e.key==="End"&&(r=a.length-1),this.setCurrentOption(a[r])}if(e.key.length===1||e.key==="Backspace"){const a=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const p of a)if(p.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(p);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){const e=this.getRootNode();e.addEventListener("focusin",this.handleDocumentFocusIn),e.addEventListener("keydown",this.handleDocumentKeyDown),e.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){const e=this.getRootNode();e.removeEventListener("focusin",this.handleDocumentFocusIn),e.removeEventListener("keydown",this.handleDocumentKeyDown),e.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("flp-focus")}handleBlur(){this.hasFocus=!1,this.emit("flp-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const l=e.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="flp-icon-button");this.disabled||l||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("flp-clear"),this.emit("flp-input"),this.emit("flp-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const l=e.target.closest("flp-option"),s=this.value;l&&!l.disabled&&(this.multiple?this.toggleOptionSelection(l):this.setSelectedOptions(l),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("flp-input"),this.emit("flp-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],l=[];customElements.get("flp-option")?(e.forEach(s=>l.push(s.value)),this.setSelectedOptions(e.filter(s=>t.includes(s.value)))):customElements.whenDefined("flp-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("flp-input"),this.emit("flp-change")}))}getAllOptions(){return[...this.querySelectorAll("flp-option")]}getFirstOption(){return this.querySelector("flp-option")}setCurrentOption(e){this.getAllOptions().forEach(l=>{l.current=!1,l.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),l=Array.isArray(e)?e:[e];t.forEach(s=>s.selected=!1),l.length&&l.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t;this.selectedOptions=this.getAllOptions().filter(l=>l.selected),this.multiple?(this.value=this.selectedOptions.map(l=>l.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel="numOptionsSelected"):(this.value=((e=this.selectedOptions[0])==null?void 0:e.value)??"",this.displayLabel=((t=this.selectedOptions[0])==null?void 0:t.getTextLabel())??""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const l=this.getTag(e,t);return h`<div @flp-remove=${s=>this.handleTagRemove(s,e)}>
          ${typeof l=="string"?K(l):l}
        </div>`}else if(t===this.maxOptionsVisible)return h`<flp-tag>+${this.selectedOptions.length-t}</flp-tag>`;return h``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(l=>t.includes(l.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("flp-show"),this.addOpenListeners(),await _(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=x(this,"select.show",{dir:"ltr"});await w(this.popup.popup,e,t),this.currentOption&&H(this.currentOption,this.listbox,"vertical","auto"),this.emit("flp-after-show")}else{this.emit("flp-hide"),this.removeOpenListeners(),await _(this);const{keyframes:e,options:t}=x(this,"select.hide",{dir:"ltr"});await w(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("flp-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,O(this,"flp-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,O(this,"flp-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),l=this.label?!0:!!e,s=this.helpText?!0:!!t,a=this.clearable&&!this.disabled&&this.value.length>0,p=this.placeholder&&this.value.length===0;return h`
      <div
        part="form-control"
        class=${g({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":l,"form-control--has-help-text":s})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${l?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <flp-popup
            class=${g({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":p,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?h`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${a?h`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label="clearEntry"
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <flp-icon name="x-circle-fill" library="system"></flp-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <flp-icon library="system" name="chevron-down"></flp-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </flp-popup>
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
    `}};i.styles=[j];o([f(".select")],i.prototype,"popup",2);o([f(".select__combobox")],i.prototype,"combobox",2);o([f(".select__display-input")],i.prototype,"displayInput",2);o([f(".select__value-input")],i.prototype,"valueInput",2);o([f(".select__listbox")],i.prototype,"listbox",2);o([u()],i.prototype,"hasFocus",2);o([u()],i.prototype,"displayLabel",2);o([u()],i.prototype,"currentOption",2);o([u()],i.prototype,"selectedOptions",2);o([n()],i.prototype,"name",2);o([n({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],i.prototype,"value",2);o([V()],i.prototype,"defaultValue",2);o([n({reflect:!0})],i.prototype,"size",2);o([n()],i.prototype,"placeholder",2);o([n({type:Boolean,reflect:!0})],i.prototype,"multiple",2);o([n({attribute:"max-options-visible",type:Number})],i.prototype,"maxOptionsVisible",2);o([n({type:Boolean,reflect:!0})],i.prototype,"disabled",2);o([n({type:Boolean})],i.prototype,"clearable",2);o([n({type:Boolean,reflect:!0})],i.prototype,"open",2);o([n({type:Boolean})],i.prototype,"hoist",2);o([n({type:Boolean,reflect:!0})],i.prototype,"filled",2);o([n({type:Boolean,reflect:!0})],i.prototype,"pill",2);o([n()],i.prototype,"label",2);o([n({reflect:!0})],i.prototype,"placement",2);o([n({attribute:"help-text"})],i.prototype,"helpText",2);o([n({reflect:!0})],i.prototype,"form",2);o([n({type:Boolean,reflect:!0})],i.prototype,"required",2);o([n()],i.prototype,"getTag",2);o([m("disabled",{waitUntilFirstUpdate:!0})],i.prototype,"handleDisabledChange",1);o([m("value",{waitUntilFirstUpdate:!0})],i.prototype,"handleValueChange",1);o([m("open",{waitUntilFirstUpdate:!0})],i.prototype,"handleOpenChange",1);i=o([L("flp-select")],i);I("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});I("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});const q=$`
${D}

:host {
  display: block;
  user-select: none;
  -webkit-user-select: none;
}

:host(:focus) {
  outline: none;
}

.option {
  position: relative;
  display: flex;
  align-items: center;
  font-family: var(--flp-font-light);
  font-size: var(--flp-font-size-medium);
  font-weight: var(--flp-font-weight-normal);
  line-height: var(--flp-line-height-normal);
  letter-spacing: var(--flp-letter-spacing-normal);
  color: var(--flp-color-neutral-700);
  padding: var(--flp-spacing-x-small) var(--flp-spacing-medium) var(--flp-spacing-x-small) var(--flp-spacing-x-small);
  transition: var(--flp-transition-fast) fill;
  cursor: pointer;
}

.option--hover:not(.option--current):not(.option--disabled) {
  background-color: var(--flp-color-neutral-100);
  color: var(--flp-color-neutral-1000);
}

.option--current,
.option--current.option--disabled {
  background-color: var(--flp-color-primary-600);
  color: var(--flp-color-neutral-0);
  opacity: 1;
}

.option--disabled {
  outline: none;
  opacity: 0.5;
  cursor: not-allowed;
}

.option__label {
  flex: 1 1 auto;
  display: inline-block;
  line-height: var(--flp-line-height-dense);
}

.option .option__check {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  padding-inline-end: var(--flp-spacing-2x-small);
}

.option--selected .option__check {
  visibility: visible;
}

.option__prefix,
.option__suffix {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.option__prefix::slotted(*) {
  margin-inline-end: var(--flp-spacing-x-small);
}

.option__suffix::slotted(*) {
  margin-inline-start: var(--flp-spacing-x-small);
}

@media (forced-colors: active) {
  :host(:hover:not([aria-disabled='true'])) .option {
    outline: dashed 1px SelectedItem;
    outline-offset: -1px;
  }
}
`;var N=Object.defineProperty,W=Object.getOwnPropertyDescriptor,d=(e,t,l,s)=>{for(var a=s>1?void 0:s?W(t,l):t,p=e.length-1,r;p>=0;p--)(r=e[p])&&(a=(s?r(t,l,a):r(a))||a);return s&&a&&N(t,l,a),a};let c=class extends T{constructor(){super(...arguments),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){return(this.textContent??"").trim()}render(){return h`
      <div
        part="base"
        class=${g({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <flp-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></flp-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};c.styles=[q];d([f(".option__label")],c.prototype,"defaultSlot",2);d([u()],c.prototype,"current",2);d([u()],c.prototype,"selected",2);d([u()],c.prototype,"hasHover",2);d([n({reflect:!0})],c.prototype,"value",2);d([n({type:Boolean,reflect:!0})],c.prototype,"disabled",2);d([m("disabled")],c.prototype,"handleDisabledChange",1);d([m("selected")],c.prototype,"handleSelectedChange",1);d([m("value")],c.prototype,"handleValueChange",1);c=d([L("flp-option")],c);const he={title:"components/Select",component:"flp-select"},G={},J=(e,{globals:{theme:t}})=>h`
  <div class="flp-theme-light">
    <flp-select>
      <flp-option value="option-1">Option 1</flp-option>
      <flp-option value="option-2">Option 2</flp-option>
      <flp-option value="option-3">Option 3</flp-option>
      <flp-option value="option-4">Option 4</flp-option>
      <flp-option value="option-5">Option 5</flp-option>
      <flp-option value="option-6">Option 6</flp-option>
    </flp-select>
  </div>
`,b=J.bind({});b.args=G;var C,k,S;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`(props: Select, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-select>
      <flp-option value="option-1">Option 1</flp-option>
      <flp-option value="option-2">Option 2</flp-option>
      <flp-option value="option-3">Option 3</flp-option>
      <flp-option value="option-4">Option 4</flp-option>
      <flp-option value="option-5">Option 5</flp-option>
      <flp-option value="option-6">Option 6</flp-option>
    </flp-select>
  </div>
\``,...(S=(k=b.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const ue=["Default"];export{b as Default,ue as __namedExportsOrder,he as default};
//# sourceMappingURL=flp-select.stories-CFKn9poc.js.map
