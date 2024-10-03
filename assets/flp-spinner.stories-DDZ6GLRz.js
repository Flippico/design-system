import{i as f,k as d}from"./lit-element-CPYlYYac.js";import{c as g,F as h,t as _}from"./component.styles-CJs1ohMC.js";/* empty css             */const v=f`
  ${g}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--flp-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;var k=Object.defineProperty,y=Object.getOwnPropertyDescriptor,u=(t,e,a,s)=>{for(var r=s>1?void 0:s?y(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(r=(s?i(e,a,r):i(r))||r);return s&&r&&k(e,a,r),r};let l=class extends h{render(){return d`
      <svg part="base" class="spinner" role="progressbar" aria-label="loading">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};l.styles=v;l=u([_("flp-spinner")],l);const S={title:"components/Spinner",component:"flp-range"},b={},x=(t,{globals:{theme:e}})=>d`
  <div class="flp-theme-light" style="margin-top: 10px;">
    <flp-spinner></flp-spinner>
  </div>
`,n=x.bind({});n.args=b;var p,c,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`(props: Range, {
  globals: {
    theme
  }
}: {
  globals: {
    theme: string;
  };
}) => html\`
  <div class="flp-theme-light" style="margin-top: 10px;">
    <flp-spinner></flp-spinner>
  </div>
\``,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const D=["Default"];export{n as Default,D as __namedExportsOrder,S as default};
//# sourceMappingURL=flp-spinner.stories-DDZ6GLRz.js.map
