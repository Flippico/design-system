import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpConfirmSignup } from './flp-confirm-signup.js';
import './flp-confirm-signup.js';

describe('flp-confirm-signup', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpConfirmSignup>(
      html` <flp-confirm-signup>ConfirmSignup content</flp-confirm-signup> `
    );
    await expect(el).to.be.accessible();
  });
});
