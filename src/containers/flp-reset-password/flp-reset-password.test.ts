import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpResetPassword } from './flp-reset-password.js';
import './flp-reset-password.js';

describe('flp-reset-password', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpResetPassword>(
      html` <flp-reset-password>ResetPassword content</flp-reset-password> `
    );
    await expect(el).to.be.accessible();
  });
});
