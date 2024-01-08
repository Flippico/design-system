import { CSSResultGroup, html } from 'lit';
import FlpElement from '../../utils/flippico-element';
import {customElement, property} from 'lit/decorators.js';

import { flippico } from './flp-logo.styles';
import { classMap } from 'lit/directives/class-map.js';
// @ts-expect-error
import kwLogo from './../../assets/logo/kw/main.png';
// @ts-expect-error
import flippicoLogo from './../../assets/logo/flippico/main.png';

/**
 * @summary This the flp-logo component
 *
 * @tag flp-logo
 */
 @customElement("flp-logo")
export class FlpLogo extends FlpElement {
  static styles: CSSResultGroup = [flippico];

  @property() variant: 'flippico' | 'kw' = 'flippico';

  @property() size: 'small' | 'medium' | 'large' = 'medium';

  @property({ attribute: 'rounded', type: Boolean }) isRounded = false;

  /** Indicates how the browser should load the image. */
  @property() loading: 'eager' | 'lazy' = 'eager';

  render() {
    const image = this.variant === 'kw' ? kwLogo : flippicoLogo;

    return html`<img
      part="image"
      class=${classMap({
        "logo__image": true,
        [this.size]: true,
        rounded: this.isRounded,
      })}
      src="${image}"
      loading="${this.loading}"
      alt="logo"
    />`;
  }
}
