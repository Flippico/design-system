import{i as h,k as b}from"./lit-element-CPYlYYac.js";import{F as y,t as k}from"./custom-element-DcGDOd3C.js";import{n as i}from"./property-CcHbFR6H.js";import{r as v}from"./state-Cw-lAQBx.js";import"./index-fCdhHCjk.js";import{t as m}from"./if-defined-4GS2c12S.js";import{g as c}from"./get-api-url-BNamD47E.js";/* empty css             */import"./flp-card-CdUiWKie.js";import"./component.styles-MQe3hEw3.js";import"./slot-BCTpRhJ5.js";import"./class-map-635SZfYW.js";import"./index-D-l25SpK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./flp-button-DKNOhfQI.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-DnWocktz.js";import"./form-control.styles-qMh6M_JA.js";import"./live-DyBFC1nW.js";import"./directive-helpers-CHX3h6dV.js";import"./default-value-DEpNiEhc.js";import"./flp-logo-BmvhRZ3J.js";import"./flp-divider-CYuWwxR4.js";const P=h`
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
`;var _=Object.defineProperty,w=Object.getOwnPropertyDescriptor,o=(a,t,l,p)=>{for(var n=p>1?void 0:p?w(t,l):t,r=a.length-1,g;r>=0;r--)(g=a[r])&&(n=(p?g(t,l,n):g(n))||n);return p&&n&&_(t,l,n),n};let e=class extends y{constructor(){super(...arguments),this.tenantKey="",this.loginCallback="",this.logoutCallback="",this.name="",this.staging=!1,this.develop=!1,this.loginPending=!1}onSubmitHandle(a){a.preventDefault(),this.loginPending=!0;const t=new FormData(a.target);if(Array.from(t.values()).some(l=>l==="")){this.loginPending=!1;return}console.log("email",t.get("email")),console.log("password",t.get("password")),console.log("name",t.get("name")),console.log("tenant-key",t.get("tenant-key")),console.log("login-callback",t.get("login-callback")),console.log("logout-callback",t.get("logout-callback")),fetch(`${c(this.staging,this.develop)}/api/${t.get("tenant-key")}/signup`,{method:"POST",body:t}).then(l=>l.json()).then(l=>{window.location.replace(`${this.loginCallback}/api/${l.message.token}`)}).finally(()=>this.loginPending=!1)}render(){return b`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          <flp-logo></flp-logo>
        </div>
        <h2 class="text-align-center">Create your account</h2>
        <flp-input class="mb-small"  type="text" required name="name" label="Name"></flp-input>
        <flp-input class="mb-small"  type="email" required name="email" label="Email"></flp-input>
        <flp-input class="mb-medium"  name="password" required type="password" label="Password" password-toggle></flp-input>
        <input type="hidden" name="tenant-key" value=${this.tenantKey}/>
        <input type="hidden" name="login-callback" value=${this.loginCallback} />
        <input type="hidden" name="logout-callback" value=${this.logoutCallback} />
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
          <flp-button class="login--button" variant="text" href=${`${c(this.staging,this.develop)}/${this.tenantKey}/login`}>Login</flp-button>
        </div>
      </form>
    </flp-card>`}};e.styles=[P];o([i({type:String,attribute:"tenant_key"})],e.prototype,"tenantKey",2);o([i({type:String,attribute:"login_callback"})],e.prototype,"loginCallback",2);o([i({type:String,attribute:"logout_callback"})],e.prototype,"logoutCallback",2);o([i({type:String,attribute:"name"})],e.prototype,"name",2);o([i({type:Boolean,attribute:"staging"})],e.prototype,"staging",2);o([i({type:Boolean,attribute:"develop"})],e.prototype,"develop",2);o([v()],e.prototype,"loginPending",2);e=o([k("flp-signup")],e);const X={title:"containers/Signup",component:"flp-signup"},x={},$=(a,{globals:{theme:t}})=>b`
  <div class="flp-theme-light">
    <flp-signup .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback">
    </flp-signup>
  </div>
`,s=$.bind({});s.args=x;var u,d,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`(props: Signup, {
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
\``,...(f=(d=s.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const Y=["Default"];export{s as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=flp-signup.stories-Ca0IBjHp.js.map
