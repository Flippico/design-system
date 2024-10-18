import{i as u,x as i}from"./lit-element-UdLzEcH-.js";import{F as y,t as b}from"./custom-element-_dbbq29R.js";import{n as p}from"./property-Cw6hBOl6.js";import{r as c}from"./state-DfeXbQig.js";import{o as m}from"./if-defined-CeGyAtVP.js";import{g as x}from"./get-api-url-BNamD47E.js";/* empty css             */const v=u`
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
`;var P=Object.defineProperty,_=Object.getOwnPropertyDescriptor,r=(n,e,o,t)=>{for(var a=t>1?void 0:t?_(e,o):e,d=n.length-1,g;d>=0;d--)(g=n[d])&&(a=(t?g(e,o,a):g(a))||a);return t&&a&&P(e,o,a),a};let s=class extends y{constructor(){super(...arguments),this.tenantKey="",this.token="",this.logo="",this.staging=!1,this.develop=!1,this.loginPending=!1,this.successState=!1}async onSubmitHandle(n){n.preventDefault(),this.loginPending=!0;const e=new FormData(n.target);if(Array.from(e.values()).some(t=>t==="")){this.errorText="Password is empty",this.loginPending=!1;return}const o=new URLSearchParams;if(!/^(?=.*\d.*\d)[A-Za-z\d]{6,}$/.test(e.get("password"))){this.errorText="At least 8 characters and at least two numbers",this.loginPending=!1;return}if(e.get("new_password")!==e.get("password")){this.errorText="Passwords are different",this.loginPending=!1;return}o.append("new_password",e.get("new_password")),o.append("password",e.get("password")),o.append("token",e.get("token")),this.errorText=null,fetch(`${x(this.staging,this.develop)}/api/${this.tenantKey}/set-password`,{method:"POST",body:o,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(t=>t.json()).then(t=>{if(t.code<=4e3){this.successState=!0;return}this.errorText=t.message.error,n.target.reset()}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return i`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          ${this.logo?i`<img .src=${this.logo} alt="logo" width="150" height="150" />`:i`<flp-logo></flp-logo>`}
        </div>
        <h2 class="text-align-center">Set new password</h2>
        <div class="mb-medium text-align-center">
          <span class="text-align-center">Make sure to save password in a password manager</span>
        </div>
        <flp-input class="mb-small" name="password" required type="password" label="Password" help-text="At least 8 characters and at least two numbers" password-toggle></flp-input>
        <flp-input class="mb-small" name="new_password" required type="password" label="Repeat password" password-toggle></flp-input>
        <input name="token" value=${this.token} type="hidden">
        ${this.successState?i`<maui-icon name="check-circle"></maui-icon>`:i`<flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${m(this.loginPending)} 
          .disabled=${m(this.loginPending)}
        >Set new password</flp-button>`}
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};s.styles=[v];r([p({type:String,attribute:"tenant_key"})],s.prototype,"tenantKey",2);r([p({type:String,attribute:"token"})],s.prototype,"token",2);r([p({type:String,attribute:"logo"})],s.prototype,"logo",2);r([p({type:Boolean,attribute:"staging"})],s.prototype,"staging",2);r([p({type:Boolean,attribute:"develop"})],s.prototype,"develop",2);r([c()],s.prototype,"errorText",2);r([c()],s.prototype,"loginPending",2);r([c()],s.prototype,"successState",2);s=r([b("flp-set-new-password")],s);const N={title:"containers/SetNewPassword",component:"flp-set-new-password"},S={},k=(n,{globals:{theme:e}})=>i`
  <div class="flp-theme-light">
    <flp-set-new-password token="some_token" tenant_key="tenant_key"></flp-set-new-password>
  </div>
`,l=k.bind({});l.args=S;var f,w,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`(props: SetNewPassword, {
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
\``,...(h=(w=l.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const K=["Default"];export{l as Default,K as __namedExportsOrder,N as default};
//# sourceMappingURL=flp-set-new-password.stories-RcnmFZkT.js.map