import { Before, After, Status } from '@cucumber/cucumber';
import { PlaywrightTestContext } from './context';

import { chromium } from 'playwright';

Before(async function (this: PlaywrightTestContext) {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: PlaywrightTestContext, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const screenshotPath = `./reports/screenshots/${scenario.pickle.name}-${timestamp}.png`;
    await this.page.screenshot({ path: screenshotPath, type: 'png' });
    await this.attach(screenshotPath, 'image/png');
  }
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});