import{d as mt}from"./index-PPLHz8o0.js";import{S as V,e as yt,a as gt}from"./index-HZNADR7h.js";import{i as vt}from"./tiny-invariant-VyoA2Os1.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,W=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rt=Symbol(),Y=new WeakMap;let Et=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(W&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Y.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Y.set(e,t))}return t}toString(){return this.cssText}};const St=r=>new Et(typeof r=="string"?r:r+"",void 0,rt),bt=(r,t)=>{if(W)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=H.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},K=W?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return St(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wt,defineProperty:Ct,getOwnPropertyDescriptor:Ot,getOwnPropertyNames:Tt,getOwnPropertySymbols:Pt,getPrototypeOf:Mt}=Object,f=globalThis,q=f.trustedTypes,Ut=q?q.emptyScript:"",k=f.reactiveElementPolyfillSupport,w=(r,t)=>r,j={toAttribute(r,t){switch(t){case Boolean:r=r?Ut:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},nt=(r,t)=>!wt(r,t),F={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:nt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),f.litPropertyMetadata??(f.litPropertyMetadata=new WeakMap);class v extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=F){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ct(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=Ot(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const h=i==null?void 0:i.call(this);o.call(this,n),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??F}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=Mt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,s=[...Tt(e),...Pt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(K(i))}else t!==void 0&&e.push(K(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$E_)==null||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:j).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:j;this._$Em=i,this[i]=h.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??nt)(i?o:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$E_)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$E_)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}}v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[w("elementProperties")]=new Map,v[w("finalized")]=new Map,k==null||k({ReactiveElement:v}),(f.reactiveElementVersions??(f.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,D=C.trustedTypes,G=D?D.createPolicy("lit-html",{createHTML:r=>r}):void 0,ot="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,at="?"+$,Rt=`<${at}>`,g=document,O=()=>g.createComment(""),T=r=>r===null||typeof r!="object"&&typeof r!="function",ht=Array.isArray,Ht=r=>ht(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",I=`[ 	
\f\r]`,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,Z=/>/g,A=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),X=/'/g,Q=/"/g,lt=/^(?:script|style|textarea|title)$/i,E=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),tt=new WeakMap,y=g.createTreeWalker(g,129);function dt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return G!==void 0?G.createHTML(t):t}const Nt=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":"",n=b;for(let h=0;h<e;h++){const a=r[h];let d,p,l=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===b?p[1]==="!--"?n=J:p[1]!==void 0?n=Z:p[2]!==void 0?(lt.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=A):p[3]!==void 0&&(n=A):n===A?p[0]===">"?(n=i??b,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?A:p[3]==='"'?Q:X):n===Q||n===X?n=A:n===J||n===Z?n=b:(n=A,i=void 0);const _=n===A&&r[h+1].startsWith("/>")?" ":"";o+=n===b?a+Rt:l>=0?(s.push(d),a.slice(0,l)+ot+a.slice(l)+$+_):a+$+(l===-2?h:_)}return[dt(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),s]};class P{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const h=t.length-1,a=this.parts,[d,p]=Nt(t,e);if(this.el=P.createElement(d,s),y.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=y.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(ot)){const u=p[n++],_=i.getAttribute(l).split($),R=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:R[2],strings:_,ctor:R[1]==="."?Lt:R[1]==="?"?xt:R[1]==="@"?kt:x}),i.removeAttribute(l)}else l.startsWith($)&&(a.push({type:6,index:o}),i.removeAttribute(l));if(lt.test(i.tagName)){const l=i.textContent.split($),u=l.length-1;if(u>0){i.textContent=D?D.emptyScript:"";for(let _=0;_<u;_++)i.append(l[_],O()),y.nextNode(),a.push({type:2,index:++o});i.append(l[u],O())}}}else if(i.nodeType===8)if(i.data===at)a.push({type:2,index:o});else{let l=-1;for(;(l=i.data.indexOf($,l+1))!==-1;)a.push({type:7,index:o}),l+=$.length-1}o++}}static createElement(t,e){const s=g.createElement("template");return s.innerHTML=t,s}}function S(r,t,e=r,s){var n,h;if(t===E)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=T(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((h=i==null?void 0:i._$AO)==null||h.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=S(r,i._$AS(r,t.values),i,s)),t}class Dt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??g).importNode(e,!0);y.currentNode=i;let o=y.nextNode(),n=0,h=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new U(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new It(o,this,t)),this._$AV.push(d),a=s[++h]}n!==(a==null?void 0:a.index)&&(o=y.nextNode(),n++)}return y.currentNode=g,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),T(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ht(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==c&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(g.createTextNode(t)),this._$AH=t}g(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=P.createElement(dt(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const n=new Dt(i,this),h=n.u(this.options);n.p(e),this.$(h),this._$AH=n}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new P(t)),e}T(t){ht(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new U(this.k(O()),this.k(O()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class x{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=S(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const h=t;let a,d;for(t=o[0],a=0;a<o.length-1;a++)d=S(this,h[s+a],e,a),d===E&&(d=this._$AH[a]),n||(n=!T(d)||d!==this._$AH[a]),d===c?t=c:t!==c&&(t+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!i&&this.O(t)}O(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Lt extends x{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===c?void 0:t}}class xt extends x{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class kt extends x{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??c)===E)return;const s=this._$AH,i=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class It{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const B=C.litHtmlPolyfillSupport;B==null||B(P,U),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.1.0");const L=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new U(t.insertBefore(O(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class N extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=L(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}}var st;N._$litElement$=!0,N.finalized=!0,(st=globalThis.litElementHydrateSupport)==null||st.call(globalThis,{LitElement:N});const z=globalThis.litElementPolyfillSupport;z==null||z({LitElement:N});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=(r,t)=>t===void 0?(r==null?void 0:r._$litType$)!==void 0:(r==null?void 0:r._$litType$)===t,{global:M}=__STORYBOOK_MODULE_GLOBAL__,{start:zt,simulatePageLoad:et,simulateDOMContentLoaded:Vt}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:jt}=M;jt.STORYBOOK_ENV="web-components";var{Node:Wt}=M,de=(r,t)=>{let{id:e,component:s}=t;if(!s)throw new Error(`Unable to render story ${e} as the component annotation is missing from the default export`);let i=document.createElement(s);return Object.entries(r).forEach(([o,n])=>{i[o]=n}),i};function Yt({storyFn:r,kind:t,name:e,showMain:s,showError:i,forceRemount:o},n){let h=r();if(s(),Bt(h)){(o||!n.querySelector('[id="root-inner"]'))&&(n.innerHTML='<div id="root-inner"></div>');let a=n.querySelector('[id="root-inner"]');L(h,a),et(n)}else if(typeof h=="string")n.innerHTML=h,et(n);else if(h instanceof Wt){if(n.firstChild===h&&!o)return;n.innerHTML="",n.appendChild(h),Vt()}else i({title:`Expecting an HTML snippet or DOM node from the story: "${e}" of "${t}".`,description:mt`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}var ct=zt(Yt);ct.forceReRender;ct.clientApi.raw;function pt(r){if(!r)return!1;if(typeof r=="string")return!0;throw new Error('Provided component needs to be a string. e.g. component: "my-element"')}function ut(r){if(!r)return!1;if(r.tags&&Array.isArray(r.tags)||r.modules&&Array.isArray(r.modules))return!0;throw new Error(`You need to setup valid meta data in your config.js via setCustomElements().
    See the readme of addon-docs for web components for more details.`)}function _t(){return M.__STORYBOOK_CUSTOM_ELEMENTS__||M.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__}var{window:Kt,EventSource:qt}=M,it;typeof module<"u"&&((it=module==null?void 0:module.hot)!=null&&it.decline)&&(module.hot.decline(),new qt("__webpack_hmr").addEventListener("message",function(r){try{let{action:t}=JSON.parse(r.data);t==="built"&&Kt.location.reload()}catch{}}));const{logger:$t}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{useEffect:Ft,addons:Gt}=__STORYBOOK_MODULE_PREVIEW_API__;function ft(r,t){var s,i;let e;switch(t){case"attributes":case"properties":e={name:((s=r.type)==null?void 0:s.text)||r.type};break;case"slots":e={name:"string"};break;default:e={name:"void"};break}return{name:r.name,required:!1,description:r.description,type:e,table:{category:t,type:{summary:((i=r.type)==null?void 0:i.text)||r.type},defaultValue:{summary:r.default!==void 0?r.default:r.defaultValue}}}}function Jt(r){let t=r.name.replace(/(-|_|:|\.|\s)+(.)?/g,(e,s,i)=>i?i.toUpperCase():"").replace(/^([A-Z])/,e=>e.toLowerCase());return t=`on${t.charAt(0).toUpperCase()+t.substr(1)}`,[{name:t,action:{name:r.name},table:{disable:!0}},ft(r,"events")]}function m(r,t){return r&&r.filter(e=>e&&e.name).reduce((e,s)=>{if(s.kind==="method")return e;switch(t){case"events":Jt(s).forEach(i=>{vt(i.name,`${i} should have a name property.`),e[i.name]=i});break;default:e[s.name]=ft(s,t);break}return e},{})}var Zt=(r,t)=>{if(!pt(r)||!ut(t))return null;let e=t.tags.find(s=>s.name.toUpperCase()===r.toUpperCase());return e||$t.warn(`Component not found in custom-elements.json: ${r}`),e},Xt=(r,t)=>{var s;if(!pt(r)||!ut(t))return null;let e;return(s=t==null?void 0:t.modules)==null||s.forEach(i=>{var o;(o=i==null?void 0:i.declarations)==null||o.forEach(n=>{n.tagName===r&&(e=n)})}),e||$t.warn(`Component not found in custom-elements.json: ${r}`),e},At=(r,t)=>(t==null?void 0:t.version)==="experimental"?Zt(r,t):Xt(r,t),Qt=(r,t)=>{let e=At(r,t);return e&&{...m(e.members??[],"properties"),...m(e.properties??[],"properties"),...m(e.attributes??[],"attributes"),...m(e.events??[],"events"),...m(e.slots??[],"slots"),...m(e.cssProperties??[],"css custom properties"),...m(e.cssParts??[],"css shadow parts")}},te=r=>{let t=_t();return Qt(r,t)},ee=r=>{let t=At(r,_t());return t&&t.description},se=/<!--\?lit\$[0-9]+\$-->|<!--\??-->/g;function ie(r){var s;let t=(s=r==null?void 0:r.parameters.docs)==null?void 0:s.source,e=r==null?void 0:r.parameters.__isArgsStory;return(t==null?void 0:t.type)===V.DYNAMIC?!1:!e||(t==null?void 0:t.code)||(t==null?void 0:t.type)===V.CODE}function re(r,t){var o,n;let e=r(),s=(n=(o=t==null?void 0:t.parameters.docs)==null?void 0:o.source)!=null&&n.excludeDecorators?t.originalStoryFn(t.args,t):e,i;if(Ft(()=>{let{id:h,unmappedArgs:a}=t;i&&Gt.getChannel().emit(gt,{id:h,source:i,args:a})}),!ie(t)){let h=window.document.createElement("div");s instanceof DocumentFragment?L(s.cloneNode(!0),h):L(s,h),i=h.innerHTML.replace(se,"")}return e}var ce=[re],ne={docs:{extractArgTypes:te,extractComponentDescription:ee,story:{inline:!0},source:{type:V.DYNAMIC,language:"html"}}},pe=[yt],ue={renderer:"web-components",...ne};export{pe as argTypesEnhancers,ce as decorators,ue as parameters,de as render,Yt as renderToCanvas};
//# sourceMappingURL=config-VdQUCglk.js.map
