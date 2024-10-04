import{i as _,k as $}from"./lit-element-CPYlYYac.js";import{F as L}from"./flp-card-DkSIl-M5.js";import{a as f}from"./index-D-l25SpK.js";import{F as E}from"./flp-button-C0qf3g4c.js";import{F as S}from"./flp-input-CSctd60w.js";import{F as D}from"./flp-logo-1rjurFTs.js";import{F as B}from"./flp-divider-vctiWg7L.js";import{F as I,t as O}from"./component.styles-CJs1ohMC.js";import{n as y}from"./property-CcHbFR6H.js";import{r as P}from"./state-Cw-lAQBx.js";import{F as T}from"./flp-icon-CyHozCWl.js";import{F as A}from"./flp-checkbox-DZ3oOal3.js";import{F as j}from"./flp-spinner-qepQcNhq.js";import{t as k}from"./if-defined-4GS2c12S.js";/* empty css             */import"./slot-BCTpRhJ5.js";import"./class-map-635SZfYW.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./form-control.styles-qMh6M_JA.js";import"./live-DyBFC1nW.js";import"./directive-helpers-CHX3h6dV.js";import"./default-value-DEpNiEhc.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=new Set(["children","localName","ref","style","className"]),w=new WeakMap,G=(l,e,o,s,n)=>{const g=n==null?void 0:n[e];g===void 0||o===s?(l[e]=o,o==null&&e in HTMLElement.prototype&&l.removeAttribute(e)):((a,p,m)=>{let c=w.get(a);c===void 0&&w.set(a,c=new Map);let i=c.get(p);m!==void 0?i===void 0?(c.set(p,i={handleEvent:m}),a.addEventListener(p,i)):i.handleEvent=m:i!==void 0&&(c.delete(p),a.removeEventListener(p,i))})(l,g,o)},u=({react:l,tagName:e,elementClass:o,events:s,displayName:n})=>{const g=new Set(Object.keys(s??{})),a=l.forwardRef((p,m)=>{const c=l.useRef(null),i=l.useRef(null),h={},F={};for(const[t,v]of Object.entries(p))R.has(t)?h[t==="className"?"class":t]=v:g.has(t)||t in o.prototype?F[t]=v:h[t]=v;return l.useLayoutEffect(()=>{if(i.current!==null){for(const t in F)G(i.current,t,p[t],c.current?c.current[t]:void 0,s);c.current=p}}),l.useLayoutEffect(()=>{var t;(t=i.current)==null||t.removeAttribute("defer-hydration")},[]),h.suppressHydrationWarning=!0,l.createElement(e,{...h,ref:t=>{i.current=t,typeof m=="function"?m(t):m!==null&&(m.current=t)}})});return a.displayName=n??o.name,a};u({tagName:"flp-card",elementClass:L,react:f,events:{},displayName:"FlpCard"});u({tagName:"flp-button",elementClass:E,react:f,events:{onFlpBlur:"flp-blur",onFlpFocus:"flp-focus",onFlpInvalid:"flp-invalid"},displayName:"FlpButton"});u({tagName:"flp-input",elementClass:S,react:f,events:{onFlpClear:"flp-clear",onFlpInput:"flp-input",onFlpChange:"flp-change",onFlpBlur:"flp-blur",onFlpFocus:"flp-focus"},displayName:"FlpInput"});u({tagName:"flp-logo",elementClass:D,react:f,events:{},displayName:"FlpLogo"});u({tagName:"flp-divider",elementClass:B,react:f,events:{},displayName:"FlpDivider"});u({tagName:"flp-icon",elementClass:T,react:f,events:{},displayName:"FlpIcon"});u({tagName:"flp-checkbox",elementClass:A,react:f,events:{onFlpBlur:"flp-blur",onFlpChange:"flp-change",onFlpFocus:"flp-focus",onFlpInput:"flp-input",onFlpInvalid:"flp-invalid"},displayName:"FlpCheckbox"});u({tagName:"flp-spinner",elementClass:j,react:f,events:{},displayName:"FlpSpinner"});const H=_`

