import{i,x as c}from"./lit-element-BQC2Loq1.js";import{F as p,t as n}from"./custom-element-NRwDiNuy.js";import{c as h}from"./component.styles-DEWewzc5.js";import{H as b}from"./slot-BCTpRhJ5.js";import{a as m}from"./class-map-sNB-Nzgq.js";const f=i`
${h}

:host {
  --border-color: var(--flp-color-neutral-200);
  --border-radius: var(--flp-border-radius-medium);
  --border-width: 1px;
  --padding: var(--flp-spacing-large);

  display: inline-block;
}

.card {
  display: flex;
  flex-direction: column;
  background-color: var(--flp-panel-background-color);
  box-shadow: var(--flp-shadow-x-small);
  border: solid var(--border-width) var(--border-color);
  border-radius: var(--border-radius);
}

.card__image {
  display: flex;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  margin: calc(-1 * var(--border-width));
  overflow: hidden;
}

.card__image::slotted(img) {
  display: block;
  width: 100%;
}

.card:not(.card--has-image) .card__image {
  display: none;
}

.card__header {
  display: block;
  border-bottom: solid var(--border-width) var(--border-color);
  padding: calc(var(--padding) / 2) var(--padding);
}

.card:not(.card--has-header) .card__header {
  display: none;
}

.card:not(.card--has-image) .card__header {
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
}

.card__body {
  display: block;
  padding: var(--padding);
}

.card--has-footer .card__footer {
  display: block;
  border-top: solid var(--border-width) var(--border-color);
  padding: var(--padding);
}

.card:not(.card--has-footer) .card__footer {
  display: none;
}
`;var g=Object.getOwnPropertyDescriptor,_=(d,e,l,t)=>{for(var r=t>1?void 0:t?g(e,l):e,a=d.length-1,s;a>=0;a--)(s=d[a])&&(r=s(r)||r);return r};let o=class extends p{constructor(){super(...arguments),this.hasSlotController=new b(this,"footer","header","image")}render(){return c`
      <div
        part="base"
        class=${m({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};o.styles=[f];o=_([n("flp-card")],o);export{o as F};
//# sourceMappingURL=flp-card-BLoqAFke.js.map
