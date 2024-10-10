import{i,x as m}from"./lit-element-UdLzEcH-.js";import{F as h,t as u}from"./custom-element-_dbbq29R.js";import{c as v}from"./component.styles-BhDG6Xff.js";const _=i`
  ${v}

  :host {
    display: block;
    font-family: var(--flp-font-medium);
  }
`;var b=Object.defineProperty,g=Object.getOwnPropertyDescriptor,H=(o,r,l,t)=>{for(var e=t>1?void 0:t?g(r,l):r,a=o.length-1,p;a>=0;a--)(p=o[a])&&(e=(t?p(r,l,e):p(e))||e);return t&&e&&b(r,l,e),e};let n=class extends h{render(){return m`<h1><slot></slot></h1>`}};n.styles=[_];n=H([u("flp-header")],n);const F={title:"components/Header",component:"flp-header"},O={},P=(o,{globals:{theme:r}})=>m`
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
//# sourceMappingURL=flp-header.stories-CI0M_cpa.js.map
