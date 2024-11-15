import{i as d,x as i}from"./lit-element-UdLzEcH-.js";import{F as g,t as u}from"./custom-element-_dbbq29R.js";import{n as l}from"./property-BiB_YYz7.js";import{r as _}from"./state-BpJekWaB.js";import{c as b}from"./component.styles-BhDG6Xff.js";import{w as y}from"./watch-CEsCE2EF.js";import{a as w}from"./class-map-YRkreJUE.js";/* empty css             */const j=d`
  ${b}

:host {
  display: inline-block;

  --size: 3rem;
}

.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: var(--size);
  height: var(--size);
  background-color: var(--flp-color-neutral-400);
  font-family: var(--flp-font-light);
  font-size: calc(var(--size) * 0.5);
  font-weight: var(--flp-font-weight-normal);
  color: var(--flp-color-neutral-0);
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
}

.avatar--circle,
.avatar--circle .avatar__image {
  border-radius: var(--flp-border-radius-circle);
}

.avatar--rounded,
.avatar--rounded .avatar__image {
  border-radius: var(--flp-border-radius-medium);
}

.avatar--square {
  border-radius: 0;
}

.avatar__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.avatar__initials {
  line-height: 1;
  text-transform: uppercase;
}

.avatar__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}`;var z=Object.defineProperty,$=Object.getOwnPropertyDescriptor,e=(s,t,p,n)=>{for(var r=n>1?void 0:n?$(t,p):t,c=s.length-1,m;c>=0;c--)(m=s[c])&&(r=(n?m(t,p,r):m(r))||r);return n&&r&&z(t,p,r),r};let a=class extends g{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const s=i`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let t=i``;return this.initials?t=i`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=i`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <flp-icon name="person-fill" library="system"></flp-icon>
          </slot>
        </div>
      `,i`
      <div
        part="base"
        class=${w({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?s:t}
      </div>
    `}};a.styles=[j];e([_()],a.prototype,"hasError",2);e([l()],a.prototype,"image",2);e([l()],a.prototype,"label",2);e([l()],a.prototype,"initials",2);e([l()],a.prototype,"loading",2);e([l({reflect:!0})],a.prototype,"shape",2);e([y("image")],a.prototype,"handleImageChange",1);a=e([u("flp-avatar")],a);const k={title:"components/Avatar",component:"flp-avatar"},x={},E=(s,{globals:{theme:t}})=>i`
  <div class="flp-theme-light">
    <flp-avatar shape="rounded" image="https://flippico-storage-cdk.s3.eu-central-1.amazonaws.com/321058520_909165450453057_2617745252442870984_n_c1c1580f8a.jpeg"></flp-avatar>
    <flp-avatar image="https://flippico-storage-cdk.s3.eu-central-1.amazonaws.com/321058520_909165450453057_2617745252442870984_n_c1c1580f8a.jpeg"></flp-avatar>
    <flp-avatar image="https://avatars.githubusercontent.com/u/15210655?v=4"></flp-avatar>
    <flp-avatar shape="square" image="https://avatars.githubusercontent.com/u/15210655?v=4"></flp-avatar>
  </div>
`,o=E.bind({});o.args=x;var v,h,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`(props: Avatar, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-avatar shape="rounded" image="https://flippico-storage-cdk.s3.eu-central-1.amazonaws.com/321058520_909165450453057_2617745252442870984_n_c1c1580f8a.jpeg"></flp-avatar>
    <flp-avatar image="https://flippico-storage-cdk.s3.eu-central-1.amazonaws.com/321058520_909165450453057_2617745252442870984_n_c1c1580f8a.jpeg"></flp-avatar>
    <flp-avatar image="https://avatars.githubusercontent.com/u/15210655?v=4"></flp-avatar>
    <flp-avatar shape="square" image="https://avatars.githubusercontent.com/u/15210655?v=4"></flp-avatar>
  </div>
\``,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const S=["Default"];export{o as Default,S as __namedExportsOrder,k as default};
//# sourceMappingURL=flp-avatar.stories-Coj6okRW.js.map
