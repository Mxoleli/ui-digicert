import { Before, After } from '@cucumber/cucumber';
import { PlaywrightTestContext } from './context';

import { chromium } from 'playwright';

Before(async function (this: PlaywrightTestContext) {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: PlaywrightTestContext) {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});