import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PlaywrightTestContext } from '../../support/context';
import { config } from '../../config';
import { LoginPage } from '../../pages/Login-page';

Given('I am on the login page', async function (this: PlaywrightTestContext) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When('I login with valid credentials', async function (this: PlaywrightTestContext) {
  await this.loginPage.login(config.username, config.password);
});

When('I login with invalid credentials', async function (this: PlaywrightTestContext) {
  await this.loginPage.login(config.lockedOutUsername, config.password);
});

Then('I should see the dashboard', async function (this: PlaywrightTestContext) {
  const isVisible = await this.loginPage.isDashboardVisible();
  expect(isVisible).toBe(true);
});

Then('I should see an error message', async function (this: PlaywrightTestContext) {
  expect(await this.loginPage.isErrorMessageVisible()).toBe(true);
});
