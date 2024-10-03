import{i as k,k as b}from"./lit-element-CPYlYYac.js";import{c as D,F as E,t as O}from"./component.styles-CJs1ohMC.js";import{n as p}from"./property-CcHbFR6H.js";import{e as h}from"./query-BApjzB0v.js";import{b as v,w as c,s as m,g as f,a as u}from"./event-DI7budSv.js";import{a as T}from"./tabbable-BIdkFw3w.js";import{R as C}from"./class-map-635SZfYW.js";import{w as _}from"./watch-CEsCE2EF.js";import"./flp-menu-item-CF5ZdXnn.js";import"./flp-icon-Bws9qRSJ.js";import"./flp-divider-vctiWg7L.js";/* empty css             */import"./slot-BCTpRhJ5.js";import"./directive-helpers-CHX3h6dV.js";import"./state-Cw-lAQBx.js";const L=k`
${D}

:host {
  display: inline-block;
}

.dropdown::part(popup) {
  z-index: var(--flp-z-index-dropdown);
}

.dropdown[data-current-placement^='top']::part(popup) {
  transform-origin: bottom;
}

.dropdown[data-current-placement^='bottom']::part(popup) {
  transform-origin: top;
}

.dropdown[data-current-placement^='left']::part(popup) {
  transform-origin: right;
}

.dropdown[data-current-placement^='right']::part(popup) {
  transform-origin: left;
}

.dropdown__trigger {
  display: block;
}

.dropdown__panel {
  font-family: var(--flp-font-light);
  font-size: var(--flp-font-size-medium);
  font-weight: var(--flp-font-weight-normal);
  box-shadow: var(--flp-shadow-large);
  border-radius: var(--flp-border-radius-medium);
  pointer-events: none;
}

.dropdown--open .dropdown__panel {
  display: block;
  pointer-events: all;
}

/* When users slot a menu, make sure it conforms to the popup's auto-size */
::slotted(sl-menu) {
  max-width: var(--auto-size-available-width) !important;
  max-height: var(--auto-size-available-height) !important;
}
`;var x=Object.defineProperty,A=Object.getOwnPropertyDescriptor,s=(e,t,n,r)=>{for(var i=r>1?void 0:r?A(t,n):t,a=e.length-1,d;a>=0;a--)(d=e[a])&&(i=(r?d(t,n,i):d(i))||i);return r&&i&&x(t,n,i),i};let o=class extends E{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="flp-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,i,a;const n=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(a=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:a.activeElement:document.activeElement;(!this.containingElement||(n==null?void 0:n.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="flp-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="flp-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const n=t.getAllItems(),r=n[0],i=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(r),r.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(r=>T(r).start);let n;if(t){switch(t.tagName.toLowerCase()){case"flp-button":case"flp-icon-button":n=t.button;break;default:n=t}n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,c(this,"flp-after-show")}async hide(){if(this.open)return this.open=!1,c(this,"flp-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("flp-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("flp-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("flp-show"),this.addOpenListeners(),await m(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=f(this,"dropdown.show",{dir:"ltr"});await u(this.popup.popup,e,t),this.emit("flp-after-show")}else{this.emit("flp-hide"),this.removeOpenListeners(),await m(this);const{keyframes:e,options:t}=f(this,"dropdown.hide",{dir:"ltr"});await u(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("flp-after-hide")}}render(){return b`
      <flp-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${C({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </flp-popup>
    `}};o.styles=[L];s([h(".dropdown")],o.prototype,"popup",2);s([h(".dropdown__trigger")],o.prototype,"trigger",2);s([h(".dropdown__panel")],o.prototype,"panel",2);s([p({type:Boolean,reflect:!0})],o.prototype,"open",2);s([p({reflect:!0})],o.prototype,"placement",2);s([p({type:Boolean,reflect:!0})],o.prototype,"disabled",2);s([p({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],o.prototype,"stayOpenOnSelect",2);s([p({attribute:!1})],o.prototype,"containingElement",2);s([p({type:Number})],o.prototype,"distance",2);s([p({type:Number})],o.prototype,"skidding",2);s([p({type:Boolean})],o.prototype,"hoist",2);s([_("open",{waitUntilFirstUpdate:!0})],o.prototype,"handleOpenChange",1);o=s([O("flp-dropdown")],o);v("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});v("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});const J={title:"components/Dropdown",component:"flp-dropdown"},P={},S=(e,{globals:{theme:t}})=>b`
  <div class="flp-theme-light">
    <flp-dropdown>
      <flp-button slot="trigger" caret>Dropdown</flp-button>
      <flp-menu>
        <flp-menu-item>Item 1</flp-menu-item>
        <flp-menu-item type="checkbox" checked>Checkbox</flp-menu-item>
        <flp-divider></flp-divider>
        <flp-menu-item>
          Pen
          <flp-icon slot="suffix" name="pen"></flp-icon>
        </flp-menu-item>
      </flp-menu>
    </flp-dropdown>
  </div>
`,l=S.bind({});l.args=P;var g,w,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`(props: Dropdown, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-dropdown>
      <flp-button slot="trigger" caret>Dropdown</flp-button>
      <flp-menu>
        <flp-menu-item>Item 1</flp-menu-item>
        <flp-menu-item type="checkbox" checked>Checkbox</flp-menu-item>
        <flp-divider></flp-divider>
        <flp-menu-item>
          Pen
          <flp-icon slot="suffix" name="pen"></flp-icon>
        </flp-menu-item>
      </flp-menu>
    </flp-dropdown>
  </div>
\``,...(y=(w=l.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const Q=["Default"];export{l as Default,Q as __namedExportsOrder,J as default};
//# sourceMappingURL=flp-dropdown.stories-CKvouNln.js.map
