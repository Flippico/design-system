import{i as Xt,x as gt}from"./lit-element-UdLzEcH-.js";import{F as qt,t as Ut}from"./custom-element-_dbbq29R.js";import{n as A}from"./property-BiB_YYz7.js";import{e as kt}from"./query-BApjzB0v.js";import{c as Kt}from"./component.styles-BhDG6Xff.js";import{a as Et}from"./class-map-YRkreJUE.js";/* empty css             */const I=Math.min,E=Math.max,lt=Math.round,rt=Math.floor,F=t=>({x:t,y:t}),Gt={left:"right",right:"left",bottom:"top",top:"bottom"},Jt={start:"end",end:"start"};function mt(t,e,o){return E(t,I(e,o))}function Z(t,e){return typeof t=="function"?t(e):t}function X(t){return t.split("-")[0]}function tt(t){return t.split("-")[1]}function Ft(t){return t==="x"?"y":"x"}function wt(t){return t==="y"?"height":"width"}function U(t){return["top","bottom"].includes(X(t))?"y":"x"}function vt(t){return Ft(U(t))}function Qt(t,e,o){o===void 0&&(o=!1);const i=tt(t),n=vt(t),s=wt(n);let r=n==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=at(r)),[r,at(r)]}function Zt(t){const e=at(t);return[yt(t),e,yt(e)]}function yt(t){return t.replace(/start|end/g,e=>Jt[e])}function te(t,e,o){const i=["left","right"],n=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return o?e?n:i:e?i:n;case"left":case"right":return e?s:r;default:return[]}}function ee(t,e,o,i){const n=tt(t);let s=te(X(t),o==="start",i);return n&&(s=s.map(r=>r+"-"+n),e&&(s=s.concat(s.map(yt)))),s}function at(t){return t.replace(/left|right|bottom|top/g,e=>Gt[e])}function oe(t){return{top:0,right:0,bottom:0,left:0,...t}}function Nt(t){return typeof t!="number"?oe(t):{top:t,right:t,bottom:t,left:t}}function ct(t){const{x:e,y:o,width:i,height:n}=t;return{width:i,height:n,top:o,left:e,right:e+i,bottom:o+n,x:e,y:o}}function Ct(t,e,o){let{reference:i,floating:n}=t;const s=U(e),r=vt(e),l=wt(r),a=X(e),c=s==="y",f=i.x+i.width/2-n.width/2,u=i.y+i.height/2-n.height/2,d=i[l]/2-n[l]/2;let p;switch(a){case"top":p={x:f,y:i.y-n.height};break;case"bottom":p={x:f,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:u};break;case"left":p={x:i.x-n.width,y:u};break;default:p={x:i.x,y:i.y}}switch(tt(e)){case"start":p[r]-=d*(o&&c?-1:1);break;case"end":p[r]+=d*(o&&c?-1:1);break}return p}const ie=async(t,e,o)=>{const{placement:i="bottom",strategy:n="absolute",middleware:s=[],platform:r}=o,l=s.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(e));let c=await r.getElementRects({reference:t,floating:e,strategy:n}),{x:f,y:u}=Ct(c,i,a),d=i,p={},h=0;for(let g=0;g<l.length;g++){const{name:y,fn:m}=l[g],{x:b,y:v,data:O,reset:P}=await m({x:f,y:u,initialPlacement:i,placement:d,strategy:n,middlewareData:p,rects:c,platform:r,elements:{reference:t,floating:e}});f=b??f,u=v??u,p={...p,[y]:{...p[y],...O}},P&&h<=50&&(h++,typeof P=="object"&&(P.placement&&(d=P.placement),P.rects&&(c=P.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:n}):P.rects),{x:f,y:u}=Ct(c,d,a)),g=-1)}return{x:f,y:u,placement:d,strategy:n,middlewareData:p}};async function xt(t,e){var o;e===void 0&&(e={});const{x:i,y:n,platform:s,rects:r,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:d=!1,padding:p=0}=Z(e,t),h=Nt(p),y=l[d?u==="floating"?"reference":"floating":u],m=ct(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(y)))==null||o?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:c,rootBoundary:f,strategy:a})),b=u==="floating"?{x:i,y:n,width:r.floating.width,height:r.floating.height}:r.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),O=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},P=ct(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:b,offsetParent:v,strategy:a}):b);return{top:(m.top-P.top+h.top)/O.y,bottom:(P.bottom-m.bottom+h.bottom)/O.y,left:(m.left-P.left+h.left)/O.x,right:(P.right-m.right+h.right)/O.x}}const ne=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:n,rects:s,platform:r,elements:l,middlewareData:a}=e,{element:c,padding:f=0}=Z(t,e)||{};if(c==null)return{};const u=Nt(f),d={x:o,y:i},p=vt(n),h=wt(p),g=await r.getDimensions(c),y=p==="y",m=y?"top":"left",b=y?"bottom":"right",v=y?"clientHeight":"clientWidth",O=s.reference[h]+s.reference[p]-d[p]-s.floating[h],P=d[p]-s.reference[p],S=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c));let z=S?S[v]:0;(!z||!await(r.isElement==null?void 0:r.isElement(S)))&&(z=l.floating[v]||s.floating[h]);const M=O/2-P/2,$=z/2-g[h]/2-1,T=I(u[m],$),H=I(u[b],$),B=T,V=z-g[h]-H,R=z/2-g[h]/2+M,G=mt(B,R,V),W=!a.arrow&&tt(n)!=null&&R!==G&&s.reference[h]/2-(R<B?T:H)-g[h]/2<0,k=W?R<B?R-B:R-V:0;return{[p]:d[p]+k,data:{[p]:G,centerOffset:R-G-k,...W&&{alignmentOffset:k}},reset:W}}}),re=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:n,middlewareData:s,rects:r,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:f=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...y}=Z(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const m=X(n),b=U(l),v=X(l)===l,O=await(a.isRTL==null?void 0:a.isRTL(c.floating)),P=d||(v||!g?[at(l)]:Zt(l)),S=h!=="none";!d&&S&&P.push(...ee(l,g,h,O));const z=[l,...P],M=await xt(e,y),$=[];let T=((i=s.flip)==null?void 0:i.overflows)||[];if(f&&$.push(M[m]),u){const R=Qt(n,r,O);$.push(M[R[0]],M[R[1]])}if(T=[...T,{placement:n,overflows:$}],!$.every(R=>R<=0)){var H,B;const R=(((H=s.flip)==null?void 0:H.index)||0)+1,G=z[R];if(G)return{data:{index:R,overflows:T},reset:{placement:G}};let W=(B=T.filter(k=>k.overflows[0]<=0).sort((k,j)=>k.overflows[1]-j.overflows[1])[0])==null?void 0:B.placement;if(!W)switch(p){case"bestFit":{var V;const k=(V=T.filter(j=>{if(S){const Y=U(j.placement);return Y===b||Y==="y"}return!0}).map(j=>[j.placement,j.overflows.filter(Y=>Y>0).reduce((Y,It)=>Y+It,0)]).sort((j,Y)=>j[1]-Y[1])[0])==null?void 0:V[0];k&&(W=k);break}case"initialPlacement":W=l;break}if(n!==W)return{reset:{placement:W}}}return{}}}};async function se(t,e){const{placement:o,platform:i,elements:n}=t,s=await(i.isRTL==null?void 0:i.isRTL(n.floating)),r=X(o),l=tt(o),a=U(o)==="y",c=["left","top"].includes(r)?-1:1,f=s&&a?-1:1,u=Z(e,t);let{mainAxis:d,crossAxis:p,alignmentAxis:h}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return l&&typeof h=="number"&&(p=l==="end"?h*-1:h),a?{x:p*f,y:d*c}:{x:d*c,y:p*f}}const le=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:n,y:s,placement:r,middlewareData:l}=e,a=await se(e,t);return r===((o=l.offset)==null?void 0:o.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:n+a.x,y:s+a.y,data:{...a,placement:r}}}}},ae=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:n}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:y=>{let{x:m,y:b}=y;return{x:m,y:b}}},...a}=Z(t,e),c={x:o,y:i},f=await xt(e,a),u=U(X(n)),d=Ft(u);let p=c[d],h=c[u];if(s){const y=d==="y"?"top":"left",m=d==="y"?"bottom":"right",b=p+f[y],v=p-f[m];p=mt(b,p,v)}if(r){const y=u==="y"?"top":"left",m=u==="y"?"bottom":"right",b=h+f[y],v=h-f[m];h=mt(b,h,v)}const g=l.fn({...e,[d]:p,[u]:h});return{...g,data:{x:g.x-o,y:g.y-i,enabled:{[d]:s,[u]:r}}}}}},ce=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:n,rects:s,platform:r,elements:l}=e,{apply:a=()=>{},...c}=Z(t,e),f=await xt(e,c),u=X(n),d=tt(n),p=U(n)==="y",{width:h,height:g}=s.floating;let y,m;u==="top"||u==="bottom"?(y=u,m=d===(await(r.isRTL==null?void 0:r.isRTL(l.floating))?"start":"end")?"left":"right"):(m=u,y=d==="end"?"top":"bottom");const b=g-f.top-f.bottom,v=h-f.left-f.right,O=I(g-f[y],b),P=I(h-f[m],v),S=!e.middlewareData.shift;let z=O,M=P;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(M=v),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(z=b),S&&!d){const T=E(f.left,0),H=E(f.right,0),B=E(f.top,0),V=E(f.bottom,0);p?M=h-2*(T!==0||H!==0?T+H:E(f.left,f.right)):z=g-2*(B!==0||V!==0?B+V:E(f.top,f.bottom))}await a({...e,availableWidth:M,availableHeight:z});const $=await r.getDimensions(l.floating);return h!==$.width||g!==$.height?{reset:{rects:!0}}:{}}}};function ft(){return typeof window<"u"}function et(t){return _t(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function _(t){var e;return(e=(_t(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function _t(t){return ft()?t instanceof Node||t instanceof C(t).Node:!1}function L(t){return ft()?t instanceof Element||t instanceof C(t).Element:!1}function N(t){return ft()?t instanceof HTMLElement||t instanceof C(t).HTMLElement:!1}function St(t){return!ft()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}function nt(t){const{overflow:e,overflowX:o,overflowY:i,display:n}=D(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(n)}function fe(t){return["table","td","th"].includes(et(t))}function pt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Pt(t){const e=At(),o=L(t)?D(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function pe(t){let e=q(t);for(;N(e)&&!Q(e);){if(Pt(e))return e;if(pt(e))return null;e=q(e)}return null}function At(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Q(t){return["html","body","#document"].includes(et(t))}function D(t){return C(t).getComputedStyle(t)}function ut(t){return L(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function q(t){if(et(t)==="html")return t;const e=t.assignedSlot||t.parentNode||St(t)&&t.host||_(t);return St(e)?e.host:e}function Mt(t){const e=q(t);return Q(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&nt(e)?e:Mt(e)}function it(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const n=Mt(t),s=n===((i=t.ownerDocument)==null?void 0:i.body),r=C(n);if(s){const l=bt(r);return e.concat(r,r.visualViewport||[],nt(n)?n:[],l&&o?it(l):[])}return e.concat(n,it(n,[],o))}function bt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Wt(t){const e=D(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const n=N(t),s=n?t.offsetWidth:o,r=n?t.offsetHeight:i,l=lt(o)!==s||lt(i)!==r;return l&&(o=s,i=r),{width:o,height:i,$:l}}function Ot(t){return L(t)?t:t.contextElement}function J(t){const e=Ot(t);if(!N(e))return F(1);const o=e.getBoundingClientRect(),{width:i,height:n,$:s}=Wt(e);let r=(s?lt(o.width):o.width)/i,l=(s?lt(o.height):o.height)/n;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const ue=F(0);function Ht(t){const e=C(t);return!At()||!e.visualViewport?ue:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function he(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==C(t)?!1:e}function K(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const n=t.getBoundingClientRect(),s=Ot(t);let r=F(1);e&&(i?L(i)&&(r=J(i)):r=J(t));const l=he(s,o,i)?Ht(s):F(0);let a=(n.left+l.x)/r.x,c=(n.top+l.y)/r.y,f=n.width/r.x,u=n.height/r.y;if(s){const d=C(s),p=i&&L(i)?C(i):i;let h=d,g=bt(h);for(;g&&i&&p!==h;){const y=J(g),m=g.getBoundingClientRect(),b=D(g),v=m.left+(g.clientLeft+parseFloat(b.paddingLeft))*y.x,O=m.top+(g.clientTop+parseFloat(b.paddingTop))*y.y;a*=y.x,c*=y.y,f*=y.x,u*=y.y,a+=v,c+=O,h=C(g),g=bt(h)}}return ct({width:f,height:u,x:a,y:c})}function Rt(t,e){const o=ut(t).scrollLeft;return e?e.left+o:K(_(t)).left+o}function Vt(t,e,o){o===void 0&&(o=!1);const i=t.getBoundingClientRect(),n=i.left+e.scrollLeft-(o?0:Rt(t,i)),s=i.top+e.scrollTop;return{x:n,y:s}}function de(t){let{elements:e,rect:o,offsetParent:i,strategy:n}=t;const s=n==="fixed",r=_(i),l=e?pt(e.floating):!1;if(i===r||l&&s)return o;let a={scrollLeft:0,scrollTop:0},c=F(1);const f=F(0),u=N(i);if((u||!u&&!s)&&((et(i)!=="body"||nt(r))&&(a=ut(i)),N(i))){const p=K(i);c=J(i),f.x=p.x+i.clientLeft,f.y=p.y+i.clientTop}const d=r&&!u&&!s?Vt(r,a,!0):F(0);return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-a.scrollLeft*c.x+f.x+d.x,y:o.y*c.y-a.scrollTop*c.y+f.y+d.y}}function ge(t){return Array.from(t.getClientRects())}function me(t){const e=_(t),o=ut(t),i=t.ownerDocument.body,n=E(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=E(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let r=-o.scrollLeft+Rt(t);const l=-o.scrollTop;return D(i).direction==="rtl"&&(r+=E(e.clientWidth,i.clientWidth)-n),{width:n,height:s,x:r,y:l}}function ye(t,e){const o=C(t),i=_(t),n=o.visualViewport;let s=i.clientWidth,r=i.clientHeight,l=0,a=0;if(n){s=n.width,r=n.height;const c=At();(!c||c&&e==="fixed")&&(l=n.offsetLeft,a=n.offsetTop)}return{width:s,height:r,x:l,y:a}}function be(t,e){const o=K(t,!0,e==="fixed"),i=o.top+t.clientTop,n=o.left+t.clientLeft,s=N(t)?J(t):F(1),r=t.clientWidth*s.x,l=t.clientHeight*s.y,a=n*s.x,c=i*s.y;return{width:r,height:l,x:a,y:c}}function zt(t,e,o){let i;if(e==="viewport")i=ye(t,o);else if(e==="document")i=me(_(t));else if(L(e))i=be(e,o);else{const n=Ht(t);i={x:e.x-n.x,y:e.y-n.y,width:e.width,height:e.height}}return ct(i)}function jt(t,e){const o=q(t);return o===e||!L(o)||Q(o)?!1:D(o).position==="fixed"||jt(o,e)}function we(t,e){const o=e.get(t);if(o)return o;let i=it(t,[],!1).filter(l=>L(l)&&et(l)!=="body"),n=null;const s=D(t).position==="fixed";let r=s?q(t):t;for(;L(r)&&!Q(r);){const l=D(r),a=Pt(r);!a&&l.position==="fixed"&&(n=null),(s?!a&&!n:!a&&l.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||nt(r)&&!a&&jt(t,r))?i=i.filter(f=>f!==r):n=l,r=q(r)}return e.set(t,i),i}function ve(t){let{element:e,boundary:o,rootBoundary:i,strategy:n}=t;const r=[...o==="clippingAncestors"?pt(e)?[]:we(e,this._c):[].concat(o),i],l=r[0],a=r.reduce((c,f)=>{const u=zt(e,f,n);return c.top=E(u.top,c.top),c.right=I(u.right,c.right),c.bottom=I(u.bottom,c.bottom),c.left=E(u.left,c.left),c},zt(e,l,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function xe(t){const{width:e,height:o}=Wt(t);return{width:e,height:o}}function Pe(t,e,o){const i=N(e),n=_(e),s=o==="fixed",r=K(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const a=F(0);if(i||!i&&!s)if((et(e)!=="body"||nt(n))&&(l=ut(e)),i){const d=K(e,!0,s,e);a.x=d.x+e.clientLeft,a.y=d.y+e.clientTop}else n&&(a.x=Rt(n));const c=n&&!i&&!s?Vt(n,l):F(0),f=r.left+l.scrollLeft-a.x-c.x,u=r.top+l.scrollTop-a.y-c.y;return{x:f,y:u,width:r.width,height:r.height}}function ht(t){return D(t).position==="static"}function Tt(t,e){if(!N(t)||D(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return _(t)===o&&(o=o.ownerDocument.body),o}function Yt(t,e){const o=C(t);if(pt(t))return o;if(!N(t)){let n=q(t);for(;n&&!Q(n);){if(L(n)&&!ht(n))return n;n=q(n)}return o}let i=Tt(t,e);for(;i&&fe(i)&&ht(i);)i=Tt(i,e);return i&&Q(i)&&ht(i)&&!Pt(i)?o:i||pe(t)||o}const Ae=async function(t){const e=this.getOffsetParent||Yt,o=this.getDimensions,i=await o(t.floating);return{reference:Pe(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Oe(t){return D(t).direction==="rtl"}const st={convertOffsetParentRelativeRectToViewportRelativeRect:de,getDocumentElement:_,getClippingRect:ve,getOffsetParent:Yt,getElementRects:Ae,getClientRects:ge,getDimensions:xe,getScale:J,isElement:L,isRTL:Oe};function Re(t,e){let o=null,i;const n=_(t);function s(){var l;clearTimeout(i),(l=o)==null||l.disconnect(),o=null}function r(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),s();const{left:c,top:f,width:u,height:d}=t.getBoundingClientRect();if(l||e(),!u||!d)return;const p=rt(f),h=rt(n.clientWidth-(c+u)),g=rt(n.clientHeight-(f+d)),y=rt(c),b={rootMargin:-p+"px "+-h+"px "+-g+"px "+-y+"px",threshold:E(0,I(1,a))||1};let v=!0;function O(P){const S=P[0].intersectionRatio;if(S!==a){if(!v)return r();S?r(!1,S):i=setTimeout(()=>{r(!1,1e-7)},1e3)}v=!1}try{o=new IntersectionObserver(O,{...b,root:n.ownerDocument})}catch{o=new IntersectionObserver(O,b)}o.observe(t)}return r(!0),s}function Ee(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,c=Ot(t),f=n||s?[...c?it(c):[],...it(e)]:[];f.forEach(m=>{n&&m.addEventListener("scroll",o,{passive:!0}),s&&m.addEventListener("resize",o)});const u=c&&l?Re(c,o):null;let d=-1,p=null;r&&(p=new ResizeObserver(m=>{let[b]=m;b&&b.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var v;(v=p)==null||v.observe(e)})),o()}),c&&!a&&p.observe(c),p.observe(e));let h,g=a?K(t):null;a&&y();function y(){const m=K(t);g&&(m.x!==g.x||m.y!==g.y||m.width!==g.width||m.height!==g.height)&&o(),g=m,h=requestAnimationFrame(y)}return o(),()=>{var m;f.forEach(b=>{n&&b.removeEventListener("scroll",o),s&&b.removeEventListener("resize",o)}),u==null||u(),(m=p)==null||m.disconnect(),p=null,a&&cancelAnimationFrame(h)}}const Ce=le,Se=ae,ze=re,Lt=ce,Te=ne,Le=(t,e,o)=>{const i=new Map,n={platform:st,...o},s={...n.platform,_c:i};return ie(t,e,{...n,platform:s})};function De(t){return $e(t)}function dt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function $e(t){for(let e=t;e;e=dt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=dt(t);e;e=dt(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}const Be=Xt`
${Kt}

:host {
  --arrow-color: var(--flp-color-neutral-1000);
  --arrow-size: 6px;

  /*
   * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
   * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
   */
  --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
  --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

  display: contents;
}

.popup {
  position: absolute;
  isolation: isolate;
  max-width: var(--auto-size-available-width, none);
  max-height: var(--auto-size-available-height, none);
}

.popup--fixed {
  position: fixed;
}

.popup:not(.popup--active) {
  display: none;
}

.popup__arrow {
  position: absolute;
  width: calc(var(--arrow-size-diagonal) * 2);
  height: calc(var(--arrow-size-diagonal) * 2);
  rotate: 45deg;
  background: var(--arrow-color);
  z-index: -1;
}

/* Hover bridge */
.popup-hover-bridge:not(.popup-hover-bridge--visible) {
  display: none;
}

.popup-hover-bridge {
  position: fixed;
  z-index: calc(var(--flp-z-index-dropdown) - 1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  clip-path: polygon(
    var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
    var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
    var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
    var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
  );
}
`;var ke=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,x=(t,e,o,i)=>{for(var n=i>1?void 0:i?Fe(e,o):e,s=t.length-1,r;s>=0;s--)(r=t[s])&&(n=(i?r(e,o,n):r(n))||n);return i&&n&&ke(e,o,n),n};function Ne(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t}let w=class extends qt{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,n=0,s=0,r=0,l=0,a=0,c=0,f=0;o?t.top<e.top?(i=t.left,n=t.bottom,s=t.right,r=t.bottom,l=e.left,a=e.top,c=e.right,f=e.top):(i=e.left,n=e.bottom,s=e.right,r=e.bottom,l=t.left,a=t.top,c=t.right,f=t.top):t.left<e.left?(i=t.right,n=t.top,s=e.left,r=e.top,l=t.right,a=t.bottom,c=e.left,f=e.bottom):(i=e.right,n=e.top,s=t.left,r=t.top,l=e.right,a=e.bottom,c=t.left,f=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${f}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Ne(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Ee(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Ce({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Lt({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=n?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(ze({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Se({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Lt({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Te({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>st.getOffsetParent(o,De):st.getOffsetParent;Le(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:{...st,getOffsetParent:e}}).then(({x:o,y:i,middlewareData:n,placement:s})=>{const r=getComputedStyle(this).direction==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const a=n.arrow.x,c=n.arrow.y;let f="",u="",d="",p="";if(this.arrowPlacement==="start"){const h=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=r?h:"",p=r?"":h}else if(this.arrowPlacement==="end"){const h=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=r?"":h,p=r?h:"",d=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof a=="number"?`${a}px`:"",f=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:f,right:u,bottom:d,left:p,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("flp-reposition")}render(){return gt`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Et({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Et({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?gt`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};w.styles=[Be];x([kt(".popup")],w.prototype,"popup",2);x([kt(".popup__arrow")],w.prototype,"arrowEl",2);x([A()],w.prototype,"anchor",2);x([A({type:Boolean,reflect:!0})],w.prototype,"active",2);x([A({reflect:!0})],w.prototype,"placement",2);x([A({reflect:!0})],w.prototype,"strategy",2);x([A({type:Number})],w.prototype,"distance",2);x([A({type:Number})],w.prototype,"skidding",2);x([A({type:Boolean})],w.prototype,"arrow",2);x([A({attribute:"arrow-placement"})],w.prototype,"arrowPlacement",2);x([A({attribute:"arrow-padding",type:Number})],w.prototype,"arrowPadding",2);x([A({type:Boolean})],w.prototype,"flip",2);x([A({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],w.prototype,"flipFallbackPlacements",2);x([A({attribute:"flip-fallback-strategy"})],w.prototype,"flipFallbackStrategy",2);x([A({type:Object})],w.prototype,"flipBoundary",2);x([A({attribute:"flip-padding",type:Number})],w.prototype,"flipPadding",2);x([A({type:Boolean})],w.prototype,"shift",2);x([A({type:Object})],w.prototype,"shiftBoundary",2);x([A({attribute:"shift-padding",type:Number})],w.prototype,"shiftPadding",2);x([A({attribute:"auto-size"})],w.prototype,"autoSize",2);x([A()],w.prototype,"sync",2);x([A({type:Object})],w.prototype,"autoSizeBoundary",2);x([A({attribute:"auto-size-padding",type:Number})],w.prototype,"autoSizePadding",2);x([A({attribute:"hover-bridge",type:Boolean})],w.prototype,"hoverBridge",2);w=x([Ut("flp-popup")],w);const qe={title:"components/Popup",component:"flp-popup"},_e={},Me=(t,{globals:{theme:e}})=>gt`
  <div class="flp-theme-light">
    <flp-popup>
      <span slot="anchor"></span>
      <div class="box"></div>
    </flp-popup>
  </div>
`,ot=Me.bind({});ot.args=_e;var Dt,$t,Bt;ot.parameters={...ot.parameters,docs:{...(Dt=ot.parameters)==null?void 0:Dt.docs,source:{originalSource:`(props: Popup, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-popup>
      <span slot="anchor"></span>
      <div class="box"></div>
    </flp-popup>
  </div>
\``,...(Bt=($t=ot.parameters)==null?void 0:$t.docs)==null?void 0:Bt.source}}};const Ue=["Default"];export{ot as Default,Ue as __namedExportsOrder,qe as default};
//# sourceMappingURL=flp-popup.stories-B_sMtHG2.js.map