import{i as y,x as a}from"./lit-element-BQC2Loq1.js";import"./index-N2IKheW7.js";import{F as w,t as v}from"./custom-element-NRwDiNuy.js";import{n as l}from"./property-_HeZ1DXc.js";import{r as b}from"./state-BxOqSyyB.js";import"./index-sk_XPOIV.js";import{R as x}from"./index-D2NdRWdU.js";import{F as P}from"./flp-spinner-Cq3kCZo3.js";import{l as _}from"./create-component-BisMVfBB.js";import{o as d}from"./if-defined-d81IzTIz.js";import{g as c}from"./get-api-url-CY5fWP8z.js";/* empty css             */import"./flp-card-BLoqAFke.js";import"./component.styles-DEWewzc5.js";import"./slot-BCTpRhJ5.js";import"./class-map-sNB-Nzgq.js";import"./flp-button-DALh9hCZ.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-BgjjQIjA.js";import"./form-control.styles-CPv2Bp3t.js";import"./live-DG42czA1.js";import"./directive-helpers-Ccz-HSuR.js";import"./default-value-Bc_eFbvY.js";import"./flp-logo-DsyPtL_5.js";import"./flp-divider-1O_jptjy.js";import"./flp-icon-C3YNay3Q.js";import"./commonjsHelpers-Cpj98o6Y.js";_({tagName:"flp-spinner",elementClass:P,react:x,events:{},displayName:"FlpSpinner"});const $=y`

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
`;var k=Object.defineProperty,U=Object.getOwnPropertyDescriptor,i=(e,n,r,t)=>{for(var s=t>1?void 0:t?U(n,r):n,m=e.length-1,g;m>=0;m--)(g=e[m])&&(s=(t?g(n,r,s):g(s))||s);return t&&s&&k(n,r,s),s};let o=class extends w{constructor(){super(...arguments),this.tenantKey="",this.logo="",this.signUpUrl="",this.resetPasswordUrl="",this.staging=!1,this.develop=!1,this.mobileLogin=!1,this._isAdminPanel=!1,this.loginPending=!1}get isAdminPanel(){return this._isAdminPanel==="true"}async loginByGoogle(){fetch(`${c(this.staging,this.develop)}/api/${this.tenantKey}/google`,{method:"GET"}).then(e=>{if(e.ok)return e.json();if(e.status===404)throw this.errorText="User not found",new Error("User not found");if(e.status===403)throw this.errorText="Incorrect password",new Error("Incorrect password")}).then(e=>{window.location.href=e.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}async loginByApple(){console.log("login by apple")}async onSubmitHandle(e){e.preventDefault(),this.loginPending=!0;const n=new FormData(e.target);if(Array.from(n.values()).some(t=>t==="")){this.errorText="Password or email is empty",this.loginPending=!1;return}const r=new URLSearchParams;r.append("tenant_key",this.tenantKey),r.append("email",n.get("email")),r.append("password",n.get("password")),this.errorText=null,fetch(`${c(this.staging,this.develop)}/api/${this.tenantKey}/login`,{method:"POST",body:r,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(t=>{if(t.ok)return t.json();if(t.status===404)throw this.errorText="User not found",new Error("User not found");if(t.status===403)throw this.errorText="Incorrect password",new Error("Incorrect password")}).then(t=>{this.emit("flp-login-success",t.message),window.parent.postMessage({type:"LOGIN_SUCCESS",payload:t.message},"*"),window.location.href=t.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return a`
    <flp-card class="auth-container">
      <form .action=${`/api/${this.tenantKey}/google`} method="get">
        <div class="logo-container text-align-center">
          ${this.logo?a`<img .src=${this.logo} alt="logo" width="150" height="auto" />`:a`<flp-logo></flp-logo>`}
        </div>
        <h2 class="text-align-center">Witaj!</h2>
        ${this.isAdminPanel?null:a`
          <flp-button size="large" variant="default" type="submit">
            <flp-icon slot="prefix" name="google"></flp-icon>
            Zaloguj się z Google
          </flp-button>
        `}
      </form>
      <br/>
      ${this.isAdminPanel?null:a`
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
      `}
      <form @submit=${this.onSubmitHandle}>
        <flp-input class="email--input" type="email" required name="email" label="Email"></flp-input>
        <div class="password--and-forgot-password-link--container">
          <flp-input name="password" required type="password" label="Hasło" password-toggle></flp-input>
          ${this.isAdminPanel?null:a`
            <div class="forgot-password-link--container">
            <flp-button variant="text" href=${this.resetPasswordUrl}>Zresetuj hasło</flp-button>
          </div>
          `}
        </div>
        <input type="hidden" name="tenant_key" value=${this.tenantKey}/>
        <flp-button
          class="mb-small"
          size="large"
          variant="primary"
          type="submit"
          .loading=${d(this.loginPending)}
          .disabled=${d(this.loginPending)}
        >Zaloguj się</flp-button>
        ${this.isAdminPanel?null:a`<flp-button class="mb-medium" href=${this.signUpUrl} variant="primary" size="large" outline>Utwórz nowe konto przez email</flp-button>`}
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};o.styles=[$];i([l({type:String,attribute:"tenant_key"})],o.prototype,"tenantKey",2);i([l({type:String,attribute:"logo"})],o.prototype,"logo",2);i([l({type:String,attribute:"signup_url"})],o.prototype,"signUpUrl",2);i([l({type:String,attribute:"reset_password_url"})],o.prototype,"resetPasswordUrl",2);i([l({type:Boolean,attribute:"staging"})],o.prototype,"staging",2);i([l({type:Boolean,attribute:"develop"})],o.prototype,"develop",2);i([l({type:Boolean,attribute:"mobile_login"})],o.prototype,"mobileLogin",2);i([l({attribute:"is_admin_panel"})],o.prototype,"_isAdminPanel",2);i([b()],o.prototype,"errorText",2);i([b()],o.prototype,"loginPending",2);o=i([v("flp-login")],o);const nt={title:"containers/Login",component:"flp-login"},z={},S=(e,{globals:{theme:n}})=>a`
  <div class="flp-theme-light">
    <flp-login logo="https://flippico-assets.s3.eu-central-1.amazonaws.com/bajkomat/appstore.png" .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback"></flp-login>
  </div>
`,p=S.bind({});p.args=z;var f,u,h;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`(props: Login, {
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
\``,...(h=(u=p.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const rt=["Default"];export{p as Default,rt as __namedExportsOrder,nt as default};
//# sourceMappingURL=flp-login.stories-CqRVmmQj.js.map
