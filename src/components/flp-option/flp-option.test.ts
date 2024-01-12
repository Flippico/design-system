import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpOption } from './flp-option.js';
import './flp-option.js';

describe('flp-option', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpOption>(
      html` <flp-option>Option content</flp-option> `
    );
    await expect(el).to.be.accessible();
  });
});
