import { test as base, Page, expect } from '@playwright/test';
import { RegisterPage } from '../POM/auth/register';
import { LoginPage } from '../POM/auth/login';
import { generateUser } from '../tests/outils/fakeuser';
import { ProductPage } from '../POM/produit/produit';
import { CartPage } from '../POM/produit/cart';
import { ShippingPage } from '../POM/PAIEMENT/livraison';
import { PaymentPage } from '../POM/PAIEMENT/paiement';
import { ConfirmationPage } from '../POM/PAIEMENT/confirmation';
import { OptionsPage } from '../POM/option/option';

type Fixtures = {
    testUser?: { email: string; password: string; name: string };
    registerPage: RegisterPage;
    loginPage: LoginPage;
    productPage: ProductPage;
    cartPage: CartPage;
    shippingPage: ShippingPage;
    paymentPage: PaymentPage;
    confirmationPage: ConfirmationPage;
    optionsPage: OptionsPage;
    
};

export const test = base.extend<Fixtures>({
    testUser: async ({ }, use) => {
        const user = generateUser();
        await use(user);
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },

    shippingPage: async ({ page }, use) => {
        await use(new ShippingPage(page));
    },

    paymentPage: async ({ page }, use) => {
        await use(new PaymentPage(page));
    },

    confirmationPage: async ({ page }, use) => {
        await use(new ConfirmationPage(page));
    },
     optionsPage: async ({ page }, use) => {
    await use(new OptionsPage(page));
  },
});

export { expect };
