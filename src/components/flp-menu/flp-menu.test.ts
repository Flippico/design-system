import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpMenu } from './flp-menu.js';
import './flp-menu.js';

describe('flp-menu', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpMenu>(
      html` <flp-menu>Menu content</flp-menu> `
    );
    await expect(el).to.be.accessible();
  });
});
