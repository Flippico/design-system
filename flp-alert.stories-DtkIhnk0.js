import{i as x,b as h}from"./lit-element-9a6qN07w.js";import{F as C,t as A}from"./custom-element-ChNscFG9.js";import{n}from"./property-ce-uMPVx.js";import{e as S}from"./query-BApjzB0v.js";import{c as k}from"./component.styles-G8qf-zGh.js";import{H}from"./slot-BCTpRhJ5.js";import{w as _}from"./watch-CEsCE2EF.js";import{b as w,s as d,g as m,a as u,w as v}from"./event-DI7budSv.js";import{a as D}from"./class-map-CUwhKOqL.js";import"./flp-icon-35KLMrqG.js";/* empty css             */import"./state-DiCaT3Q5.js";import"./directive-helpers-vuk04Y9b.js";const O=x`
${k}

:host {
  display: contents;

  /* For better DX, we'll reset the margin here so the base part can inherit it */
  margin: 0;
}

.alert {
  position: relative;
  display: flex;
  align-items: stretch;
  background-color: var(--flp-panel-background-color);
  border: solid var(--flp-panel-border-width) var(--flp-panel-border-color);
  border-top-width: calc(var(--flp-panel-border-width) * 3);
  border-radius: var(--flp-border-radius-medium);
  font-family: var(--flp-font-light);
  font-size: var(--flp-font-size-small);
  font-weight: var(--flp-font-weight-normal);
  line-height: 1.6;
  color: var(--flp-color-neutral-700);
  margin: inherit;
}

.alert:not(.alert--has-icon) .alert__icon,
.alert:not(.alert--closable) .alert__close-button {
  display: none;
}

.alert__icon {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  font-size: var(--flp-font-size-large);
  padding-inline-start: var(--flp-spacing-large);
}

.alert--primary {
  border-top-color: var(--flp-color-primary-600);
}

.alert--primary .alert__icon {
  color: var(--flp-color-primary-600);
}

.alert--success {
  border-top-color: var(--flp-color-success-600);
}

.alert--success .alert__icon {
  color: var(--flp-color-success-600);
}

.alert--neutral {
  border-top-color: var(--flp-color-neutral-600);
}

.alert--neutral .alert__icon {
  color: var(--flp-color-neutral-600);
}

.alert--warning {
  border-top-color: var(--flp-color-warning-600);
}

.alert--warning .alert__icon {
  color: var(--flp-color-warning-600);
}

.alert--danger {
  border-top-color: var(--flp-color-danger-600);
}

.alert--danger .alert__icon {
  color: var(--flp-color-danger-600);
}

.alert__message {
  flex: 1 1 auto;
  display: block;
  padding: var(--flp-spacing-large);
  overflow: hidden;
}

.alert__close-button {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  font-size: var(--flp-font-size-medium);
  padding-inline-end: var(--flp-spacing-medium);
}
`;var T=Object.defineProperty,F=Object.getOwnPropertyDescriptor,a=(t,r,p,s)=>{for(var o=s>1?void 0:s?F(r,p):r,c=t.length-1,f;c>=0;c--)(f=t[c])&&(o=(s?f(r,p,o):f(o))||o);return s&&o&&T(r,p,o),o};const l=Object.assign(document.createElement("div"),{className:"flp-toast-stack"});let e=class extends C{constructor(){super(...arguments),this.hasSlotController=new H(this,"icon","suffix"),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("flp-show"),this.duration<1/0&&this.restartAutoHide(),await d(this.base),this.base.hidden=!1;const{keyframes:t,options:r}=m(this,"alert.show",{dir:"ltr"});await u(this.base,t,r),this.emit("flp-after-show")}else{this.emit("flp-hide"),clearTimeout(this.autoHideTimeout),await d(this.base);const{keyframes:t,options:r}=m(this,"alert.hide",{dir:"ltr"});await u(this.base,t,r),this.base.hidden=!0,this.emit("flp-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,v(this,"flp-after-show")}async hide(){if(this.open)return this.open=!1,v(this,"flp-after-hide")}async toast(){return new Promise(t=>{l.parentElement===null&&document.body.append(l),l.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("flp-after-hide",()=>{l.removeChild(this),t(),l.querySelector("flp-alert")===null&&l.remove()},{once:!0})})}render(){return h`
      <div
        part="base"
        class=${D({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?h`
              <flp-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label="close"
                @click=${this.handleCloseClick}
              ></flp-icon-button>
            `:""}
      </div>
    `}};e.styles=[O];a([S('[part~="base"]')],e.prototype,"base",2);a([n({type:Boolean,reflect:!0})],e.prototype,"open",2);a([n({type:Boolean,reflect:!0})],e.prototype,"closable",2);a([n({reflect:!0})],e.prototype,"variant",2);a([n({type:Number})],e.prototype,"duration",2);a([_("open",{waitUntilFirstUpdate:!0})],e.prototype,"handleOpenChange",1);a([_("duration")],e.prototype,"handleDurationChange",1);e=a([A("flp-alert")],e);w("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});w("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});const J={title:"components/Alert",component:"flp-alert"},$={},z=(t,{globals:{theme:r}})=>h`
  <div class="flp-theme-light">
    <flp-alert open>
      <flp-icon slot="icon" name="info-circle"></flp-icon>
      Some text
    </flp-alert>
    <br/>
    <flp-alert open variant="success">
      <flp-icon slot="icon" name="check2-circle"></flp-icon>
      Some text
    </flp-alert>
  </div>
`,i=z.bind({});i.args=$;var b,g,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`(props: Alert, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-alert open>
      <flp-icon slot="icon" name="info-circle"></flp-icon>
      Some text
    </flp-alert>
    <br/>
    <flp-alert open variant="success">
      <flp-icon slot="icon" name="check2-circle"></flp-icon>
      Some text
    </flp-alert>
  </div>
\``,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const K=["Default"];export{i as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=flp-alert.stories-DtkIhnk0.js.map
