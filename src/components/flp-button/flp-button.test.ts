import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpButton } from './flp-button.js';
import './flp-button.js';

describe('flp-button', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpButton>(
      html` <flp-button>Button content</flp-button> `
    );
    await expect(el).to.be.accessible();
  });
});
