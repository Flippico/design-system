import{T as u,w as d}from"./lit-element-w72SgdYd.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(e,t){return(r,i,a)=>{const s=o=>{var h;return((h=o.renderRoot)==null?void 0:h.querySelector(e))??null};if(t){const{get:o,set:h}=typeof i=="object"?r:a??(()=>{const n=Symbol();return{get(){return this[n]},set(l){this[n]=l}}})();return c(r,i,{get(){let n=o.call(this);return n===void 0&&(n=s(this),(n!==null||this.hasUpdated)&&h.call(this,n)),n}})}return c(r,i,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=e=>e??u;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},p=e=>(...t)=>({_$litDirective$:e,values:t});class T{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=p(class extends T{constructor(e){var t;if(super(e),e.type!==f.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,a;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((i=this.st)!=null&&i.has(s))&&this.it.add(s);return this.render(t)}const r=e.element.classList;for(const s of this.it)s in t||(r.remove(s),this.it.delete(s));for(const s in t){const o=!!t[s];o===this.it.has(s)||(a=this.st)!=null&&a.has(s)||(o?(r.add(s),this.it.add(s)):(r.remove(s),this.it.delete(s)))}return d}});export{A as a,p as b,E as e,T as i,g as o,f as t};
//# sourceMappingURL=class-map-SwSVD6RK.js.map
