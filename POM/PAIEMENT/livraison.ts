import { Page } from '@playwright/test';
import { TestShipping } from '../../tests/outils/fakeuser';

export class ShippingPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillShippingForm(shippingData: TestShipping) {
    await this.page.getByTestId('shipping-firstname-input').fill(process.env.FIRSTNAME!);
    await this.page.getByTestId('shipping-lastname-input').fill(process.env.LASTNAME!);
    await this.page.getByTestId('shipping-email-input').fill(process.env.EMAIL!);

    await this.page.getByTestId('shipping-phone-input').fill(shippingData.phone);
    await this.page.getByTestId('shipping-address-input').fill(shippingData.address);
    await this.page.getByTestId('shipping-city-input').fill(shippingData.city);
    await this.page.getByTestId('shipping-postalcode-input').fill(shippingData.postalCode);
  }

  async submitShipping() {
    await this.page.getByTestId('shipping-submit-button').click();
    await this.page.waitForTimeout(1000); // juste pour stabiliser le test et voir qu'il change bien de page après le submit
  }

  async checkout(shippingData: TestShipping) {
    await this.fillShippingForm(shippingData);
    await this.submitShipping();
  }
}
