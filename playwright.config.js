const {defineConfig, devices} = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    timeout: 30 * 1000,
    expect: {
        timeout: 5000
    },
    fullyParallel: true,
    reporter: 'html',
    use: {
        trace: 'on-first-retry',
        actionTimeout: 0,
        baseURL: 'https://example.com',
        ignoreHTTPSErrors: true,
        // video: 'on-first-retry',
        // screenshot: 'only-on-failure'
    },
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']}
        },
        {
            name: 'firefox',
            use: {...devices['Desktop Firefox']}
        },
        {
            name: 'webkit',
            use: {...devices['Desktop Safari']}
        }
    ]
});