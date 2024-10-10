import{i as w,x as b}from"./lit-element-UdLzEcH-.js";import{l as h}from"./index-DkI5ItvX.js";import{F as x,t as k}from"./custom-element-_dbbq29R.js";import{n as r}from"./property-Cw6hBOl6.js";import{r as y}from"./state-DfeXbQig.js";import{F as _}from"./flp-icon-D5FDkxOg.js";import{a as v}from"./index-D-l25SpK.js";import{F as P}from"./flp-spinner-Dhf14Iya.js";import{o as c}from"./if-defined-CeGyAtVP.js";import{g as m}from"./get-api-url-BNamD47E.js";/* empty css             */import"./flp-card-Ab_3ZEjg.js";import"./component.styles-BhDG6Xff.js";import"./slot-BCTpRhJ5.js";import"./class-map-B1m419Bd.js";import"./flp-button-CwVnRmuL.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-D4mtfW6f.js";import"./form-control.styles-BpfJCVAq.js";import"./live-PHw1x3wN.js";import"./directive-helpers-gF-rCVue.js";import"./default-value-B18UwA06.js";import"./flp-logo-Bq5emD1Z.js";import"./flp-divider-rtfFuWw5.js";import"./commonjsHelpers-Cpj98o6Y.js";h({tagName:"flp-icon",elementClass:_,react:v,events:{},displayName:"FlpIcon"});h({tagName:"flp-spinner",elementClass:P,react:v,events:{},displayName:"FlpSpinner"});const $=w`

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
`;var C=Object.defineProperty,F=Object.getOwnPropertyDescriptor,a=(n,l,t,e)=>{for(var i=e>1?void 0:e?F(l,t):l,s=n.length-1,g;s>=0;s--)(g=n[s])&&(i=(e?g(l,t,i):g(i))||i);return e&&i&&C(l,t,i),i};let o=class extends x{constructor(){super(...arguments),this.tenantKey="",this.loginCallback="",this.logoutCallback="",this.name="",this.staging=!1,this.develop=!1,this.loginPending=!1}async loginByGoogle(){console.log("login by google")}async loginByApple(){console.log("login by apple")}async onSubmitHandle(n){n.preventDefault(),this.loginPending=!0;const l=new FormData(n.target);if(Array.from(l.values()).some(e=>e==="")){this.errorText="Password or email is empty",this.loginPending=!1;return}const t=new URLSearchParams;t.append("tenant_key",this.tenantKey),t.append("login_callback",this.loginCallback),t.append("logout_callback",this.logoutCallback),t.append("name",l.get("name")),t.append("email",l.get("email")),t.append("password",l.get("password")),this.errorText=null,fetch(`${m(this.staging,this.develop)}/api/${this.tenantKey}/login`,{method:"POST",body:t,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>{e.status>=300&&e.status<400&&e.headers.get("Location")&&(window.location.href=e.headers.get("Location"))}).catch(()=>this.errorText="Error while send to API").finally(()=>this.loginPending=!1)}render(){return b`
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
            <flp-button variant="text" href=${`${m(this.staging,this.develop)}/${this.tenantKey}/reset-password`}>Fogrot your password?</flp-button>
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
          .loading=${c(this.loginPending)} 
          .disabled=${c(this.loginPending)}
        >Login</flp-button>
        <flp-button class="mb-medium" href=${`${m(this.staging,this.develop)}/${this.tenantKey}/signup`} variant="primary" size="large" outline>Create new account by email</flp-button>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};o.styles=[$];a([r({type:String,attribute:"tenant_key"})],o.prototype,"tenantKey",2);a([r({type:String,attribute:"login_callback"})],o.prototype,"loginCallback",2);a([r({type:String,attribute:"logout_callback"})],o.prototype,"logoutCallback",2);a([r({type:String,attribute:"name"})],o.prototype,"name",2);a([r({type:Boolean,attribute:"staging"})],o.prototype,"staging",2);a([r({type:Boolean,attribute:"develop"})],o.prototype,"develop",2);a([y()],o.prototype,"errorText",2);a([y()],o.prototype,"loginPending",2);o=a([k("flp-login")],o);const lt={title:"containers/Login",component:"flp-login"},S={},L=(n,{globals:{theme:l}})=>b`
  <div class="flp-theme-light">
    <flp-login .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback"></flp-login>
  </div>
`,p=L.bind({});p.args=S;var d,f,u;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`(props: Login, {
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
\``,...(u=(f=p.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const at=["Default"];export{p as Default,at as __namedExportsOrder,lt as default};
//# sourceMappingURL=flp-login.stories-CWjAKAfm.js.map
