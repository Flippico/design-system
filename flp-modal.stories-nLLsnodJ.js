import{i as k,k as f}from"./lit-element-CPYlYYac.js";import{c as C,F as O,t as P}from"./component.styles-CJs1ohMC.js";import{n as m}from"./property-CcHbFR6H.js";import{e as g}from"./query-BApjzB0v.js";import{H as A}from"./slot-BCTpRhJ5.js";import{M as D}from"./modal-raw-bfnOvLZK.js";import{l as u,u as v}from"./scroll-Xz6hnXoZ.js";import{g as r,a as n,s as p,w as y}from"./event-DI7budSv.js";import{t as b}from"./if-defined-4GS2c12S.js";import{R as $}from"./class-map-635SZfYW.js";import{w as S}from"./watch-CEsCE2EF.js";/* empty css             */import"./flp-button-C0qf3g4c.js";import"./tabbable-BIdkFw3w.js";import"./state-Cw-lAQBx.js";import"./form-DpMOf5Do.js";const E=k`
${C}

:host {
  --width: 31rem;
  --header-spacing: var(--flp-spacing-large);
  --body-spacing: var(--flp-spacing-large);
  --footer-spacing: var(--flp-spacing-large);

  display: contents;
}

.dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: var(--flp-z-index-dialog);
}

.dialog__panel {
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: var(--width);
  max-width: calc(100% - var(--flp-spacing-2x-large));
  max-height: calc(100% - var(--flp-spacing-2x-large));
  background-color: var(--flp-panel-background-color);
  border-radius: var(--flp-border-radius-medium);
  box-shadow: var(--flp-shadow-x-large);
}

.dialog__panel:focus {
  outline: none;
}

/* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
@media screen and (max-width: 420px) {
  .dialog__panel {
    max-height: 80vh;
  }
}

.dialog--open .dialog__panel {
  display: flex;
  opacity: 1;
}

.dialog__header {
  flex: 0 0 auto;
  display: flex;
}

.dialog__title {
  flex: 1 1 auto;
  font: inherit;
  font-size: var(--flp-font-size-large);
  line-height: var(--flp-line-height-dense);
  padding: var(--header-spacing);
  margin: 0;
}

.dialog__header-actions {
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  gap: var(--flp-spacing-2x-small);
  padding: 0 var(--header-spacing);
}

.dialog__header-actions sl-icon-button,
.dialog__header-actions ::slotted(sl-icon-button) {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  font-size: var(--flp-font-size-medium);
}

.dialog__body {
  flex: 1 1 auto;
  display: block;
  padding: var(--body-spacing);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.dialog__footer {
  flex: 0 0 auto;
  text-align: right;
  padding: var(--footer-spacing);
}

.dialog__footer ::slotted(sl-button:not(:first-of-type)) {
  margin-inline-start: var(--flp-spacing-x-small);
}

.dialog:not(.dialog--has-footer) .dialog__footer {
  display: none;
}

.dialog__overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--flp-overlay-background-color);
}

@media (forced-colors: active) {
  .dialog__panel {
    border: solid 1px var(--flp-color-neutral-0);
  }
}
`;var q=Object.defineProperty,F=Object.getOwnPropertyDescriptor,i=(e,o,t,s)=>{for(var l=s>1?void 0:s?F(o,t):o,c=e.length-1,h;c>=0;c--)(h=e[c])&&(l=(s?h(o,t,l):h(l))||l);return s&&l&&q(o,t,l),l};let a=class extends O{constructor(){super(...arguments),this.hasSlotController=new A(this,"footer"),this.modal=new D(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),u(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),v(this)}requestClose(e){if(this.emit("flp-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const t=r(this,"dialog.denyClose",{dir:"ltr"});n(this.panel,t.keyframes,t.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("flp-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),u(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([p(this.dialog),p(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("flp-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const o=r(this,"dialog.show",{dir:"ltr"}),t=r(this,"dialog.overlay.show",{dir:"ltr"});await Promise.all([n(this.panel,o.keyframes,o.options),n(this.overlay,t.keyframes,t.options)]),this.emit("flp-after-show")}else{this.emit("flp-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([p(this.dialog),p(this.overlay)]);const e=r(this,"dialog.hide",{dir:"ltr"}),o=r(this,"dialog.overlay.hide",{dir:"ltr"});await Promise.all([n(this.overlay,o.keyframes,o.options).then(()=>{this.overlay.hidden=!0}),n(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,v(this);const t=this.originalTrigger;typeof(t==null?void 0:t.focus)=="function"&&setTimeout(()=>t.focus()),this.emit("flp-after-hide")}}async show(){if(!this.open)return this.open=!0,y(this,"flp-after-show")}async hide(){if(this.open)return this.open=!1,y(this,"flp-after-hide")}render(){return f`
      <div
        part="base"
        class=${$({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${b(this.noHeader?this.label:void 0)}
          aria-labelledby=${b(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":f`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <flp-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label="close"
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></flp-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};a.styles=[E];i([g(".dialog")],a.prototype,"dialog",2);i([g(".dialog__panel")],a.prototype,"panel",2);i([g(".dialog__overlay")],a.prototype,"overlay",2);i([m({type:Boolean,reflect:!0})],a.prototype,"open",2);i([m({reflect:!0})],a.prototype,"label",2);i([m({attribute:"no-header",type:Boolean,reflect:!0})],a.prototype,"noHeader",2);i([S("open",{waitUntilFirstUpdate:!0})],a.prototype,"handleOpenChange",1);a=i([P("flp-modal")],a);const Y={title:"components/Modal",component:"flp-modal"},L={},M=(e,{globals:{theme:o}})=>f`
  <div class="flp-theme-light">
    <flp-modal id="modal" label="Dialog sdfsdf" class="dialog-overview">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </flp-modal>
    <flp-button @click=${()=>{var t;return(t=document.getElementById("modal"))==null?void 0:t.setAttribute("open","true")}}>Open Modal</flp-button>
  </div>`,d=M.bind({});d.args=L;var _,w,x;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`(props: Modal, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => {
  return html\`
  <div class="flp-theme-light">
    <flp-modal id="modal" label="Dialog sdfsdf" class="dialog-overview">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </flp-modal>
    <flp-button @click=\${() => document.getElementById('modal')?.setAttribute('open', 'true')}>Open Modal</flp-button>
  </div>\`;
}`,...(x=(w=d.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const Z=["Default"];export{d as Default,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=flp-modal.stories-nLLsnodJ.js.map
