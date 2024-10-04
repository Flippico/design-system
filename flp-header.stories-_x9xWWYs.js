import{i,k as m}from"./lit-element-CPYlYYac.js";import{F as h,t as u}from"./custom-element-DcGDOd3C.js";import{c as v}from"./component.styles-MQe3hEw3.js";const _=i`
  ${v}

  :host {
    display: block;
    font-family: var(--flp-font-medium);
  }
`;var b=Object.defineProperty,g=Object.getOwnPropertyDescriptor,H=(o,r,a,t)=>{for(var e=t>1?void 0:t?g(r,a):r,l=o.length-1,p;l>=0;l--)(p=o[l])&&(e=(t?p(r,a,e):p(e))||e);return t&&e&&b(r,a,e),e};let n=class extends h{render(){return m`<h1><slot></slot></h1>`}};n.styles=[_];n=H([u("flp-header")],n);const F={title:"components/Header",component:"flp-header"},O={},P=(o,{globals:{theme:r}})=>m`
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
//# sourceMappingURL=flp-header.stories-_x9xWWYs.js.map
