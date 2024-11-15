import{i as b,x as f}from"./lit-element-UdLzEcH-.js";import{F as m,t as v}from"./custom-element-_dbbq29R.js";import{n as c}from"./property-BiB_YYz7.js";import{c as h}from"./component.styles-BhDG6Xff.js";import{a as y}from"./class-map-YRkreJUE.js";/* empty css             */const w=b`
${h}

:host {
  display: inline-flex;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: max(12px, 0.75em);
  font-weight: var(--flp-font-weight-semibold);
  letter-spacing: var(--flp-letter-spacing-normal);
  line-height: 1;
  border-radius: var(--flp-border-radius-small);
  border: solid 1px var(--flp-color-neutral-0);
  white-space: nowrap;
  padding: 0.35em 0.6em;
  user-select: none;
  -webkit-user-select: none;
  cursor: inherit;
}

/* Variant modifiers */
.badge--primary {
  background-color: var(--flp-color-primary-600);
  color: var(--flp-color-neutral-0);
}

.badge--success {
  background-color: var(--flp-color-success-600);
  color: var(--flp-color-neutral-0);
}

.badge--neutral {
  background-color: var(--flp-color-neutral-600);
  color: var(--flp-color-neutral-0);
}

.badge--warning {
  background-color: var(--flp-color-warning-600);
  color: var(--flp-color-neutral-0);
}

.badge--danger {
  background-color: var(--flp-color-danger-600);
  color: var(--flp-color-neutral-0);
}

/* Pill modifier */
.badge--pill {
  border-radius: var(--flp-border-radius-pill);
}

/* Pulse modifier */
.badge--pulse {
  animation: pulse 1.5s infinite;
}

.badge--pulse.badge--primary {
  --pulse-color: var(--flp-color-primary-600);
}

.badge--pulse.badge--success {
  --pulse-color: var(--flp-color-success-600);
}

.badge--pulse.badge--neutral {
  --pulse-color: var(--flp-color-neutral-600);
}

.badge--pulse.badge--warning {
  --pulse-color: var(--flp-color-warning-600);
}

.badge--pulse.badge--danger {
  --pulse-color: var(--flp-color-danger-600);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--pulse-color);
  }
  70% {
    box-shadow: 0 0 0 0.5rem transparent;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
}
`;var x=Object.defineProperty,_=Object.getOwnPropertyDescriptor,s=(t,a,n,o)=>{for(var e=o>1?void 0:o?_(a,n):a,p=t.length-1,i;p>=0;p--)(i=t[p])&&(e=(o?i(a,n,e):i(e))||e);return o&&e&&x(a,n,e),e};let r=class extends m{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return f`
      <span
        part="base"
        class=${y({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};r.styles=[w];s([c({reflect:!0})],r.prototype,"variant",2);s([c({type:Boolean,reflect:!0})],r.prototype,"pill",2);s([c({type:Boolean,reflect:!0})],r.prototype,"pulse",2);r=s([v("flp-badge")],r);const S={title:"components/Badge",component:"flp-badge"},B={},P=(t,{globals:{theme:a}})=>f`
  <div class="flp-theme-light">
    <flp-badge>
      Badge
    </flp-badge>
  </div>
`,l=P.bind({});l.args=B;var d,g,u;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`(props: Badge, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-badge>
      Badge
    </flp-badge>
  </div>
\``,...(u=(g=l.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const $=["Default"];export{l as Default,$ as __namedExportsOrder,S as default};
//# sourceMappingURL=flp-badge.stories-B2rwqwMA.js.map
