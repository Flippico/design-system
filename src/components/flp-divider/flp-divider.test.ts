import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpDivider } from './flp-divider.js';
import './flp-divider.js';

describe('flp-divider', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpDivider>(
      html` <flp-divider>Divider content</flp-divider> `
    );
    await expect(el).to.be.accessible();
  });
});
