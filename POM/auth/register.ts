import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;

  // Locators
  readonly loginButton: Locator;
  readonly signupTab: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly signupSubmitButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.loginButton = page.getByTestId('login-button');
    this.signupTab = page.getByTestId('signup-tab');
    this.nameInput = page.getByTestId('signup-name-input');
    this.emailInput = page.getByTestId('signup-email-input');
    this.passwordInput = page.getByTestId('signup-password-input');
    this.confirmPasswordInput = page.getByTestId('signup-confirm-password-input');
    this.signupSubmitButton = page.getByTestId('signup-submit-button');
  }

  async openSignup() {
    await this.loginButton.click();
    await this.signupTab.click();
  }

  async fillSignupForm(
    name: string,
    email: string,
    password: string
  ) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
  }

async submitSignup() {
  await this.signupSubmitButton.click();
  await this.page.waitForTimeout(1000); // juste pour stabiliser le test et voir qu'il revient bien sur le menu après inscription
}


  async signup(
    name: string,
    email: string,
    password: string
  ) {
    await this.openSignup();
    await this.fillSignupForm(name, email, password);
    await this.submitSignup();
  }
}
