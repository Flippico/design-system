import{i as w,x as a}from"./lit-element-BOnOm6HC.js";import{F as y,t as b}from"./custom-element-G_of5crQ.js";import{n as p}from"./property-DtfuD-FT.js";import{r as d}from"./state-BzG7ktrc.js";import"./index-Cp8_5IHE.js";import{g as x}from"./get-api-url-CY5fWP8z.js";import{o as c}from"./if-defined-4aLJvHj9.js";/* empty css             */import"./flp-icon-RHbQcKsa.js";import"./component.styles-BRPzpB69.js";import"./watch-CEsCE2EF.js";import"./directive-helpers-Ew8efCbj.js";import"./index-D6M23izK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./create-component-CL-XmzdD.js";const v=w`
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
}`;var P=Object.defineProperty,_=Object.getOwnPropertyDescriptor,o=(s,r,i,e)=>{for(var n=e>1?void 0:e?_(r,i):r,m=s.length-1,g;m>=0;m--)(g=s[m])&&(n=(e?g(r,i,n):g(n))||n);return e&&n&&P(r,i,n),n};let t=class extends y{constructor(){super(...arguments),this.tenantKey="",this.logo="",this.staging=!1,this.develop=!1,this.useEvent=!1,this.loginPending=!1,this.successState=!1}async onSubmitHandle(s){s.preventDefault(),this.loginPending=!0;const r=new FormData(s.target);if(Array.from(r.values()).some(e=>e==="")){this.errorText="Email is empty",this.loginPending=!1;return}const i=new URLSearchParams;i.append("email",r.get("email")),this.errorText=null,fetch(`${x(this.staging,this.develop)}/api/${this.tenantKey}/reset-password`,{method:"POST",body:i,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>{if(e.ok)return e.json();throw this.errorText="Something went wrong, try again",s.target.reset(),new Error("Something went wrong, try again")}).then(()=>{this.useEvent&&this.emit("flp-reset-password-success"),this.successState=!0}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return a`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          ${this.logo?a`<img .src=${this.logo} alt="logo" width="150" height="150" />`:a`<flp-logo></flp-logo>`}
        </div>
        <h2 class="text-align-center">Forgot password?</h2>
        <div class="mb-medium text-align-center">
          <span class="text-align-center">No worries, we'll send you instructions</span>
        </div>
        <flp-input class="mb-small" type="email" required name="email" label="Email"></flp-input>
        ${this.successState?a`<maui-icon name="envelope-at"></maui-icon>`:a`<flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${c(this.loginPending)} 
          .disabled=${c(this.loginPending)}
        >Reset password</flp-button>`}
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};t.styles=[v];o([p({type:String,attribute:"tenant_key"})],t.prototype,"tenantKey",2);o([p({type:String,attribute:"logo"})],t.prototype,"logo",2);o([p({type:Boolean,attribute:"staging"})],t.prototype,"staging",2);o([p({type:Boolean,attribute:"develop"})],t.prototype,"develop",2);o([p({type:Boolean,attribute:"use_event"})],t.prototype,"useEvent",2);o([d()],t.prototype,"errorText",2);o([d()],t.prototype,"loginPending",2);o([d()],t.prototype,"successState",2);t=o([b("flp-reset-password")],t);const z={title:"containers/ResetPassword",component:"flp-reset-password"},S={},$=(s,{globals:{theme:r}})=>a`
  <div class="flp-theme-light">
    <flp-reset-password tenant_key="some_key"></flp-reset-password>
  </div>
`,l=$.bind({});l.args=S;var f,u,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`(props: ResetPassword, {
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
\``,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const L=["Default"];export{l as Default,L as __namedExportsOrder,z as default};
//# sourceMappingURL=flp-reset-password.stories-DDGO8AfQ.js.map
