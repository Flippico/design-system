import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpIcon } from './flp-icon.js';
import './flp-icon.js';

describe('flp-icon', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpIcon>(
      html` <flp-icon>Icon content</flp-icon> `
    );
    await expect(el).to.be.accessible();
  });
});
