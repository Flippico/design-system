import{i as b,x as p}from"./lit-element-BOnOm6HC.js";import{F as y,t as w}from"./custom-element-G_of5crQ.js";import{n as s}from"./property-DtfuD-FT.js";import{r as h}from"./state-BzG7ktrc.js";import"./index-CP02Amvn.js";import{o as c}from"./if-defined-4aLJvHj9.js";import{g as v}from"./get-api-url-CY5fWP8z.js";/* empty css             */import"./flp-card-DLywQTEh.js";import"./component.styles-BRPzpB69.js";import"./slot-BCTpRhJ5.js";import"./class-map-CkhaUZsQ.js";import"./index-D6M23izK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./create-component-CL-XmzdD.js";import"./flp-button-BUnE6aW6.js";import"./query-BApjzB0v.js";import"./form-JvG0YwJe.js";import"./watch-CEsCE2EF.js";import"./flp-input-By9ifSuW.js";import"./form-control.styles-D3ttbRfV.js";import"./live-Btws1DVc.js";import"./directive-helpers-Ew8efCbj.js";import"./default-value-Deq5j5nO.js";import"./flp-logo-Br9aHXR-.js";import"./flp-divider-BO9qlRoO.js";const x=b`
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
`;var P=Object.defineProperty,_=Object.getOwnPropertyDescriptor,n=(i,e,a,r)=>{for(var t=r>1?void 0:r?_(e,a):e,m=i.length-1,g;m>=0;m--)(g=i[m])&&(t=(r?g(e,a,t):g(t))||t);return r&&t&&P(e,a,t),t};let o=class extends y{constructor(){super(...arguments),this.tenantKey="",this.logo="",this.loginUrl="",this.staging=!1,this.develop=!1,this.loginPending=!1}onSubmitHandle(i){i.preventDefault(),this.loginPending=!0;const e=new FormData(i.target);if(Array.from(e.values()).some(t=>t==="")){this.loginPending=!1;return}if(!/^(?=.*\d.*\d)[A-Za-z\d!@#$%^&*()_+\-=[\]{};':",.<>?\/]{6,}$/.test(e.get("password"))){this.errorText="At least 8 characters and at least two numbers",this.loginPending=!1;return}this.errorText=null;const a=new Headers;a.append("Content-Type","application/x-www-form-urlencoded");const r=new URLSearchParams;r.append("name",e.get("name")),r.append("email",e.get("email")),r.append("password",e.get("password")),fetch(`${v(this.staging,this.develop)}/api/${this.tenantKey}/signup`,{method:"POST",body:r,headers:a}).then(t=>{if(t.ok)return t.json();if(t.status===403)throw this.errorText="User already exist",i.target.reset(),new Error("User already exist")}).then(t=>{this.emit("flp-signup-success",t.message),window.parent.postMessage({type:"SIGNUP_SUCCESS",payload:t.message},"*"),window.location.href=t.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return p`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          ${this.logo?p`<img .src=${this.logo} alt="logo" width="150" height="150" />`:p`<flp-logo></flp-logo>`}
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
          .loading=${c(this.loginPending)} 
          .disabled=${c(this.loginPending)}
        >Signup</flp-button>
        <div class="login-container">
          <span>Already have account?</span>
          <flp-button class="login--button" variant="text" href=${this.loginUrl}>Login</flp-button>
        </div>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};o.styles=[x];n([s({type:String,attribute:"tenant_key"})],o.prototype,"tenantKey",2);n([s({type:String,attribute:"logo"})],o.prototype,"logo",2);n([s({type:String,attribute:"login_url"})],o.prototype,"loginUrl",2);n([s({type:Boolean,attribute:"staging"})],o.prototype,"staging",2);n([s({type:Boolean,attribute:"develop"})],o.prototype,"develop",2);n([h()],o.prototype,"errorText",2);n([h()],o.prototype,"loginPending",2);o=n([w("flp-signup")],o);const X={title:"containers/Signup",component:"flp-signup"},S={},$=(i,{globals:{theme:e}})=>p`
  <div class="flp-theme-light">
    <flp-signup .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback">
    </flp-signup>
  </div>
`,l=$.bind({});l.args=S;var d,u,f;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`(props: Signup, {
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
\``,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const Y=["Default"];export{l as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=flp-signup.stories-BEIJNFmx.js.map
