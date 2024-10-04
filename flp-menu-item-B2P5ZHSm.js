import{i as k,k as h,D as x}from"./lit-element-CPYlYYac.js";import{F as C,t as _}from"./custom-element-DcGDOd3C.js";import{e as g}from"./query-BApjzB0v.js";import{c as S}from"./component.styles-MQe3hEw3.js";import{n as c}from"./property-CcHbFR6H.js";import{H as A,g as E}from"./slot-BCTpRhJ5.js";import{r as L}from"./directive-helpers-CHX3h6dV.js";import{i as P,t as M,e as D,R}from"./class-map-635SZfYW.js";import{w as v}from"./watch-CEsCE2EF.js";const T=k`
${S}

:host {
  display: block;
  position: relative;
  background: var(--flp-panel-background-color);
  border: solid var(--flp-panel-border-width) var(--flp-panel-border-color);
  border-radius: var(--flp-border-radius-medium);
  padding: var(--flp-spacing-x-small) 0;
  overflow: auto;
  overscroll-behavior: none;
}

::slotted(sl-divider) {
  --spacing: var(--flp-spacing-x-small);
}
`;var I=Object.defineProperty,O=Object.getOwnPropertyDescriptor,w=(e,s,i,t)=>{for(var n=t>1?void 0:t?O(s,i):s,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(t?a(s,i,n):a(n))||n);return t&&n&&I(s,i,n),n};let d=class extends C{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const s=["menuitem","menuitemcheckbox"],i=e.composedPath().find(n=>{var o;return s.includes(((o=n==null?void 0:n.getAttribute)==null?void 0:o.call(n,"role"))||"")});if(!i)return;const t=i;t.type==="checkbox"&&(t.checked=!t.checked),this.emit("flp-select",{detail:{item:t}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const s=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),s==null||s.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const s=this.getAllItems(),i=this.getCurrentItem();let t=i?s.indexOf(i):0;s.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?t++:e.key==="ArrowUp"?t--:e.key==="Home"?t=0:e.key==="End"&&(t=s.length-1),t<0&&(t=s.length-1),t>s.length-1&&(t=0),this.setCurrentItem(s[t]),s[t].focus())}}handleMouseDown(e){const s=e.target;this.isMenuItem(s)&&this.setCurrentItem(s)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){return e.tagName.toLowerCase()==="flp-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes(e.getAttribute("role")??"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===e?"0":"-1")})}render(){return h`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};d.styles=[T];w([g("slot")],d.prototype,"defaultSlot",2);d=w([_("flp-menu")],d);const Y=k`
${S}

:host {
  --submenu-offset: -2px;

  display: block;
}

:host([inert]) {
  display: none;
}

.menu-item {
  position: relative;
  display: flex;
  align-items: stretch;
  font-family: var(--flp-font-light);
  font-size: var(--flp-font-size-medium);
  font-weight: var(--flp-font-weight-normal);
  line-height: var(--flp-line-height-normal);
  letter-spacing: var(--flp-letter-spacing-normal);
  color: var(--flp-color-neutral-700);
  padding: var(--flp-spacing-2x-small) var(--flp-spacing-2x-small);
  transition: var(--flp-transition-fast) fill;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;
  cursor: pointer;
}

.menu-item.menu-item--disabled {
  outline: none;
  opacity: 0.5;
  cursor: not-allowed;
}

.menu-item.menu-item--loading {
  outline: none;
  cursor: wait;
}

.menu-item.menu-item--loading *:not(sl-spinner) {
  opacity: 0.5;
}

.menu-item--loading sl-spinner {
  --indicator-color: currentColor;
  --track-width: 1px;
  position: absolute;
  font-size: 0.75em;
  top: calc(50% - 0.5em);
  left: 0.65rem;
  opacity: 1;
}

.menu-item .menu-item__label {
  flex: 1 1 auto;
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
}

.menu-item .menu-item__prefix {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.menu-item .menu-item__prefix::slotted(*) {
  margin-inline-end: var(--flp-spacing-x-small);
}

.menu-item .menu-item__suffix {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.menu-item .menu-item__suffix::slotted(*) {
  margin-inline-start: var(--flp-spacing-x-small);
}

/* Safe triangle */
.menu-item--submenu-expanded::after {
  content: '';
  position: fixed;
  z-index: calc(var(--flp-z-index-dropdown) - 1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: tomato;
  clip-path: polygon(
    var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
    var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
    var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
  );
}

:host(:focus-visible) {
  outline: none;
}

:host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
.menu-item--submenu-expanded {
  background-color: var(--flp-color-neutral-100);
  color: var(--flp-color-neutral-1000);
}

:host(:focus-visible) .menu-item {
  outline: none;
  background-color: var(--flp-color-primary-600);
  color: var(--flp-color-neutral-0);
  opacity: 1;
}

.menu-item .menu-item__check,
.menu-item .menu-item__chevron {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5em;
  visibility: hidden;
}

.menu-item--checked .menu-item__check,
.menu-item--has-submenu .menu-item__chevron {
  visibility: visible;
}

/* Add elevation and z-index to submenus */
sl-popup::part(popup) {
  box-shadow: var(--flp-shadow-large);
  z-index: var(--flp-z-index-dropdown);
  margin-left: var(--submenu-offset);
}

.menu-item--rtl sl-popup::part(popup) {
  margin-left: calc(-1 * var(--submenu-offset));
}

@media (forced-colors: active) {
  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(:focus-visible) .menu-item {
    outline: dashed 1px SelectedItem;
    outline-offset: -1px;
  }
}
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=(e,s)=>{var t;const i=e._$AN;if(i===void 0)return!1;for(const n of i)(t=n._$AO)==null||t.call(n,s,!1),u(n,s);return!0},p=e=>{let s,i;do{if((s=e._$AM)===void 0)break;i=s._$AN,i.delete(e),e=s}while((i==null?void 0:i.size)===0)},$=e=>{for(let s;s=e._$AM;e=s){let i=s._$AN;if(i===void 0)s._$AN=i=new Set;else if(i.has(e))break;i.add(e),N(s)}};function H(e){this._$AN!==void 0?(p(this),this._$AM=e,$(this)):this._$AM=e}function z(e,s=!1,i=0){const t=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(s)if(Array.isArray(t))for(let o=i;o<t.length;o++)u(t[o],!1),p(t[o]);else t!=null&&(u(t,!1),p(t));else u(this,e)}const N=e=>{e.type==M.CHILD&&(e._$AP??(e._$AP=z),e._$AQ??(e._$AQ=H))};class U extends P{constructor(){super(...arguments),this._$AN=void 0}_$AT(s,i,t){super._$AT(s,i,t),$(this),this.isConnected=s._$AU}_$AO(s,i=!0){var t,n;s!==this.isConnected&&(this.isConnected=s,s?(t=this.reconnected)==null||t.call(this):(n=this.disconnected)==null||n.call(this)),i&&(u(this,s),p(this))}setValue(s){if(L(this.t))this.t._$AI(s,this);else{const i=[...this.t._$AH];i[this.i]=s,this.t._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=()=>new F;class F{}const b=new WeakMap,q=D(class extends U{render(e){return x}update(e,[s]){var t;const i=s!==this.Y;return i&&this.Y!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=s,this.ht=(t=e.options)==null?void 0:t.host,this.rt(this.ct=e.element)),x}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const s=this.ht??globalThis;let i=b.get(s);i===void 0&&(i=new WeakMap,b.set(s,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,s;return typeof this.Y=="function"?(e=b.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(s=this.Y)==null?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class K{constructor(s,i){this.popupRef=V(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t);break}},this.handleClick=t=>{var n;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&(t.target.tagName==="sl-menu-item"||(n=t.target.role)!=null&&n.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=t=>{t.stopPropagation()},this.handlePopupReposition=()=>{const t=this.host.renderRoot.querySelector("slot[name='submenu']"),n=t==null?void 0:t.assignedElements({flatten:!0}).filter(f=>f.localName==="sl-menu")[0];if(!n)return;const{left:o,top:a,width:m,height:y}=n.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${a+y}px`)},(this.host=s).addController(this),this.hasSlotController=i}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(s){const i=this.host.renderRoot.querySelector("slot[name='submenu']");if(!i){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let t=null;for(const n of i.assignedElements())if(t=n.querySelectorAll("sl-menu-item, [role^='menuitem']"),t.length!==0)break;if(!(!t||t.length===0)){t[0].setAttribute("tabindex","0");for(let n=1;n!==t.length;++n)t[n].setAttribute("tabindex","-1");this.popupRef.value&&(s.preventDefault(),s.stopPropagation(),this.popupRef.value.active?t[0]instanceof HTMLElement&&t[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{t[0]instanceof HTMLElement&&t[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(s){this.popupRef.value&&this.popupRef.value.active!==s&&(this.popupRef.value.active=s,this.host.requestUpdate())}enableSubmenu(s=!0){s?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var n;if(!((n=this.host.parentElement)!=null&&n.computedStyleMap))return;const s=this.host.parentElement.computedStyleMap(),t=["padding-top","border-top-width","margin-top"].reduce((o,a)=>{const m=s.get(a)??new CSSUnitValue(0,"px"),f=(m instanceof CSSUnitValue?m:new CSSUnitValue(0,"px")).to("px");return o-f.value},0);this.skidding=t}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){return this.isConnected?h`
      <sl-popup
        ${q(this.popupRef)}
        placement=${"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:h` <slot name="submenu" hidden></slot> `}}var j=Object.defineProperty,B=Object.getOwnPropertyDescriptor,l=(e,s,i,t)=>{for(var n=t>1?void 0:t?B(s,i):s,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(t?a(s,i,n):a(n))||n);return t&&n&&j(s,i,n),n};let r=class extends C{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new A(this,"submenu"),this.submenuController=new K(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return E(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const s=this.submenuController.isExpanded();return h`
      <div
        id="anchor"
        part="base"
        class=${R({"menu-item":!0,"menu-item--rtl":!1,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":s})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!s}"
      >
        <span part="checked-icon" class="menu-item__check">
          <flp-icon name="check" library="system" aria-hidden="true"></flp-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <flp-icon name=${"chevron-right"} library="system" aria-hidden="true"></flp-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?h` <flp-spinner part="spinner" exportparts="base:spinner__base"></flp-spinner> `:""}
      </div>
    `}};r.styles=[Y];l([g("slot:not([name])")],r.prototype,"defaultSlot",2);l([g(".menu-item")],r.prototype,"menuItem",2);l([c()],r.prototype,"type",2);l([c({type:Boolean,reflect:!0})],r.prototype,"checked",2);l([c()],r.prototype,"value",2);l([c({type:Boolean,reflect:!0})],r.prototype,"loading",2);l([c({type:Boolean,reflect:!0})],r.prototype,"disabled",2);l([v("checked")],r.prototype,"handleCheckedChange",1);l([v("disabled")],r.prototype,"handleDisabledChange",1);l([v("type")],r.prototype,"handleTypeChange",1);r=l([_("flp-menu-item")],r);
//# sourceMappingURL=flp-menu-item-B2P5ZHSm.js.map
