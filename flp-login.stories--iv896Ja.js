import{i as v,x as f}from"./lit-element-UdLzEcH-.js";import{l as b}from"./index-DkI5ItvX.js";import{F as w,t as x}from"./custom-element-_dbbq29R.js";import{n as i}from"./property-Cw6hBOl6.js";import{r as y}from"./state-DfeXbQig.js";import{F as k}from"./flp-icon-D5FDkxOg.js";import{a as h}from"./index-D-l25SpK.js";import{F as _}from"./flp-spinner-Dhf14Iya.js";import{o as m}from"./if-defined-CeGyAtVP.js";import{g as P}from"./get-api-url-BNamD47E.js";/* empty css             */import"./flp-card-Ab_3ZEjg.js";import"./component.styles-BhDG6Xff.js";import"./slot-BCTpRhJ5.js";import"./class-map-B1m419Bd.js";import"./flp-button-CwVnRmuL.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-D4mtfW6f.js";import"./form-control.styles-BpfJCVAq.js";import"./live-PHw1x3wN.js";import"./directive-helpers-gF-rCVue.js";import"./default-value-B18UwA06.js";import"./flp-logo-Bq5emD1Z.js";import"./flp-divider-rtfFuWw5.js";import"./commonjsHelpers-Cpj98o6Y.js";b({tagName:"flp-icon",elementClass:k,react:h,events:{},displayName:"FlpIcon"});b({tagName:"flp-spinner",elementClass:_,react:h,events:{},displayName:"FlpSpinner"});const $=v`

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
`;var C=Object.defineProperty,S=Object.getOwnPropertyDescriptor,o=(r,l,e,n)=>{for(var a=n>1?void 0:n?S(l,e):l,s=r.length-1,g;s>=0;s--)(g=r[s])&&(a=(n?g(l,e,a):g(a))||a);return n&&a&&C(l,e,a),a};let t=class extends w{constructor(){super(...arguments),this.tenantKey="",this.loginCallback="",this.logoutCallback="",this.name="",this.signUpUrl="",this.resetPasswordUrl="",this.staging=!1,this.develop=!1,this.loginPending=!1}async loginByGoogle(){console.log("login by google")}async loginByApple(){console.log("login by apple")}async onSubmitHandle(r){r.preventDefault(),this.loginPending=!0;const l=new FormData(r.target);if(Array.from(l.values()).some(n=>n==="")){this.errorText="Password or email is empty",this.loginPending=!1;return}const e=new URLSearchParams;e.append("tenant_key",this.tenantKey),e.append("login_callback",this.loginCallback),e.append("logout_callback",this.logoutCallback),e.append("name",l.get("name")),e.append("email",l.get("email")),e.append("password",l.get("password")),this.errorText=null,fetch(`${P(this.staging,this.develop)}/api/${this.tenantKey}/login`,{method:"POST",body:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(n=>n.json()).then(n=>{window.location.href=n.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return f`
    <flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          <flp-logo></flp-logo>
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
        <input type="hidden" name="login_callback" value=${this.loginCallback} />
        <input type="hidden" name="logout_callback" value=${this.logoutCallback} />
        <flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${m(this.loginPending)} 
          .disabled=${m(this.loginPending)}
        >Login</flp-button>
        <flp-button class="mb-medium" href=${this.signUpUrl} variant="primary" size="large" outline>Create new account by email</flp-button>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};t.styles=[$];o([i({type:String,attribute:"tenant_key"})],t.prototype,"tenantKey",2);o([i({type:String,attribute:"login_callback"})],t.prototype,"loginCallback",2);o([i({type:String,attribute:"logout_callback"})],t.prototype,"logoutCallback",2);o([i({type:String,attribute:"name"})],t.prototype,"name",2);o([i({type:String,attribute:"signup_url"})],t.prototype,"signUpUrl",2);o([i({type:String,attribute:"reset_password_url"})],t.prototype,"resetPasswordUrl",2);o([i({type:Boolean,attribute:"staging"})],t.prototype,"staging",2);o([i({type:Boolean,attribute:"develop"})],t.prototype,"develop",2);o([y()],t.prototype,"errorText",2);o([y()],t.prototype,"loginPending",2);t=o([x("flp-login")],t);const lt={title:"containers/Login",component:"flp-login"},F={},U=(r,{globals:{theme:l}})=>f`
  <div class="flp-theme-light">
    <flp-login .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback"></flp-login>
  </div>
`,p=U.bind({});p.args=F;var c,d,u;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`(props: Login, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-login .develop=\${true} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback"></flp-login>
  </div>
\``,...(u=(d=p.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const nt=["Default"];export{p as Default,nt as __namedExportsOrder,lt as default};
//# sourceMappingURL=flp-login.stories--iv896Ja.js.map
