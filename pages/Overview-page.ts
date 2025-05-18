import { OverviewLocators } from '../page-elements/Overview-elements';
import { Page } from '@playwright/test';

export class OverviewPage {
  constructor(private page: Page) {
    this.page = page;
  }

  async clickFinishButton(): Promise<void> {
    await this.page.click(OverviewLocators.finishButton);
  }

  async getCartItemLabels(): Promise<string[]> {
    return this.page.locator(OverviewLocators.cartItemLabel).allTextContents();
  }

  async getSummaryInfo(): Promise<string[]> {
    return this.page.locator(OverviewLocators.summaryInfo).allTextContents();
  }
}