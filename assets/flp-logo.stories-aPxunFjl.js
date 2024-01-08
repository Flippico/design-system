import{i as v,x as c}from"./lit-element-w72SgdYd.js";import{F as u,t as h}from"./custom-element-fmFNofkQ.js";import{c as z,n}from"./dark-BuHqf5dB.js";import{e as _}from"./class-map-W4wEIgb9.js";const w=v`
  ${z}

  .logo__image.rounded {
    border-radius: 50%;
  }

  .logo__image.small {
    width: 75px;
  }
  .logo__image.medium {
    width: 100px;
  }
  .logo__image.large {
    width: 150px;
  }
`,b=""+new URL("main-9ZuPMcpT.png",import.meta.url).href,L=""+new URL("main-Sg2ijr6z.png",import.meta.url).href;var x=Object.defineProperty,y=Object.getOwnPropertyDescriptor,a=(i,e,t,r)=>{for(var o=r>1?void 0:r?y(e,t):e,s=i.length-1,g;s>=0;s--)(g=i[s])&&(o=(r?g(e,t,o):g(o))||o);return r&&o&&x(e,t,o),o};let l=class extends u{constructor(){super(...arguments),this.variant="flippico",this.size="medium",this.isRounded=!1,this.loading="eager"}render(){const i=this.variant==="kw"?b:L;return c`<img
      part="image"
      class=${_({logo__image:!0,[this.size]:!0,rounded:this.isRounded})}
      src="${i}"
      loading="${this.loading}"
      alt="logo"
    />`}};l.styles=[w];a([n()],l.prototype,"variant",2);a([n()],l.prototype,"size",2);a([n({attribute:"rounded",type:Boolean})],l.prototype,"isRounded",2);a([n()],l.prototype,"loading",2);l=a([h("flp-logo")],l);const $={title:"components/Logo",component:"flp-logo"},P={},k=(i,{globals:{theme:e}})=>c`
  <div class="flp-theme-light">
    <div>
      <span>Flippico</span>
      <flp-logo variant="flippico" size="medium"></flp-logo>
      <flp-logo variant="flippico" size="small"></flp-logo>
      <flp-logo variant="flippico" size="large"></flp-logo>
      <flp-logo variant="flippico" rounded size="large"></flp-logo>
    </div>
    <div>
      <span>KW</span>
      <flp-logo variant="kw" size="medium"></flp-logo>
      <flp-logo variant="kw" size="small"></flp-logo>
      <flp-logo variant="kw" size="large"></flp-logo>
      <flp-logo variant="kw" rounded size="large"></flp-logo>
    </div>
  </div>
`,p=k.bind({});p.args=P;var f,m,d;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`(props: Logo, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <div>
      <span>Flippico</span>
      <flp-logo variant="flippico" size="medium"></flp-logo>
      <flp-logo variant="flippico" size="small"></flp-logo>
      <flp-logo variant="flippico" size="large"></flp-logo>
      <flp-logo variant="flippico" rounded size="large"></flp-logo>
    </div>
    <div>
      <span>KW</span>
      <flp-logo variant="kw" size="medium"></flp-logo>
      <flp-logo variant="kw" size="small"></flp-logo>
      <flp-logo variant="kw" size="large"></flp-logo>
      <flp-logo variant="kw" rounded size="large"></flp-logo>
    </div>
  </div>
\``,...(d=(m=p.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const j=["Default"];export{p as Default,j as __namedExportsOrder,$ as default};
//# sourceMappingURL=flp-logo.stories-aPxunFjl.js.map
