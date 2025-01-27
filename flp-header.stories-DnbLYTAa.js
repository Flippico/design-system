import{i,x as m}from"./lit-element-BOnOm6HC.js";import{F as h,t as u}from"./custom-element-G_of5crQ.js";import{c as v}from"./component.styles-BRPzpB69.js";const _=i`
  ${v}

  :host {
    display: block;
    font-family: var(--flp-font-medium);
  }
`;var b=Object.defineProperty,g=Object.getOwnPropertyDescriptor,H=(o,r,l,t)=>{for(var e=t>1?void 0:t?g(r,l):r,a=o.length-1,n;a>=0;a--)(n=o[a])&&(e=(t?n(r,l,e):n(e))||e);return t&&e&&b(r,l,e),e};let p=class extends h{render(){return m`<h1><slot></slot></h1>`}};p.styles=[_];p=H([u("flp-header")],p);const F={title:"components/Header",component:"flp-header"},O={},P=(o,{globals:{theme:r}})=>m`
  <div class="flippico">
    <flp-header .theme=${r}>
      Header
    </flp-header>
  </div>
`,s=P.bind({});s.args=O;var d,f,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`(props: Header, {
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
\``,...(c=(f=s.parameters)==null?void 0:f.docs)==null?void 0:c.source}}};const $=["Default"];export{s as Default,$ as __namedExportsOrder,F as default};
//# sourceMappingURL=flp-header.stories-DnbLYTAa.js.map
