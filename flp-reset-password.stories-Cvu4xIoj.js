import{i as w,x as i}from"./lit-element-ChAK2pu5.js";import{F as y,t as b}from"./custom-element-BSoDmtoY.js";import{n as p}from"./property-Bhw6601B.js";import{r as d}from"./state-dCtEkiMd.js";import"./index-CFp6X0B1.js";import{g as x}from"./get-api-url-CY5fWP8z.js";import{o as c}from"./if-defined-Bhm9Cegq.js";/* empty css             */import"./flp-icon-hM3eViNJ.js";import"./component.styles-CK1ltfsO.js";import"./watch-CEsCE2EF.js";import"./directive-helpers-DwFNumRl.js";import"./index-D2NdRWdU.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./create-component-BisMVfBB.js";const v=w`
.auth-container {
  max-width: 450px;
  width: 100%;
}
.email--input {
  margin-bottom: 20px;
}
flp-button {
  width: 100%;
}
.mb-small {
  margin-bottom: 20px;
}
.mb-medium {
  margin-bottom: 40px;
}
.error {
  color: var(--flp-color-warning-700);
}
h2 {
  font-family: var(--flp-font-medium);
}
.text-align-center {
  text-align: center;
}
.login-by-email-text {
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login-by-email-text--line {
  height: 1px;
  width: 30%;
  background-color: black;
}
.password--and-forgot-password-link--container {
  margin-bottom: 40px;
}
.password--and-forgot-password-link--container flp-button {
  width: auto;
}

.forgot-password-link--container {
  text-align: right;
  --flp-spacing-medium: 0px;
}`;var P=Object.defineProperty,S=Object.getOwnPropertyDescriptor,r=(s,o,a,e)=>{for(var n=e>1?void 0:e?S(o,a):o,m=s.length-1,g;m>=0;m--)(g=s[m])&&(n=(e?g(o,a,n):g(n))||n);return e&&n&&P(o,a,n),n};let t=class extends y{constructor(){super(...arguments),this.tenantKey="",this.logo="",this.staging=!1,this.develop=!1,this.loginPending=!1,this.successState=!1}async onSubmitHandle(s){s.preventDefault(),this.loginPending=!0;const o=new FormData(s.target);if(Array.from(o.values()).some(e=>e==="")){this.errorText="Email is empty",this.loginPending=!1;return}const a=new URLSearchParams;a.append("email",o.get("email")),this.errorText=null,fetch(`${x(this.staging,this.develop)}/api/${this.tenantKey}/reset-password`,{method:"POST",body:a,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>{if(e.ok)return e.json();throw this.errorText="Something went wrong, try again",s.target.reset(),new Error("Something went wrong, try again")}).then(()=>{this.emit("flp-reset-password-success"),window.parent.postMessage({type:"RESET_PASSWORD_SUCCESS",payload:{}},"*"),this.successState=!0}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return i`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          ${this.logo?i`<img .src=${this.logo} alt="logo" width="150" height="150" />`:i`<flp-logo></flp-logo>`}
        </div>
        <h2 class="text-align-center">Forgot password?</h2>
        <div class="mb-medium text-align-center">
          <span class="text-align-center">No worries, we'll send you instructions</span>
        </div>
        <flp-input class="mb-small" type="email" required name="email" label="Email"></flp-input>
        ${this.successState?i`<maui-icon name="envelope-at"></maui-icon>`:i`<flp-button 
          class="mb-small" 
          size="large" 
          variant="primary" 
          type="submit" 
          .loading=${c(this.loginPending)} 
          .disabled=${c(this.loginPending)}
        >Reset password</flp-button>`}
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};t.styles=[v];r([p({type:String,attribute:"tenant_key"})],t.prototype,"tenantKey",2);r([p({type:String,attribute:"logo"})],t.prototype,"logo",2);r([p({type:Boolean,attribute:"staging"})],t.prototype,"staging",2);r([p({type:Boolean,attribute:"develop"})],t.prototype,"develop",2);r([d()],t.prototype,"errorText",2);r([d()],t.prototype,"loginPending",2);r([d()],t.prototype,"successState",2);t=r([b("flp-reset-password")],t);const z={title:"containers/ResetPassword",component:"flp-reset-password"},_={},T=(s,{globals:{theme:o}})=>i`
  <div class="flp-theme-light">
    <flp-reset-password tenant_key="some_key"></flp-reset-password>
  </div>
`,l=T.bind({});l.args=_;var f,h,u;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`(props: ResetPassword, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-reset-password tenant_key="some_key"></flp-reset-password>
  </div>
\``,...(u=(h=l.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const L=["Default"];export{l as Default,L as __namedExportsOrder,z as default};
//# sourceMappingURL=flp-reset-password.stories-Cvu4xIoj.js.map
