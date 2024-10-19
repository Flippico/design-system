import{i as y,x as p}from"./lit-element-UdLzEcH-.js";import{F as b,t as w}from"./custom-element-_dbbq29R.js";import{n as s}from"./property-Cw6hBOl6.js";import{r as h}from"./state-DfeXbQig.js";import{o as c}from"./if-defined-CeGyAtVP.js";import{g as v}from"./get-api-url-BNamD47E.js";/* empty css             */const x=y`
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
`;var P=Object.defineProperty,S=Object.getOwnPropertyDescriptor,r=(i,n,a,o)=>{for(var t=o>1?void 0:o?S(n,a):n,m=i.length-1,g;m>=0;m--)(g=i[m])&&(t=(o?g(n,a,t):g(t))||t);return o&&t&&P(n,a,t),t};let e=class extends b{constructor(){super(...arguments),this.tenantKey="",this.token="",this.logo="",this.staging=!1,this.develop=!1,this.loginPending=!1}onSubmitHandle(i){i.preventDefault(),this.loginPending=!0;const n=new FormData(i.target);if(Array.from(n.values()).some(t=>t==="")){this.loginPending=!1;return}const a=new Headers;a.append("Content-Type","application/x-www-form-urlencoded");const o=new URLSearchParams;o.append("token",n.get("token")),o.append("code",n.get("code")),fetch(`${v(this.staging,this.develop)}/api/${this.tenantKey}/confirm-account`,{method:"POST",headers:a,body:o,redirect:"follow"}).then(t=>{if(t.ok)return t.json();throw this.errorText="Something went wrong, try again",i.target.reset(),new Error("Something went wrong, try again")}).then(t=>{window.location.href=t.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return p`<flp-card class="auth-container">
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
          .loading=${c(this.loginPending)} 
          .disabled=${c(this.loginPending)}
        >Confirm</flp-button>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};e.styles=[x];r([s({type:String,attribute:"tenant_key"})],e.prototype,"tenantKey",2);r([s({type:String,attribute:"token"})],e.prototype,"token",2);r([s({type:String,attribute:"logo"})],e.prototype,"logo",2);r([s({type:Boolean,attribute:"staging"})],e.prototype,"staging",2);r([s({type:Boolean,attribute:"develop"})],e.prototype,"develop",2);r([h()],e.prototype,"errorText",2);r([h()],e.prototype,"loginPending",2);e=r([w("flp-confirm-signup")],e);const H={title:"containers/ConfirmSignup",component:"flp-confirm-signup"},_={},C=(i,{globals:{theme:n}})=>p`
  <div class="flp-theme-light">
    <flp-confirm-signup>
    </flp-confirm-signup>
  </div>
`,l=C.bind({});l.args=_;var f,d,u;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`(props: ConfirmSignup, {
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
\``,...(u=(d=l.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const E=["Default"];export{l as Default,E as __namedExportsOrder,H as default};
//# sourceMappingURL=flp-confirm-signup.stories-DyBONKfg.js.map
