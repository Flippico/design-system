import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpAlert } from './flp-alert.js';
import './flp-alert.js';

describe('flp-alert', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpAlert>(
      html` <flp-alert>Alert content</flp-alert> `
    );
    await expect(el).to.be.accessible();
  });
});
