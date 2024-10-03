import{h as a,i as f}from"./lit-element-CPYlYYac.js";const r=class r extends a{emit(e,t){const i=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...t});return this.dispatchEvent(i),i}static define(e,t=this,i={}){const n=customElements.get(e);if(!n){customElements.define(e,class extends t{},i);return}let s=" (unknown version)",o=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in n&&n.version&&(o=" v"+n.version),!(s&&o&&s===o)&&console.warn(`Attempted to register <${e}>${s}, but <${e}>${o} has already been registered.`)}constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}};r.version="0.0.1",r.dependencies={};let d=r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=c=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(c,e)}):customElements.define(c,e)},v=f`
  :host {
    box-sizing: border-box;
    font-family: var(--flp-font-light);
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;export{d as F,v as c,u as t};
//# sourceMappingURL=component.styles-CJs1ohMC.js.map
