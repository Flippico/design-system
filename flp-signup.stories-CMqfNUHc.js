import{i as b,x as p}from"./lit-element-ChAK2pu5.js";import{F as y,t as w}from"./custom-element-BSoDmtoY.js";import{n as s}from"./property-Bhw6601B.js";import{r as h}from"./state-dCtEkiMd.js";import"./index-D2dJve2F.js";import{o as u}from"./if-defined-Bhm9Cegq.js";import{g as v}from"./get-api-url-CY5fWP8z.js";/* empty css             */import"./flp-card-D8iNYDgW.js";import"./component.styles-CK1ltfsO.js";import"./slot-BCTpRhJ5.js";import"./class-map-DFy0aMwt.js";import"./index-D2NdRWdU.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./create-component-BisMVfBB.js";import"./flp-button-BZhtY4z0.js";import"./query-BApjzB0v.js";import"./form-DpMOf5Do.js";import"./watch-CEsCE2EF.js";import"./flp-input-BvhwxHaN.js";import"./form-control.styles-BBEJYdf5.js";import"./live-DswdT67c.js";import"./directive-helpers-DwFNumRl.js";import"./default-value-DaLIHyno.js";import"./flp-logo-CV8Fjdwo.js";import"./flp-divider-CsJRYlP4.js";const x=b`
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
`;var P=Object.defineProperty,_=Object.getOwnPropertyDescriptor,n=(r,e,l,i)=>{for(var t=i>1?void 0:i?_(e,l):e,m=r.length-1,g;m>=0;m--)(g=r[m])&&(t=(i?g(e,l,t):g(t))||t);return i&&t&&P(e,l,t),t};let o=class extends y{constructor(){super(...arguments),this.tenantKey="",this.logo="",this.loginUrl="",this.staging=!1,this.develop=!1,this.loginPending=!1}onSubmitHandle(r){r.preventDefault(),this.loginPending=!0;const e=new FormData(r.target);if(Array.from(e.values()).some(t=>t==="")){this.loginPending=!1;return}if(!/^(?=.*\d.*\d)[A-Za-z\d!@#$%^&*()_+\-=[\]{};':",.<>?\/]{6,}$/.test(e.get("password"))){this.errorText="Minimum 8 znaków oraz minimum dwie liczby",this.loginPending=!1;return}this.errorText=null;const l=new Headers;l.append("Content-Type","application/x-www-form-urlencoded");const i=new URLSearchParams;i.append("name",e.get("name")),i.append("email",e.get("email")),i.append("password",e.get("password")),fetch(`${v(this.staging,this.develop)}/api/${this.tenantKey}/signup`,{method:"POST",body:i,headers:l}).then(t=>{if(t.ok)return t.json();if(t.status===403)throw this.errorText="User already exist",r.target.reset(),new Error("User already exist")}).then(t=>{this.emit("flp-signup-success",t.message),window.parent.postMessage({type:"SIGNUP_SUCCESS",payload:t.message},"*"),window.location.href=t.message.redirect_url}).catch(console.error).finally(()=>this.loginPending=!1)}render(){return p`<flp-card class="auth-container">
      <form @submit=${this.onSubmitHandle}>
        <div class="logo-container text-align-center">
          ${this.logo?p`<img .src=${this.logo} alt="logo" width="150" height="auto" />`:p`<flp-logo></flp-logo>`}
        </div>
        <h2 class="text-align-center">Stwórz nowe konto</h2>
        <flp-input class="mb-small"  type="text" required name="name" label="Imię"></flp-input>
        <flp-input class="mb-small"  type="email" required name="email" label="Email"></flp-input>
        <flp-input class="mb-medium"  name="password" help-text="Minimum 8 znaków oraz minimum dwie liczby" required type="password" label="Hasło" password-toggle></flp-input>
        <flp-button
          class="mb-small"
          size="large"
          variant="primary"
          type="submit"
          .loading=${u(this.loginPending)}
          .disabled=${u(this.loginPending)}
        >Zarejestruj się</flp-button>
        <div class="login-container">
          <span>Masz już konto?</span>
          <flp-button class="login--button" variant="text" href=${this.loginUrl}>Zaloguj się</flp-button>
        </div>
        <div class="error">${this.errorText}</div>
      </form>
    </flp-card>`}};o.styles=[x];n([s({type:String,attribute:"tenant_key"})],o.prototype,"tenantKey",2);n([s({type:String,attribute:"logo"})],o.prototype,"logo",2);n([s({type:String,attribute:"login_url"})],o.prototype,"loginUrl",2);n([s({type:Boolean,attribute:"staging"})],o.prototype,"staging",2);n([s({type:Boolean,attribute:"develop"})],o.prototype,"develop",2);n([h()],o.prototype,"errorText",2);n([h()],o.prototype,"loginPending",2);o=n([w("flp-signup")],o);const X={title:"containers/Signup",component:"flp-signup"},S={},k=(r,{globals:{theme:e}})=>p`
  <div class="flp-theme-light">
    <flp-signup .develop=${!0} tenant_key="somekey" name="GDPR Plugin" login_callback="some login callback" logout_callback="som logout callback">
    </flp-signup>
  </div>
`,a=k.bind({});a.args=S;var c,d,f;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`(props: Signup, {
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
\``,...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const Y=["Default"];export{a as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=flp-signup.stories-CMqfNUHc.js.map
