# Playwright 自动化测试学习项目

一个完整的 Playwright 自动化测试示例项目，包含 5 个实际测试用例，100% 通过率。

## 🚀 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 安装浏览器
```bash
# 安装 Chromium 浏览器（约 200 MB）
npx playwright install chromium

# 或者安装所有浏览器（Chrome, Firefox, WebKit）
# npx playwright install
```

### 3. 运行测试
```bash
# 无头模式（默认）
npm test

# 有头模式（可以看到浏览器）
npm run test:headed

# 可视化 UI 模式（推荐调试）
npm run test:ui

# 调试模式（单步执行）
npm run test:debug

# 查看 HTML 测试报告
npm run test:report
```

## 📁 项目结构

```
playwright_learn/
├── README.md              # 项目说明文档
├── package.json           # 项目配置 + 脚本命令
├── playwright.config.js   # Playwright 配置
├── .gitignore            # Git 忽略文件
└── tests/
    └── example.spec.js   # 示例测试用例
```

## ✅ 测试用例

| 测试用例 | 描述 | 结果 |
|---------|------|------|
| 页面标题包含 Playwright | 验证页面标题正确 | ✅ passed |
| 首页包含 "Get started" 链接 | 验证关键元素可见 | ✅ passed |
| 点击 Get started 跳转到文档页 | 验证链接功能 | ✅ passed |
| 点击搜索图标可打开搜索框 | 验证搜索功能 | ✅ passed |
| 文档页面结构完整性检查 | 验证页面结构 | ✅ passed |

## 🛠️ 技术栈

- **Playwright**: 现代浏览器自动化测试框架
- **Node.js**: JavaScript 运行时
- **Chromium**: 浏览器引擎（自动下载，无需提交到仓库）
- **GitHub Actions**: CI/CD 集成（待配置）

## 📚 学习资源

1. [Playwright 官方文档](https://playwright.dev/docs/intro)
2. [Playwright 测试指南](https://playwright.dev/docs/test)
3. [Playwright API 参考](https://playwright.dev/docs/api/class-playwright)

## 🎯 下一步计划

- 🔍 **playwright-cli**: 交互式录制操作步骤
- 📁 **Page Object Model**: 页面元素封装
- 🌐 **API 测试**: HTTP 接口测试
- 📊 **CI 集成**: GitHub Actions 流水线
- 📱 **移动端测试**: 响应式设计测试

## 📄 License

MIT
