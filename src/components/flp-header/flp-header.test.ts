import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FLPHeader } from './flp-header.js';
import './flp-header.js';

describe('flp-header', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpHeader>(
      html` <flp-header>Header content</flp-header> `
    );
    await expect(el).to.be.accessible();
  });
});
