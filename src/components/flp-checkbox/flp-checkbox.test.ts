import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { FlpCheckbox } from './flp-checkbox.js';
import './flp-checkbox.js';

describe('flp-checkbox', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('passes accessibility test', async () => {
    const el = await fixture<flpCheckbox>(
      html` <flp-checkbox>Checkbox content</flp-checkbox> `
    );
    await expect(el).to.be.accessible();
  });
});
