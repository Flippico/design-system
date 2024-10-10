import{i,x as c}from"./lit-element-UdLzEcH-.js";import{F as p,t as n}from"./custom-element-_dbbq29R.js";import{c as h}from"./component.styles-BhDG6Xff.js";import{H as b}from"./slot-BCTpRhJ5.js";import{a as m}from"./class-map-B1m419Bd.js";const f=i`
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
`;var _=Object.defineProperty,v=Object.getOwnPropertyDescriptor,g=(l,a,d,o)=>{for(var r=o>1?void 0:o?v(a,d):a,e=l.length-1,t;e>=0;e--)(t=l[e])&&(r=(o?t(a,d,r):t(r))||r);return o&&r&&_(a,d,r),r};let s=class extends p{constructor(){super(...arguments),this.hasSlotController=new b(this,"footer","header","image")}render(){return c`
      <div
        part="base"
        class=${m({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};s.styles=[f];s=g([n("flp-card")],s);export{s as F};
//# sourceMappingURL=flp-card-Ab_3ZEjg.js.map
