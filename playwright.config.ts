import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 90000,
    use: {
        headless: true,
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'Chromium',
            use: {
                ...devices['Desktop Chrome'],
                launchOptions: {
                    args: [
                        '--start-maximized',
                        '--disable-dev-shm-usage',
                        '--disable-blink-features=AutomationControlled',
                    ],
                },
            },
        },
        {
            name: 'Firefox',
            use: {
                ...devices['Desktop Firefox'],
            },
        },
        {
            name: 'WebKit',
            use: {
                ...devices['Desktop Safari'],
            },
        },
    ],
    reporter: [['html', { open: 'never' }]],
});
