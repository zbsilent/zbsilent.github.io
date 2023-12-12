(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{427:function(e,t,s){"use strict";s.r(t);var r=s(54),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"git"}},[e._v("Git")]),e._v(" "),s("p",[s("a",{attrs:{href:"Https://github.com/zbsilent"}},[s("img",{attrs:{src:"https://img.shields.io/badge/Git-zbsilent-brightgreen",alt:""}})])]),e._v(" "),s("h2",{attrs:{id:"gitignore文件无效解决方案"}},[e._v(".gitignore文件无效解决方案")]),e._v(" "),s("blockquote",[s("p",[e._v("使用git CLI命令，在IDEA中是Terminal输入git命令")])]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(' git rm -r --cached .（注意空格）\n git add .（注意空格）\n git commit -m "update .gitignore"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("blockquote",[s("p",[e._v("忽略放弃对.classpath对跟踪")])]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git update-index --assume-unchanged .classpath\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"commit-message-的格式"}},[s("a",{attrs:{href:"https://so.csdn.net/so/search?q=Commit&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[e._v("Commit"),s("OutboundLink")],1),e._v(" message 的格式")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/9861-git-commit-template",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里推荐使用IDEA git-commit-template插件"),s("OutboundLink")],1)]),e._v(" "),s("blockquote",[s("p",[e._v("每次提交，Commit message 都包括三个部分："),s("a",{attrs:{href:"https://so.csdn.net/so/search?q=Header&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[e._v("Header"),s("OutboundLink")],1),e._v("，Body 和 Footer。")])]),e._v(" "),s("p",[s("type",[e._v("("),s("scope",[e._v("): "),s("subject",[e._v("// 空一行"),s("body",[e._v("// 空一行"),s("footer",[e._v(" 12")])])])],1)],1)],1),e._v(" "),s("p",[e._v("其中，Header 是必需的，Body 和 Footer 可以省略。")]),e._v(" "),s("p",[e._v("不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。")]),e._v(" "),s("h3",{attrs:{id:"header"}},[e._v("Header")]),e._v(" "),s("p",[e._v("Header部分只有一行，包括三个字段：type（必需）、"),s("a",{attrs:{href:"https://so.csdn.net/so/search?q=scope&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[e._v("scope"),s("OutboundLink")],1),e._v("（可选）和subject（必需）。")]),e._v(" "),s("p",[s("strong",[e._v("（1）type")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("feat")]),e._v("：新功能（feature）")]),e._v(" "),s("li",[s("strong",[e._v("fix")]),e._v("：修补bug")]),e._v(" "),s("li",[s("strong",[e._v("docs")]),e._v("：文档（documentation）")]),e._v(" "),s("li",[s("strong",[e._v("style")]),e._v("： 格式（不影响代码运行的变动）")]),e._v(" "),s("li",[s("strong",[e._v("refactor")]),e._v("：重构（即不是新增功能，也不是修改bug的代码变动）")]),e._v(" "),s("li",[s("strong",[e._v("test")]),e._v("：增加测试")]),e._v(" "),s("li",[s("strong",[e._v("chore")]),e._v("：构建过程或辅助工具的变动")])]),e._v(" "),s("p",[e._v("如果type为feat和fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。")]),e._v(" "),s("p",[s("strong",[e._v("（2）scope")])]),e._v(" "),s("p",[e._v("scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。")]),e._v(" "),s("p",[s("strong",[e._v("（3）subject")])]),e._v(" "),s("p",[e._v("subject是 commit 目的的简短描述，不超过50个字符。")]),e._v(" "),s("ul",[s("li",[e._v("以动词开头，使用第一人称现在时，比如change，而不是changed或changes")]),e._v(" "),s("li",[e._v("第一个字母小写")]),e._v(" "),s("li",[e._v("结尾不加句号（.）")])]),e._v(" "),s("h3",{attrs:{id:"body"}},[e._v("Body")]),e._v(" "),s("p",[e._v("Body 部分是对本次 commit 的详细描述，可以分成多行。下面是一个范例。")]),e._v(" "),s("p",[e._v("More detailed explanatory text, if necessary. Wrap it to about 72 characters or so. Further paragraphs come after blank lines.- Bullet points are okay, too- Use a hanging indent")]),e._v(" "),s("p",[e._v("有两个注意点。")]),e._v(" "),s("p",[e._v("（1）使用第一人称现在时，比如使用change而不是changed或changes。")]),e._v(" "),s("p",[e._v("（2）应该说明代码变动的动机，以及与以前行为的对比。")]),e._v(" "),s("h3",{attrs:{id:"footer"}},[e._v("Footer")]),e._v(" "),s("p",[e._v("Footer 部分只用于两种情况。")]),e._v(" "),s("p",[e._v("（1）不兼容变动")]),e._v(" "),s("p",[e._v("如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。")]),e._v(" "),s("p",[e._v("BREAKING CHANGE: isolate scope bindings definition has changed.     To migrate the code follow the example below:     Before:     scope: {       myAttr: 'attribute',     }     After:     scope: {       myAttr: '@',     }     The removed "),s("code",[e._v("inject")]),e._v(" wasn't generaly useful for directives so there should be no code using it. 123456789101112131415161718")]),e._v(" "),s("p",[e._v("（2）关闭 Issue")]),e._v(" "),s("p",[e._v("如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。")]),e._v(" "),s("p",[e._v("Closes "),s("em",[e._v("#234")]),e._v(" 12")]),e._v(" "),s("p",[e._v("也可以一次关闭多个 issue 。")]),e._v(" "),s("p",[e._v("Closes #123, #245, #992 12")]),e._v(" "),s("h3",{attrs:{id:"revert"}},[e._v("Revert")]),e._v(" "),s("p",[e._v("还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header。")]),e._v(" "),s("p",[e._v("revert: feat(pencil): add 'graphiteWidth' option This reverts commit 667ecc1654a317a13331b17617d973392f415f02. 1234")]),e._v(" "),s("p",[e._v("Body部分的格式是固定的，必须写成This reverts commit "),s("hash",[e._v(".，其中的hash是被撤销 commit 的 SHA 标识符。")])],1),e._v(" "),s("p",[e._v("如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的Reverts小标题下面。")])])}),[],!1,null,null,null);t.default=o.exports}}]);