import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openCart() {
    await this.page.getByTestId('cart-button').click();
  }

  async increaseQuantity(productId: number) {
    await this.page.getByTestId(`increase-quantity-${productId}`).click();
  }

  async decreaseQuantity(productId: number) {
    await this.page.getByTestId(`decrease-quantity-${productId}`).click();
  }

  async removeItem(productId: number) {
    await this.page.getByTestId(`remove-item-${productId}`).click();
  }

  // Optional: assert item quantity
  async expectQuantity(productId: number, quantity: number) {
    const qtyLocator = this.page.getByTestId(`quantity-${productId}`);
    await expect(qtyLocator).toHaveText(String(quantity));
  }
  async checkout() {
    await this.page.getByTestId('checkout-button').click();
  }
}
