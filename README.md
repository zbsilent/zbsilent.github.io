# my-site

这是一个基于 GitHub Pages 的静态网站。

## 分支约定

- `main`：保留为仓库默认分支，不在本次站点开发中提交或修改。
- `codex-dev`：日常开发分支，用于编写和验证页面。
- `codex-site`：GitHub Pages 发布分支，保存已准备上线的内容。

## 本地预览

在仓库目录运行：

```bash
python3 -m http.server 8000
```

然后打开 <http://localhost:8000>。

## 发布流程

1. 在 `codex-dev` 完成修改并本地验证。
2. 将确认可以发布的提交同步到 `codex-site`。
3. GitHub Pages 从 `codex-site` 分支发布网站。

## 当前页面

当前版本是一个最小可访问首页，后续可以继续增加页面结构、样式和功能。
