import{i as b,x as f}from"./lit-element-UdLzEcH-.js";import{F as y,t as v}from"./custom-element-_dbbq29R.js";import{n as s}from"./property-Cw6hBOl6.js";import{r as h}from"./state-DfeXbQig.js";import"./index-D8MQo7CL.js";import{o as g}from"./if-defined-CeGyAtVP.js";import{g as w}from"./get-api-url-BNamD47E.js";/* empty css             */import"./flp-card-Ab_3ZEjg.js";import"./component.styles-BhDG6Xff.js";import"./slot-BCTpRhJ5.js";import"./class-map-B1m419Bd.js";import"./index-D2NdRWdU.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./create-component-DR4KZdWz.js";import"./flp-button-CwVnRmuL.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-D4mtfW6f.js";import"./form-control.styles-BpfJCVAq.js";import"./live-PHw1x3wN.js";import"./directive-helpers-gF-rCVue.js";import"./default-value-B18UwA06.js";import"./flp-logo-Bq5emD1Z.js";import"./flp-divider-rtfFuWw5.js";const x=b`
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
`;var P=Object.defineProperty,_=Object.getOwnPropertyDescriptor,r=(a,e,i,o)=>{for(var t=o>1?void 0:o?_(e,i):e,p=a.length-1,m;p>=0;p--)(m=a[p])&&(t=(o?m(e,i,t):m(t))||t);return o&&t&&P(e,i,t),t};let n=class extends y{constructor(){super(...arguments),this.tenantKey="",this.name="",this.loginUrl="",this.staging=!1,this.develop=!1,this.loginPending=!1}onSubmitHandle(a){a.preventDefault(),this.loginPending=!0;const e=new FormData(a.target);if(Array.from(e.values()).some(t=>t==="")){this.loginPending=!1;return}if(!/^[a-zA-Z0-9-]{6,}[0-9]{2,}\b$/.test(e.get("password"))){this.errorText="At least 8 characters and at least two numbers",this.loginPending=!1;return}const i=new Headers;i.append("Content-Type","application/x-www-form-urlencoded");const o=new URLSearchParams;o.append("name",e.get("name")),o.append("email",e.get("email")),o.append("password",e.get("password")),fetch(`${w(this.staging,this.develop)}/api/${this.tenantKey}/signup`,{method:"POST",body:o,headers:i}).then(t=>t.json()).then(t=>{if(console.log("response",t),t.code<4e3){window.location.href=t.message.redirect_url;return}this.errorText=t.message,a.target.reset()}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return f`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          <flp-logo></flp-logo>
        </div>
        <h2 class="text-align-center">Create your account</h2>
        <flp-input class="mb-small"  type="text" required name="name" label="Name"></flp-input>
        <flp-input class="mb-small"  type="email" required name="email" label="Email"></flp-input>
        <flp-input class="mb-medium"  name="password" help-text="At least 8 characters and at least two numbers" required type="password" label="Password" password-toggle></flp-input>
        <flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${g(this.loginPending)} 
          .disabled=${g(this.loginPending)}
        >Signup</flp-button>
        <div class="login-container">
          <span>Already have account?</span>
          <flp-button class="login--button" variant="text" href=${this.loginUrl}>Login</flp-button>
        </div>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};n.styles=[x];r([s({type:String,attribute:"tenant_key"})],n.prototype,"tenantKey",2);r([s({type:String,attribute:"name"})],n.prototype,"name",2);r([s({type:String,attribute:"login_url"})],n.prototype,"loginUrl",2);r([s({type:Boolean,attribute:"staging"})],n.prototype,"staging",2);r([s({type:Boolean,attribute:"develop"})],n.prototype,"develop",2);r([h()],n.prototype,"errorText",2);r([h()],n.prototype,"loginPending",2);n=r([v("flp-signup")],n);const X={title:"containers/Signup",component:"flp-signup"},S={},$=(a,{globals:{theme:e}})=>f`
  <div class="flp-theme-light">
    <flp-signup .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback">
    </flp-signup>
  </div>
`,l=$.bind({});l.args=S;var c,u,d;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`(props: Signup, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-signup .develop=\${true} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback">
    </flp-signup>
  </div>
\``,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Y=["Default"];export{l as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=flp-signup.stories-G30bYw7r.js.map
