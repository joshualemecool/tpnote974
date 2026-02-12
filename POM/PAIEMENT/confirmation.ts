import { Page, expect } from '@playwright/test';

export class ConfirmationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Vérifie que le texte de confirmation est visible
  async expectConfirmationMessage() {
    await expect(this.page.getByText('Commande confirmée !Merci')).toBeVisible();
  }

  // Clique sur le bouton de suivi et ouvre l'onglet Commandes
  async trackOrder() {
    await this.page.getByTestId('track-order-button').click();
    await this.page.getByRole('tab', { name: 'Commandes' }).click();
  }

  // Tout en un
  async confirmAndTrack() {
    await this.expectConfirmationMessage();
    await this.trackOrder();
  }
}
