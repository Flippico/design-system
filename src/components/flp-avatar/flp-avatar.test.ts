import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpAvatar } from './flp-avatar.js';
import './flp-avatar.js';

describe('flp-avatar', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpAvatar>(
      html` <flp-avatar>Avatar content</flp-avatar> `
    );
    await expect(el).to.be.accessible();
  });
});
