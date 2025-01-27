import{F as c,t as n}from"./custom-element-G_of5crQ.js";import{n as v}from"./property-DtfuD-FT.js";import{i as d}from"./lit-element-BOnOm6HC.js";import{c as h}from"./component.styles-BRPzpB69.js";import{w as f}from"./watch-CEsCE2EF.js";const m=d`
${h}

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
`;var b=Object.defineProperty,u=Object.getOwnPropertyDescriptor,s=(p,t,a,o)=>{for(var r=o>1?void 0:o?u(t,a):t,i=p.length-1,l;i>=0;i--)(l=p[i])&&(r=(o?l(t,a,r):l(r))||r);return o&&r&&b(t,a,r),r};let e=class extends c{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};e.styles=[m];s([v({type:Boolean,reflect:!0})],e.prototype,"vertical",2);s([f("vertical")],e.prototype,"handleVerticalChange",1);e=s([n("flp-divider")],e);export{e as F};
//# sourceMappingURL=flp-divider-BO9qlRoO.js.map
