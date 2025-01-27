import{i as y,x as p}from"./lit-element-BOnOm6HC.js";import{F as b,t as v}from"./custom-element-G_of5crQ.js";import{n as s}from"./property-DtfuD-FT.js";import{r as h}from"./state-BzG7ktrc.js";import{o as f}from"./if-defined-4aLJvHj9.js";import{g as w}from"./get-api-url-CY5fWP8z.js";/* empty css             */const x=y`
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
`;var P=Object.defineProperty,S=Object.getOwnPropertyDescriptor,o=(i,n,a,r)=>{for(var t=r>1?void 0:r?S(n,a):n,m=i.length-1,g;m>=0;m--)(g=i[m])&&(t=(r?g(n,a,t):g(t))||t);return r&&t&&P(n,a,t),t};let e=class extends b{constructor(){super(...arguments),this.tenantKey="",this.token="",this.logo="",this.staging=!1,this.develop=!1,this.useEvent=!1,this.loginPending=!1}onSubmitHandle(i){i.preventDefault(),this.loginPending=!0;const n=new FormData(i.target);if(Array.from(n.values()).some(t=>t==="")){this.loginPending=!1;return}const a=new Headers;a.append("Content-Type","application/x-www-form-urlencoded");const r=new URLSearchParams;r.append("token",n.get("token")),r.append("code",n.get("code")),fetch(`${w(this.staging,this.develop)}/api/${this.tenantKey}/confirm-account`,{method:"POST",headers:a,body:r,redirect:"follow"}).then(t=>{if(t.ok)return t.json();throw this.errorText="Something went wrong, try again",i.target.reset(),new Error("Something went wrong, try again")}).then(t=>{if(this.useEvent){this.emit("flp-confirm-signup-success",t.message);return}window.location.href=t.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return p`<flp-card class="auth-container">
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
          .loading=${f(this.loginPending)} 
          .disabled=${f(this.loginPending)}
        >Confirm</flp-button>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};e.styles=[x];o([s({type:String,attribute:"tenant_key"})],e.prototype,"tenantKey",2);o([s({type:String,attribute:"token"})],e.prototype,"token",2);o([s({type:String,attribute:"logo"})],e.prototype,"logo",2);o([s({type:Boolean,attribute:"staging"})],e.prototype,"staging",2);o([s({type:Boolean,attribute:"develop"})],e.prototype,"develop",2);o([s({type:Boolean,attribute:"use_event"})],e.prototype,"useEvent",2);o([h()],e.prototype,"errorText",2);o([h()],e.prototype,"loginPending",2);e=o([v("flp-confirm-signup")],e);const F={title:"containers/ConfirmSignup",component:"flp-confirm-signup"},_={},C=(i,{globals:{theme:n}})=>p`
  <div class="flp-theme-light">
    <flp-confirm-signup>
    </flp-confirm-signup>
  </div>
`,l=C.bind({});l.args=_;var c,u,d;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`(props: ConfirmSignup, {
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
\``,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const H=["Default"];export{l as Default,H as __namedExportsOrder,F as default};
//# sourceMappingURL=flp-confirm-signup.stories-Do5vdMGR.js.map
