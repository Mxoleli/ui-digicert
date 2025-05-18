import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PlaywrightTestContext } from '../../support/context';
import { ProductListPage } from '../../pages/Product-list-page';
import { OverviewPage } from '../../pages/Overview-page';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { ConfirmationPage } from '../../pages/Confirmation-page';


Given('I have added a product to the cart', async function (this: PlaywrightTestContext) {
  this.productListPage = new ProductListPage(this.page);
  await this.productListPage.addProductToCart();
});

When('I fill in my checkout information', async function (this: PlaywrightTestContext, dataTable) {
  this.checkoutPage = new CheckoutPage(this.page);
  const data = dataTable.raw()[1];
  const [firstName, lastName, postalCode] = data;
  await this.checkoutPage.fillCheckoutInfo(firstName, lastName, postalCode);
});

When('I click on the continue button', async function (this: PlaywrightTestContext) {
  await this.checkoutPage.clickContinue();
});

When('I should see the overview page', async function (this: PlaywrightTestContext) {
    this.overviewPage = new OverviewPage(this.page);
  const summaryInfo = await this.overviewPage.getSummaryInfo();
  expect(summaryInfo).toBeTruthy();
});

When('I complete the finish', async function (this: PlaywrightTestContext) {
  await this.overviewPage.clickFinishButton();
});

Then('I should see a confirmation message {string}', async function (this: PlaywrightTestContext, expectedMessage: string) {
  this.confirmationPage = new ConfirmationPage(this.page);
  const actualMessage = await this.confirmationPage.getConfirmationMessage();
  expect(actualMessage).toBe(expectedMessage);
});