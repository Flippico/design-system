import{i as b,k as d}from"./lit-element-CPYlYYac.js";import{F as h,t as y}from"./custom-element-DcGDOd3C.js";import{n as s}from"./property-CcHbFR6H.js";import{r as v}from"./state-Cw-lAQBx.js";import"./index-fCdhHCjk.js";import{t as m}from"./if-defined-4GS2c12S.js";/* empty css             */import"./flp-card-CdUiWKie.js";import"./component.styles-MQe3hEw3.js";import"./slot-BCTpRhJ5.js";import"./class-map-635SZfYW.js";import"./index-D-l25SpK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./flp-button-DKNOhfQI.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-DnWocktz.js";import"./form-control.styles-qMh6M_JA.js";import"./live-DyBFC1nW.js";import"./directive-helpers-CHX3h6dV.js";import"./default-value-DEpNiEhc.js";import"./flp-logo-BmvhRZ3J.js";import"./flp-divider-CYuWwxR4.js";const w=b`
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
`;var x=Object.defineProperty,k=Object.getOwnPropertyDescriptor,i=(l,t,e,r)=>{for(var o=r>1?void 0:r?k(t,e):t,p=l.length-1,g;p>=0;p--)(g=l[p])&&(o=(r?g(t,e,o):g(o))||o);return r&&o&&x(t,e,o),o};let n=class extends h{constructor(){super(...arguments),this.tenantKey="",this.loginCallback="",this.logoutCallback="",this.name="",this.staging=!1,this.baseUrl=this.staging?"https://staging.amadeus.flippi.co":"https://amadeus.flippi.co",this.loginPending=!1}onSubmitHandle(l){l.preventDefault(),this.loginPending=!0;const t=new FormData(l.target);if(Array.from(t.values()).some(e=>e==="")){this.loginPending=!1;return}console.log("email",t.get("email")),console.log("password",t.get("password")),console.log("name",t.get("name")),console.log("tenant-key",t.get("tenant-key")),console.log("login-callback",t.get("login-callback")),console.log("logout-callback",t.get("logout-callback")),fetch(`${this.baseUrl}/${t.get("tenant-key")}/signup`,{method:"POST",body:t}).then(e=>e.json()).then(e=>{window.location.replace(`${this.loginCallback}/${e.message.token}`)}).finally(()=>this.loginPending=!1)}render(){return d`<flp-card class="auth-container">
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
    </flp-card>`}};n.styles=[w];i([s({type:String,attribute:"tenant_key"})],n.prototype,"tenantKey",2);i([s({type:String,attribute:"login_callback"})],n.prototype,"loginCallback",2);i([s({type:String,attribute:"logout_callback"})],n.prototype,"logoutCallback",2);i([s({type:String,attribute:"name"})],n.prototype,"name",2);i([s({type:Boolean,attribute:"staging"})],n.prototype,"staging",2);i([v()],n.prototype,"loginPending",2);n=i([y("flp-signup")],n);const V={title:"containers/Signup",component:"flp-signup"},P={},S=(l,{globals:{theme:t}})=>d`
  <div class="flp-theme-light">
    <flp-signup>
    </flp-signup>
  </div>
`,a=S.bind({});a.args=P;var c,u,f;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`(props: Signup, {
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
\``,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const W=["Default"];export{a as Default,W as __namedExportsOrder,V as default};
//# sourceMappingURL=flp-signup.stories-Bi1YsWab.js.map
