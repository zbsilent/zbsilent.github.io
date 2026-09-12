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

当前版本是一个带有滚动叙事、卡片布局和轻量动效的个人主页，参考了 `oiloil.org` 的编辑式排版、分段编号、作品卡片和滚动入场节奏，但使用了独立文案、结构和素材。

## 素材与动效

- `assets/character.png`：人物主视觉。
- `assets/character-sheet.png`：人物设定卡片。
- `assets/cat.png`：动物主题卡片。
- `script.js`：使用 GSAP 与 ScrollTrigger 实现首屏入场、滚动视差、分段 reveal 和旋转装饰线；支持 `prefers-reduced-motion`。
