import{i as b,x as d}from"./lit-element-UdLzEcH-.js";import{F as y,t as v}from"./custom-element-_dbbq29R.js";import{n as a}from"./property-Cw6hBOl6.js";import{r as h}from"./state-DfeXbQig.js";import{o as c}from"./if-defined-CeGyAtVP.js";import{g as x}from"./get-api-url-BNamD47E.js";/* empty css             */const w=b`
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
`;var P=Object.defineProperty,C=Object.getOwnPropertyDescriptor,o=(r,n,s,t)=>{for(var i=t>1?void 0:t?C(n,s):n,p=r.length-1,m;p>=0;p--)(m=r[p])&&(i=(t?m(n,s,i):m(i))||i);return t&&i&&P(n,s,i),i};let e=class extends y{constructor(){super(...arguments),this.tenantKey="",this.token="",this.successConfirmUrl="",this.staging=!1,this.develop=!1,this.loginPending=!1}onSubmitHandle(r){r.preventDefault(),this.loginPending=!0;const n=new FormData(r.target);if(Array.from(n.values()).some(t=>t==="")){this.loginPending=!1;return}const s=new URLSearchParams;s.append("code",n.get("code")),s.append("token",this.token),fetch(`${x(this.staging,this.develop)}/api/${this.tenantKey}/confirm-account`,{method:"POST",body:n,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(t=>t.json()).then(t=>{if(console.log("response",t),t.code<=4e3){window.location.href=this.successConfirmUrl;return}this.errorText=t.message.error,r.target.reset()}).finally(()=>this.loginPending=!1)}render(){return d`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          <flp-logo></flp-logo>
        </div>
        <h2 class="text-align-center">Confirm your account</h2>
        <flp-input class="mb-small" type="number" required min="1000" max="9000" name="code" label="Code"></flp-input>
        <flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${c(this.loginPending)} 
          .disabled=${c(this.loginPending)}
        >Confirm</flp-button>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};e.styles=[w];o([a({type:String,attribute:"tenant_key"})],e.prototype,"tenantKey",2);o([a({type:String,attribute:"token"})],e.prototype,"token",2);o([a({type:String,attribute:"success_confirm_url"})],e.prototype,"successConfirmUrl",2);o([a({type:Boolean,attribute:"staging"})],e.prototype,"staging",2);o([a({type:Boolean,attribute:"develop"})],e.prototype,"develop",2);o([h()],e.prototype,"errorText",2);o([h()],e.prototype,"loginPending",2);e=o([v("flp-confirm-signup")],e);const K={title:"containers/ConfirmSignup",component:"flp-confirm-signup"},S={},_=(r,{globals:{theme:n}})=>d`
  <div class="flp-theme-light">
    <flp-confirm-signup>
    </flp-confirm-signup>
  </div>
`,l=_.bind({});l.args=S;var f,g,u;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`(props: ConfirmSignup, {
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
\``,...(u=(g=l.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const k=["Default"];export{l as Default,k as __namedExportsOrder,K as default};
//# sourceMappingURL=flp-confirm-signup.stories-DYBYNRdL.js.map
