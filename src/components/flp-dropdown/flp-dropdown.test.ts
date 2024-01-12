import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpDropdown } from './flp-dropdown.js';
import './flp-dropdown.js';

describe('flp-dropdown', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpDropdown>(
      html` <flp-dropdown>Dropdown content</flp-dropdown> `
    );
    await expect(el).to.be.accessible();
  });
});
