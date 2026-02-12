import { Page, Locator, expect } from '@playwright/test';

export class LogoutPage {
  readonly page: Page;

  readonly logoutButton: Locator;
  readonly usermenuButton: Locator;
  readonly loginMessage: Locator;
  readonly loginButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByTestId('login-button');
    this.logoutButton = page.getByTestId('logout-button');
    this.usermenuButton = page.getByTestId('user-menu-button');
    this.loginMessage = page.getByText('ConnexionAccédez à votre')
  }

  async logout() {
    await this.usermenuButton.click(); 
    await this.logoutButton.click();
    await this.page.waitForTimeout(1000);
    await this.loginButton.click();
    await this.page.waitForTimeout(1000);
  

  }

  async expectLogiMessage() {
     await expect(this.loginMessage).toBeVisible();
  }
  
}
