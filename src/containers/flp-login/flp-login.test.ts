import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpLogin } from './flp-login.js';
import './flp-login.js';

describe('flp-login', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpLogin>(
      html` <flp-login>Login content</flp-login> `
    );
    await expect(el).to.be.accessible();
  });
});
