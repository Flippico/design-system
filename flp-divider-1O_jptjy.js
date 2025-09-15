import{F as c,t as n}from"./custom-element-NRwDiNuy.js";import{n as v}from"./property-_HeZ1DXc.js";import{i as h}from"./lit-element-BQC2Loq1.js";import{c as d}from"./component.styles-DEWewzc5.js";import{w as f}from"./watch-CEsCE2EF.js";const m=h`
${d}

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
`;var b=Object.defineProperty,g=Object.getOwnPropertyDescriptor,s=(p,e,a,o)=>{for(var r=o>1?void 0:o?g(e,a):e,i=p.length-1,l;i>=0;i--)(l=p[i])&&(r=(o?l(e,a,r):l(r))||r);return o&&r&&b(e,a,r),r};let t=class extends c{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};t.styles=[m];s([v({type:Boolean,reflect:!0})],t.prototype,"vertical",2);s([f("vertical")],t.prototype,"handleVerticalChange",1);t=s([n("flp-divider")],t);export{t as F};
//# sourceMappingURL=flp-divider-1O_jptjy.js.map
