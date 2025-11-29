## 前置准备

1. **安装 Node.js**（版本 ≥ 14）
2. **GitHub 账号**
3. **Git 工具**

## 步骤一：创建 GitHub 仓库

1. 登录 GitHub，创建新仓库
2. 仓库名必须是：`你的用户名.github.io`（例如：`zhangsan.github.io`）
3. 设置为 Public 公开仓库
4. 不需要初始化 README

## 步骤二：本地初始化 VuePress 项目

```bash
# 创建项目目录 
mkdir vuepressBlog 
cd vuepressBlog 
# 初始化 npm 项目，-y是yes，跳过所有询问，使用默认配置
npm init -y
```

出现了以下界面，实际上就是在根目录下生成了名字为`package.json`的文件，内容就是shell打出的内容

![](assets/使用%20VuePress%20搭建%20GitHub%20Pages%20博客完整指南/file-20251129195540701.png)

```bash
# 安装 VuePress 
npm install -D vuepress@next
```

### `-D` 或 `--save-dev`

- **作用**：将包作为**开发依赖**安装
- **效果**：包信息会添加到 `package.json` 的 `devDependencies` 中

### `vuepress`

- **作用**：要安装的包名称（VuePress 静态网站生成器）
### `@next`

- **作用**：安装 **下一个主要版本** 或 **测试版**
- **效果**：安装 VuePress 2.x 版本（而不是稳定的 1.x 版本）

![](assets/使用%20VuePress%20搭建%20GitHub%20Pages%20博客完整指南/file-20251129195540699.png)

### `创建目录结构`
```bash
mkdir docs 
mkdir docs/.vuepress
```

目录结构如下：

![](assets/使用%20VuePress%20搭建%20GitHub%20Pages%20博客完整指南/file-20251129195540691.png)

## 步骤三：配置 VuePress

	创建 `docs/.vuepress/config.js` 文件，替换`你的用户名`为实际用户名


```javascript
module.exports = {
  title: '我的博客',
  description: '使用 VuePress 搭建的个人博客',
  base: '/', // 如果是 username.github.io 则为 '/'
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/IT/' },
      { text: 'GitHub', link: 'https://github.com/你的用户名' }
    ],
    sidebar: 'auto'
  }
}
```

## 步骤四：创建内容

创建 `docs/README.md`（首页）：

```markdown
---
home: true
heroText: 欢迎来到我的博客
tagline: 记录学习与生活
actionText: 开始阅读 →
actionLink: /posts/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，专注于写作
- title: VuePress 驱动
  details: 享受 Vue + webpack 的开发体验
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML
---
```

创建 `docs/IT/README.md`（某一分类的首页）：

```markdown
# 文章列表

## 我的第一篇文章
[阅读更多](./git.md)
```

创建 `docs/IT/git.md`：

```markdown
# 我的第一篇文章

这是我使用 VuePress 写的第一篇博客文章。

## 标题示例

这里是正文内容...
```

结构目录如下：

![](assets/使用%20VuePress%20搭建%20GitHub%20Pages%20博客完整指南/file-20251129195540697.png)


## 步骤五：配置 package.json

在 `package.json` 中添加脚本：

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

本地预览：

```bash
npm run docs:dev
```

访问 `http://localhost:8080` 查看效果。

## 步骤六：配置 GitHub Actions 自动部署

创建 `.github/workflows/deploy.yml`：

![](assets/使用%20VuePress%20搭建%20GitHub%20Pages%20博客完整指南/file-20251129195540696.png)

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # 根据你的默认分支调整

permissions:
	contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run docs:build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vuepress/dist
```

这个 `deploy.yml` 是一个 **GitHub Actions 工作流配置文件**，用于自动部署 VuePress 网站到 GitHub Pages。

### 整体作用
**当代码推送到 main 分支时，自动构建并部署网站**

---

### 详细解释

#### 1. 基本配置
```yaml
name: Deploy to GitHub Pages
```
- **工作流名称**：在 GitHub Actions 界面中显示的名称

#### 2. 触发条件
```yaml
on:
  push:
    branches:
      - main  # 根据你的默认分支调整
```
- **触发时机**：当代码推送到 `main` 分支时自动运行

#### 3. 工作任务
```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
```
- **运行环境**：在最新的 Ubuntu 系统上执行

#### 4. 执行步骤

##### 步骤 1：获取代码
```yaml
- uses: actions/checkout@v3
```
- **作用**：从仓库拉取最新的代码到工作环境

##### 步骤 2：设置 Node.js 环境
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v3
  with:
    node-version: '20'
```
- **作用**：安装 Node.js 20 版本

##### 步骤 3：安装依赖
```yaml
- name: Install dependencies
  run: npm ci
```
- **作用**：使用 `npm ci` 安装依赖（比 `npm install` 更快更稳定）

##### 步骤 4：构建项目
```yaml
- name: Build
  run: npm run docs:build
```
- **作用**：执行构建命令，生成静态文件到 `docs/.vuepress/dist`

##### 步骤 5：部署到 GitHub Pages
```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: docs/.vuepress/dist
```
- **作用**：将构建好的静态文件部署到 GitHub Pages
- **关键参数**：
  - `github_token`：GitHub 自动提供的安全令牌
  - `publish_dir`：要发布的目录路径

---

### 完整工作流程

1. **推送代码** → 到 main 分支
2. **触发工作流** → GitHub Actions 自动启动
3. **准备环境** → Ubuntu + Node.js 20
4. **安装依赖** → 使用 npm ci
5. **构建网站** → 生成静态文件
6. **自动部署** → 发布到 GitHub Pages
7. **网站更新** → 用户可访问新版本

### 结果
部署成功后，你的网站地址是：
```
https://[你的用户名].github.io
```

这个配置实现了 **CI/CD（持续集成/持续部署）**，让你只需推送代码，网站就会自动更新！

## 步骤七：其他配置

1. **创建docs/.vuepress/dist/**

```bash
mkdir docs/.vuepress/dist/
```

2. **添加.gitignore文件**

```bash
touch .gitignore
echo "node_modules/ docs/.vuepress/dist/ .DS_Store" > .gitignore
```
	实际上docs/.vuepress/dist/是生成的网页文件存放地址，不上传main分支，会自动上传到远程仓库gh_page分支上
3. **目录结构如下：**

```plaintext
vuepressBlog/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   ├── .vuepress/
│   │   ├── dist/
│   │   └── config.js
│   ├── IT/
│   │   ├── README.md
│   │   └── git.md
│   └── README.md
├── node_modules/
├── .gitignore
├── package.json
└── package-lock.json
```

## 步骤八：SSH方式上传到GitHub

```bash
git init
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:kungfuxupeng/kungfuxupeng.github.io.git
git push -u origin main
```

## 步骤九：配置 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. 点击 `Settings` → `Pages`
3. **在 `Source` 部分选择 `gh-pages` 分支(不要选main**)
4. 点击 `Save`
![](assets/使用%20VuePress%20搭建%20GitHub%20Pages%20博客完整指南/file-20251129195540693.png)

等待几分钟后，你的博客就会发布到 `https://kungfuxupeng.github.io`

## 日常使用流程

1. **创建新文章**：在 `docs/posts/` 目录下创建新的 `.md` 文件
2. **本地预览**：运行 `npm run docs:dev`
3. **提交更新**：

```bash
   git add .
   git commit -m "添加新文章"
   git push
```

4. **自动部署**：GitHub Actions 会自动构建并部署

查看 [访问网址](https://kungfuxupeng.github.io/)