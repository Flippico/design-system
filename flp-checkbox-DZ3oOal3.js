import{i as u,k as h}from"./lit-element-CPYlYYac.js";import{c as f,F as b,t as k}from"./component.styles-CJs1ohMC.js";import{n as i}from"./property-CcHbFR6H.js";import{r as m}from"./state-Cw-lAQBx.js";import{e as v}from"./query-BApjzB0v.js";import{F as x}from"./form-DpMOf5Do.js";import{d as g}from"./default-value-DEpNiEhc.js";import{w as p}from"./watch-CEsCE2EF.js";import{t as y}from"./if-defined-4GS2c12S.js";import{F as d}from"./live-DyBFC1nW.js";import{R as _}from"./class-map-635SZfYW.js";const C=u`
${f}

:host {
  display: inline-block;
}

.checkbox {
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  font-family: var(--flp-input-font-family);
  font-weight: var(--flp-input-font-weight);
  color: var(--flp-input-label-color);
  vertical-align: middle;
  cursor: pointer;
}

.checkbox--small {
  --toggle-size: var(--flp-toggle-size-small);
  font-size: var(--flp-input-font-size-small);
}

.checkbox--medium {
  --toggle-size: var(--flp-toggle-size-medium);
  font-size: var(--flp-input-font-size-medium);
}

.checkbox--large {
  --toggle-size: var(--flp-toggle-size-large);
  font-size: var(--flp-input-font-size-large);
}

.checkbox__control {
  flex: 0 0 auto;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--toggle-size);
  height: var(--toggle-size);
  border: solid var(--flp-input-border-width) var(--flp-input-border-color);
  border-radius: 2px;
  background-color: var(--flp-input-background-color);
  color: var(--flp-color-neutral-0);
  transition:
    var(--flp-transition-fast) border-color,
    var(--flp-transition-fast) background-color,
    var(--flp-transition-fast) color,
    var(--flp-transition-fast) box-shadow;
}

.checkbox__input {
  position: absolute;
  opacity: 0;
  padding: 0;
  margin: 0;
  pointer-events: none;
}

.checkbox__checked-icon,
.checkbox__indeterminate-icon {
  display: inline-flex;
  width: var(--toggle-size);
  height: var(--toggle-size);
}

/* Hover */
.checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
  border-color: var(--flp-input-border-color-hover);
  background-color: var(--flp-input-background-color-hover);
}

/* Focus */
.checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
  outline: var(--flp-focus-ring);
  outline-offset: var(--flp-focus-ring-offset);
}

/* Checked/indeterminate */
.checkbox--checked .checkbox__control,
.checkbox--indeterminate .checkbox__control {
  border-color: var(--flp-color-primary-600);
  background-color: var(--flp-color-primary-600);
}

/* Checked/indeterminate + hover */
.checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
.checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
  border-color: var(--flp-color-primary-500);
  background-color: var(--flp-color-primary-500);
}

/* Checked/indeterminate + focus */
.checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
.checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
  outline: var(--flp-focus-ring);
  outline-offset: var(--flp-focus-ring-offset);
}

/* Disabled */
.checkbox--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.checkbox__label {
  display: inline-block;
  color: var(--flp-input-label-color);
  line-height: var(--toggle-size);
  margin-inline-start: 0.5em;
  user-select: none;
  -webkit-user-select: none;
}

:host([required]) .checkbox__label::after {
  content: var(--flp-input-required-content);
  margin-inline-start: var(--flp-input-required-content-offset);
}
`;var z=Object.defineProperty,F=Object.getOwnPropertyDescriptor,o=(t,l,n,c)=>{for(var r=c>1?void 0:c?F(l,n):l,a=t.length-1,s;a>=0;a--)(s=t[a])&&(r=(c?s(l,n,r):s(r))||r);return c&&r&&z(l,n,r),r};let e=class extends b{constructor(){super(...arguments),this.formControlController=new x(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,l)=>t.checked=l}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("flp-change")}handleBlur(){this.hasFocus=!1,this.emit("flp-blur")}handleInput(){this.emit("flp-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("flp-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return h`
      <label
        part="base"
        class=${_({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${y(this.value)}
          .indeterminate=${d(this.indeterminate)}
          .checked=${d(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?h`
                <flp-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></flp-icon>
              `:""}
          ${!this.checked&&this.indeterminate?h`
                <flp-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></flp-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};e.styles=[C];o([v('input[type="checkbox"]')],e.prototype,"input",2);o([m()],e.prototype,"hasFocus",2);o([i()],e.prototype,"title",2);o([i()],e.prototype,"name",2);o([i()],e.prototype,"value",2);o([i({reflect:!0})],e.prototype,"size",2);o([i({type:Boolean,reflect:!0})],e.prototype,"disabled",2);o([i({type:Boolean,reflect:!0})],e.prototype,"checked",2);o([i({type:Boolean,reflect:!0})],e.prototype,"indeterminate",2);o([g("checked")],e.prototype,"defaultChecked",2);o([i({reflect:!0})],e.prototype,"form",2);o([i({type:Boolean,reflect:!0})],e.prototype,"required",2);o([p("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1);o([p(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],e.prototype,"handleStateChange",1);e=o([k("flp-checkbox")],e);export{e as F};
//# sourceMappingURL=flp-checkbox-DZ3oOal3.js.map
