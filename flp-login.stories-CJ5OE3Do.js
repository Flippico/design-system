import{i as v,x as u}from"./lit-element-UdLzEcH-.js";import{l as b}from"./index-DkI5ItvX.js";import{F as w,t as x}from"./custom-element-_dbbq29R.js";import{n as a}from"./property-Cw6hBOl6.js";import{r as y}from"./state-DfeXbQig.js";import{F as _}from"./flp-icon-D5FDkxOg.js";import{a as h}from"./index-D-l25SpK.js";import{F as P}from"./flp-spinner-Dhf14Iya.js";import{o as g}from"./if-defined-CeGyAtVP.js";import{g as k}from"./get-api-url-BNamD47E.js";/* empty css             */import"./flp-card-Ab_3ZEjg.js";import"./component.styles-BhDG6Xff.js";import"./slot-BCTpRhJ5.js";import"./class-map-B1m419Bd.js";import"./flp-button-CwVnRmuL.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-D4mtfW6f.js";import"./form-control.styles-BpfJCVAq.js";import"./live-PHw1x3wN.js";import"./directive-helpers-gF-rCVue.js";import"./default-value-B18UwA06.js";import"./flp-logo-Bq5emD1Z.js";import"./flp-divider-rtfFuWw5.js";import"./commonjsHelpers-Cpj98o6Y.js";b({tagName:"flp-icon",elementClass:_,react:h,events:{},displayName:"FlpIcon"});b({tagName:"flp-spinner",elementClass:P,react:h,events:{},displayName:"FlpSpinner"});const $=v`

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
`;var F=Object.defineProperty,L=Object.getOwnPropertyDescriptor,i=(r,o,n,t)=>{for(var l=t>1?void 0:t?L(o,n):o,p=r.length-1,m;p>=0;p--)(m=r[p])&&(l=(t?m(o,n,l):m(l))||l);return t&&l&&F(o,n,l),l};let e=class extends w{constructor(){super(...arguments),this.tenantKey="",this.name="",this.signUpUrl="",this.resetPasswordUrl="",this.staging=!1,this.develop=!1,this.mobileLogin=!1,this.loginPending=!1}async loginByGoogle(){console.log("login by google")}async loginByApple(){console.log("login by apple")}async onSubmitHandle(r){r.preventDefault(),this.loginPending=!0;const o=new FormData(r.target);if(Array.from(o.values()).some(t=>t==="")){this.errorText="Password or email is empty",this.loginPending=!1;return}const n=new URLSearchParams;n.append("tenant_key",this.tenantKey),n.append("name",o.get("name")),n.append("email",o.get("email")),n.append("password",o.get("password")),this.errorText=null,fetch(`${k(this.staging,this.develop)}/api/${this.tenantKey}/login`,{method:"POST",body:n,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(t=>t.json()).then(t=>{if(this.mobileLogin){window.location.href=`${t.message.redirect_url}?token=${t.message.token}`;return}window.location.href=t.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return u`
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
        <flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${g(this.loginPending)} 
          .disabled=${g(this.loginPending)}
        >Login</flp-button>
        <flp-button class="mb-medium" href=${this.signUpUrl} variant="primary" size="large" outline>Create new account by email</flp-button>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};e.styles=[$];i([a({type:String,attribute:"tenant_key"})],e.prototype,"tenantKey",2);i([a({type:String,attribute:"name"})],e.prototype,"name",2);i([a({type:String,attribute:"signup_url"})],e.prototype,"signUpUrl",2);i([a({type:String,attribute:"reset_password_url"})],e.prototype,"resetPasswordUrl",2);i([a({type:Boolean,attribute:"staging"})],e.prototype,"staging",2);i([a({type:Boolean,attribute:"develop"})],e.prototype,"develop",2);i([a({type:Boolean,attribute:"mobile_login"})],e.prototype,"mobileLogin",2);i([y()],e.prototype,"errorText",2);i([y()],e.prototype,"loginPending",2);e=i([x("flp-login")],e);const it={title:"containers/Login",component:"flp-login"},S={},U=(r,{globals:{theme:o}})=>u`
  <div class="flp-theme-light">
    <flp-login .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback"></flp-login>
  </div>
`,s=U.bind({});s.args=S;var c,d,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`(props: Login, {
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
\``,...(f=(d=s.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const nt=["Default"];export{s as Default,nt as __namedExportsOrder,it as default};
//# sourceMappingURL=flp-login.stories-CJ5OE3Do.js.map
