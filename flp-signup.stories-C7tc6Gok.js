import{i as h,x as b}from"./lit-element-UdLzEcH-.js";import{F as y,t as v}from"./custom-element-_dbbq29R.js";import{n as i}from"./property-Cw6hBOl6.js";import{r as _}from"./state-DfeXbQig.js";import"./index-DkI5ItvX.js";import{o as g}from"./if-defined-CeGyAtVP.js";import{g as c}from"./get-api-url-BNamD47E.js";/* empty css             */import"./flp-card-Ab_3ZEjg.js";import"./component.styles-BhDG6Xff.js";import"./slot-BCTpRhJ5.js";import"./class-map-B1m419Bd.js";import"./index-D-l25SpK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./flp-button-CwVnRmuL.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-D4mtfW6f.js";import"./form-control.styles-BpfJCVAq.js";import"./live-PHw1x3wN.js";import"./directive-helpers-gF-rCVue.js";import"./default-value-B18UwA06.js";import"./flp-logo-Bq5emD1Z.js";import"./flp-divider-rtfFuWw5.js";const k=h`
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
`;var P=Object.defineProperty,x=Object.getOwnPropertyDescriptor,n=(a,l,r,e)=>{for(var o=e>1?void 0:e?x(l,r):l,s=a.length-1,m;s>=0;s--)(m=a[s])&&(o=(e?m(l,r,o):m(o))||o);return e&&o&&P(l,r,o),o};let t=class extends y{constructor(){super(...arguments),this.tenantKey="",this.loginCallback="",this.logoutCallback="",this.name="",this.staging=!1,this.develop=!1,this.loginPending=!1}onSubmitHandle(a){a.preventDefault(),this.loginPending=!0;const l=new FormData(a.target);if(Array.from(l.values()).some(e=>e==="")){this.loginPending=!1;return}const r=new URLSearchParams;fetch(`${c(this.staging,this.develop)}/api/${this.tenantKey}/signup`,{method:"POST",body:r,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>{console.log(e)}).finally(()=>this.loginPending=!1)}render(){return b`<flp-card class="auth-container">
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
    </flp-card>`}};t.styles=[k];n([i({type:String,attribute:"tenant_key"})],t.prototype,"tenantKey",2);n([i({type:String,attribute:"login_callback"})],t.prototype,"loginCallback",2);n([i({type:String,attribute:"logout_callback"})],t.prototype,"logoutCallback",2);n([i({type:String,attribute:"name"})],t.prototype,"name",2);n([i({type:Boolean,attribute:"staging"})],t.prototype,"staging",2);n([i({type:Boolean,attribute:"develop"})],t.prototype,"develop",2);n([_()],t.prototype,"loginPending",2);t=n([v("flp-signup")],t);const X={title:"containers/Signup",component:"flp-signup"},w={},S=(a,{globals:{theme:l}})=>b`
  <div class="flp-theme-light">
    <flp-signup .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback">
    </flp-signup>
  </div>
`,p=S.bind({});p.args=w;var u,d,f;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`(props: Signup, {
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
\``,...(f=(d=p.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const Y=["Default"];export{p as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=flp-signup.stories-C7tc6Gok.js.map
