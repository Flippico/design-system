import{i as b,k as d}from"./lit-element-CPYlYYac.js";import{F as h,t as y}from"./custom-element-DcGDOd3C.js";import{n as a}from"./property-CcHbFR6H.js";import{r as v}from"./state-Cw-lAQBx.js";import"./index-fCdhHCjk.js";import{t as m}from"./if-defined-4GS2c12S.js";import{g as w}from"./get-api-url-BSKmw4It.js";/* empty css             */import"./flp-card-CdUiWKie.js";import"./component.styles-MQe3hEw3.js";import"./slot-BCTpRhJ5.js";import"./class-map-635SZfYW.js";import"./index-D-l25SpK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./flp-button-DKNOhfQI.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-DnWocktz.js";import"./form-control.styles-qMh6M_JA.js";import"./live-DyBFC1nW.js";import"./directive-helpers-CHX3h6dV.js";import"./default-value-DEpNiEhc.js";import"./flp-logo-BmvhRZ3J.js";import"./flp-divider-CYuWwxR4.js";const x=b`
flp-button {
  width: 100%;
}
h2 {
  font-family: var(--flp-font-medium);
}
.auth-container {
  max-width: 450px;
  width: 100%;
}
.mb-small {
  margin-bottom: 20px;
}
.mb-medium {
  margin-bottom: 40px;
}
.text-align-center {
  text-align: center;
}
.forgot-password-link--container {
  text-align: right;
  --flp-spacing-medium: 0px;
}
.login--button {
  width: auto;
}
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
`;var k=Object.defineProperty,P=Object.getOwnPropertyDescriptor,n=(i,t,o,s)=>{for(var l=s>1?void 0:s?P(t,o):t,p=i.length-1,g;p>=0;p--)(g=i[p])&&(l=(s?g(t,o,l):g(l))||l);return s&&l&&k(t,o,l),l};let e=class extends h{constructor(){super(...arguments),this.tenantKey="",this.loginCallback="",this.logoutCallback="",this.name="",this.staging=!1,this.develop=!1,this.baseUrl=w(this.staging,this.develop),this.loginPending=!1}onSubmitHandle(i){i.preventDefault(),this.loginPending=!0;const t=new FormData(i.target);if(Array.from(t.values()).some(o=>o==="")){this.loginPending=!1;return}console.log("email",t.get("email")),console.log("password",t.get("password")),console.log("name",t.get("name")),console.log("tenant-key",t.get("tenant-key")),console.log("login-callback",t.get("login-callback")),console.log("logout-callback",t.get("logout-callback")),fetch(`${this.baseUrl}/${t.get("tenant-key")}/signup`,{method:"POST",body:t}).then(o=>o.json()).then(o=>{window.location.replace(`${this.loginCallback}/${o.message.token}`)}).finally(()=>this.loginPending=!1)}render(){return d`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          <flp-logo></flp-logo>
        </div>
        <h2 class="text-align-center">Create your account</h2>
        <flp-input class="mb-small"  type="text" required name="name" label="Name"></flp-input>
        <flp-input class="mb-small"  type="email" required name="email" label="Email"></flp-input>
        <flp-input class="mb-medium"  name="password" required type="password" label="Password" password-toggle></flp-input>
        <flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${m(this.loginPending)} 
          .disabled=${m(this.loginPending)}
        >Signup</flp-button>
        <div class="login-container">
          <span>Already have account?</span>
          <flp-button class="login--button" variant="text" href=${`${this.baseUrl}/${this.tenantKey}/login`}>Login</flp-button>
        </div>
      </form>
    </flp-card>`}};e.styles=[x];n([a({type:String,attribute:"tenant_key"})],e.prototype,"tenantKey",2);n([a({type:String,attribute:"login_callback"})],e.prototype,"loginCallback",2);n([a({type:String,attribute:"logout_callback"})],e.prototype,"logoutCallback",2);n([a({type:String,attribute:"name"})],e.prototype,"name",2);n([a({type:Boolean,attribute:"staging"})],e.prototype,"staging",2);n([a({type:Boolean,attribute:"develop"})],e.prototype,"develop",2);n([v()],e.prototype,"loginPending",2);e=n([y("flp-signup")],e);const X={title:"containers/Signup",component:"flp-signup"},S={},_=(i,{globals:{theme:t}})=>d`
  <div class="flp-theme-light">
    <flp-signup>
    </flp-signup>
  </div>
`,r=_.bind({});r.args=S;var c,u,f;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`(props: Signup, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-signup>
    </flp-signup>
  </div>
\``,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const Y=["Default"];export{r as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=flp-signup.stories-cBQ0bZbz.js.map
