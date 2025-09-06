import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 5000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: process.env.CI ? 'github' : 'list',
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL: 'http://localhost:3000',
  },
  projects: [
    { 
      name: 'setup', 
      testMatch: /.*\.setup\.ts/
    },
    {
      name: 'examples',
      use: { ...devices['Desktop Chrome'] },
      testMatch: /.*\.example\.spec\.ts/,
      dependencies: ['setup'],
    },
    {
      name: 'examples (finished)',
      use: { ...devices['Desktop Chrome'] },
      testMatch: /.*\.final\.spec\.ts/,
      dependencies: ['setup'],
    },
    {
      name: 'challenges',
      use: { ...devices['Desktop Chrome'] },
      testMatch: /.*\.challenge\.spec\.ts/,
      dependencies: ['setup'],
    }
  ],
  webServer: {
    command: 'cd trelloapp && npm start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
