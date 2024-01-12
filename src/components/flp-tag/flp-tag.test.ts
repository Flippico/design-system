import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpTag } from './flp-tag.js';
import './flp-tag.js';

describe('flp-tag', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpTag>(
      html` <flp-tag>Tag content</flp-tag> `
    );
    await expect(el).to.be.accessible();
  });
});
