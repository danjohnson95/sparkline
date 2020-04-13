import { newE2EPage } from '@stencil/core/testing';

describe('dan-sparkline', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<dan-sparkline></dan-sparkline>');
    const element = await page.find('dan-sparkline');
    expect(element).toHaveClass('hydrated');
  });
});
