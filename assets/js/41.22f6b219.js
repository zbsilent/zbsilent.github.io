(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{428:function(s,a,t){"use strict";t.r(a);var n=t(54),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mac常用命令"}},[s._v("MAC常用命令")]),s._v(" "),t("h3",{attrs:{id:"mac-查看端口命令"}},[s._v("MAC 查看端口命令")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo lsof -nP | grep LISTEN | grep 8080\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("刷新DNS")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("sudo killall "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("HUP mDNSResponder\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("管理员权限")])]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo chown -R $(whoami) $(brew --prefix)/*\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("显示隐藏文件")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("command+shift+.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("shell 看到隐藏文件")])]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ls -ah\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("硬盘热插拔无法加载问题")])]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ps aux | grep fsck\nsudo pkill -f fsck\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("启动 MAC 的 TOMCAT")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改catalina.sh文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Library/Java/JavaVirtualMachines/jdk1.8.0_351.jdk/Contents/Home\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JRE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Library/Java/JavaVirtualMachines/jdk1.8.0_261.jdk/Contents/Home\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## mac mini 路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Users/zbsilent/Library/Java/JavaVirtualMachines/corretto-1.8.0_312/Contents/Home\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Users/zbsilent/Library/Java/JavaVirtualMachines/corretto-1.8.0_342/Contents/Home\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入下面目录")]),s._v("\n/Users/zbsilent/apache-tomcat-9.0.44/bin\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 授权")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" *.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" ./startup.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改密码")]),s._v("\nconf/tomcat-users.xml\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("username")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("password")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"281992"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("roles")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"manager-gui"')]),s._v(" /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h3",{attrs:{id:"管理-node"}},[s._v("管理 node")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.14")]),s._v(".0\n\n https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V14.md\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("sudo lsof -nP | grep LISTEN | grep 8080")]),s._v(" "),t("h3",{attrs:{id:"mac-jdk-默认安装目录"}},[t("em",[s._v("mac jdk")]),s._v(" 默认安装目录")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("系统默认")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("/System/Library/Java/JavaVirtualMachines/")])]),s._v(" "),t("li",[t("p",[s._v("/Library/Java/JavaVirtualMachines/jdk1.8.0_311.jdk")])])])]),s._v(" "),t("li",[t("p",[s._v("用户")]),s._v(" "),t("ul",[t("li",[s._v("/Users/zbsilent/Library/Java/JavaVirtualMachines/corretto-1.8.0_312")])])]),s._v(" "),t("li",[t("p",[s._v("nodejs 安装目录 /usr/local/bin 目录下 是根目录")])])]),s._v(" "),t("p",[s._v("export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_311.jdk/Contents/Home")]),s._v(" "),t("h3",{attrs:{id:"管理mac安装"}},[s._v("管理mac安装")]),s._v(" "),t("blockquote",[t("p",[s._v("sudo spctl --master-disable 打开所有来源")])]),s._v(" "),t("h3",{attrs:{id:"nacos"}},[s._v("Nacos")]),s._v(" "),t("p",[s._v("Install")]),s._v(" "),t("p",[s._v("1.启动命令先切换 JDK")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" OpenSource/nacos/bin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Users/zbsilent/Library/Java/JavaVirtualMachines/corretto-1.8.0_312/Contents/Home\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" startup.sh -m standalone\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("2."),t("a",{attrs:{href:"http://127.0.0.1:8848/nacos/login.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("访问管理"),t("OutboundLink")],1),s._v("\n用户 nacos/nacos")]),s._v(" "),t("p",[s._v("3.关闭")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" shutdown.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"npm-安装路径"}},[s._v("NPM 安装路径")]),s._v(" "),t("p",[s._v("npm list --depth=0 --global")]),s._v(" "),t("h2",{attrs:{id:"查看-brew-路径"}},[s._v("查看 brew 路径")]),s._v(" "),t("p",[s._v("brew list")]),s._v(" "),t("h2",{attrs:{id:"安装o-my-zsh"}},[s._v("安装o-my-zsh")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/zsh-users/zsh-syntax-highlighting.git "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZSH_CUSTOM"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v("~"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(".oh-my-zsh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("custom}")]),s._v("/plugins/zsh-syntax-highlighting\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/zsh-users/zsh-autosuggestions "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZSH_CUSTOM"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v("~"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(".oh-my-zsh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("custom}")]),s._v("/plugins/zsh-autosuggestions\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" ~/.zshrc\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("git zsh-syntax-highlighting zsh-autosuggestions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);