import{i as u,x as i}from"./lit-element-BQC2Loq1.js";import{F as y,t as b}from"./custom-element-NRwDiNuy.js";import{n as p}from"./property-_HeZ1DXc.js";import{r as g}from"./state-BxOqSyyB.js";import{o as c}from"./if-defined-d81IzTIz.js";import{g as x}from"./get-api-url-CY5fWP8z.js";/* empty css             */const _=u`
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
`;var v=Object.defineProperty,P=Object.getOwnPropertyDescriptor,o=(r,e,n,t)=>{for(var a=t>1?void 0:t?P(e,n):e,d=r.length-1,m;d>=0;d--)(m=r[d])&&(a=(t?m(e,n,a):m(a))||a);return t&&a&&v(e,n,a),a};let s=class extends y{constructor(){super(...arguments),this.tenantKey="",this.token="",this.logo="",this.staging=!1,this.develop=!1,this.loginPending=!1,this.successState=!1}async onSubmitHandle(r){r.preventDefault(),this.loginPending=!0;const e=new FormData(r.target);if(Array.from(e.values()).some(t=>t==="")){this.errorText="Password is empty",this.loginPending=!1;return}const n=new URLSearchParams;if(!/^(?=.*\d.*\d)[A-Za-z\d!@#$%^&*()_+\-=[\]{};':",.<>?\/]{6,}$/.test(e.get("password"))){this.errorText="Minimum 8 znaków oraz minimum dwie liczby",this.loginPending=!1;return}if(e.get("new_password")!==e.get("password")){this.errorText="Hasła się różnią",this.loginPending=!1;return}n.append("new_password",e.get("new_password")),n.append("password",e.get("password")),n.append("token",e.get("token")),this.errorText=null,fetch(`${x(this.staging,this.develop)}/api/${this.tenantKey}/set-password/${e.get("token")}`,{method:"POST",body:n,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(t=>{if(t.ok)return t.json();throw this.errorText="Something went wrong, try again",r.target.reset(),new Error("Something went wrong, try again")}).then(t=>{this.emit("flp-set-new-password-success"),window.parent.postMessage({type:"SET_NEW_PASSWORD_SUCCESS",payload:{}},"*"),window.location.href=t.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return i`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          ${this.logo?i`<img .src=${this.logo} alt="logo" width="150" height="auto" />`:i`<flp-logo></flp-logo>`}
        </div>
        <h2 class="text-align-center">Ustaw nowe hasło</h2>
        <div class="mb-medium text-align-center">
          <span class="text-align-center">Upewnij się, że nowe hasło zostało zapisane w bezpiecznym miejscu</span>
        </div>
        <flp-input class="mb-small" name="password" required type="password" label="Hasło" help-text="Minimum 8 znaków oraz minimum dwie liczby" password-toggle></flp-input>
        <flp-input class="mb-small" name="new_password" required type="password" label="Powtórz hasło" password-toggle></flp-input>
        <input name="token" value=${this.token} type="hidden">
        ${this.successState?i`<maui-icon name="check-circle"></maui-icon>`:i`<flp-button
          class="mb-small"
          size="large"
          variant="primary"
          type="submit"
          .loading=${c(this.loginPending)}
          .disabled=${c(this.loginPending)}
        >Ustaw nowe hasło</flp-button>`}
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};s.styles=[_];o([p({type:String,attribute:"tenant_key"})],s.prototype,"tenantKey",2);o([p({type:String,attribute:"token"})],s.prototype,"token",2);o([p({type:String,attribute:"logo"})],s.prototype,"logo",2);o([p({type:Boolean,attribute:"staging"})],s.prototype,"staging",2);o([p({type:Boolean,attribute:"develop"})],s.prototype,"develop",2);o([g()],s.prototype,"errorText",2);o([g()],s.prototype,"loginPending",2);o([g()],s.prototype,"successState",2);s=o([b("flp-set-new-password")],s);const U={title:"containers/SetNewPassword",component:"flp-set-new-password"},S={},k=(r,{globals:{theme:e}})=>i`
  <div class="flp-theme-light">
    <flp-set-new-password token="some_token" tenant_key="tenant_key"></flp-set-new-password>
  </div>
`,l=k.bind({});l.args=S;var w,h,f;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`(props: SetNewPassword, {
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
\``,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const N=["Default"];export{l as Default,N as __namedExportsOrder,U as default};
//# sourceMappingURL=flp-set-new-password.stories-Y9HqAXMT.js.map
