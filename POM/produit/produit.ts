import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to products page
  async gotoProducts() {
    await this.page.getByTestId('nav-link-products').click();
  }

  // Select product by ID
  async selectProduct(productId: number) {
    await this.page.getByTestId(`product-card-${productId}`).click();
  }

  // Add currently viewed product to cart
  async addToCart() {
    await this.page.getByTestId('product-detail-add-to-cart').click();
  }
}
