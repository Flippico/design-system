import{i as y,x as p}from"./lit-element-UdLzEcH-.js";import"./index-D8MQo7CL.js";import{F as w,t as v}from"./custom-element-_dbbq29R.js";import{n as l}from"./property-Cw6hBOl6.js";import{r as b}from"./state-DfeXbQig.js";import"./index-B6wvuWEg.js";import{R as x}from"./index-D2NdRWdU.js";import{F as P}from"./flp-spinner-Dhf14Iya.js";import{l as _}from"./create-component-DR4KZdWz.js";import{o as c}from"./if-defined-CeGyAtVP.js";import{g as d}from"./get-api-url-BNamD47E.js";/* empty css             */import"./flp-card-Ab_3ZEjg.js";import"./component.styles-BhDG6Xff.js";import"./slot-BCTpRhJ5.js";import"./class-map-B1m419Bd.js";import"./flp-button-CwVnRmuL.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-D4mtfW6f.js";import"./form-control.styles-BpfJCVAq.js";import"./live-PHw1x3wN.js";import"./directive-helpers-gF-rCVue.js";import"./default-value-B18UwA06.js";import"./flp-logo-Bq5emD1Z.js";import"./flp-divider-rtfFuWw5.js";import"./flp-icon-D5FDkxOg.js";import"./commonjsHelpers-Cpj98o6Y.js";_({tagName:"flp-spinner",elementClass:P,react:x,events:{},displayName:"FlpSpinner"});const k=y`

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
`;var $=Object.defineProperty,U=Object.getOwnPropertyDescriptor,r=(t,i,n,e)=>{for(var a=e>1?void 0:e?U(i,n):i,m=t.length-1,g;m>=0;m--)(g=t[m])&&(a=(e?g(i,n,a):g(a))||a);return e&&a&&$(i,n,a),a};let o=class extends w{constructor(){super(...arguments),this.tenantKey="",this.logo="",this.signUpUrl="",this.resetPasswordUrl="",this.staging=!1,this.develop=!1,this.mobileLogin=!1,this.loginPending=!1}async loginByGoogle(){fetch(`${d(this.staging,this.develop)}/api/${this.tenantKey}/google`,{method:"GET"}).then(t=>{if(t.ok)return t.json();if(t.status===404)throw this.errorText="User not found",new Error("User not found");if(t.status===403)throw this.errorText="Incorrect password",new Error("Incorrect password")}).then(t=>{window.location.href=t.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}async loginByApple(){console.log("login by apple")}async onSubmitHandle(t){t.preventDefault(),this.loginPending=!0;const i=new FormData(t.target);if(Array.from(i.values()).some(e=>e==="")){this.errorText="Password or email is empty",this.loginPending=!1;return}const n=new URLSearchParams;n.append("tenant_key",this.tenantKey),n.append("email",i.get("email")),n.append("password",i.get("password")),this.errorText=null,fetch(`${d(this.staging,this.develop)}/api/${this.tenantKey}/login`,{method:"POST",body:n,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>{if(e.ok)return e.json();if(e.status===404)throw this.errorText="User not found",new Error("User not found");if(e.status===403)throw this.errorText="Incorrect password",new Error("Incorrect password")}).then(e=>{window.location.href=e.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return p`
    <flp-card class="auth-container">
      <form .action=${`/api/${this.tenantKey}/google`} method="get">
        <div class="logo-container text-align-center">
          ${this.logo?p`<img .src=${this.logo} alt="logo" width="150" height="150" />`:p`<flp-logo></flp-logo>`}
        </div>
        <h2 class="text-align-center">Hello again!</h2>
        <flp-button size="large" variant="default" type="submit">
          <flp-icon slot="prefix" name="google"></flp-icon>
          Login by Google
        </flp-button>
      </form>
      <form .action=${`/api/${this.tenantKey}/apple`} method="get"></form>
        <br/>
        <br/>
        <flp-button size="large" variant="default" type="submit">
          <flp-icon slot="prefix" name="apple"></flp-icon>
          Login by Apple
        </flp-button>

        <div class="login-by-email-text">
          <div class="login-by-email-text--line"></div>
          <div class="text-align-center">or login by email</div>
          <div class="login-by-email-text--line"></div>
        </div>
      </form>
      <form @submit=${this.onSubmitHandle}>
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
    </flp-card>`}};o.styles=[k];r([l({type:String,attribute:"tenant_key"})],o.prototype,"tenantKey",2);r([l({type:String,attribute:"logo"})],o.prototype,"logo",2);r([l({type:String,attribute:"signup_url"})],o.prototype,"signUpUrl",2);r([l({type:String,attribute:"reset_password_url"})],o.prototype,"resetPasswordUrl",2);r([l({type:Boolean,attribute:"staging"})],o.prototype,"staging",2);r([l({type:Boolean,attribute:"develop"})],o.prototype,"develop",2);r([l({type:Boolean,attribute:"mobile_login"})],o.prototype,"mobileLogin",2);r([b()],o.prototype,"errorText",2);r([b()],o.prototype,"loginPending",2);o=r([v("flp-login")],o);const it={title:"containers/Login",component:"flp-login"},T={},S=(t,{globals:{theme:i}})=>p`
  <div class="flp-theme-light">
    <flp-login logo="https://flippico-assets.s3.eu-central-1.amazonaws.com/bajkomat/appstore.png" .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback"></flp-login>
  </div>
`,s=S.bind({});s.args=T;var f,u,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`(props: Login, {
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
\``,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const nt=["Default"];export{s as Default,nt as __namedExportsOrder,it as default};
//# sourceMappingURL=flp-login.stories-B7sx3WBE.js.map
