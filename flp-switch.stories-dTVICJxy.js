import{i as w,x as f}from"./lit-element-BOnOm6HC.js";import{F as v,t as b}from"./custom-element-G_of5crQ.js";import{n as r}from"./property-DtfuD-FT.js";import{r as g}from"./state-BzG7ktrc.js";import{e as _}from"./query-BApjzB0v.js";import{c as k}from"./component.styles-BRPzpB69.js";import{F as y}from"./form-JvG0YwJe.js";import{d as C}from"./default-value-Deq5j5nO.js";import{a as z}from"./class-map-CkhaUZsQ.js";import{o as F}from"./if-defined-4aLJvHj9.js";import{l as $}from"./live-Btws1DVc.js";import{w as m}from"./watch-CEsCE2EF.js";/* empty css             */import"./directive-helpers-Ew8efCbj.js";const x=w`
${k}

:host {
  display: inline-block;
}

:host([size='small']) {
  --height: var(--flp-toggle-size-small);
  --thumb-size: calc(var(--flp-toggle-size-small) + 4px);
  --width: calc(var(--height) * 2);

  font-size: var(--flp-input-font-size-small);
}

:host([size='medium']) {
  --height: var(--flp-toggle-size-medium);
  --thumb-size: calc(var(--flp-toggle-size-medium) + 4px);
  --width: calc(var(--height) * 2);

  font-size: var(--flp-input-font-size-medium);
}

:host([size='large']) {
  --height: var(--flp-toggle-size-large);
  --thumb-size: calc(var(--flp-toggle-size-large) + 4px);
  --width: calc(var(--height) * 2);

  font-size: var(--flp-input-font-size-large);
}

.switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  font-family: var(--flp-input-font-family);
  font-size: inherit;
  font-weight: var(--flp-input-font-weight);
  color: var(--flp-input-label-color);
  vertical-align: middle;
  cursor: pointer;
}

.switch__control {
  flex: 0 0 auto;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--width);
  height: var(--height);
  background-color: var(--flp-color-neutral-400);
  border: solid var(--flp-input-border-width) var(--flp-color-neutral-400);
  border-radius: var(--height);
  transition:
    var(--flp-transition-fast) border-color,
    var(--flp-transition-fast) background-color;
}

.switch__control .switch__thumb {
  width: var(--thumb-size);
  height: var(--thumb-size);
  background-color: var(--flp-color-neutral-0);
  border-radius: 50%;
  border: solid var(--flp-input-border-width) var(--flp-color-neutral-400);
  translate: calc((var(--width) - var(--height)) / -2);
  transition:
    var(--flp-transition-fast) translate ease,
    var(--flp-transition-fast) background-color,
    var(--flp-transition-fast) border-color,
    var(--flp-transition-fast) box-shadow;
}

.switch__input {
  position: absolute;
  opacity: 0;
  padding: 0;
  margin: 0;
  pointer-events: none;
}

/* Hover */
.switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
  background-color: var(--flp-color-neutral-400);
  border-color: var(--flp-color-neutral-400);
}

.switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
  background-color: var(--flp-color-neutral-0);
  border-color: var(--flp-color-neutral-400);
}

/* Focus */
.switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
  background-color: var(--flp-color-neutral-400);
  border-color: var(--flp-color-neutral-400);
}

.switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
  background-color: var(--flp-color-neutral-0);
  border-color: var(--flp-color-primary-600);
  outline: var(--flp-focus-ring);
  outline-offset: var(--flp-focus-ring-offset);
}

/* Checked */
.switch--checked .switch__control {
  background-color: var(--flp-color-primary-600);
  border-color: var(--flp-color-primary-600);
}

.switch--checked .switch__control .switch__thumb {
  background-color: var(--flp-color-neutral-0);
  border-color: var(--flp-color-primary-600);
  translate: calc((var(--width) - var(--height)) / 2);
}

/* Checked + hover */
.switch.switch--checked:not(.switch--disabled) .switch__control:hover {
  background-color: var(--flp-color-primary-600);
  border-color: var(--flp-color-primary-600);
}

.switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
  background-color: var(--flp-color-neutral-0);
  border-color: var(--flp-color-primary-600);
}

/* Checked + focus */
.switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
  background-color: var(--flp-color-primary-600);
  border-color: var(--flp-color-primary-600);
}

.switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
  background-color: var(--flp-color-neutral-0);
  border-color: var(--flp-color-primary-600);
  outline: var(--flp-focus-ring);
  outline-offset: var(--flp-focus-ring-offset);
}

/* Disabled */
.switch--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.switch__label {
  display: inline-block;
  line-height: var(--height);
  margin-inline-start: 0.5em;
  user-select: none;
  -webkit-user-select: none;
}

:host([required]) .switch__label::after {
  content: var(--flp-input-required-content);
  margin-inline-start: var(--flp-input-required-content-offset);
}

@media (forced-colors: active) {
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
  .switch--checked .switch__control .switch__thumb {
    background-color: ButtonText;
  }
}
`;var V=Object.defineProperty,D=Object.getOwnPropertyDescriptor,i=(t,o,a,c)=>{for(var l=c>1?void 0:c?D(o,a):o,h=t.length-1,n;h>=0;h--)(n=t[h])&&(l=(c?n(o,a,l):n(l))||l);return c&&l&&V(o,a,l),l};let e=class extends v{constructor(){super(...arguments),this.formControlController=new y(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,o)=>t.checked=o}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("flp-blur")}handleInput(){this.emit("flp-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("flp-change")}handleFocus(){this.hasFocus=!0,this.emit("flp-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("flp-change"),this.emit("flp-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("flp-change"),this.emit("flp-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return f`
      <label
        part="base"
        class=${z({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${F(this.value)}
          .checked=${$(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <div part="label" class="switch__label">
          <slot></slot>
        </div>
      </label>
    `}};e.styles=[x];i([_('input[type="checkbox"]')],e.prototype,"input",2);i([g()],e.prototype,"hasFocus",2);i([r()],e.prototype,"title",2);i([r()],e.prototype,"name",2);i([r()],e.prototype,"value",2);i([r({reflect:!0})],e.prototype,"size",2);i([r({type:Boolean,reflect:!0})],e.prototype,"disabled",2);i([r({type:Boolean,reflect:!0})],e.prototype,"checked",2);i([C("checked")],e.prototype,"defaultChecked",2);i([r({reflect:!0})],e.prototype,"form",2);i([r({type:Boolean,reflect:!0})],e.prototype,"required",2);i([m("checked",{waitUntilFirstUpdate:!0})],e.prototype,"handleCheckedChange",1);i([m("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1);e=i([b("flp-switch")],e);const G={title:"components/Switch",component:"flp-switch"},S={},q=(t,{globals:{theme:o}})=>f`
  <div class="flp-theme-light">
    <flp-switch>
      Switch
    </flp-switch>
  </div>
`,s=q.bind({});s.args=S;var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`(props: Switch, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-switch>
      Switch
    </flp-switch>
  </div>
\``,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const J=["Default"];export{s as Default,J as __namedExportsOrder,G as default};
//# sourceMappingURL=flp-switch.stories-dTVICJxy.js.map
