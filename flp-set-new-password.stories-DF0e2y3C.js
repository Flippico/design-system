import{i as u,x as i}from"./lit-element-ChAK2pu5.js";import{F as y,t as b}from"./custom-element-BSoDmtoY.js";import{n as p}from"./property-Bhw6601B.js";import{r as m}from"./state-dCtEkiMd.js";import{o as c}from"./if-defined-Bhm9Cegq.js";import{g as x}from"./get-api-url-CY5fWP8z.js";/* empty css             */const v=u`
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
`;var S=Object.defineProperty,_=Object.getOwnPropertyDescriptor,o=(n,e,r,t)=>{for(var a=t>1?void 0:t?_(e,r):e,d=n.length-1,g;d>=0;d--)(g=n[d])&&(a=(t?g(e,r,a):g(a))||a);return t&&a&&S(e,r,a),a};let s=class extends y{constructor(){super(...arguments),this.tenantKey="",this.token="",this.logo="",this.staging=!1,this.develop=!1,this.loginPending=!1,this.successState=!1}async onSubmitHandle(n){n.preventDefault(),this.loginPending=!0;const e=new FormData(n.target);if(Array.from(e.values()).some(t=>t==="")){this.errorText="Password is empty",this.loginPending=!1;return}const r=new URLSearchParams;if(!/^(?=.*\d.*\d)[A-Za-z\d!@#$%^&*()_+\-=[\]{};':",.<>?\/]{6,}$/.test(e.get("password"))){this.errorText="At least 8 characters and at least two numbers",this.loginPending=!1;return}if(e.get("new_password")!==e.get("password")){this.errorText="Passwords are different",this.loginPending=!1;return}r.append("new_password",e.get("new_password")),r.append("password",e.get("password")),r.append("token",e.get("token")),this.errorText=null,fetch(`${x(this.staging,this.develop)}/api/${this.tenantKey}/set-password/${e.get("token")}`,{method:"POST",body:r,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(t=>{if(t.ok)return t.json();throw this.errorText="Something went wrong, try again",n.target.reset(),new Error("Something went wrong, try again")}).then(t=>{this.emit("flp-set-new-password-success"),window.parent.postMessage({type:"SET_NEW_PASSWORD_SUCCESS",payload:{}},"*"),window.location.href=t.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return i`<flp-card class="auth-container">
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
          .loading=${c(this.loginPending)} 
          .disabled=${c(this.loginPending)}
        >Set new password</flp-button>`}
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};s.styles=[v];o([p({type:String,attribute:"tenant_key"})],s.prototype,"tenantKey",2);o([p({type:String,attribute:"token"})],s.prototype,"token",2);o([p({type:String,attribute:"logo"})],s.prototype,"logo",2);o([p({type:Boolean,attribute:"staging"})],s.prototype,"staging",2);o([p({type:Boolean,attribute:"develop"})],s.prototype,"develop",2);o([m()],s.prototype,"errorText",2);o([m()],s.prototype,"loginPending",2);o([m()],s.prototype,"successState",2);s=o([b("flp-set-new-password")],s);const j={title:"containers/SetNewPassword",component:"flp-set-new-password"},P={},k=(n,{globals:{theme:e}})=>i`
  <div class="flp-theme-light">
    <flp-set-new-password token="some_token" tenant_key="tenant_key"></flp-set-new-password>
  </div>
`,l=k.bind({});l.args=P;var w,f,h;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`(props: SetNewPassword, {
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
\``,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const C=["Default"];export{l as Default,C as __namedExportsOrder,j as default};
//# sourceMappingURL=flp-set-new-password.stories-DF0e2y3C.js.map
