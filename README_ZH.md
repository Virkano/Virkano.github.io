<p align="center">
  <a href="https://anuraghazra.github.io/">
    <img alt="Gatsby" src="./src/static/logo_noalpha.svg" width="100" />
    <h2 align="center">Kano Zhao</h2>
  </a>
</p> 
<p align="center">前端Web开发人员</p>




## :rocket: 快速开始

**在本地运行站点**

注意：此存储库的默认分支为develop，当您推入或拉出时，请确保指定正确的分支

### 第1步：克隆仓库

通过执行以下操作在本地克隆存储库 -

```bash
git clone https://github.com/virkano/virkano.github.io.git
```

### 步骤2：安装依赖项

cd 进入目录

```bash
cd virkano.github.io
```

安装所有依赖项
```bash
npm install
```

### 步骤3：启动开发服务器

启动开发服务器
```
npm run develop
```
运行开发服务器后，该站点应在https：// localhost：8000上运行


## :open_file_floder: 里面有什么？

快速浏览该项目的文件夹结构。

    .
    ├── content
    │   ├───blog
    │   ├───case-studies
    │   └───json
    ├── cypress
    ├── plugins
    └── src
        ├───components
        │   ├───About
        │   ├───Blog
        │   ├───common
        │   ├───Concepts
        │   ├───Contact
        │   ├───CreativeCoding
        │   ├───Home
        │   ├───Layout
        │   │   └───Navbar
        │   ├───Lightbox
        │   ├───Projects
        │   └───Skills
        ├───hooks
        ├───pages
        ├───static
        │   └───images
        ├───styles
        └───templates


## 使用的工具

1. Gatsby.js（当然）
2. 样式化的样式化组件
3. Cypress 用于端到端测试
4. Jest 单元测试
5. TravisCI for CI/CD

## :v: 贡献

注意：如果您想更改博客内容或解决任何错字，您可以从github的ui中进行操作，而无需在本地克隆仓库

克隆并设置本地项目后，您可以将更改推送到github fork并发出请求请求。

> 您还可以在本地运行测试，以查看是否一切正常

### 运行测试
```bash
npm run test
npm run test:e2e
```

### 推动变化

```bash
git add .
git commit -m "commit message"
git push YOUR_REPO_URL develop
```

------

Made with :heart: and Gatsbyjs
