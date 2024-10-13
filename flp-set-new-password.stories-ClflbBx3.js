import{i as h,x as l}from"./lit-element-UdLzEcH-.js";import{F as y,t as b}from"./custom-element-_dbbq29R.js";import{n as p}from"./property-Cw6hBOl6.js";import{r as m}from"./state-DfeXbQig.js";import{o as g}from"./if-defined-CeGyAtVP.js";import{g as x}from"./get-api-url-BNamD47E.js";/* empty css             */const v=h`
flp-button {
  width: 100%;
}
.error {
  color: var(--flp-color-warning-700);
}
h2 {
  font-family: var(--flp-font-medium);
}
.auth-container {
  max-width: 450px;
  width: 100%;
}
.mb-small {
  margin-bottom: 20px;
}
.mb-medium {
  margin-bottom: 40px;
}
.text-align-center {
  text-align: center;
}
.forgot-password-link--container {
  text-align: right;
  --flp-spacing-medium: 0px;
}
.login--button {
  width: auto;
}
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
`;var P=Object.defineProperty,_=Object.getOwnPropertyDescriptor,n=(a,e,r,t)=>{for(var o=t>1?void 0:t?_(e,r):e,d=a.length-1,c;d>=0;d--)(c=a[d])&&(o=(t?c(e,r,o):c(o))||o);return t&&o&&P(e,r,o),o};let s=class extends y{constructor(){super(...arguments),this.tenantKey="",this.token="",this.staging=!1,this.develop=!1,this.loginPending=!1,this.successState=!1}async onSubmitHandle(a){a.preventDefault(),this.loginPending=!0;const e=new FormData(a.target);if(Array.from(e.values()).some(t=>t==="")){this.errorText="Password is empty",this.loginPending=!1;return}const r=new URLSearchParams;if(!/^[a-zA-Z0-9-]{6,}[0-9]{2,}\b$/.test(e.get("password"))){this.errorText="At least 8 characters and at least two numbers",this.loginPending=!1;return}if(e.get("new_password")!==e.get("password")){this.errorText="Passwords are different",this.loginPending=!1;return}r.append("new_password",e.get("new_password")),r.append("password",e.get("password")),r.append("token",e.get("token")),this.errorText=null,fetch(`${x(this.staging,this.develop)}/api/${this.tenantKey}/set-password`,{method:"POST",body:r,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(t=>t.json()).then(t=>{if(t.code<=4e3){this.successState=!0;return}this.errorText=t.message.error,a.target.reset()}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return l`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          <flp-logo></flp-logo>
        </div>
        <h2 class="text-align-center">Set new password</h2>
        <div class="mb-medium text-align-center">
          <span class="text-align-center">Make sure to save password in a password manager</span>
        </div>
        <flp-input class="mb-small" name="password" required type="password" label="Password" help-text="At least 8 characters and at least two numbers" password-toggle></flp-input>
        <flp-input class="mb-small" name="new_password" required type="password" label="Repeat password" password-toggle></flp-input>
        <input name="token" value=${this.token} type="hidden">
        ${this.successState?l`<maui-icon name="check-circle"></maui-icon>`:l`<flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${g(this.loginPending)} 
          .disabled=${g(this.loginPending)}
        >Set new password</flp-button>`}
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};s.styles=[v];n([p({type:String,attribute:"tenant_key"})],s.prototype,"tenantKey",2);n([p({type:String,attribute:"token"})],s.prototype,"token",2);n([p({type:Boolean,attribute:"staging"})],s.prototype,"staging",2);n([p({type:Boolean,attribute:"develop"})],s.prototype,"develop",2);n([m()],s.prototype,"errorText",2);n([m()],s.prototype,"loginPending",2);n([m()],s.prototype,"successState",2);s=n([b("flp-set-new-password")],s);const N={title:"containers/SetNewPassword",component:"flp-set-new-password"},S={},k=(a,{globals:{theme:e}})=>l`
  <div class="flp-theme-light">
    <flp-set-new-password token="some_token" tenant_key="tenant_key"></flp-set-new-password>
  </div>
`,i=k.bind({});i.args=S;var f,w,u;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`(props: SetNewPassword, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-set-new-password token="some_token" tenant_key="tenant_key"></flp-set-new-password>
  </div>
\``,...(u=(w=i.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};const K=["Default"];export{i as Default,K as __namedExportsOrder,N as default};
//# sourceMappingURL=flp-set-new-password.stories-ClflbBx3.js.map
