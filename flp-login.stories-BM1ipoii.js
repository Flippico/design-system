import{i as k,k as b}from"./lit-element-CPYlYYac.js";import{l as h}from"./index-fCdhHCjk.js";import{F as x,t as w}from"./custom-element-DcGDOd3C.js";import{n as a}from"./property-CcHbFR6H.js";import{r as y}from"./state-Cw-lAQBx.js";import{F as _}from"./flp-icon-MB4vJ9eU.js";import{a as v}from"./index-D-l25SpK.js";import{F as $}from"./flp-spinner-y5zgyz0m.js";import{t as c}from"./if-defined-4GS2c12S.js";import{g as m}from"./get-api-url-BNamD47E.js";/* empty css             */import"./flp-card-CdUiWKie.js";import"./component.styles-MQe3hEw3.js";import"./slot-BCTpRhJ5.js";import"./class-map-635SZfYW.js";import"./flp-button-DKNOhfQI.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-DnWocktz.js";import"./form-control.styles-qMh6M_JA.js";import"./live-DyBFC1nW.js";import"./directive-helpers-CHX3h6dV.js";import"./default-value-DEpNiEhc.js";import"./flp-logo-BmvhRZ3J.js";import"./flp-divider-CYuWwxR4.js";import"./commonjsHelpers-Cpj98o6Y.js";h({tagName:"flp-icon",elementClass:_,react:v,events:{},displayName:"FlpIcon"});h({tagName:"flp-spinner",elementClass:$,react:v,events:{},displayName:"FlpSpinner"});const P=k`

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
`;var C=Object.defineProperty,F=Object.getOwnPropertyDescriptor,l=(n,e,o,s)=>{for(var i=s>1?void 0:s?F(e,o):e,p=n.length-1,g;p>=0;p--)(g=n[p])&&(i=(s?g(e,o,i):g(i))||i);return s&&i&&C(e,o,i),i};let t=class extends x{constructor(){super(...arguments),this.tenantKey="",this.loginCallback="",this.logoutCallback="",this.name="",this.staging=!1,this.develop=!1,this.loginPending=!1}async loginByGoogle(){console.log("login by google")}async loginByApple(){console.log("login by apple")}async onSubmitHandle(n){n.preventDefault(),this.loginPending=!0;const e=new FormData(n.target);if(Array.from(e.values()).some(o=>o==="")){this.errorText="Password or email is empty",this.loginPending=!1;return}this.errorText=null,fetch(`${m(this.staging,this.develop)}/api/${e.get("tenant-key")}/login`,{method:"POST",body:e}).then(o=>o.json()).then(o=>{window.location.replace(`${this.loginCallback}/${o.message.token}`)}).catch(()=>this.errorText="Error while send to API").finally(()=>this.loginPending=!1)}render(){return b`
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
    </flp-card>`}};t.styles=[P];l([a({type:String,attribute:"tenant_key"})],t.prototype,"tenantKey",2);l([a({type:String,attribute:"login_callback"})],t.prototype,"loginCallback",2);l([a({type:String,attribute:"logout_callback"})],t.prototype,"logoutCallback",2);l([a({type:String,attribute:"name"})],t.prototype,"name",2);l([a({type:Boolean,attribute:"staging"})],t.prototype,"staging",2);l([a({type:Boolean,attribute:"develop"})],t.prototype,"develop",2);l([y()],t.prototype,"errorText",2);l([y()],t.prototype,"loginPending",2);t=l([w("flp-login")],t);const lt={title:"containers/Login",component:"flp-login"},S={},D=(n,{globals:{theme:e}})=>b`
  <div class="flp-theme-light">
    <flp-login .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback"></flp-login>
  </div>
`,r=D.bind({});r.args=S;var d,f,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`(props: Login, {
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
\``,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const it=["Default"];export{r as Default,it as __namedExportsOrder,lt as default};
//# sourceMappingURL=flp-login.stories-BM1ipoii.js.map
