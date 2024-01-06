import{i as M,x as m}from"./lit-element-w72SgdYd.js";import{F as O,t as R}from"./custom-element-fmFNofkQ.js";import{c as $,n as g,w as H}from"./dark-eo65Sget.js";import{e as v,H as q,a as K,o as x}from"./form-5KtZygxB.js";import"./flp-button-tf0aVxxG.js";const z=M`
${$}

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
`;function*T(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*T(e.shadowRoot.activeElement)))}function I(){return[...T()].pop()}const _=new WeakMap;function W(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let t=_.get(e);return t||(t=window.getComputedStyle(e,null),_.set(e,t)),t.visibility!=="hidden"&&t.display!=="none"}function B(e){const t=e.tagName.toLowerCase(),i=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||e.hasAttribute("disabled")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!W(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)}function U(e,t){var i;return((i=e.getRootNode({composed:!0}))==null?void 0:i.host)!==t}function k(e){const t=new WeakMap,i=[];function s(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||t.has(o))return;t.set(o,!0),!i.includes(o)&&B(o)&&i.push(o),o instanceof HTMLSlotElement&&U(o,e)&&o.assignedElements({flatten:!0}).forEach(a=>{s(a)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&s(o.shadowRoot)}for(const a of o.children)s(a)}return s(e),i.sort((o,a)=>{const r=Number(o.getAttribute("tabindex"))||0;return(Number(a.getAttribute("tabindex"))||0)-r})}let d=[];class N{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=i=>{var y,w;if(i.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=I();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;i.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=k(this.element);let a=o.findIndex(P=>P===s);if(this.previousFocus=this.currentFocus,a===-1){if(this.currentFocus=o[0],this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;i.preventDefault(),(y=this.currentFocus)==null||y.focus({preventScroll:!1});return}const r=this.tabDirection==="forward"?1:-1;a+r>=o.length?a=0:a+r<0?a=o.length-1:a+=r,this.previousFocus=this.currentFocus;const f=o[a];this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||f&&this.possiblyHasTabbableChildren(f)||(i.preventDefault(),this.currentFocus=f,(w=this.currentFocus)==null||w.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus()))},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){d.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){d=d.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return d[d.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=k(this.element);if(!this.element.matches(":focus-within")){const i=t[0],s=t[t.length-1],o=this.tabDirection==="forward"?i:s;typeof(o==null?void 0:o.focus)=="function"&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}}const b=new Set;function j(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function A(e){if(b.add(e),!document.body.classList.contains("flp-scroll-lock")){const t=j();document.body.classList.add("flp-scroll-lock"),document.body.style.setProperty("--flp-scroll-lock-size",`${t}px`)}}function E(e){b.delete(e),b.size===0&&(document.body.classList.remove("flp-scroll-lock"),document.body.style.removeProperty("--flp-scroll-lock-size"))}const V=new Map,G=new WeakMap;function F(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function c(e,t,i){const s=G.get(e);if(s!=null&&s[t])return F(s[t],i.dir);const o=V.get(t);return o?F(o,i.dir):{keyframes:[],options:{duration:0}}}function u(e,t,i){return new Promise(s=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,{...i,duration:J()?0:i.duration});o.addEventListener("cancel",s,{once:!0}),o.addEventListener("finish",s,{once:!0})})}function J(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function p(e){return Promise.all(e.getAnimations().map(t=>new Promise(i=>{const s=requestAnimationFrame(i);t.addEventListener("cancel",()=>s,{once:!0}),t.addEventListener("finish",()=>s,{once:!0}),t.cancel()})))}function C(e,t){return new Promise(i=>{function s(o){o.target===e&&(e.removeEventListener(t,s),i())}e.addEventListener(t,s)})}var Q=Object.defineProperty,X=Object.getOwnPropertyDescriptor,l=(e,t,i,s)=>{for(var o=s>1?void 0:s?X(t,i):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Q(t,i,o),o};let n=class extends O{constructor(){super(...arguments),this.hasSlotController=new q(this,"footer"),this.modal=new N(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),A(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),E(this)}requestClose(e){if(this.emit("flp-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const i=c(this,"dialog.denyClose",{dir:"ltr"});u(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("flp-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),A(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([p(this.dialog),p(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("flp-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=c(this,"dialog.show",{dir:"ltr"}),i=c(this,"dialog.overlay.show",{dir:"ltr"});await Promise.all([u(this.panel,t.keyframes,t.options),u(this.overlay,i.keyframes,i.options)]),this.emit("flp-after-show")}else{this.emit("flp-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([p(this.dialog),p(this.overlay)]);const e=c(this,"dialog.hide",{dir:"ltr"}),t=c(this,"dialog.overlay.hide",{dir:"ltr"});await Promise.all([u(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),u(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,E(this);const i=this.originalTrigger;typeof(i==null?void 0:i.focus)=="function"&&setTimeout(()=>i.focus()),this.emit("flp-after-hide")}}async show(){if(!this.open)return this.open=!0,C(this,"flp-after-show")}async hide(){if(this.open)return this.open=!1,C(this,"flp-after-hide")}render(){return m`
      <div
        part="base"
        class=${K({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${x(this.noHeader?this.label:void 0)}
          aria-labelledby=${x(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":m`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
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
    `}};n.styles=[z];l([v(".dialog")],n.prototype,"dialog",2);l([v(".dialog__panel")],n.prototype,"panel",2);l([v(".dialog__overlay")],n.prototype,"overlay",2);l([g({type:Boolean,reflect:!0})],n.prototype,"open",2);l([g({reflect:!0})],n.prototype,"label",2);l([g({attribute:"no-header",type:Boolean,reflect:!0})],n.prototype,"noHeader",2);l([H("open",{waitUntilFirstUpdate:!0})],n.prototype,"handleOpenChange",1);n=l([R("flp-modal")],n);const ae={title:"components/Modal",component:"flp-modal"},Y={},Z=(e,{globals:{theme:t}})=>m`
  <div class="flp-theme-light">
    <flp-modal id="modal" label="Dialog sdfsdf" class="dialog-overview">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </flp-modal>
    <flp-button @click=${()=>{var i;return(i=document.getElementById("modal"))==null?void 0:i.setAttribute("open","true")}}>Open Modal</flp-button>
  </div>`,h=Z.bind({});h.args=Y;var L,D,S;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`(props: Modal, {
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
}`,...(S=(D=h.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const ne=["Default"];export{h as Default,ne as __namedExportsOrder,ae as default};
//# sourceMappingURL=flp-modal.stories-oW8I2WAj.js.map
