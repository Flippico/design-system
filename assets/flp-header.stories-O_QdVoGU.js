import{s as m,i as h,x as f}from"./lit-element-Tjo4dG7m.js";class u extends m{}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)},_=h``;var P=Object.defineProperty,b=Object.getOwnPropertyDescriptor,g=(s,e,t,o)=>{for(var r=o>1?void 0:o?b(e,t):e,a=s.length-1,l;a>=0;a--)(l=s[a])&&(r=(o?l(e,t,r):l(r))||r);return o&&r&&P(e,t,r),r};let p=class extends u{render(){return f`<h1><slot></slot></h1>`}};p.styles=[_];p=g([v("flp-header")],p);const D={title:"components/Header",component:"flp-header"},H={},x=(s,{globals:{theme:e}})=>f`
  <div class="flippico">
    <flp-header .theme=${e}>
      Header
    </flp-header>
  </div>
`,n=x.bind({});n.args=H;var d,c,i;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`(props: Header, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flippico">
    <flp-header .theme=\${theme}>
      Header
    </flp-header>
  </div>
\``,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const E=["Default"];export{n as Default,E as __namedExportsOrder,D as default};
//# sourceMappingURL=flp-header.stories-O_QdVoGU.js.map
