import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpSelect } from './flp-select.js';
import './flp-select.js';

describe('flp-select', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpSelect>(
      html` <flp-select>Select content</flp-select> `
    );
    await expect(el).to.be.accessible();
  });
});
