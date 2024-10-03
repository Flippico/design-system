import{c as p,F as n,t as v}from"./component.styles-CJs1ohMC.js";import{n as h}from"./property-CcHbFR6H.js";import{i as d}from"./lit-element-CPYlYYac.js";import{w as f}from"./watch-CEsCE2EF.js";const m=d`
${p}

:host {
  --color: var(--flp-panel-border-color);
  --width: var(--flp-panel-border-width);
  --spacing: var(--flp-spacing-medium);
}

:host(:not([vertical])) {
  display: block;
  border-top: solid var(--width) var(--color);
  margin: var(--spacing) 0;
}

:host([vertical]) {
  display: inline-block;
  height: 100%;
  border-left: solid var(--width) var(--color);
  margin: 0 var(--spacing);
}
`;var b=Object.defineProperty,g=Object.getOwnPropertyDescriptor,s=(c,t,o,a)=>{for(var r=a>1?void 0:a?g(t,o):t,l=c.length-1,i;l>=0;l--)(i=c[l])&&(r=(a?i(t,o,r):i(r))||r);return a&&r&&b(t,o,r),r};let e=class extends n{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};e.styles=[m];s([h({type:Boolean,reflect:!0})],e.prototype,"vertical",2);s([f("vertical")],e.prototype,"handleVerticalChange",1);e=s([v("flp-divider")],e);export{e as F};
//# sourceMappingURL=flp-divider-vctiWg7L.js.map
