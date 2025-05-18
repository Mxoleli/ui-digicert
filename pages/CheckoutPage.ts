import { ShoppingCartLocators } from '../page-elements/shopping-cart-elements';
import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.page.fill(ShoppingCartLocators.firstName, firstName);
    await this.page.fill(ShoppingCartLocators.lastName, lastName);
    await this.page.fill(ShoppingCartLocators.postalCode, postalCode);
  }

  async clickContinue(): Promise<void> {
    await this.page.click(ShoppingCartLocators.continueButton);
  }
}
