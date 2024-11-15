const a=new WeakMap,h=new WeakMap,n=new WeakMap,d=new WeakSet,l=new WeakMap;class p{constructor(e,o){this.handleFormData=t=>{const s=this.options.disabled(this.host),r=this.options.name(this.host),i=this.options.value(this.host),f=this.host.tagName.toLowerCase()==="flp-button";!s&&!f&&typeof r=="string"&&r.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(c=>{t.formData.append(r,c.toString())}):t.formData.append(r,i.toString()))},this.handleFormSubmit=t=>{var i;const s=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=a.get(this.form))==null||i.forEach(f=>{this.setUserInteracted(f,!0)})),this.form&&!this.form.noValidate&&!s&&!r(this.host)&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),l.set(this.host,[])},this.handleInteraction=t=>{const s=l.get(this.host);s.includes(t.type)||s.push(t.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const s of t)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const s of t)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options={form:t=>{const s=t.form;if(s){const i=t.getRootNode().getElementById(s);if(i)return i}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>t.disabled??!1,reportValidity:t=>typeof t.reportValidity=="function"?t.reportValidity():!0,checkValidity:t=>typeof t.checkValidity=="function"?t.checkValidity():!0,setValue:(t,s)=>t.value=s,assumeInteractionOn:["flp-input"],...o}}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),l.set(this.host,[]),this.options.assumeInteractionOn.forEach(o=>{this.host.addEventListener(o,this.handleInteraction)})}hostDisconnected(){this.detachForm(),l.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,a.has(this.form)?a.get(this.form).add(this.host):a.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),h.has(this.form)||(h.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),n.has(this.form)||(n.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=a.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),h.has(this.form)&&(this.form.reportValidity=h.get(this.form),h.delete(this.form)),n.has(this.form)&&(this.form.checkValidity=n.get(this.form),n.delete(this.form)),this.form=void 0))}setUserInteracted(e,o){o?d.add(e):d.delete(e),e.requestUpdate()}doAction(e,o){if(this.form){const t=document.createElement("button");t.type=e,t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.clipPath="inset(50%)",t.style.overflow="hidden",t.style.whiteSpace="nowrap",o&&(t.name=o.name,t.value=o.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{o.hasAttribute(s)&&t.setAttribute(s,o.getAttribute(s))})),this.form.append(t),t.click(),t.remove()}}getForm(){return this.form??null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const o=this.host,t=!!d.has(o),s=!!o.required;o.toggleAttribute("data-required",s),o.toggleAttribute("data-optional",!s),o.toggleAttribute("data-invalid",!e),o.toggleAttribute("data-valid",e),o.toggleAttribute("data-user-invalid",!e&&t),o.toggleAttribute("data-user-valid",e&&t)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const o=new CustomEvent("flp-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||o.preventDefault(),this.host.dispatchEvent(o)||e==null||e.preventDefault()}}const m=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze({...m,valid:!1,valueMissing:!0});Object.freeze({...m,valid:!1,customError:!0});export{p as F,m as v};
//# sourceMappingURL=form-DpMOf5Do.js.map