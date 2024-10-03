import{i as _,k as u}from"./lit-element-CPYlYYac.js";import{R as f}from"./class-map-635SZfYW.js";import{c as k,F as x,t as w}from"./component.styles-CJs1ohMC.js";import{n as i}from"./property-CcHbFR6H.js";import{r as g}from"./state-Cw-lAQBx.js";import{e as y}from"./query-BApjzB0v.js";import{t as h}from"./if-defined-4GS2c12S.js";import{F as $}from"./live-DyBFC1nW.js";import{f as C}from"./form-control.styles-qMh6M_JA.js";import{F as z}from"./form-DpMOf5Do.js";import{H as T}from"./slot-BCTpRhJ5.js";import{d as F}from"./default-value-DEpNiEhc.js";import{w as d}from"./watch-CEsCE2EF.js";/* empty css             */import"./directive-helpers-CHX3h6dV.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(t){return(e,l)=>{const a=typeof e=="function"?e:e[l];Object.assign(a,t)}}const V=_`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--flp-color-neutral-200);
    --track-color-inactive: var(--flp-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--flp-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--flp-color-primary-600);
    border: solid var(--flp-input-border-width) var(--flp-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--flp-color-primary-500);
    border-color: var(--flp-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--flp-focus-ring);
    outline-offset: var(--flp-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--flp-color-primary-500);
    border-color: var(--flp-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--flp-color-primary-600);
    border-color: var(--flp-color-primary-600);
    transition:
      var(--flp-transition-fast) border-color,
      var(--flp-transition-fast) background-color,
      var(--flp-transition-fast) color,
      var(--flp-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--flp-color-primary-500);
    border-color: var(--flp-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--flp-focus-ring);
    outline-offset: var(--flp-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--flp-color-primary-500);
    border-color: var(--flp-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--flp-z-index-tooltip);
    left: 0;
    border-radius: var(--flp-tooltip-border-radius);
    background-color: var(--flp-tooltip-background-color);
    font-family: var(--flp-tooltip-font-family);
    font-size: var(--flp-tooltip-font-size);
    font-weight: var(--flp-tooltip-font-weight);
    line-height: var(--flp-tooltip-line-height);
    color: var(--flp-tooltip-color);
    opacity: 0;
    padding: var(--flp-tooltip-padding);
    transition: var(--flp-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--flp-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--flp-tooltip-arrow-size) solid var(--flp-tooltip-background-color);
    border-left: var(--flp-tooltip-arrow-size) solid transparent;
    border-right: var(--flp-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--flp-tooltip-arrow-size) solid var(--flp-tooltip-background-color);
    border-left: var(--flp-tooltip-arrow-size) solid transparent;
    border-right: var(--flp-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`;var D=Object.defineProperty,R=Object.getOwnPropertyDescriptor,r=(t,e,l,a)=>{for(var n=a>1?void 0:a?R(e,l):e,p=t.length-1,s;p>=0;p--)(s=t[p])&&(n=(a?s(e,l,n):s(n))||n);return a&&n&&D(e,l,n),n};let o=class extends x{constructor(){super(...arguments),this.formControlController=new z(this),this.hasSlotController=new T(this,"help-text","label"),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("flp-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("flp-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("flp-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("flp-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,l=this.output.offsetWidth,a=getComputedStyle(this.input).getPropertyValue("--thumb-size"),n=this.matches(":dir(rtl)"),p=e*t;if(n){const s=`${e-p}px + ${t} * ${a}`;this.output.style.translate=`calc((${s} - ${l/2}px - ${a} / 2))`}else{const s=`${p}px - ${t} * ${a}`;this.output.style.translate=`calc(${s} - ${l/2}px + ${a} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),l=this.label?!0:!!t,a=this.helpText?!0:!!e;return u`
      <div
        part="form-control"
        class=${f({"form-control":!0,"form-control--medium":!0,"form-control--has-label":l,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${l?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${f({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${h(this.name)}
              ?disabled=${this.disabled}
              min=${h(this.min)}
              max=${h(this.max)}
              step=${h(this.step)}
              .value=${$(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?u`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};o.styles=[k,C,V];r([y(".range__control")],o.prototype,"input",2);r([y(".range__tooltip")],o.prototype,"output",2);r([g()],o.prototype,"hasFocus",2);r([g()],o.prototype,"hasTooltip",2);r([i()],o.prototype,"title",2);r([i()],o.prototype,"name",2);r([i({type:Number})],o.prototype,"value",2);r([i()],o.prototype,"label",2);r([i({attribute:"help-text"})],o.prototype,"helpText",2);r([i({type:Boolean,reflect:!0})],o.prototype,"disabled",2);r([i({type:Number})],o.prototype,"min",2);r([i({type:Number})],o.prototype,"max",2);r([i({type:Number})],o.prototype,"step",2);r([i()],o.prototype,"tooltip",2);r([i({attribute:!1})],o.prototype,"tooltipFormatter",2);r([i({reflect:!0})],o.prototype,"form",2);r([F()],o.prototype,"defaultValue",2);r([S({passive:!0})],o.prototype,"handleThumbDragStart",1);r([d("value",{waitUntilFirstUpdate:!0})],o.prototype,"handleValueChange",1);r([d("disabled",{waitUntilFirstUpdate:!0})],o.prototype,"handleDisabledChange",1);r([d("hasTooltip",{waitUntilFirstUpdate:!0})],o.prototype,"syncRange",1);o=r([w("flp-range")],o);const Q={title:"components/Range",component:"flp-range"},O={},P=(t,{globals:{theme:e}})=>u`
  <div class="flp-theme-light" style="margin-top: 200px;">
    <flp-range min="200" max="5000" step="20"></flp-range>
  </div>
`,c=P.bind({});c.args=O;var m,v,b;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`(props: Range, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light" style="margin-top: 200px;">
    <flp-range min="200" max="5000" step="20"></flp-range>
  </div>
\``,...(b=(v=c.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const X=["Default"];export{c as Default,X as __namedExportsOrder,Q as default};
//# sourceMappingURL=flp-range.stories-KCRyuuPZ.js.map
