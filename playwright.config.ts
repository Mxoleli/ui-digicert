import { defineConfig, devices} from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: true,
    screenshot: 'only-on-failure',
  },
  projects: [
    {
        name: 'chromium',
        timeout: 90000,
        use: {
            ...devices['Desktop Chrome'],
            launchOptions: {
                args: ['--start-maximized', '--disable-dev-shm-usage', '--disable-blink-features=AutomationControlled']
            }
        }
    }
],
  reporter: [['html', { open: 'never' }]],
});
