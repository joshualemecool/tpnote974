import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  // Locators
  readonly loginButton: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByTestId('login-button');
    this.emailInput = page.getByTestId('login-email-input');
    this.passwordInput = page.getByTestId('login-password-input');
    this.submitButton = page.getByTestId('login-submit-button');
  }

  async openLogin() {
    await this.loginButton.click();
  }

  async fillLoginForm(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  async submitLogin() {
    await this.submitButton.click();
    await this.page.waitForTimeout(1000); // juste pour stabiliser le test et voir qu'il revient bien sur le menu après inscription, pck avec un to be visible ça affiche pas sur le UI jsp pk
  }

  async login(email: string, password: string) {
    await this.openLogin();
    await this.fillLoginForm(email, password);
    await this.submitLogin();
  }
}