.auth-container {
  max-width: 450px;
  width: 100%;
}
.email--input {
  margin-bottom: 20px;
}
flp-button {
  width: 100%;
}
.mb-small {
  margin-bottom: 10px;
}
.mb-medium {
  margin-bottom: 40px;
}
.error {
  color: var(--flp-color-warning-700);
}
h2 {
  font-family: var(--flp-font-medium);
}
.text-align-center {
  text-align: center;
}
.login-by-email-text {
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login-by-email-text--line {
  height: 1px;
  width: 30%;
  background-color: black;
}
.password--and-forgot-password-link--container {
  margin-bottom: 40px;
}
.password--and-forgot-password-link--container flp-button {
  width: auto;
}

.forgot-password-link--container {
  text-align: right;
  --flp-spacing-medium: 0px;
}
`;var K=Object.defineProperty,z=Object.getOwnPropertyDescriptor,d=(l,e,o,s)=>{for(var n=s>1?void 0:s?z(e,o):e,g=l.length-1,a;g>=0;g--)(a=l[g])&&(n=(s?a(e,o,n):a(n))||n);return s&&n&&K(e,o,n),n};let r=class extends I{constructor(){super(...arguments),this.tenantKey="",this.loginCallback="",this.logoutCallback="",this.name="",this.staging=!1,this.loginPending=!1,this.baseUrl=this.staging?"https://staging.amadeus.flippi.co":"https://amadeus.flippi.co"}async loginByGoogle(){console.log("login by google")}async loginByApple(){console.log("login by apple")}async onSubmitHandle(l){l.preventDefault(),this.loginPending=!0;const e=new FormData(l.target);if(Array.from(e.values()).some(o=>o==="")){this.errorText="Password or email is empty",this.loginPending=!1;return}console.log("email",e.get("email")),console.log("password",e.get("password")),console.log("tenant-key",e.get("tenant-key")),console.log("login-callback",e.get("login-callback")),console.log("logout-callback",e.get("logout-callback")),this.errorText=null,fetch(`${this.baseUrl}/${e.get("tenant-key")}/login`,{method:"POST",body:e}).then(o=>o.json()).then(o=>{window.location.replace(`${this.loginCallback}/${o.message.token}`)}).catch(()=>this.errorText="Error while send to API").finally(()=>this.loginPending=!1)}render(){return $`
    <flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          <flp-logo></flp-logo>
        </div>
        <h2 class="text-align-center">Hello again!</h2>
        <flp-button size="large" variant="default" @click=${this.loginByGoogle}>
          <flp-icon slot="prefix" name="google"></flp-icon>
          Login by Google
        </flp-button>
        <br/>
        <br/>
        <flp-button size="large" variant="default" @click=${this.loginByApple}>
          <flp-icon slot="prefix" name="apple"></flp-icon>
          Login by Apple
        </flp-button>

        <div class="login-by-email-text">
          <div class="login-by-email-text--line"></div>
          <div class="text-align-center">or login by email</div>
          <div class="login-by-email-text--line"></div>
        </div>

        <flp-input class="email--input" type="email" required name="email" label="Email"></flp-input>
        <div class="password--and-forgot-password-link--container">
          <flp-input name="password" error="sds" required type="password" label="Password" password-toggle></flp-input>
          <div class="forgot-password-link--container">
            <flp-button variant="text" href=${`${this.baseUrl}/${this.tenantKey}/reset-password`}>Fogrot your password?</flp-button>
          </div>
        </div>
        <input type="hidden" name="tenant-key" value=${this.tenantKey}/>
        <input type="hidden" name="login-callback" value=${this.loginCallback} />
        <input type="hidden" name="logout-callback" value=${this.logoutCallback} />
        <flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${k(this.loginPending)} 
          .disabled=${k(this.loginPending)}
        >Login</flp-button>
        <flp-button class="mb-medium" href=${`${this.baseUrl}/${this.tenantKey}/signup`} variant="primary" size="large" outline>Create new account by email</flp-button>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};r.styles=[H];d([y({type:String,attribute:"tenant_key"})],r.prototype,"tenantKey",2);d([y({type:String,attribute:"login_callback"})],r.prototype,"loginCallback",2);d([y({type:String,attribute:"logout_callback"})],r.prototype,"logoutCallback",2);d([y({type:String,attribute:"name"})],r.prototype,"name",2);d([y({type:Boolean,attribute:"staging"})],r.prototype,"staging",2);d([P()],r.prototype,"errorText",2);d([P()],r.prototype,"loginPending",2);r=d([O("flp-login")],r);const ye={title:"containers/Login",component:"flp-login"},U={},M=(l,{globals:{theme:e}})=>$`
  <div class="flp-theme-light">
    <flp-login tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback" staging></flp-login>
  </div>
`,b=M.bind({});b.args=U;var x,C,N;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`(props: Login, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-login tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback" staging></flp-login>
  </div>
\``,...(N=(C=b.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const he=["Default"];export{b as Default,he as __namedExportsOrder,ye as default};
//# sourceMappingURL=flp-login.stories-BFJasIfT.js.map
