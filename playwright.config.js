// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // 测试目录
  testDir: './tests',
  // 并发数
  fullyParallel: true,
  // 失败重试次数
  retries: 1,
  // 超时时间（毫秒）
  timeout: 30000,
  // 期望超时
  expect: {
    timeout: 5000,
  },
  // 报告器
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
  use: {
    // 基础 URL（可在测试中使用 page.goto('/') 形式）
    baseURL: 'https://playwright.dev',
    // 失败时截图
    screenshot: 'only-on-failure',
    // 失败时录制视频
    video: 'retain-on-failure',
    // 追踪
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
