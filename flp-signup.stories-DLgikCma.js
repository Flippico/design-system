import{i as b,x as f}from"./lit-element-UdLzEcH-.js";import{F as h,t as y}from"./custom-element-_dbbq29R.js";import{n as i}from"./property-Cw6hBOl6.js";import{r as v}from"./state-DfeXbQig.js";import"./index-DkI5ItvX.js";import{o as g}from"./if-defined-CeGyAtVP.js";import{g as _}from"./get-api-url-BNamD47E.js";/* empty css             */import"./flp-card-Ab_3ZEjg.js";import"./component.styles-BhDG6Xff.js";import"./slot-BCTpRhJ5.js";import"./class-map-B1m419Bd.js";import"./index-D-l25SpK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./flp-button-CwVnRmuL.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-D4mtfW6f.js";import"./form-control.styles-BpfJCVAq.js";import"./live-PHw1x3wN.js";import"./directive-helpers-gF-rCVue.js";import"./default-value-B18UwA06.js";import"./flp-logo-Bq5emD1Z.js";import"./flp-divider-rtfFuWw5.js";const k=b`
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
`;var w=Object.defineProperty,P=Object.getOwnPropertyDescriptor,a=(r,n,t,l)=>{for(var o=l>1?void 0:l?P(n,t):n,s=r.length-1,m;s>=0;s--)(m=r[s])&&(o=(l?m(n,t,o):m(o))||o);return l&&o&&w(n,t,o),o};let e=class extends h{constructor(){super(...arguments),this.tenantKey="",this.loginCallback="",this.logoutCallback="",this.name="",this.loginUrl="",this.staging=!1,this.develop=!1,this.loginPending=!1}onSubmitHandle(r){r.preventDefault(),this.loginPending=!0;const n=new FormData(r.target);if(Array.from(n.values()).some(l=>l==="")){this.loginPending=!1;return}const t=new URLSearchParams;t.append("tenant_key",this.tenantKey),t.append("login_callback",this.loginCallback),t.append("logout_callback",this.logoutCallback),t.append("name",n.get("name")),t.append("email",n.get("email")),t.append("password",n.get("password")),fetch(`${_(this.staging,this.develop)}/api/${this.tenantKey}/signup`,{method:"POST",body:t,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(l=>l.json()).then(l=>{window.location.href=l.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return f`<flp-card class="auth-container">
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
          <flp-button class="login--button" variant="text" href=${this.loginUrl}>Login</flp-button>
        </div>
      </form>
    </flp-card>`}};e.styles=[k];a([i({type:String,attribute:"tenant_key"})],e.prototype,"tenantKey",2);a([i({type:String,attribute:"login_callback"})],e.prototype,"loginCallback",2);a([i({type:String,attribute:"logout_callback"})],e.prototype,"logoutCallback",2);a([i({type:String,attribute:"name"})],e.prototype,"name",2);a([i({type:String,attribute:"login_url"})],e.prototype,"loginUrl",2);a([i({type:Boolean,attribute:"staging"})],e.prototype,"staging",2);a([i({type:Boolean,attribute:"develop"})],e.prototype,"develop",2);a([v()],e.prototype,"loginPending",2);e=a([y("flp-signup")],e);const X={title:"containers/Signup",component:"flp-signup"},x={},S=(r,{globals:{theme:n}})=>f`
  <div class="flp-theme-light">
    <flp-signup .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback">
    </flp-signup>
  </div>
`,p=S.bind({});p.args=x;var c,u,d;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`(props: Signup, {
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
\``,...(d=(u=p.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Y=["Default"];export{p as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=flp-signup.stories-DLgikCma.js.map
