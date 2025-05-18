import { ConfirmationLocators } from '../page-elements/confirmation-elements';
import { Page } from '@playwright/test';

export class ConfirmationPage  {
  constructor(private page: Page) {}

  async getConfirmationMessage(): Promise<string> {
    return this.page.locator(ConfirmationLocators.confirmationMessage).innerText();
  }
}