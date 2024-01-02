import{u,f as p,i as f}from"./lit-element-w72SgdYd.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p},w=(t=b,o,e)=>{const{kind:r,metadata:a}=e;let i=globalThis.litPropertyMetadata.get(a);if(i===void 0&&globalThis.litPropertyMetadata.set(a,i=new Map),i.set(e.name,t),r==="accessor"){const{name:n}=e;return{set(s){const c=o.get.call(this);o.set.call(this,s),this.requestUpdate(n,c,t)},init(s){return s!==void 0&&this.C(n,void 0,t),s}}}if(r==="setter"){const{name:n}=e;return function(s){const c=this[n];o.call(this,s),this.requestUpdate(n,c,t)}}throw Error("Unsupported decorator location: "+r)};function y(t){return(o,e)=>typeof e=="object"?w(t,o,e):((r,a,i)=>{const n=a.hasOwnProperty(i);return a.constructor.createProperty(i,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(a,i):void 0})(t,o,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(t){return y({...t,state:!0,attribute:!1})}const m=f`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;function v(t,o){const e={waitUntilFirstUpdate:!1,...o};return(r,a)=>{const{update:i}=r,n=Array.isArray(t)?t:[t];r.update=function(s){n.forEach(c=>{const h=c;if(s.has(h)){const l=s.get(h),d=this[h];l!==d&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[a](l,d)}}),i.call(this,s)}}}export{m as c,y as n,U as r,v as w};
//# sourceMappingURL=dark-eo65Sget.js.map
