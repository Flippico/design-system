import{u as p,f as h,i as d}from"./lit-element-w72SgdYd.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:h},u=(o=l,n,t)=>{const{kind:s,metadata:i}=t;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(t.name,o),s==="accessor"){const{name:e}=t;return{set(a){const c=n.get.call(this);n.set.call(this,a),this.requestUpdate(e,c,o)},init(a){return a!==void 0&&this.C(e,void 0,o),a}}}if(s==="setter"){const{name:e}=t;return function(a){const c=this[e];n.call(this,a),this.requestUpdate(e,c,o)}}throw Error("Unsupported decorator location: "+s)};function f(o){return(n,t)=>typeof t=="object"?u(o,n,t):((s,i,r)=>{const e=i.hasOwnProperty(r);return i.constructor.createProperty(r,e?{...s,wrapped:!0}:s),e?Object.getOwnPropertyDescriptor(i,r):void 0})(o,n,t)}const g=d`
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
`;export{g as c,f as n};
//# sourceMappingURL=dark-BuHqf5dB.js.map
