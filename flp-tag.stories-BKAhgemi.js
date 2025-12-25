import{i as v,b as g}from"./lit-element-9a6qN07w.js";import{F as d,t as h}from"./custom-element-ChNscFG9.js";import{n as i}from"./property-ce-uMPVx.js";import{c as b}from"./component.styles-G8qf-zGh.js";import{a as y}from"./class-map-CUwhKOqL.js";/* empty css             */const _=v`
${b}

:host {
  display: inline-block;
}

.tag {
  display: flex;
  align-items: center;
  border: solid 1px;
  line-height: 1;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
}

.tag__remove::part(base) {
  color: inherit;
  padding: 0;
}

/*
 * Variant modifiers
 */

.tag--primary {
  background-color: var(--flp-color-primary-50);
  border-color: var(--flp-color-primary-200);
  color: var(--flp-color-primary-800);
}

.tag--primary:active > sl-icon-button {
  color: var(--flp-color-primary-600);
}

.tag--success {
  background-color: var(--flp-color-success-50);
  border-color: var(--flp-color-success-200);
  color: var(--flp-color-success-800);
}

.tag--success:active > sl-icon-button {
  color: var(--flp-color-success-600);
}

.tag--neutral {
  background-color: var(--flp-color-neutral-50);
  border-color: var(--flp-color-neutral-200);
  color: var(--flp-color-neutral-800);
}

.tag--neutral:active > sl-icon-button {
  color: var(--flp-color-neutral-600);
}

.tag--warning {
  background-color: var(--flp-color-warning-50);
  border-color: var(--flp-color-warning-200);
  color: var(--flp-color-warning-800);
}

.tag--warning:active > sl-icon-button {
  color: var(--flp-color-warning-600);
}

.tag--danger {
  background-color: var(--flp-color-danger-50);
  border-color: var(--flp-color-danger-200);
  color: var(--flp-color-danger-800);
}

.tag--danger:active > sl-icon-button {
  color: var(--flp-color-danger-600);
}

/*
 * Size modifiers
 */

.tag--small {
  font-size: var(--flp-button-font-size-small);
  height: calc(var(--flp-input-height-small) * 0.8);
  line-height: calc(var(--flp-input-height-small) - var(--flp-input-border-width) * 2);
  border-radius: var(--flp-input-border-radius-small);
  padding: 0 var(--flp-spacing-x-small);
}

.tag--medium {
  font-size: var(--flp-button-font-size-medium);
  height: calc(var(--flp-input-height-medium) * 0.8);
  line-height: calc(var(--flp-input-height-medium) - var(--flp-input-border-width) * 2);
  border-radius: var(--flp-input-border-radius-medium);
  padding: 0 var(--flp-spacing-small);
}

.tag--large {
  font-size: var(--flp-button-font-size-large);
  height: calc(var(--flp-input-height-large) * 0.8);
  line-height: calc(var(--flp-input-height-large) - var(--flp-input-border-width) * 2);
  border-radius: var(--flp-input-border-radius-large);
  padding: 0 var(--flp-spacing-medium);
}

.tag__remove {
  margin-inline-start: var(--flp-spacing-x-small);
}

/*
 * Pill modifier
 */

.tag--pill {
  border-radius: var(--flp-border-radius-pill);
}
`;var w=Object.defineProperty,x=Object.getOwnPropertyDescriptor,l=(n,t,s,o)=>{for(var r=o>1?void 0:o?x(t,s):t,p=n.length-1,c;p>=0;p--)(c=n[p])&&(r=(o?c(t,s,r):c(r))||r);return o&&r&&w(t,s,r),r};let a=class extends d{constructor(){super(...arguments),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("flp-remove")}render(){return g`
      <span
        part="base"
        class=${y({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?g`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label="remove"
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};a.styles=[_];l([i({reflect:!0})],a.prototype,"variant",2);l([i({reflect:!0})],a.prototype,"size",2);l([i({type:Boolean,reflect:!0})],a.prototype,"pill",2);l([i({type:Boolean})],a.prototype,"removable",2);a=l([h("flp-tag")],a);const C={title:"components/Tag",component:"flp-tag"},z={},P=(n,{globals:{theme:t}})=>g`
  <div class="flp-theme-light">
  <flp-tag variant="primary">Primary</flp-tag>
  <flp-tag variant="success">Success</flp-tag>
  <flp-tag variant="neutral">Neutral</flp-tag>
  <flp-tag variant="warning">Warning</flp-tag>
  <flp-tag variant="danger">Danger</flp-tag>
  </div>
`,e=P.bind({});e.args=z;var f,m,u;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`(props: Tag, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
  <flp-tag variant="primary">Primary</flp-tag>
  <flp-tag variant="success">Success</flp-tag>
  <flp-tag variant="neutral">Neutral</flp-tag>
  <flp-tag variant="warning">Warning</flp-tag>
  <flp-tag variant="danger">Danger</flp-tag>
  </div>
\``,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const F=["Default"];export{e as Default,F as __namedExportsOrder,C as default};
//# sourceMappingURL=flp-tag.stories-BKAhgemi.js.map
