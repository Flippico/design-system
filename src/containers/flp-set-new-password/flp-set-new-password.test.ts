import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpSetNewPassword } from './flp-set-new-password.js';
import './flp-set-new-password.js';

describe('flp-set-new-password', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpSetNewPassword>(
      html` <flp-set-new-password>SetNewPassword content</flp-set-new-password> `
    );
    await expect(el).to.be.accessible();
  });
});
