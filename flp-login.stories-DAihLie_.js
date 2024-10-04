import{i as k,k as b}from"./lit-element-CPYlYYac.js";import{l as u}from"./index-fCdhHCjk.js";import{F as v,t as x}from"./custom-element-DcGDOd3C.js";import{n as r}from"./property-CcHbFR6H.js";import{r as h}from"./state-Cw-lAQBx.js";import{F as w}from"./flp-icon-MB4vJ9eU.js";import{a as y}from"./index-D-l25SpK.js";import{F as P}from"./flp-spinner-y5zgyz0m.js";import{t as m}from"./if-defined-4GS2c12S.js";/* empty css             */import"./flp-card-CdUiWKie.js";import"./component.styles-MQe3hEw3.js";import"./slot-BCTpRhJ5.js";import"./class-map-635SZfYW.js";import"./flp-button-DKNOhfQI.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-DnWocktz.js";import"./form-control.styles-qMh6M_JA.js";import"./live-DyBFC1nW.js";import"./directive-helpers-CHX3h6dV.js";import"./default-value-DEpNiEhc.js";import"./flp-logo-BmvhRZ3J.js";import"./flp-divider-CYuWwxR4.js";import"./commonjsHelpers-Cpj98o6Y.js";u({tagName:"flp-icon",elementClass:w,react:y,events:{},displayName:"FlpIcon"});u({tagName:"flp-spinner",elementClass:P,react:y,events:{},displayName:"FlpSpinner"});const $=k`

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
`;var _=Object.defineProperty,C=Object.getOwnPropertyDescriptor,l=(a,t,o,s)=>{for(var n=s>1?void 0:s?C(t,o):t,p=a.length-1,g;p>=0;p--)(g=a[p])&&(n=(s?g(t,o,n):g(n))||n);return s&&n&&_(t,o,n),n};let e=class extends v{constructor(){super(...arguments),this.tenantKey="",this.loginCallback="",this.logoutCallback="",this.name="",this.staging=!1,this.loginPending=!1,this.baseUrl=this.staging?"https://staging.amadeus.flippi.co":"https://amadeus.flippi.co"}async loginByGoogle(){console.log("login by google")}async loginByApple(){console.log("login by apple")}async onSubmitHandle(a){a.preventDefault(),this.loginPending=!0;const t=new FormData(a.target);if(Array.from(t.values()).some(o=>o==="")){this.errorText="Password or email is empty",this.loginPending=!1;return}console.log("email",t.get("email")),console.log("password",t.get("password")),console.log("tenant-key",t.get("tenant-key")),console.log("login-callback",t.get("login-callback")),console.log("logout-callback",t.get("logout-callback")),this.errorText=null,fetch(`${this.baseUrl}/${t.get("tenant-key")}/login`,{method:"POST",body:t}).then(o=>o.json()).then(o=>{window.location.replace(`${this.loginCallback}/${o.message.token}`)}).catch(()=>this.errorText="Error while send to API").finally(()=>this.loginPending=!1)}render(){return b`
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
            <flp-button variant="text" href=${`${this.baseUrl}/${this.tenantKey}/reset-password`}>Fogrot your password?</flp-button>
          </div>
        </div>
        <input type="hidden" name="tenant-key" value=${this.tenantKey}/>
        <input type="hidden" name="login-callback" value=${this.loginCallback} />
        <input type="hidden" name="logout-callback" value=${this.logoutCallback} />
        <flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${m(this.loginPending)} 
          .disabled=${m(this.loginPending)}
        >Login</flp-button>
        <flp-button class="mb-medium" href=${`${this.baseUrl}/${this.tenantKey}/signup`} variant="primary" size="large" outline>Create new account by email</flp-button>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};e.styles=[$];l([r({type:String,attribute:"tenant_key"})],e.prototype,"tenantKey",2);l([r({type:String,attribute:"login_callback"})],e.prototype,"loginCallback",2);l([r({type:String,attribute:"logout_callback"})],e.prototype,"logoutCallback",2);l([r({type:String,attribute:"name"})],e.prototype,"name",2);l([r({type:Boolean,attribute:"staging"})],e.prototype,"staging",2);l([h()],e.prototype,"errorText",2);l([h()],e.prototype,"loginPending",2);e=l([x("flp-login")],e);const et={title:"containers/Login",component:"flp-login"},F={},S=(a,{globals:{theme:t}})=>b`
  <div class="flp-theme-light">
    <flp-login tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback" staging></flp-login>
  </div>
`,i=S.bind({});i.args=F;var c,d,f;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`(props: Login, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-login tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback" staging></flp-login>
  </div>
\``,...(f=(d=i.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const ot=["Default"];export{i as Default,ot as __namedExportsOrder,et as default};
//# sourceMappingURL=flp-login.stories-DAihLie_.js.map
