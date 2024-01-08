import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpLogo } from './flp-logo.js';
import './flp-logo.js';

describe('flp-logo', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpLogo>(
      html` <flp-logo>Logo content</flp-logo> `
    );
    await expect(el).to.be.accessible();
  });
});
