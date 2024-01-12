import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpSwitch } from './flp-switch.js';
import './flp-switch.js';

describe('flp-switch', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpSwitch>(
      html` <flp-switch>Switch content</flp-switch> `
    );
    await expect(el).to.be.accessible();
  });
});
