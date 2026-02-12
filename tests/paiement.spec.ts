import { test, expect } from '../fixture/fixture';
import { generatePayment, generateShipping } from './outils/fakeuser';

test('checkout simple avec shipping', async ({ loginPage, productPage, cartPage, shippingPage, page }) => {
  await page.goto('/');
  await loginPage.login(process.env.EMAIL!, process.env.MOTDEPASSE!);

  // Ajouter produit
  await productPage.gotoProducts();
  await productPage.selectProduct(3);
  await productPage.addToCart();

  await cartPage.openCart();
  await page.getByTestId('checkout-button').click();
  await page.waitForURL('**/checkout', { timeout: 10000 });

  // Générer données shipping via faker
  const shippingData = generateShipping();
  await shippingPage.checkout(shippingData);

});

test('test avec ajout carte et paiement', async ({ loginPage, productPage, cartPage, shippingPage, paymentPage, page }) => {
  await page.goto('/');

  // Login
  await loginPage.login(process.env.EMAIL!, process.env.MOTDEPASSE!);

  // Ajouter produit
  await productPage.gotoProducts();
  await productPage.selectProduct(3);
  await productPage.addToCart();

  // Ouvrir panier et lancer checkout
  await cartPage.openCart();
  await page.getByTestId('checkout-button').click();

  // Shipping
  const shippingData = generateShipping();
  await shippingPage.checkout(shippingData);

  // Payment
  const paymentData = generatePayment();
  await paymentPage.pay(paymentData);

  // Confirmation
  await expect(page.getByText('Commande confirmée !Merci')).toBeVisible();
   // Track order + onglet Commandes
  await page.getByTestId('track-order-button').click();
  await page.getByRole('tab', { name: 'Commandes' }).click();
});

test('test tout + confirmation et tracking', async ({ 
  loginPage, productPage, cartPage, shippingPage, paymentPage, confirmationPage, page 
}) => {
  await page.goto('/');

  // Login
  await loginPage.login(process.env.EMAIL!, process.env.MOTDEPASSE!);

  // Ajouter un produit
  await productPage.gotoProducts();
  await productPage.selectProduct(3);
  await productPage.addToCart();

  // Ouvrir panier et lancer checkout
  await cartPage.openCart();
  await cartPage.checkout();

  // Shipping
  const shippingData = generateShipping();
  await shippingPage.checkout(shippingData);

  // Payment
  const paymentData = generatePayment();
  await paymentPage.pay(paymentData);

  // Confirmation + Track Order via POM
  await confirmationPage.confirmAndTrack();
});