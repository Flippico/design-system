import{i as b,k as d}from"./lit-element-CPYlYYac.js";import{F as h,t as y}from"./custom-element-DcGDOd3C.js";import{n as s}from"./property-CcHbFR6H.js";import{r as v}from"./state-Cw-lAQBx.js";import{t as m}from"./if-defined-4GS2c12S.js";/* empty css             */const k=b`
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
`;var x=Object.defineProperty,C=Object.getOwnPropertyDescriptor,l=(i,t,e,r)=>{for(var o=r>1?void 0:r?C(t,e):t,p=i.length-1,g;p>=0;p--)(g=i[p])&&(o=(r?g(t,e,o):g(o))||o);return r&&o&&x(t,e,o),o};let n=class extends h{constructor(){super(...arguments),this.tenantKey="",this.loginCallback="",this.logoutCallback="",this.name="",this.staging=!1,this.baseUrl=this.staging?"https://staging.amadeus.flippi.co":"https://amadeus.flippi.co",this.loginPending=!1}onSubmitHandle(i){i.preventDefault(),this.loginPending=!0;const t=new FormData(i.target);if(Array.from(t.values()).some(e=>e==="")){this.loginPending=!1;return}console.log("email",t.get("email")),console.log("password",t.get("password")),console.log("name",t.get("name")),console.log("tenant-key",t.get("tenant-key")),console.log("login-callback",t.get("login-callback")),console.log("logout-callback",t.get("logout-callback")),fetch(`${this.baseUrl}/${t.get("tenant-key")}/signup`,{method:"POST",body:t}).then(e=>e.json()).then(e=>{window.location.replace(`${this.loginCallback}/${e.message.token}`)}).finally(()=>this.loginPending=!1)}render(){return d`<flp-card class="auth-container">
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
    </flp-card>`}};n.styles=[k];l([s({type:String,attribute:"tenant_key"})],n.prototype,"tenantKey",2);l([s({type:String,attribute:"login_callback"})],n.prototype,"loginCallback",2);l([s({type:String,attribute:"logout_callback"})],n.prototype,"logoutCallback",2);l([s({type:String,attribute:"name"})],n.prototype,"name",2);l([s({type:Boolean,attribute:"staging"})],n.prototype,"staging",2);l([v()],n.prototype,"loginPending",2);n=l([y("flp-confirm-signup")],n);const F={title:"containers/ConfirmSignup",component:"flp-confirm-signup"},P={},w=(i,{globals:{theme:t}})=>d`
  <div class="flp-theme-light">
    <flp-confirm-signup>
    </flp-confirm-signup>
  </div>
`,a=w.bind({});a.args=P;var c,f,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`(props: ConfirmSignup, {
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
\``,...(u=(f=a.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const E=["Default"];export{a as Default,E as __namedExportsOrder,F as default};
//# sourceMappingURL=flp-confirm-signup.stories-B0aPlwsi.js.map
