(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{432:function(t,e,s){"use strict";s.r(e);var o=s(54),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git"}},[t._v("Git")]),t._v(" "),s("p",[s("a",{attrs:{href:"Https://github.com/zbsilent"}},[s("img",{attrs:{src:"https://img.shields.io/badge/Git-zbsilent-brightgreen",alt:""}})])]),t._v(" "),s("h2",{attrs:{id:"gitignore文件无效解决方案"}},[t._v(".gitignore文件无效解决方案")]),t._v(" "),s("blockquote",[s("p",[t._v("使用git CLI命令，在IDEA中是Terminal输入git命令")])]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(' git rm -r --cached .（注意空格）\n git add .（注意空格）\n git commit -m "update .gitignore"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("blockquote",[s("p",[t._v("忽略放弃对.classpath对跟踪")])]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git update-index --assume-unchanged .classpath\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("h1",{attrs:{id:"格式就是-git-config-global-http-proxy-ip-端口"}},[t._v("格式就是: git config --global http.proxy IP:端口")]),t._v(" "),s("h1",{attrs:{id:"例如我的"}},[t._v("例如我的")]),t._v(" "),s("p",[t._v("git config --global http.proxy 127.0.0.1:7890")]),t._v(" "),s("h1",{attrs:{id:"注意-如果是需要身份验证的-就用这种格式"}},[t._v("注意：如果是需要身份验证的，就用这种格式：")]),t._v(" "),s("p",[t._v("git config --global http.proxy 用户名:密码@IP:端口")]),t._v(" "),s("h1",{attrs:{id:"如果需要设置https-那么就需要把-http-proxy-改成-https-proxy"}},[t._v("如果需要设置https，那么就需要把 http.proxy 改成 https.proxy")]),t._v(" "),s("p",[t._v("git config --global https.proxy 127.0.0.1:7890")]),t._v(" "),s("h1",{attrs:{id:"之后再用命令查看一下修改后的配置"}},[t._v("之后再用命令查看一下修改后的配置")]),t._v(" "),s("p",[t._v("git config --global --list")]),t._v(" "),s("h1",{attrs:{id:"设置好之后就可以愉快地-git-clone-了"}},[t._v("设置好之后就可以愉快地 git clone 了")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("版权声明：本文为CSDN博主「落魄程序员在线炒粉8」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。\n原文链接：https://blog.csdn.net/qq_17229141/article/details/134484804")])]),t._v(" "),s("h2",{attrs:{id:"commit-message-的格式"}},[s("a",{attrs:{href:"https://so.csdn.net/so/search?q=Commit&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commit"),s("OutboundLink")],1),t._v(" message 的格式")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/9861-git-commit-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里推荐使用IDEA git-commit-template插件"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("每次提交，Commit message 都包括三个部分："),s("a",{attrs:{href:"https://so.csdn.net/so/search?q=Header&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("Header"),s("OutboundLink")],1),t._v("，Body 和 Footer。")])]),t._v(" "),s("p",[s("type",[t._v("("),s("scope",[t._v("): "),s("subject",[t._v("// 空一行"),s("body",[t._v("// 空一行"),s("footer",[t._v(" 12")])])])],1)],1)],1),t._v(" "),s("p",[t._v("其中，Header 是必需的，Body 和 Footer 可以省略。")]),t._v(" "),s("p",[t._v("不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。")]),t._v(" "),s("h3",{attrs:{id:"header"}},[t._v("Header")]),t._v(" "),s("p",[t._v("Header部分只有一行，包括三个字段：type（必需）、"),s("a",{attrs:{href:"https://so.csdn.net/so/search?q=scope&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("scope"),s("OutboundLink")],1),t._v("（可选）和subject（必需）。")]),t._v(" "),s("p",[s("strong",[t._v("（1）type")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("feat")]),t._v("：新功能（feature）")]),t._v(" "),s("li",[s("strong",[t._v("fix")]),t._v("：修补bug")]),t._v(" "),s("li",[s("strong",[t._v("docs")]),t._v("：文档（documentation）")]),t._v(" "),s("li",[s("strong",[t._v("style")]),t._v("： 格式（不影响代码运行的变动）")]),t._v(" "),s("li",[s("strong",[t._v("refactor")]),t._v("：重构（即不是新增功能，也不是修改bug的代码变动）")]),t._v(" "),s("li",[s("strong",[t._v("test")]),t._v("：增加测试")]),t._v(" "),s("li",[s("strong",[t._v("chore")]),t._v("：构建过程或辅助工具的变动")])]),t._v(" "),s("p",[t._v("如果type为feat和fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。")]),t._v(" "),s("p",[s("strong",[t._v("（2）scope")])]),t._v(" "),s("p",[t._v("scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。")]),t._v(" "),s("p",[s("strong",[t._v("（3）subject")])]),t._v(" "),s("p",[t._v("subject是 commit 目的的简短描述，不超过50个字符。")]),t._v(" "),s("ul",[s("li",[t._v("以动词开头，使用第一人称现在时，比如change，而不是changed或changes")]),t._v(" "),s("li",[t._v("第一个字母小写")]),t._v(" "),s("li",[t._v("结尾不加句号（.）")])]),t._v(" "),s("h3",{attrs:{id:"body"}},[t._v("Body")]),t._v(" "),s("p",[t._v("Body 部分是对本次 commit 的详细描述，可以分成多行。下面是一个范例。")]),t._v(" "),s("p",[t._v("More detailed explanatory text, if necessary. Wrap it to about 72 characters or so. Further paragraphs come after blank lines.- Bullet points are okay, too- Use a hanging indent")]),t._v(" "),s("p",[t._v("有两个注意点。")]),t._v(" "),s("p",[t._v("（1）使用第一人称现在时，比如使用change而不是changed或changes。")]),t._v(" "),s("p",[t._v("（2）应该说明代码变动的动机，以及与以前行为的对比。")]),t._v(" "),s("h3",{attrs:{id:"footer"}},[t._v("Footer")]),t._v(" "),s("p",[t._v("Footer 部分只用于两种情况。")]),t._v(" "),s("p",[t._v("（1）不兼容变动")]),t._v(" "),s("p",[t._v("如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。")]),t._v(" "),s("p",[t._v("BREAKING CHANGE: isolate scope bindings definition has changed.     To migrate the code follow the example below:     Before:     scope: {       myAttr: 'attribute',     }     After:     scope: {       myAttr: '@',     }     The removed "),s("code",[t._v("inject")]),t._v(" wasn't generaly useful for directives so there should be no code using it. 123456789101112131415161718")]),t._v(" "),s("p",[t._v("（2）关闭 Issue")]),t._v(" "),s("p",[t._v("如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。")]),t._v(" "),s("p",[t._v("Closes "),s("em",[t._v("#234")]),t._v(" 12")]),t._v(" "),s("p",[t._v("也可以一次关闭多个 issue 。")]),t._v(" "),s("p",[t._v("Closes #123, #245, #992 12")]),t._v(" "),s("h3",{attrs:{id:"revert"}},[t._v("Revert")]),t._v(" "),s("p",[t._v("还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header。")]),t._v(" "),s("p",[t._v("revert: feat(pencil): add 'graphiteWidth' option This reverts commit 667ecc1654a317a13331b17617d973392f415f02. 1234")]),t._v(" "),s("p",[t._v("Body部分的格式是固定的，必须写成This reverts commit "),s("hash",[t._v(".，其中的hash是被撤销 commit 的 SHA 标识符。")])],1),t._v(" "),s("p",[t._v("如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的Reverts小标题下面。")])])}),[],!1,null,null,null);e.default=r.exports}}]);