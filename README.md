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

当前版本是一个带有滚动叙事、卡片布局和轻量动效的个人主页，参考了 `oiloil.org` 的编辑式排版、分段编号、作品卡片和滚动入场节奏，但使用了独立文案、结构和素材。首屏动物使用猫素材，不使用参考截图中的狗。

## 素材与动效

- `assets/character.png`：人物主视觉。
- `assets/character-base-cutout.png`：通过图像编辑处理的人物透明、无虹膜底图。
- `assets/character-sheet.png`：人物设定卡片。
- `assets/cat.png`：原始猫咪蓝本，用于随笔区内容卡片。
- `assets/cat-full-ai.png`：通过图像编辑处理的完整透明猫咪层，放在人物脚边，不做矩形裁切。
- `assets/iris-left.png` / `assets/iris-right.png`：从人物蓝本提取的原始虹膜层。
- `script-v2.js`：使用 GSAP 与 ScrollTrigger 实现首屏入场、滚动视差、分段 reveal；使用原生 Pointer Events 驱动独立虹膜层和猫头跟随，因此即使 GSAP CDN 暂时不可用，鼠标交互仍然可用；支持 `prefers-reduced-motion`。

## 设计修订说明

- 页面各区统一使用米白纸张底色，只用深色和橙色作为内容卡片与强调色，不再让整块任务背景与全局主题割裂。
- 人物底图先移除固定虹膜，再叠加从原图提取的左右虹膜；眼球相对于人物图片自身定位，避免重复眼睛或漂浮黑点。
- 人物和猫咪共享 `hero-scene` 场景；猫咪使用完整图层，围绕头颈区域做低幅度 3D 转动和位移；不使用矩形猫头拼接。
- 旧版本遗留的狗素材已移出项目，不参与构建或发布。
