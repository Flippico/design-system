import{i as h,x as p}from"./lit-element-UdLzEcH-.js";import"./index-D8MQo7CL.js";import{F as y,t as w}from"./custom-element-_dbbq29R.js";import{n as r}from"./property-Cw6hBOl6.js";import{r as b}from"./state-DfeXbQig.js";import"./index-B6wvuWEg.js";import{R as v}from"./index-D2NdRWdU.js";import{F as x}from"./flp-spinner-Dhf14Iya.js";import{l as k}from"./create-component-DR4KZdWz.js";import{o as c}from"./if-defined-CeGyAtVP.js";import{g as P}from"./get-api-url-BNamD47E.js";/* empty css             */import"./flp-card-Ab_3ZEjg.js";import"./component.styles-BhDG6Xff.js";import"./slot-BCTpRhJ5.js";import"./class-map-B1m419Bd.js";import"./flp-button-CwVnRmuL.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-D4mtfW6f.js";import"./form-control.styles-BpfJCVAq.js";import"./live-PHw1x3wN.js";import"./directive-helpers-gF-rCVue.js";import"./default-value-B18UwA06.js";import"./flp-logo-Bq5emD1Z.js";import"./flp-divider-rtfFuWw5.js";import"./flp-icon-D5FDkxOg.js";import"./commonjsHelpers-Cpj98o6Y.js";k({tagName:"flp-spinner",elementClass:x,react:v,events:{},displayName:"FlpSpinner"});const _=h`

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
`;var $=Object.defineProperty,U=Object.getOwnPropertyDescriptor,e=(a,i,n,t)=>{for(var l=t>1?void 0:t?U(i,n):i,m=a.length-1,g;m>=0;m--)(g=a[m])&&(l=(t?g(i,n,l):g(l))||l);return t&&l&&$(i,n,l),l};let o=class extends y{constructor(){super(...arguments),this.tenantKey="",this.logo="",this.signUpUrl="",this.resetPasswordUrl="",this.staging=!1,this.develop=!1,this.mobileLogin=!1,this.loginPending=!1}async loginByGoogle(){window.location.href='bajkomat://login?token="sds"'}async loginByApple(){console.log("login by apple")}async onSubmitHandle(a){a.preventDefault(),this.loginPending=!0;const i=new FormData(a.target);if(Array.from(i.values()).some(t=>t==="")){this.errorText="Password or email is empty",this.loginPending=!1;return}const n=new URLSearchParams;n.append("tenant_key",this.tenantKey),n.append("email",i.get("email")),n.append("password",i.get("password")),this.errorText=null,fetch(`${P(this.staging,this.develop)}/api/${this.tenantKey}/login`,{method:"POST",body:n,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(t=>{if(t.ok&&t.json(),t.status===404)throw this.errorText="User not found",new Error("User not found");if(t.status===403)throw this.errorText="Incorrect password",new Error("Incorrect password")}).then(t=>{console.log("response",t),window.location.href=t.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return p`
    <flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          ${this.logo?p`<img .src=${this.logo} alt="logo" width="150" height="150" />`:p`<flp-logo></flp-logo>`}
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
          <flp-input name="password" required type="password" label="Password" password-toggle></flp-input>
          <div class="forgot-password-link--container">
            <flp-button variant="text" href=${this.resetPasswordUrl}>Fogrot your password?</flp-button>
          </div>
        </div>
        <input type="hidden" name="tenant_key" value=${this.tenantKey}/>
        <flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${c(this.loginPending)} 
          .disabled=${c(this.loginPending)}
        >Login</flp-button>
        <flp-button class="mb-medium" href=${this.signUpUrl} variant="primary" size="large" outline>Create new account by email</flp-button>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};o.styles=[_];e([r({type:String,attribute:"tenant_key"})],o.prototype,"tenantKey",2);e([r({type:String,attribute:"logo"})],o.prototype,"logo",2);e([r({type:String,attribute:"signup_url"})],o.prototype,"signUpUrl",2);e([r({type:String,attribute:"reset_password_url"})],o.prototype,"resetPasswordUrl",2);e([r({type:Boolean,attribute:"staging"})],o.prototype,"staging",2);e([r({type:Boolean,attribute:"develop"})],o.prototype,"develop",2);e([r({type:Boolean,attribute:"mobile_login"})],o.prototype,"mobileLogin",2);e([b()],o.prototype,"errorText",2);e([b()],o.prototype,"loginPending",2);o=e([w("flp-login")],o);const nt={title:"containers/Login",component:"flp-login"},S={},L=(a,{globals:{theme:i}})=>p`
  <div class="flp-theme-light">
    <flp-login logo="https://flippico-assets.s3.eu-central-1.amazonaws.com/bajkomat/appstore.png" .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback"></flp-login>
  </div>
`,s=L.bind({});s.args=S;var d,f,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`(props: Login, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-login logo="https://flippico-assets.s3.eu-central-1.amazonaws.com/bajkomat/appstore.png" .develop=\${true} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback"></flp-login>
  </div>
\``,...(u=(f=s.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const lt=["Default"];export{s as Default,lt as __namedExportsOrder,nt as default};
//# sourceMappingURL=flp-login.stories-BAYT1ZfK.js.map
