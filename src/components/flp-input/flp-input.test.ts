import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpInput } from './flp-input.js';
import './flp-input.js';

describe('flp-input', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpInput>(
      html` <flp-input>Input content</flp-input> `
    );
    await expect(el).to.be.accessible();
  });
});
