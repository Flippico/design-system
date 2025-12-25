import{i,b as m}from"./lit-element-9a6qN07w.js";import{F as h,t as u}from"./custom-element-ChNscFG9.js";import{c as v}from"./component.styles-G8qf-zGh.js";const g=i`
  ${v}

  :host {
    display: block;
    font-family: var(--flp-font-medium);
  }
`;var b=Object.getOwnPropertyDescriptor,_=(s,r,f,l)=>{for(var t=l>1?void 0:l?b(r,f):r,o=s.length-1,n;o>=0;o--)(n=s[o])&&(t=n(t)||t);return t};let a=class extends h{render(){return m`<h1><slot></slot></h1>`}};a.styles=[g];a=_([u("flp-header")],a);const F={title:"components/Header",component:"flp-header"},H={},y=(s,{globals:{theme:r}})=>m`
  <div class="flippico">
    <flp-header .theme=${r}>
      Header
    </flp-header>
  </div>
`,e=y.bind({});e.args=H;var p,d,c;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`(props: Header, {
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
\``,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,F as default};
//# sourceMappingURL=flp-header.stories-CA5GxZyF.js.map
