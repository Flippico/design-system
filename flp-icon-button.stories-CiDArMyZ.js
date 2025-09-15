import{i as h,x as m}from"./lit-element-BQC2Loq1.js";import{F as v,t as y}from"./custom-element-NRwDiNuy.js";import{n as i}from"./property-_HeZ1DXc.js";import{r as g}from"./state-BxOqSyyB.js";import{e as $}from"./query-BApjzB0v.js";import{c as _}from"./component.styles-DEWewzc5.js";import{o as e}from"./if-defined-d81IzTIz.js";import{a as F}from"./class-map-sNB-Nzgq.js";/* empty css             */const x=h`
${_}

:host {
  display: inline-block;
  color: var(--flp-color-neutral-600);
}

.icon-button {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  border-radius: var(--flp-border-radius-medium);
  font-size: inherit;
  color: inherit;
  padding: var(--flp-spacing-x-small);
  cursor: pointer;
  transition: var(--flp-transition-x-fast) color;
  -webkit-appearance: none;
}

.icon-button:hover:not(.icon-button--disabled),
.icon-button:focus-visible:not(.icon-button--disabled) {
  color: var(--flp-color-primary-600);
}

.icon-button:active:not(.icon-button--disabled) {
  color: var(--flp-color-primary-700);
}

.icon-button:focus {
  outline: none;
}

.icon-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.icon-button:focus-visible {
  outline: var(--flp-focus-ring);
  outline-offset: var(--flp-focus-ring-offset);
}

.icon-button__icon {
  pointer-events: none;
}
`;var E=Object.defineProperty,w=Object.getOwnPropertyDescriptor,n=(t,r,c,a)=>{for(var l=a>1?void 0:a?w(r,c):r,p=t.length-1,u;p>=0;p--)(u=t[p])&&(l=(a?u(r,c,l):u(l))||l);return a&&l&&E(r,c,l),l};let o=class extends v{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("flp-blur")}handleFocus(){this.hasFocus=!0,this.emit("flp-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href;return m`
      <button
        part="base"
        class=${F({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${e(t?void 0:this.disabled)}
        type=${e(t?void 0:"button")}
        href=${e(t?this.href:void 0)}
        target=${e(t?this.target:void 0)}
        download=${e(t?this.download:void 0)}
        rel=${e(t&&this.target?"noreferrer noopener":void 0)}
        role=${e(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <flp-icon
          class="icon-button__icon"
          name=${e(this.name)}
          library=${e(this.library)}
          src=${e(this.src)}
          aria-hidden="true"
        ></flp-icon>
      </button>
    `}};o.styles=[x];n([$(".icon-button")],o.prototype,"button",2);n([g()],o.prototype,"hasFocus",2);n([i()],o.prototype,"name",2);n([i()],o.prototype,"library",2);n([i()],o.prototype,"src",2);n([i()],o.prototype,"href",2);n([i()],o.prototype,"target",2);n([i()],o.prototype,"download",2);n([i()],o.prototype,"label",2);n([i({type:Boolean,reflect:!0})],o.prototype,"disabled",2);o=n([y("flp-icon-button")],o);const T={title:"components/Icon-button",component:"flp-icon-button"},z={},B=(t,{globals:{theme:r}})=>m`
  <div class="flp-theme-light">
    <flp-icon-button name="gear" label="Settings">
      Icon-button
    </flp-icon-button>
    <flp-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></flp-icon-button>
    <flp-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></flp-icon-button>
    <flp-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></flp-icon-button>
  </div>
`,s=B.bind({});s.args=z;var b,f,d;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`(props: IconButton, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-icon-button name="gear" label="Settings">
      Icon-button
    </flp-icon-button>
    <flp-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></flp-icon-button>
    <flp-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></flp-icon-button>
    <flp-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></flp-icon-button>
  </div>
\``,...(d=(f=s.parameters)==null?void 0:f.docs)==null?void 0:d.source}}};const q=["Default"];export{s as Default,q as __namedExportsOrder,T as default};
//# sourceMappingURL=flp-icon-button.stories-CiDArMyZ.js.map
