const { test, expect } = require('@playwright/test');

// ========================
// 示例 1：基础页面测试
// ========================
test.describe('Playwright 官网测试', () => {

  test('页面标题包含 Playwright', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('首页包含"Get started"链接', async ({ page }) => {
    await page.goto('/');
    const getStarted = page.getByRole('link', { name: 'Get started' });
    await expect(getStarted).toBeVisible();
  });

  test('点击 Get started 跳转到文档页', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Get started' }).click();
    // 跳转后 URL 应包含 /docs/
    await expect(page).toHaveURL(/.*docs.*/);
  });

});

// ========================
// 示例 2：搜索功能测试
// ========================
test.describe('搜索功能测试', () => {

  test('点击搜索图标可打开搜索框', async ({ page }) => {
    await page.goto('/');
    // 点击导航栏搜索按钮（通常有 aria-label="Search"）
    const searchBtn = page.getByRole('button', { name: /search/i });
    await searchBtn.click();
    // 应出现搜索输入框
    const searchInput = page.getByRole('searchbox');
    await expect(searchInput).toBeVisible();
  });

});

// ========================
// 示例 3：截图测试
// ========================
test('首页截图对比（视觉回归）', async ({ page }) => {
  await page.goto('/');
  // 等待页面内容稳定
  await page.waitForLoadState('networkidle');
  // 对指定区域截图（首次运行生成基准快照，后续运行进行对比）
  await expect(page).toHaveScreenshot('homepage.png', {
    maxDiffPixelRatio: 0.05,  // 允许 5% 像素差异
  });
});

// ========================
// 示例 4：多断言组合
// ========================
test('文档页面结构完整性检查', async ({ page }) => {
  await page.goto('/docs/intro');
  
  // 检查 h1 存在
  await expect(page.locator('h1')).toBeVisible();
  
  // 检查侧边导航存在
  const sidebar = page.locator('nav[class*="sidebar"], aside');
  await expect(sidebar.first()).toBeVisible();
  
  // 页面 URL 正确
  await expect(page).toHaveURL(/docs\/intro/);
});
