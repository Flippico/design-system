import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpPopup } from './flp-popup.js';
import './flp-popup.js';

describe('flp-popup', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpPopup>(
      html` <flp-popup>Popup content</flp-popup> `
    );
    await expect(el).to.be.accessible();
  });
});
