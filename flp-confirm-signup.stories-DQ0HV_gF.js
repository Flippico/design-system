import{i as b,x as d}from"./lit-element-UdLzEcH-.js";import{F as h,t as y}from"./custom-element-_dbbq29R.js";import{n as a}from"./property-Cw6hBOl6.js";import{r as v}from"./state-DfeXbQig.js";import{o as m}from"./if-defined-CeGyAtVP.js";import{g as x}from"./get-api-url-BNamD47E.js";/* empty css             */const C=b`
flp-button {
  width: 100%;
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
`;var P=Object.defineProperty,k=Object.getOwnPropertyDescriptor,o=(i,t,n,s)=>{for(var l=s>1?void 0:s?k(t,n):t,p=i.length-1,g;p>=0;p--)(g=i[p])&&(l=(s?g(t,n,l):g(l))||l);return s&&l&&P(t,n,l),l};let e=class extends h{constructor(){super(...arguments),this.tenantKey="",this.loginCallback="",this.logoutCallback="",this.name="",this.staging=!1,this.develop=!1,this.loginPending=!1}onSubmitHandle(i){i.preventDefault(),this.loginPending=!0;const t=new FormData(i.target);if(Array.from(t.values()).some(n=>n==="")){this.loginPending=!1;return}console.log("email",t.get("email")),console.log("password",t.get("password")),console.log("name",t.get("name")),console.log("tenant-key",t.get("tenant-key")),console.log("login-callback",t.get("login-callback")),console.log("logout-callback",t.get("logout-callback")),fetch(`${x(this.staging,this.develop)}/api/${t.get("tenant-key")}/signup`,{method:"POST",body:t}).then(n=>n.json()).then(n=>{window.location.replace(`${this.loginCallback}/${n.message.token}`)}).finally(()=>this.loginPending=!1)}render(){return d`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          <flp-logo></flp-logo>
        </div>
        <h2 class="text-align-center">Confirm your account</h2>
        <flp-input class="mb-small"  type="number" required name="code" label="Code"></flp-input>
        <flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${m(this.loginPending)} 
          .disabled=${m(this.loginPending)}
        >Confirm</flp-button>
      </form>
    </flp-card>`}};e.styles=[C];o([a({type:String,attribute:"tenant_key"})],e.prototype,"tenantKey",2);o([a({type:String,attribute:"login_callback"})],e.prototype,"loginCallback",2);o([a({type:String,attribute:"logout_callback"})],e.prototype,"logoutCallback",2);o([a({type:String,attribute:"name"})],e.prototype,"name",2);o([a({type:Boolean,attribute:"staging"})],e.prototype,"staging",2);o([a({type:Boolean,attribute:"develop"})],e.prototype,"develop",2);o([v()],e.prototype,"loginPending",2);e=o([y("flp-confirm-signup")],e);const B={title:"containers/ConfirmSignup",component:"flp-confirm-signup"},w={},S=(i,{globals:{theme:t}})=>d`
  <div class="flp-theme-light">
    <flp-confirm-signup>
    </flp-confirm-signup>
  </div>
`,r=S.bind({});r.args=w;var c,f,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`(props: ConfirmSignup, {
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
\``,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const E=["Default"];export{r as Default,E as __namedExportsOrder,B as default};
//# sourceMappingURL=flp-confirm-signup.stories-DQ0HV_gF.js.map
