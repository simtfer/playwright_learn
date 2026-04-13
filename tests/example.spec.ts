import { test, expect, Page } from '@playwright/test';

test.describe('Playwright 官网测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('页面标题包含 Playwright', async ({ page }: { page: Page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('首页包含"Get started"链接', async ({ page }: { page: Page }) => {
    const getStartedLink = page.getByRole('link', { name: 'Get started' });
    await expect(getStartedLink).toBeVisible();
  });

  test('点击 Get started 跳转到文档页', async ({ page }: { page: Page }) => {
    const getStartedLink = page.getByRole('link', { name: 'Get started' });
    await getStartedLink.click();
    await expect(page).toHaveURL(/.*docs\/intro/);
  });
});

test.describe('搜索功能测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('点击搜索图标可打开搜索框', async ({ page }: { page: Page }) => {
    const searchButton = page.getByRole('button', { name: 'Search' });
    await searchButton.click();
    const searchInput = page.getByPlaceholder('Search docs');
    await expect(searchInput).toBeVisible();
  });
});

test.describe('文档页面结构完整性检查', () => {
  test('文档页面包含导航和内容区域', async ({ page }: { page: Page }) => {
    await page.goto('/docs/intro');
    
    // 检查导航菜单
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // 检查主要内容区域
    const mainContent = page.locator('main');
    await expect(mainContent).toBeVisible();
    
    // 检查页脚
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});

test.describe('视觉回归测试', () => {
  test('首页视觉回归检查', async ({ page }: { page: Page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('homepage.png');
  });
});

test.describe('多断言组合测试', () => {
  test('页面多个元素同时存在', async ({ page }: { page: Page }) => {
    await page.goto('/');
    
    await expect(page).toHaveTitle(/Playwright/);
    
    const elements = [
      page.getByRole('link', { name: 'Get started' }),
      page.getByRole('button', { name: 'Search' }),
      page.getByRole('heading', { name: 'Playwright' })
    ];
    
    for (const element of elements) {
      await expect(element).toBeVisible();
    }
  });
});