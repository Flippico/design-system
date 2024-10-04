import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpSignup } from './flp-signup.js';
import './flp-signup.js';

describe('flp-signup', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpSignup>(
      html` <flp-signup>Signup content</flp-signup> `
    );
    await expect(el).to.be.accessible();
  });
});
