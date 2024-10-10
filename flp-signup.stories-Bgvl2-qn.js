import{i as b,x as f}from"./lit-element-UdLzEcH-.js";import{F as y,t as v}from"./custom-element-_dbbq29R.js";import{n as p}from"./property-Cw6hBOl6.js";import{r as h}from"./state-DfeXbQig.js";import"./index-DkI5ItvX.js";import{o as g}from"./if-defined-CeGyAtVP.js";import{g as w}from"./get-api-url-BNamD47E.js";/* empty css             */import"./flp-card-Ab_3ZEjg.js";import"./component.styles-BhDG6Xff.js";import"./slot-BCTpRhJ5.js";import"./class-map-B1m419Bd.js";import"./index-D-l25SpK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./flp-button-CwVnRmuL.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-D4mtfW6f.js";import"./form-control.styles-BpfJCVAq.js";import"./live-PHw1x3wN.js";import"./directive-helpers-gF-rCVue.js";import"./default-value-B18UwA06.js";import"./flp-logo-Bq5emD1Z.js";import"./flp-divider-rtfFuWw5.js";const x=b`
flp-button {
  width: 100%;
}
.error {
  color: var(--flp-color-warning-700);
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
`;var P=Object.defineProperty,_=Object.getOwnPropertyDescriptor,i=(r,e,n,t)=>{for(var l=t>1?void 0:t?_(e,n):e,s=r.length-1,m;s>=0;s--)(m=r[s])&&(l=(t?m(e,n,l):m(l))||l);return t&&l&&P(e,n,l),l};let o=class extends y{constructor(){super(...arguments),this.tenantKey="",this.name="",this.loginUrl="",this.staging=!1,this.develop=!1,this.loginPending=!1}onSubmitHandle(r){r.preventDefault(),this.loginPending=!0;const e=new FormData(r.target);if(Array.from(e.values()).some(t=>t==="")){this.loginPending=!1;return}const n=new URLSearchParams;n.append("name",e.get("name")),n.append("email",e.get("email")),n.append("password",e.get("password")),fetch(`${w(this.staging,this.develop)}/api/${this.tenantKey}/signup`,{method:"POST",body:n,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(t=>t.json()).then(t=>{if(console.log("response",t),t.code<4e3){window.location.href=t.message.redirect_url;return}this.errorText=t.message,r.target.reset()}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return f`<flp-card class="auth-container">
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
          .loading=${g(this.loginPending)} 
          .disabled=${g(this.loginPending)}
        >Signup</flp-button>
        <div class="login-container">
          <span>Already have account?</span>
          <flp-button class="login--button" variant="text" href=${this.loginUrl}>Login</flp-button>
        </div>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};o.styles=[x];i([p({type:String,attribute:"tenant_key"})],o.prototype,"tenantKey",2);i([p({type:String,attribute:"name"})],o.prototype,"name",2);i([p({type:String,attribute:"login_url"})],o.prototype,"loginUrl",2);i([p({type:Boolean,attribute:"staging"})],o.prototype,"staging",2);i([p({type:Boolean,attribute:"develop"})],o.prototype,"develop",2);i([h()],o.prototype,"errorText",2);i([h()],o.prototype,"loginPending",2);o=i([v("flp-signup")],o);const X={title:"containers/Signup",component:"flp-signup"},S={},k=(r,{globals:{theme:e}})=>f`
  <div class="flp-theme-light">
    <flp-signup .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback">
    </flp-signup>
  </div>
`,a=k.bind({});a.args=S;var c,u,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`(props: Signup, {
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
\``,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Y=["Default"];export{a as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=flp-signup.stories-Bgvl2-qn.js.map
