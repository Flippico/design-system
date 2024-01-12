import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpCard } from './flp-card.js';
import './flp-card.js';

describe('flp-card', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpCard>(
      html` <flp-card>Card content</flp-card> `
    );
    await expect(el).to.be.accessible();
  });
});
