import{i as b,x as f}from"./lit-element-UdLzEcH-.js";import{F as h,t as y}from"./custom-element-_dbbq29R.js";import{n as i}from"./property-Cw6hBOl6.js";import{r as v}from"./state-DfeXbQig.js";import"./index-DkI5ItvX.js";import{o as g}from"./if-defined-CeGyAtVP.js";import{g as k}from"./get-api-url-BNamD47E.js";/* empty css             */import"./flp-card-Ab_3ZEjg.js";import"./component.styles-BhDG6Xff.js";import"./slot-BCTpRhJ5.js";import"./class-map-B1m419Bd.js";import"./index-D-l25SpK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./flp-button-CwVnRmuL.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-D4mtfW6f.js";import"./form-control.styles-BpfJCVAq.js";import"./live-PHw1x3wN.js";import"./directive-helpers-gF-rCVue.js";import"./default-value-B18UwA06.js";import"./flp-logo-Bq5emD1Z.js";import"./flp-divider-rtfFuWw5.js";const _=b`
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
`;var P=Object.defineProperty,w=Object.getOwnPropertyDescriptor,l=(p,n,t,a)=>{for(var o=a>1?void 0:a?w(n,t):n,s=p.length-1,m;s>=0;s--)(m=p[s])&&(o=(a?m(n,t,o):m(o))||o);return a&&o&&P(n,t,o),o};let e=class extends h{constructor(){super(...arguments),this.tenantKey="",this.loginCallback="",this.logoutCallback="",this.name="",this.loginUrl="",this.staging=!1,this.develop=!1,this.loginPending=!1}onSubmitHandle(p){p.preventDefault(),this.loginPending=!0;const n=new FormData(p.target);if(Array.from(n.values()).some(a=>a==="")){this.loginPending=!1;return}const t=new URLSearchParams;t.append("tenant_key",this.tenantKey),t.append("login_callback",this.loginCallback),t.append("logout_callback",this.logoutCallback),t.append("name",n.get("name")),t.append("email",n.get("email")),t.append("password",n.get("password")),fetch(`${k(this.staging,this.develop)}/api/${this.tenantKey}/signup`,{method:"POST",body:t,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(a=>{console.log(a)}).finally(()=>this.loginPending=!1)}render(){return f`<flp-card class="auth-container">
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
    </flp-card>`}};e.styles=[_];l([i({type:String,attribute:"tenant_key"})],e.prototype,"tenantKey",2);l([i({type:String,attribute:"login_callback"})],e.prototype,"loginCallback",2);l([i({type:String,attribute:"logout_callback"})],e.prototype,"logoutCallback",2);l([i({type:String,attribute:"name"})],e.prototype,"name",2);l([i({type:String,attribute:"login_url"})],e.prototype,"loginUrl",2);l([i({type:Boolean,attribute:"staging"})],e.prototype,"staging",2);l([i({type:Boolean,attribute:"develop"})],e.prototype,"develop",2);l([v()],e.prototype,"loginPending",2);e=l([y("flp-signup")],e);const X={title:"containers/Signup",component:"flp-signup"},x={},S=(p,{globals:{theme:n}})=>f`
  <div class="flp-theme-light">
    <flp-signup .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback">
    </flp-signup>
  </div>
`,r=S.bind({});r.args=x;var c,u,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`(props: Signup, {
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
\``,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Y=["Default"];export{r as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=flp-signup.stories-D2TqgAji.js.map