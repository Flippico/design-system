import{i as c,x as l}from"./lit-element-ChAK2pu5.js";import{c as p}from"./component.styles-CK1ltfsO.js";import{F as m,t as d}from"./custom-element-BSoDmtoY.js";const f=c`
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
`;var h=Object.getOwnPropertyDescriptor,k=(t,s,o,n)=>{for(var r=n>1?void 0:n?h(s,o):s,e=t.length-1,i;e>=0;e--)(i=t[e])&&(r=i(r)||r);return r};let a=class extends m{render(){return l`
      <svg part="base" class="spinner" role="progressbar" aria-label="loading">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};a.styles=f;a=k([d("flp-spinner")],a);export{a as F};
//# sourceMappingURL=flp-spinner-DWSNUnAx.js.map
