import{F as p,t as n}from"./custom-element-fmFNofkQ.js";import{n as v}from"./property-ok3xJcRr.js";import{i as h}from"./lit-element-w72SgdYd.js";import{c as d}from"./dark-VEljs8KV.js";import{w as f}from"./watch-jbmnu0Mo.js";const m=h`
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
`;var b=Object.defineProperty,g=Object.getOwnPropertyDescriptor,s=(c,e,a,o)=>{for(var r=o>1?void 0:o?g(e,a):e,i=c.length-1,l;i>=0;i--)(l=c[i])&&(r=(o?l(e,a,r):l(r))||r);return o&&r&&b(e,a,r),r};let t=class extends p{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};t.styles=[m];s([v({type:Boolean,reflect:!0})],t.prototype,"vertical",2);s([f("vertical")],t.prototype,"handleVerticalChange",1);t=s([n("flp-divider")],t);
//# sourceMappingURL=flp-divider--x-dQMOK.js.map
