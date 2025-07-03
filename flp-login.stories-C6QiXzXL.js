import{i as y,x as p}from"./lit-element-ChAK2pu5.js";import"./index-D2dJve2F.js";import{F as w,t as v}from"./custom-element-BSoDmtoY.js";import{n as l}from"./property-Bhw6601B.js";import{r as b}from"./state-dCtEkiMd.js";import"./index-CFp6X0B1.js";import{R as x}from"./index-D2NdRWdU.js";import{F as _}from"./flp-spinner-DWSNUnAx.js";import{l as P}from"./create-component-BisMVfBB.js";import{o as c}from"./if-defined-Bhm9Cegq.js";import{g as d}from"./get-api-url-CY5fWP8z.js";/* empty css             */import"./flp-card-D8iNYDgW.js";import"./component.styles-CK1ltfsO.js";import"./slot-BCTpRhJ5.js";import"./class-map-DFy0aMwt.js";import"./flp-button-BZhtY4z0.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-BvhwxHaN.js";import"./form-control.styles-BBEJYdf5.js";import"./live-DswdT67c.js";import"./directive-helpers-DwFNumRl.js";import"./default-value-DaLIHyno.js";import"./flp-logo-CV8Fjdwo.js";import"./flp-divider-CsJRYlP4.js";import"./flp-icon-hM3eViNJ.js";import"./commonjsHelpers-Cpj98o6Y.js";P({tagName:"flp-spinner",elementClass:_,react:x,events:{},displayName:"FlpSpinner"});const k=y`

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
  width: 20%;
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
`;var $=Object.defineProperty,U=Object.getOwnPropertyDescriptor,i=(e,r,n,t)=>{for(var a=t>1?void 0:t?U(r,n):r,m=e.length-1,g;m>=0;m--)(g=e[m])&&(a=(t?g(r,n,a):g(a))||a);return t&&a&&$(r,n,a),a};let o=class extends w{constructor(){super(...arguments),this.tenantKey="",this.logo="",this.signUpUrl="",this.resetPasswordUrl="",this.staging=!1,this.develop=!1,this.mobileLogin=!1,this.loginPending=!1}async loginByGoogle(){fetch(`${d(this.staging,this.develop)}/api/${this.tenantKey}/google`,{method:"GET"}).then(e=>{if(e.ok)return e.json();if(e.status===404)throw this.errorText="User not found",new Error("User not found");if(e.status===403)throw this.errorText="Incorrect password",new Error("Incorrect password")}).then(e=>{window.location.href=e.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}async loginByApple(){console.log("login by apple")}async onSubmitHandle(e){e.preventDefault(),this.loginPending=!0;const r=new FormData(e.target);if(Array.from(r.values()).some(t=>t==="")){this.errorText="Password or email is empty",this.loginPending=!1;return}const n=new URLSearchParams;n.append("tenant_key",this.tenantKey),n.append("email",r.get("email")),n.append("password",r.get("password")),this.errorText=null,fetch(`${d(this.staging,this.develop)}/api/${this.tenantKey}/login`,{method:"POST",body:n,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(t=>{if(t.ok)return t.json();if(t.status===404)throw this.errorText="User not found",new Error("User not found");if(t.status===403)throw this.errorText="Incorrect password",new Error("Incorrect password")}).then(t=>{this.emit("flp-login-success",t.message),window.parent.postMessage({type:"LOGIN_SUCCESS",payload:t.message},"*"),window.location.href=t.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return p`
    <flp-card class="auth-container">
      <form .action=${`/api/${this.tenantKey}/google`} method="get">
        <div class="logo-container text-align-center">
          ${this.logo?p`<img .src=${this.logo} alt="logo" width="150" height="auto" />`:p`<flp-logo></flp-logo>`}
        </div>
        <h2 class="text-align-center">Witaj!</h2>
        <flp-button size="large" variant="default" type="submit">
          <flp-icon slot="prefix" name="google"></flp-icon>
          Zaloguj się z Google
        </flp-button>
      </form>
      <br/>
      <form .action=${`/api/${this.tenantKey}/apple`} method="get">
        <flp-button size="large" variant="default" type="submit">
          <flp-icon slot="prefix" name="apple"></flp-icon>
          Zaloguj się z Apple
        </flp-button>
      </form>
        <div class="login-by-email-text">
          <div class="login-by-email-text--line"></div>
          <div class="text-align-center">Lub zaloguj się przez email</div>
          <div class="login-by-email-text--line"></div>
        </div>
      </form>
      <form @submit=${this.onSubmitHandle}>
        <flp-input class="email--input" type="email" required name="email" label="Email"></flp-input>
        <div class="password--and-forgot-password-link--container">
          <flp-input name="password" required type="password" label="Hasło" password-toggle></flp-input>
          <div class="forgot-password-link--container">
            <flp-button variant="text" href=${this.resetPasswordUrl}>Zresetuj hasło</flp-button>
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
        >Zaloguj się</flp-button>
        <flp-button class="mb-medium" href=${this.signUpUrl} variant="primary" size="large" outline>Utwórz nowe konto przez email</flp-button>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};o.styles=[k];i([l({type:String,attribute:"tenant_key"})],o.prototype,"tenantKey",2);i([l({type:String,attribute:"logo"})],o.prototype,"logo",2);i([l({type:String,attribute:"signup_url"})],o.prototype,"signUpUrl",2);i([l({type:String,attribute:"reset_password_url"})],o.prototype,"resetPasswordUrl",2);i([l({type:Boolean,attribute:"staging"})],o.prototype,"staging",2);i([l({type:Boolean,attribute:"develop"})],o.prototype,"develop",2);i([l({type:Boolean,attribute:"mobile_login"})],o.prototype,"mobileLogin",2);i([b()],o.prototype,"errorText",2);i([b()],o.prototype,"loginPending",2);o=i([v("flp-login")],o);const rt={title:"containers/Login",component:"flp-login"},z={},S=(e,{globals:{theme:r}})=>p`
  <div class="flp-theme-light">
    <flp-login logo="https://flippico-assets.s3.eu-central-1.amazonaws.com/bajkomat/appstore.png" .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback"></flp-login>
  </div>
`,s=S.bind({});s.args=z;var f,u,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`(props: Login, {
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
//# sourceMappingURL=flp-login.stories-C6QiXzXL.js.map
