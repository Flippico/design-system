import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpBadge } from './flp-badge.js';
import './flp-badge.js';

describe('flp-badge', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpBadge>(
      html` <flp-badge>Badge content</flp-badge> `
    );
    await expect(el).to.be.accessible();
  });
});
