import { Page } from '@playwright/test';
import { TestPayment } from '../../tests/outils/fakeuser';

export class PaymentPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillPaymentForm(paymentData: TestPayment) {
    await this.page.getByTestId('payment-cardnumber-input').fill(paymentData.cardNumber);
    await this.page.getByTestId('payment-cardname-input').fill(paymentData.cardName);
    await this.page.getByTestId('payment-expiry-input').fill(paymentData.expiry);
    await this.page.getByTestId('payment-cvv-input').fill(paymentData.cvv);
  }

  async submitPayment(paymentData: TestPayment) {
    await this.fillPaymentForm(paymentData);
    await this.page.getByTestId('payment-submit-button').click();
  }

  async pay(paymentData: TestPayment) {
    await this.submitPayment(paymentData);
  }
}
