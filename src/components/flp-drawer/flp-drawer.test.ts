import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpDrawer } from './flp-drawer.js';
import './flp-drawer.js';

describe('flp-drawer', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpDrawer>(
      html` <flp-drawer>Drawer content</flp-drawer> `
    );
    await expect(el).to.be.accessible();
  });
});
