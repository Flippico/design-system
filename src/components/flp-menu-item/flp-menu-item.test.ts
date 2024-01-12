import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpMenuItem } from './flp-menu-item.js';
import './flp-menu-item.js';

describe('flp-menu-item', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpMenuItem>(
      html` <flp-menu-item>MenuItem content</flp-menu-item> `
    );
    await expect(el).to.be.accessible();
  });
});
