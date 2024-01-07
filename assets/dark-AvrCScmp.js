import{u as p,f as h,i as d}from"./lit-element-w72SgdYd.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:h},u=(t=l,n,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(e.name,t),s==="accessor"){const{name:r}=e;return{set(a){const c=n.get.call(this);n.set.call(this,a),this.requestUpdate(r,c,t)},init(a){return a!==void 0&&this.C(r,void 0,t),a}}}if(s==="setter"){const{name:r}=e;return function(a){const c=this[r];n.call(this,a),this.requestUpdate(r,c,t)}}throw Error("Unsupported decorator location: "+s)};function b(t){return(n,e)=>typeof e=="object"?u(t,n,e):((s,i,o)=>{const r=i.hasOwnProperty(o);return i.constructor.createProperty(o,r?{...s,wrapped:!0}:s),r?Object.getOwnPropertyDescriptor(i,o):void 0})(t,n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function g(t){return b({...t,state:!0,attribute:!1})}const y=d`
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
`;export{y as c,b as n,g as r};
//# sourceMappingURL=dark-AvrCScmp.js.map
