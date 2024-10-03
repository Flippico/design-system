import{i,k as m}from"./lit-element-CPYlYYac.js";import{c as h,F as u,t as v}from"./component.styles-CJs1ohMC.js";const _=i`
  ${h}

  :host {
    display: block;
    font-family: var(--flp-font-medium);
  }
`;var b=Object.defineProperty,g=Object.getOwnPropertyDescriptor,H=(o,r,a,t)=>{for(var e=t>1?void 0:t?g(r,a):r,l=o.length-1,p;l>=0;l--)(p=o[l])&&(e=(t?p(r,a,e):p(e))||e);return t&&e&&b(r,a,e),e};let n=class extends u{render(){return m`<h1><slot></slot></h1>`}};n.styles=[_];n=H([v("flp-header")],n);const x={title:"components/Header",component:"flp-header"},O={},P=(o,{globals:{theme:r}})=>m`
  <div class="flippico">
    <flp-header .theme=${r}>
      Header
    </flp-header>
  </div>
`,s=P.bind({});s.args=O;var d,c,f;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`(props: Header, {
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
\``,...(f=(c=s.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const F=["Default"];export{s as Default,F as __namedExportsOrder,x as default};
//# sourceMappingURL=flp-header.stories-CZYqDEYe.js.map
