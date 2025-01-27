import{r as u}from"./lit-element-BOnOm6HC.js";const o=class o extends u{emit(e,s){const i=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...s});return this.dispatchEvent(i),i}static define(e,s=this,i={}){const n=customElements.get(e);if(!n){customElements.define(e,class extends s{},i);return}let t=" (unknown version)",r=t;"version"in s&&s.version&&(t=" v"+s.version),"version"in n&&n.version&&(r=" v"+n.version),!(t&&r&&t===r)&&console.warn(`Attempted to register <${e}>${t}, but <${e}>${r} has already been registered.`)}constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,s])=>{this.constructor.define(e,s)})}};o.version="0.0.1",o.dependencies={};let d=o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=c=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(c,e)}):customElements.define(c,e)};export{d as F,f as t};
//# sourceMappingURL=custom-element-G_of5crQ.js.map
