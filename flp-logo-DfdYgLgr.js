import{i as n,b as g}from"./lit-element-9a6qN07w.js";import{F as d,t as u}from"./custom-element-ChNscFG9.js";import{n as a}from"./property-ce-uMPVx.js";import{c as f}from"./component.styles-G8qf-zGh.js";import{a as c}from"./class-map-CUwhKOqL.js";const h=n`
  ${f}

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
`;var _=Object.defineProperty,w=Object.getOwnPropertyDescriptor,t=(r,i,p,s)=>{for(var e=s>1?void 0:s?w(i,p):i,l=r.length-1,m;l>=0;l--)(m=r[l])&&(e=(s?m(i,p,e):m(e))||e);return s&&e&&_(i,p,e),e};const v=new URL(""+new URL("assets/main-BKDaKOvr.png",import.meta.url).href,import.meta.url).href,y=new URL(""+new URL("assets/main-D1m48xyl.png",import.meta.url).href,import.meta.url).href;let o=class extends d{constructor(){super(...arguments),this.variant="flippico",this.size="medium",this.isRounded=!1,this.loading="eager"}render(){const r=this.variant==="kw"?y:v;return g`<img
      part="image"
      class=${c({logo__image:!0,[this.size]:!0,rounded:this.isRounded})}
      src="${r}"
      loading="${this.loading}"
      alt="logo"
    />`}};o.styles=[h];t([a()],o.prototype,"variant",2);t([a()],o.prototype,"size",2);t([a({attribute:"rounded",type:Boolean})],o.prototype,"isRounded",2);t([a()],o.prototype,"loading",2);o=t([u("flp-logo")],o);export{o as F};
//# sourceMappingURL=flp-logo-DfdYgLgr.js.map
