import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpIconButton } from './flp-icon-button.js';
import './flp-icon-button.js';

describe('flp-icon-button', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<FlpIconButton>(
      html` <flp-icon-button>Icon-button content</flp-icon-button> `
    );
    await expect(el).to.be.accessible();
  });
});
