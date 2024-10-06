import{i as h,k as b}from"./lit-element-CPYlYYac.js";import{F as y,t as v}from"./custom-element-DcGDOd3C.js";import{n as p}from"./property-CcHbFR6H.js";import{r as k}from"./state-Cw-lAQBx.js";import"./index-fCdhHCjk.js";import{t as g}from"./if-defined-4GS2c12S.js";import{g as c}from"./get-api-url-BNamD47E.js";/* empty css             */import"./flp-card-CdUiWKie.js";import"./component.styles-MQe3hEw3.js";import"./slot-BCTpRhJ5.js";import"./class-map-635SZfYW.js";import"./index-D-l25SpK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./flp-button-DKNOhfQI.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-DnWocktz.js";import"./form-control.styles-qMh6M_JA.js";import"./live-DyBFC1nW.js";import"./directive-helpers-CHX3h6dV.js";import"./default-value-DEpNiEhc.js";import"./flp-logo-BmvhRZ3J.js";import"./flp-divider-CYuWwxR4.js";const _=h`
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
`;var w=Object.defineProperty,P=Object.getOwnPropertyDescriptor,l=(i,e,t,a)=>{for(var o=a>1?void 0:a?P(e,t):e,s=i.length-1,m;s>=0;s--)(m=i[s])&&(o=(a?m(e,t,o):m(o))||o);return a&&o&&w(e,t,o),o};let n=class extends y{constructor(){super(...arguments),this.tenantKey="",this.loginCallback="",this.logoutCallback="",this.name="",this.staging=!1,this.develop=!1,this.loginPending=!1}onSubmitHandle(i){i.preventDefault(),this.loginPending=!0;const e=new FormData(i.target);if(Array.from(e.values()).some(a=>a==="")){this.loginPending=!1;return}const t=new URLSearchParams;t.append("tenant_key",this.tenantKey),t.append("login_callback",this.loginCallback),t.append("logout_callback",this.logoutCallback),t.append("name",e.get("name")),t.append("email",e.get("email")),t.append("password",e.get("password")),fetch(`${c(this.staging,this.develop)}/api/${this.tenantKey}/signup`,{method:"POST",body:t,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(a=>{a.status>=300&&a.status<400&&(window.location.href=a.headers.get("Location"))}).finally(()=>this.loginPending=!1)}render(){return b`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          <flp-logo></flp-logo>
        </div>
        <h2 class="text-align-center">Create your account</h2>
        <flp-input class="mb-small"  type="text" required name="name" label="Name"></flp-input>
        <flp-input class="mb-small"  type="email" required name="email" label="Email"></flp-input>
        <flp-input class="mb-medium"  name="password" required type="password" label="Password" password-toggle></flp-input>
        <input type="hidden" name="tenant_key" value=${this.tenantKey}/>
        <input type="hidden" name="login_callback" value=${this.loginCallback} />
        <input type="hidden" name="logout_callback" value=${this.logoutCallback} />
        <flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${g(this.loginPending)} 
          .disabled=${g(this.loginPending)}
        >Signup</flp-button>
        <div class="login-container">
          <span>Already have account?</span>
          <flp-button class="login--button" variant="text" href=${`${c(this.staging,this.develop)}/${this.tenantKey}/login`}>Login</flp-button>
        </div>
      </form>
    </flp-card>`}};n.styles=[_];l([p({type:String,attribute:"tenant_key"})],n.prototype,"tenantKey",2);l([p({type:String,attribute:"login_callback"})],n.prototype,"loginCallback",2);l([p({type:String,attribute:"logout_callback"})],n.prototype,"logoutCallback",2);l([p({type:String,attribute:"name"})],n.prototype,"name",2);l([p({type:Boolean,attribute:"staging"})],n.prototype,"staging",2);l([p({type:Boolean,attribute:"develop"})],n.prototype,"develop",2);l([k()],n.prototype,"loginPending",2);n=l([v("flp-signup")],n);const X={title:"containers/Signup",component:"flp-signup"},x={},S=(i,{globals:{theme:e}})=>b`
  <div class="flp-theme-light">
    <flp-signup .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback">
    </flp-signup>
  </div>
`,r=S.bind({});r.args=x;var u,d,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(props: Signup, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-signup .develop=\${true} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback">
    </flp-signup>
  </div>
\``,...(f=(d=r.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const Y=["Default"];export{r as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=flp-signup.stories-CWIIik4r.js.map
