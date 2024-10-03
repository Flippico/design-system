import{i as m,k as g}from"./lit-element-CPYlYYac.js";import{c as d,F as u,t as f}from"./component.styles-CJs1ohMC.js";import{n as a}from"./property-CcHbFR6H.js";import{R as c}from"./class-map-635SZfYW.js";const h=m`
  ${d}

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
`;var _=Object.defineProperty,w=Object.getOwnPropertyDescriptor,t=(r,i,p,s)=>{for(var e=s>1?void 0:s?w(i,p):i,l=r.length-1,n;l>=0;l--)(n=r[l])&&(e=(s?n(i,p,e):n(e))||e);return s&&e&&_(i,p,e),e};const v=new URL(""+new URL("assets/main-BKDaKOvr.png",import.meta.url).href,import.meta.url).href,R=new URL(""+new URL("assets/main-D1m48xyl.png",import.meta.url).href,import.meta.url).href;let o=class extends u{constructor(){super(...arguments),this.variant="flippico",this.size="medium",this.isRounded=!1,this.loading="eager"}render(){const r=this.variant==="kw"?R:v;return g`<img
      part="image"
      class=${c({logo__image:!0,[this.size]:!0,rounded:this.isRounded})}
      src="${r}"
      loading="${this.loading}"
      alt="logo"
    />`}};o.styles=[h];t([a()],o.prototype,"variant",2);t([a()],o.prototype,"size",2);t([a({attribute:"rounded",type:Boolean})],o.prototype,"isRounded",2);t([a()],o.prototype,"loading",2);o=t([f("flp-logo")],o);export{o as F};
//# sourceMappingURL=flp-logo-1rjurFTs.js.map
