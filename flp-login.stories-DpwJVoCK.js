import{i as y,x as p}from"./lit-element-BOnOm6HC.js";import"./index-CP02Amvn.js";import{F as w,t as v}from"./custom-element-G_of5crQ.js";import{n as a}from"./property-DtfuD-FT.js";import{r as b}from"./state-BzG7ktrc.js";import"./index-Cp8_5IHE.js";import{R as x}from"./index-D6M23izK.js";import{F as _}from"./flp-spinner-C--Zlg_Y.js";import{l as P}from"./create-component-CL-XmzdD.js";import{o as c}from"./if-defined-4aLJvHj9.js";import{g as d}from"./get-api-url-CY5fWP8z.js";/* empty css             */import"./flp-card-DLywQTEh.js";import"./component.styles-BRPzpB69.js";import"./slot-BCTpRhJ5.js";import"./class-map-CkhaUZsQ.js";import"./flp-button-BUnE6aW6.js";import"./query-BApjzB0v.js";import"./form-JvG0YwJe.js";import"./watch-CEsCE2EF.js";import"./flp-input-By9ifSuW.js";import"./form-control.styles-D3ttbRfV.js";import"./live-Btws1DVc.js";import"./directive-helpers-Ew8efCbj.js";import"./default-value-Deq5j5nO.js";import"./flp-logo-Br9aHXR-.js";import"./flp-divider-BO9qlRoO.js";import"./flp-icon-RHbQcKsa.js";import"./commonjsHelpers-Cpj98o6Y.js";P({tagName:"flp-spinner",elementClass:_,react:x,events:{},displayName:"FlpSpinner"});const k=y`

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
`;var $=Object.defineProperty,U=Object.getOwnPropertyDescriptor,i=(e,r,n,t)=>{for(var l=t>1?void 0:t?U(r,n):r,m=e.length-1,g;m>=0;m--)(g=e[m])&&(l=(t?g(r,n,l):g(l))||l);return t&&l&&$(r,n,l),l};let o=class extends w{constructor(){super(...arguments),this.tenantKey="",this.logo="",this.signUpUrl="",this.resetPasswordUrl="",this.staging=!1,this.develop=!1,this.mobileLogin=!1,this.useEvent=!1,this.loginPending=!1}async loginByGoogle(){fetch(`${d(this.staging,this.develop)}/api/${this.tenantKey}/google`,{method:"GET"}).then(e=>{if(e.ok)return e.json();if(e.status===404)throw this.errorText="User not found",new Error("User not found");if(e.status===403)throw this.errorText="Incorrect password",new Error("Incorrect password")}).then(e=>{window.location.href=e.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}async loginByApple(){console.log("login by apple")}async onSubmitHandle(e){e.preventDefault(),this.loginPending=!0;const r=new FormData(e.target);if(Array.from(r.values()).some(t=>t==="")){this.errorText="Password or email is empty",this.loginPending=!1;return}const n=new URLSearchParams;n.append("tenant_key",this.tenantKey),n.append("email",r.get("email")),n.append("password",r.get("password")),this.errorText=null,fetch(`${d(this.staging,this.develop)}/api/${this.tenantKey}/login`,{method:"POST",body:n,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(t=>{if(t.ok)return t.json();if(t.status===404)throw this.errorText="User not found",new Error("User not found");if(t.status===403)throw this.errorText="Incorrect password",new Error("Incorrect password")}).then(t=>{if(this.useEvent){this.emit("flp-login-success",t.message);return}window.location.href=t.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return p`
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
      <br/>
      <form .action=${`/api/${this.tenantKey}/apple`} method="get">
        <flp-button size="large" variant="default" type="submit">
          <flp-icon slot="prefix" name="apple"></flp-icon>
          Login by Apple
        </flp-button>
      </form>
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
    </flp-card>`}};o.styles=[k];i([a({type:String,attribute:"tenant_key"})],o.prototype,"tenantKey",2);i([a({type:String,attribute:"logo"})],o.prototype,"logo",2);i([a({type:String,attribute:"signup_url"})],o.prototype,"signUpUrl",2);i([a({type:String,attribute:"reset_password_url"})],o.prototype,"resetPasswordUrl",2);i([a({type:Boolean,attribute:"staging"})],o.prototype,"staging",2);i([a({type:Boolean,attribute:"develop"})],o.prototype,"develop",2);i([a({type:Boolean,attribute:"mobile_login"})],o.prototype,"mobileLogin",2);i([a({type:Boolean,attribute:"use_event"})],o.prototype,"useEvent",2);i([b()],o.prototype,"errorText",2);i([b()],o.prototype,"loginPending",2);o=i([v("flp-login")],o);const rt={title:"containers/Login",component:"flp-login"},T={},E=(e,{globals:{theme:r}})=>p`
  <div class="flp-theme-light">
    <flp-login logo="https://flippico-assets.s3.eu-central-1.amazonaws.com/bajkomat/appstore.png" .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback"></flp-login>
  </div>
`,s=E.bind({});s.args=T;var f,u,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`(props: Login, {
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
\``,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const nt=["Default"];export{s as Default,nt as __namedExportsOrder,rt as default};
//# sourceMappingURL=flp-login.stories-DpwJVoCK.js.map
