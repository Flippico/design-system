import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpMenuLabel } from './flp-menu-label.js';
import './flp-menu-label.js';

describe('flp-menu-label', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpMenuLabel>(
      html` <flp-menu-label>MenuLabel content</flp-menu-label> `
    );
    await expect(el).to.be.accessible();
  });
});
