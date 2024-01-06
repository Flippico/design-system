import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpModal } from './flp-modal.js';
import './flp-modal.js';

describe('flp-modal', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpModal>(
      html` <flp-modal>Modal content</flp-modal> `
    );
    await expect(el).to.be.accessible();
  });
});
