import{i as c,k as l}from"./lit-element-CPYlYYac.js";import{c as p}from"./component.styles-MQe3hEw3.js";import{F as m,t as d}from"./custom-element-DcGDOd3C.js";const f=c`
  ${p}

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
`;var _=Object.defineProperty,h=Object.getOwnPropertyDescriptor,k=(o,e,s,a)=>{for(var r=a>1?void 0:a?h(e,s):e,t=o.length-1,n;t>=0;t--)(n=o[t])&&(r=(a?n(e,s,r):n(r))||r);return a&&r&&_(e,s,r),r};let i=class extends m{render(){return l`
      <svg part="base" class="spinner" role="progressbar" aria-label="loading">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};i.styles=f;i=k([d("flp-spinner")],i);export{i as F};
//# sourceMappingURL=flp-spinner-y5zgyz0m.js.map
