import{i as b,x as n}from"./lit-element-UdLzEcH-.js";import{F as w,t as y}from"./custom-element-_dbbq29R.js";import{n as p}from"./property-Cw6hBOl6.js";import{r as c}from"./state-DfeXbQig.js";import"./index-B6wvuWEg.js";import{g as x}from"./get-api-url-BNamD47E.js";import{o as g}from"./if-defined-CeGyAtVP.js";/* empty css             */import"./flp-icon-D5FDkxOg.js";import"./component.styles-BhDG6Xff.js";import"./watch-CEsCE2EF.js";import"./directive-helpers-gF-rCVue.js";import"./index-D2NdRWdU.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./create-component-DR4KZdWz.js";const v=b`
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
  margin-bottom: 20px;
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
}`;var P=Object.defineProperty,_=Object.getOwnPropertyDescriptor,r=(s,o,i,t)=>{for(var a=t>1?void 0:t?_(o,i):o,m=s.length-1,d;m>=0;m--)(d=s[m])&&(a=(t?d(o,i,a):d(a))||a);return t&&a&&P(o,i,a),a};let e=class extends w{constructor(){super(...arguments),this.tenantKey="",this.logo="",this.staging=!1,this.develop=!1,this.loginPending=!1,this.successState=!1}async onSubmitHandle(s){s.preventDefault(),this.loginPending=!0;const o=new FormData(s.target);if(Array.from(o.values()).some(t=>t==="")){this.errorText="Email is empty",this.loginPending=!1;return}const i=new URLSearchParams;i.append("email",o.get("email")),this.errorText=null,fetch(`${x(this.staging,this.develop)}/api/${this.tenantKey}/reset-password`,{method:"POST",body:i,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(t=>t.json()).then(t=>{if(t.code<=4e3){this.successState=!0;return}this.errorText=t.message.error,s.target.reset()}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return n`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          ${this.logo?n`<img .src=${this.logo} alt="logo" width="150" height="150" />`:n`<flp-logo></flp-logo>`}
        </div>
        <h2 class="text-align-center">Forgot password?</h2>
        <div class="mb-medium text-align-center">
          <span class="text-align-center">No worries, we'll send you instructions</span>
        </div>
        <flp-input class="mb-small" type="email" required name="email" label="Email"></flp-input>
        ${this.successState?n`<maui-icon name="envelope-at"></maui-icon>`:n`<flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${g(this.loginPending)} 
          .disabled=${g(this.loginPending)}
        >Reset password</flp-button>`}
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};e.styles=[v];r([p({type:String,attribute:"tenant_key"})],e.prototype,"tenantKey",2);r([p({type:String,attribute:"logo"})],e.prototype,"logo",2);r([p({type:Boolean,attribute:"staging"})],e.prototype,"staging",2);r([p({type:Boolean,attribute:"develop"})],e.prototype,"develop",2);r([c()],e.prototype,"errorText",2);r([c()],e.prototype,"loginPending",2);r([c()],e.prototype,"successState",2);e=r([y("flp-reset-password")],e);const z={title:"containers/ResetPassword",component:"flp-reset-password"},S={},$=(s,{globals:{theme:o}})=>n`
  <div class="flp-theme-light">
    <flp-reset-password tenant_key="some_key"></flp-reset-password>
  </div>
`,l=$.bind({});l.args=S;var f,h,u;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`(props: ResetPassword, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-reset-password tenant_key="some_key"></flp-reset-password>
  </div>
\``,...(u=(h=l.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const L=["Default"];export{l as Default,L as __namedExportsOrder,z as default};
//# sourceMappingURL=flp-reset-password.stories-1D_Dtx5F.js.map