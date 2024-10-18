import{i as y,x as p}from"./lit-element-UdLzEcH-.js";import{F as b,t as v}from"./custom-element-_dbbq29R.js";import{n as l}from"./property-Cw6hBOl6.js";import{r as h}from"./state-DfeXbQig.js";import{o as g}from"./if-defined-CeGyAtVP.js";import{g as x}from"./get-api-url-BNamD47E.js";/* empty css             */const w=y`
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
`;var P=Object.defineProperty,S=Object.getOwnPropertyDescriptor,o=(i,n,s,r)=>{for(var t=r>1?void 0:r?S(n,s):n,m=i.length-1,c;m>=0;m--)(c=i[m])&&(t=(r?c(n,s,t):c(t))||t);return r&&t&&P(n,s,t),t};let e=class extends b{constructor(){super(...arguments),this.tenantKey="",this.token="",this.logo="",this.successConfirmUrl="",this.staging=!1,this.develop=!1,this.loginPending=!1}onSubmitHandle(i){i.preventDefault(),this.loginPending=!0;const n=new FormData(i.target);if(Array.from(n.values()).some(t=>t==="")){this.loginPending=!1;return}const s=new Headers;s.append("Content-Type","application/x-www-form-urlencoded");const r=new URLSearchParams;r.append("token",n.get("token")),r.append("code",n.get("code")),fetch(`${x(this.staging,this.develop)}/api/${this.tenantKey}/confirm-account`,{method:"POST",headers:s,body:r,redirect:"follow"}).then(t=>t.json()).then(t=>{if(t.code<=4e3){window.location.href=this.successConfirmUrl;return}this.errorText=t.message.error,i.target.reset()}).finally(()=>this.loginPending=!1)}render(){return p`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          ${this.logo?p`<img .src=${this.logo} alt="logo" width="150" height="150" />`:p`<flp-logo></flp-logo>`}
        </div>
        <h2 class="text-align-center">Confirm your account</h2>
        <flp-input class="mb-small" type="number" required min="1000" max="9000" name="code" label="Code"></flp-input>
        <input type="hidden" value=${this.token} name="token" />
        <flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${g(this.loginPending)} 
          .disabled=${g(this.loginPending)}
        >Confirm</flp-button>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};e.styles=[w];o([l({type:String,attribute:"tenant_key"})],e.prototype,"tenantKey",2);o([l({type:String,attribute:"token"})],e.prototype,"token",2);o([l({type:String,attribute:"logo"})],e.prototype,"logo",2);o([l({type:String,attribute:"success_confirm_url"})],e.prototype,"successConfirmUrl",2);o([l({type:Boolean,attribute:"staging"})],e.prototype,"staging",2);o([l({type:Boolean,attribute:"develop"})],e.prototype,"develop",2);o([h()],e.prototype,"errorText",2);o([h()],e.prototype,"loginPending",2);e=o([v("flp-confirm-signup")],e);const F={title:"containers/ConfirmSignup",component:"flp-confirm-signup"},C={},_=(i,{globals:{theme:n}})=>p`
  <div class="flp-theme-light">
    <flp-confirm-signup>
    </flp-confirm-signup>
  </div>
`,a=_.bind({});a.args=C;var f,d,u;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`(props: ConfirmSignup, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-confirm-signup>
    </flp-confirm-signup>
  </div>
\``,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const H=["Default"];export{a as Default,H as __namedExportsOrder,F as default};
//# sourceMappingURL=flp-confirm-signup.stories-Bsqs7rBW.js.map
