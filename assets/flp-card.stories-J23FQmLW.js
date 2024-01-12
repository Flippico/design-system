import{i as m,x as h}from"./lit-element-w72SgdYd.js";import{F as f,t as b}from"./custom-element-fmFNofkQ.js";import{c as g}from"./dark-VEljs8KV.js";import{H as _}from"./slot-vzYjzu9X.js";import{a as v}from"./class-map-YdTWFbRy.js";const u=m`
${g}

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
`;var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,C=(d,a,s,e)=>{for(var r=e>1?void 0:e?w(a,s):a,t=d.length-1,l;t>=0;t--)(l=d[t])&&(r=(e?l(a,s,r):l(r))||r);return e&&r&&y(a,s,r),r};let i=class extends f{constructor(){super(...arguments),this.hasSlotController=new _(this,"footer","header","image")}render(){return h`
      <div
        part="base"
        class=${v({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};i.styles=[u];i=C([b("flp-card")],i);const k={title:"components/Card",component:"flp-card"},x={},S=(d,{globals:{theme:a}})=>h`
  <div class="flp-theme-light">
    <flp-card>
      Card
    </flp-card>
  </div>
`,o=S.bind({});o.args=x;var c,n,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`(props: Card, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light">
    <flp-card>
      Card
    </flp-card>
  </div>
\``,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const E=["Default"];export{o as Default,E as __namedExportsOrder,k as default};
//# sourceMappingURL=flp-card.stories-J23FQmLW.js.map
