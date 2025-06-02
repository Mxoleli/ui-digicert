import { Before, After, Status } from '@cucumber/cucumber';
import { PlaywrightTestContext } from './context';
import { chromium, firefox, webkit, Browser, Page, BrowserContext } from 'playwright';
import fs from 'fs';
import path from 'path';

Before(async function (this: PlaywrightTestContext) {
  const browserType = process.env.BROWSER || 'chromium';
  const headless = process.env.HEADLESS !== 'false';

  const browserMap: Record<string, () => Promise<Browser>> = {
    chromium: () => chromium.launch({ headless }),
    firefox: () => firefox.launch({ headless }),
    webkit: () => webkit.launch({ headless }),
  };
  this.browser = await browserMap[browserType]();
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});
After(async function (this: PlaywrightTestContext, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `${scenario.pickle.name}-${timestamp}.png`;
    const screenshotPath = path.join('reports', 'screenshots', fileName);

    await this.page.screenshot({ path: screenshotPath, type: 'png' });
    const file = fs.readFileSync(screenshotPath);
    await this.attach(file, 'image/png');
  }
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});