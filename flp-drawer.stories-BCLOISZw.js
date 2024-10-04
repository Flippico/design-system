import{i as A,k as y}from"./lit-element-CPYlYYac.js";import{F as O,t as z}from"./custom-element-DcGDOd3C.js";import{n as c}from"./property-CcHbFR6H.js";import{e as v}from"./query-BApjzB0v.js";import{c as S}from"./component.styles-MQe3hEw3.js";import{H as $}from"./slot-BCTpRhJ5.js";import{M as P}from"./modal-raw-bfnOvLZK.js";import{l as w,u}from"./scroll-Xz6hnXoZ.js";import{b as o,g as l,a as d,s as h,w as g}from"./event-DI7budSv.js";import{w as D}from"./watch-CEsCE2EF.js";import{R as E}from"./class-map-635SZfYW.js";import{t as b}from"./if-defined-4GS2c12S.js";import"./flp-button-DKNOhfQI.js";/* empty css             */import"./tabbable-BIdkFw3w.js";import"./state-Cw-lAQBx.js";import"./form-DpMOf5Do.js";const F=A`
${S}

:host {
  --size: 25rem;
  --header-spacing: var(--flp-spacing-large);
  --body-spacing: var(--flp-spacing-large);
  --footer-spacing: var(--flp-spacing-large);

  display: contents;
}

.drawer {
  top: 0;
  inset-inline-start: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.drawer--contained {
  position: absolute;
  z-index: initial;
}

.drawer--fixed {
  position: fixed;
  z-index: var(--flp-z-index-drawer);
}

.drawer__panel {
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 2;
  max-width: 100%;
  max-height: 100%;
  background-color: var(--flp-panel-background-color);
  box-shadow: var(--flp-shadow-x-large);
  overflow: auto;
  pointer-events: all;
}

.drawer__panel:focus {
  outline: none;
}

.drawer--top .drawer__panel {
  top: 0;
  inset-inline-end: auto;
  bottom: auto;
  inset-inline-start: 0;
  width: 100%;
  height: var(--size);
}

.drawer--end .drawer__panel {
  top: 0;
  inset-inline-end: 0;
  bottom: auto;
  inset-inline-start: auto;
  width: var(--size);
  height: 100%;
}

.drawer--bottom .drawer__panel {
  top: auto;
  inset-inline-end: auto;
  bottom: 0;
  inset-inline-start: 0;
  width: 100%;
  height: var(--size);
}

.drawer--start .drawer__panel {
  top: 0;
  inset-inline-end: auto;
  bottom: auto;
  inset-inline-start: 0;
  width: var(--size);
  height: 100%;
}

.drawer__header {
  display: flex;
}

.drawer__title {
  flex: 1 1 auto;
  font: inherit;
  font-size: var(--flp-font-size-large);
  line-height: var(--flp-line-height-dense);
  padding: var(--header-spacing);
  margin: 0;
}

.drawer__header-actions {
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  gap: var(--flp-spacing-2x-small);
  padding: 0 var(--header-spacing);
}

.drawer__header-actions sl-icon-button,
.drawer__header-actions ::slotted(sl-icon-button) {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  font-size: var(--flp-font-size-medium);
}

.drawer__body {
  flex: 1 1 auto;
  display: block;
  padding: var(--body-spacing);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.drawer__footer {
  text-align: right;
  padding: var(--footer-spacing);
}

.drawer__footer ::slotted(sl-button:not(:last-of-type)) {
  margin-inline-end: var(--flp-spacing-x-small);
}

.drawer:not(.drawer--has-footer) .drawer__footer {
  display: none;
}

.drawer__overlay {
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--flp-overlay-background-color);
  pointer-events: all;
}

.drawer--contained .drawer__overlay {
  display: none;
}

@media (forced-colors: active) {
  .drawer__panel {
    border: solid 1px var(--flp-color-neutral-0);
  }
}
`;function _(e){return e.charAt(0).toUpperCase()+e.slice(1)}var q=Object.defineProperty,B=Object.getOwnPropertyDescriptor,i=(e,r,t,n)=>{for(var s=n>1?void 0:n?B(r,t):r,f=e.length-1,m;f>=0;f--)(m=e[f])&&(s=(n?m(r,t,s):m(s))||s);return n&&s&&q(r,t,s),s};let a=class extends O{constructor(){super(...arguments),this.hasSlotController=new $(this,"footer"),this.modal=new P(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),w(this)))}disconnectedCallback(){super.disconnectedCallback(),u(this)}requestClose(e){if(this.emit("flp-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const t=l(this,"drawer.denyClose",{dir:"ltr"});d(this.panel,t.keyframes,t.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("flp-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),w(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([h(this.drawer),h(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("flp-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const r=l(this,`drawer.show${_(this.placement)}`,{dir:"ltr"}),t=l(this,"drawer.overlay.show",{dir:"ltr"});await Promise.all([d(this.panel,r.keyframes,r.options),d(this.overlay,t.keyframes,t.options)]),this.emit("flp-after-show")}else{this.emit("flp-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),u(this)),await Promise.all([h(this.drawer),h(this.overlay)]);const e=l(this,`drawer.hide${_(this.placement)}`,{dir:"ltr"}),r=l(this,"drawer.overlay.hide",{dir:"ltr"});await Promise.all([d(this.overlay,r.keyframes,r.options).then(()=>{this.overlay.hidden=!0}),d(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const t=this.originalTrigger;typeof(t==null?void 0:t.focus)=="function"&&setTimeout(()=>t.focus()),this.emit("flp-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),w(this)),this.open&&this.contained&&(this.modal.deactivate(),u(this))}async show(){if(!this.open)return this.open=!0,g(this,"flp-after-show")}async hide(){if(this.open)return this.open=!1,g(this,"flp-after-hide")}render(){return y`
      <div
        part="base"
        class=${E({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":!1,"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${b(this.noHeader?this.label:void 0)}
          aria-labelledby=${b(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":y`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <flp-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label="close"
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></flp-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};a.styles=[F];i([v(".drawer")],a.prototype,"drawer",2);i([v(".drawer__panel")],a.prototype,"panel",2);i([v(".drawer__overlay")],a.prototype,"overlay",2);i([c({type:Boolean,reflect:!0})],a.prototype,"open",2);i([c({reflect:!0})],a.prototype,"label",2);i([c({reflect:!0})],a.prototype,"placement",2);i([c({type:Boolean,reflect:!0})],a.prototype,"contained",2);i([c({attribute:"no-header",type:Boolean,reflect:!0})],a.prototype,"noHeader",2);i([D("open",{waitUntilFirstUpdate:!0})],a.prototype,"handleOpenChange",1);i([D("contained",{waitUntilFirstUpdate:!0})],a.prototype,"handleNoModalChange",1);a=i([z("flp-drawer")],a);o("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});o("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});o("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});o("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});o("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});o("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});o("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});o("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});o("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});o("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});o("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});const te={title:"components/Drawer",component:"flp-drawer"},L={},T=(e,{globals:{theme:r}})=>y`
  <div class="flp-theme-light">
    <flp-drawer id="drawer" label="drawer">
      Drawer
    </flp-drawer>
    <flp-button @click=${()=>{var t;return(t=document.getElementById("drawer"))==null?void 0:t.setAttribute("open","true")}}>Open Drawer</flp-button>
  </div>
`,p=T.bind({});p.args=L;var k,x,C;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`(props: Drawer, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-drawer id="drawer" label="drawer">
      Drawer
    </flp-drawer>
    <flp-button @click=\${() => document.getElementById('drawer')?.setAttribute('open', 'true')}>Open Drawer</flp-button>
  </div>
\``,...(C=(x=p.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const ae=["Default"];export{p as Default,ae as __namedExportsOrder,te as default};
//# sourceMappingURL=flp-drawer.stories-BCLOISZw.js.map
