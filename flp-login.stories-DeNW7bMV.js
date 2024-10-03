import{i as E,k as N}from"./lit-element-CPYlYYac.js";import{F as x}from"./flp-card-DkSIl-M5.js";import{a as g}from"./index-D-l25SpK.js";import{F as L}from"./flp-button-CPdPHaUh.js";import{F as D}from"./flp-input-CSctd60w.js";import{F as O}from"./flp-logo-1rjurFTs.js";import{F as P}from"./flp-divider-vctiWg7L.js";import{F as T,t as $}from"./component.styles-CJs1ohMC.js";import{n as h}from"./property-CcHbFR6H.js";import{r as S}from"./state-Cw-lAQBx.js";/* empty css             */import"./slot-BCTpRhJ5.js";import"./class-map-635SZfYW.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./if-defined-4GS2c12S.js";import"./watch-CEsCE2EF.js";import"./form-control.styles-qMh6M_JA.js";import"./live-DyBFC1nW.js";import"./directive-helpers-CHX3h6dV.js";import"./default-value-DEpNiEhc.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=new Set(["children","localName","ref","style","className"]),F=new WeakMap,j=(l,e,o,r,a)=>{const c=a==null?void 0:a[e];c===void 0||o===r?(l[e]=o,o==null&&e in HTMLElement.prototype&&l.removeAttribute(e)):((n,i,m)=>{let p=F.get(n);p===void 0&&F.set(n,p=new Map);let s=p.get(i);m!==void 0?s===void 0?(p.set(i,s={handleEvent:m}),n.addEventListener(i,s)):s.handleEvent=m:s!==void 0&&(p.delete(i),n.removeEventListener(i,s))})(l,c,o)},d=({react:l,tagName:e,elementClass:o,events:r,displayName:a})=>{const c=new Set(Object.keys(r??{})),n=l.forwardRef((i,m)=>{const p=l.useRef(null),s=l.useRef(null),v={},k={};for(const[t,y]of Object.entries(i))I.has(t)?v[t==="className"?"class":t]=y:c.has(t)||t in o.prototype?k[t]=y:v[t]=y;return l.useLayoutEffect(()=>{if(s.current!==null){for(const t in k)j(s.current,t,i[t],p.current?p.current[t]:void 0,r);p.current=i}}),l.useLayoutEffect(()=>{var t;(t=s.current)==null||t.removeAttribute("defer-hydration")},[]),v.suppressHydrationWarning=!0,l.createElement(e,{...v,ref:t=>{s.current=t,typeof m=="function"?m(t):m!==null&&(m.current=t)}})});return n.displayName=a??o.name,n};d({tagName:"flp-card",elementClass:x,react:g,events:{},displayName:"FlpCard"});d({tagName:"flp-button",elementClass:L,react:g,events:{onFlpBlur:"flp-blur",onFlpFocus:"flp-focus",onFlpInvalid:"flp-invalid"},displayName:"FlpButton"});d({tagName:"flp-input",elementClass:D,react:g,events:{onFlpClear:"flp-clear",onFlpInput:"flp-input",onFlpChange:"flp-change",onFlpBlur:"flp-blur",onFlpFocus:"flp-focus"},displayName:"FlpInput"});d({tagName:"flp-logo",elementClass:O,react:g,events:{},displayName:"FlpLogo"});d({tagName:"flp-divider",elementClass:P,react:g,events:{},displayName:"FlpDivider"});const A=E`

.auth-container {
  max-width: 450px;
  width: 100%;
}

.logo-container {
  text-align: center;
}

flp-input {
  margin-bottom: 20px;
}

flp-button {
  width: 100%;
}

.error {
  color: var(--flp-color-warning-700);
}
`;var B=Object.defineProperty,H=Object.getOwnPropertyDescriptor,b=(l,e,o,r)=>{for(var a=r>1?void 0:r?H(e,o):e,c=l.length-1,n;c>=0;c--)(n=l[c])&&(a=(r?n(e,o,a):n(a))||a);return r&&a&&B(e,o,a),a};let u=class extends T{constructor(){super(...arguments),this.tenantKey="",this.loginCallback="",this.logoutCallback=""}async onSubmitHandle(l){l.preventDefault();const e=new FormData(l.target);if(Array.from(e.values()).some(r=>r==="")){this.errorText="Error";return}console.log("email",e.get("email")),console.log("password",e.get("password")),console.log("tenant_key",e.get("tenant_key")),console.log("login_callback",e.get("login_callback")),console.log("logout_callback",e.get("logout_callback")),this.errorText=null;const o=await fetch(`https://staging.amadeus.flippi.co/${e.get("tenant_key")}/login`,{method:"POST",body:e}).catch(()=>this.errorText="Error while send to API");console.log("res",o)}render(){return N`
    <flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container">
          <flp-logo></flp-logo>
        </div>
        <flp-divider></flp-divider>
        <flp-input type="email" required name="email" label="Email"></flp-input>
        <flp-input name="password" error="sds" required type="password" label="Password" password-toggle></flp-input>
        <flp-button variant="primary" type="submit">Login</flp-button>
        <input type="hidden" name="tenant_key" value=${this.tenantKey}/>
        <input type="hidden" name="login_callback" value=${this.loginCallback} />
        <input type="hidden" name="logout_callback" value=${this.logoutCallback} />
        <br/>
        <br/>
        <span class="error">${this.errorText}</span>
      </form>
    </flp-card>`}};u.styles=[A];b([h({attribute:"tenant_key"})],u.prototype,"tenantKey",2);b([h({attribute:"login_callback"})],u.prototype,"loginCallback",2);b([h({attribute:"logout_callback"})],u.prototype,"logoutCallback",2);b([S()],u.prototype,"errorText",2);u=b([$("flp-login")],u);const ce={title:"containers/Login",component:"flp-login"},R={},K=(l,{globals:{theme:e}})=>N`
  <div class="flp-theme-light">
    <flp-login tenant_key="some key" login_callback="some login callback" logout_callback="som logout callback"></flp-login>
  </div>
`,f=K.bind({});f.args=R;var _,w,C;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`(props: Login, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-login tenant_key="some key" login_callback="some login callback" logout_callback="som logout callback"></flp-login>
  </div>
\``,...(C=(w=f.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const me=["Default"];export{f as Default,me as __namedExportsOrder,ce as default};
//# sourceMappingURL=flp-login.stories-DeNW7bMV.js.map
