(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{399:function(s,a,t){"use strict";t.r(a);var n=t(54),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker基础"}},[s._v("DOCKER基础")]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#docker基础"}},[s._v("DOCKER基础")]),t("ul",[t("li",[t("a",{attrs:{href:"#docker命令"}},[s._v("docker命令")])]),t("li",[t("a",{attrs:{href:"#mysql安装"}},[s._v("mysql安装")]),t("ul",[t("li",[t("a",{attrs:{href:"#dockerfile"}},[s._v("dockerfile")])])])])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"docker命令"}},[s._v("docker命令")]),s._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:""}},[s._v("复制文件")]),s._v("docker cp /Users/zbsilent/Developer/TestSSH d255a2c8c987:home")])]),s._v(" "),t("h2",{attrs:{id:"mysql安装"}},[s._v("mysql安装")]),s._v(" "),t("ol",[t("li",[s._v("下载")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker pull mysql:5.7   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取 mysql 5.7")]),s._v("\ndocker pull mysql       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取最新版mysql镜像")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("检查是否拉取成功")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker images\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("一般来说数据库容器不需要建立目录映射")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 --name mysql -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" -d mysql:5.7\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("–name：容器名，此处命名为"),t("code",[s._v("mysql")])]),s._v(" "),t("li",[s._v("-e：配置信息，此处配置mysql的root用户的登陆密码")]),s._v(" "),t("li",[s._v("-p：端口映射，此处映射 主机3306端口 到 容器的3306端口")]),s._v(" "),t("li",[s._v("-d：后台运行容器，保证在退出终端后容器继续运行")])]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[s._v("如果要建立目录映射")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("duso docker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 --name mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /usr/local/docker/mysql/conf:/etc/mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /usr/local/docker/mysql/logs:/var/log/mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /usr/local/docker/mysql/data:/var/lib/mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d mysql:5.7\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v('-v：主机和容器的目录映射关系，":"前为主机目录，之后为容器目录')])]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[s._v("检查容器是否正确运行")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker container "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("可以看到容器ID，容器的源镜像，启动命令，创建时间，状态，端口映射信息，容器名字")])]),s._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[t("p",[s._v("连接mysql")])]),s._v(" "),t("li",[t("p",[s._v("进入docker本地连接mysql客户端")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mysql "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\nmysql -uroot -p123456\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("使用远程连接软件时要注意一个问题")]),s._v(" "),t("p",[s._v("我们在创建容器的时候已经将容器的3306端口和主机的3306端口映射到一起，所以我们应该访问：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("host: 127.0.0.1\nport: 3306\nuser: root\npassword: 123456\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("如果你的容器运行正常，但是无法访问到MySQL，一般有以下几个可能的原因：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("防火墙阻拦")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开放端口：")]),s._v("\n$ systemctl status firewalld\n$ firewall-cmd  --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("/tcp -permanent\n$ firewall-cmd  --reload\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭防火墙：")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl stop firewalld\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("需要进入docker本地客户端设置远程访问账号")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mysql "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n$ mysql -uroot -p123456\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" grant all privileges on *.* to root@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified by "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("原理：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql使用mysql数据库中的user表来管理权限，修改user表就可以修改权限（只有root账号可以修改）")]),s._v("\n\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nDatabase changed\n\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" host,user,password from user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+--------------+------+-------------------------------------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" user      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" password                                                                 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------+------+-------------------------------------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" localhost              "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" root     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" *A731AEBFB621E354CD41BAF207D884A609E81F5E      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.1            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" root     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" *A731AEBFB621E354CD41BAF207D884A609E81F5E      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------+------+-------------------------------------------+\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" rows "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" grant all privileges  on *.* to root@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified by "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows affected "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows affected "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" host,user,password from user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+--------------+------+-------------------------------------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" user      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" password                                                                 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------+------+-------------------------------------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" localhost              "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" root      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" *A731AEBFB621E354CD41BAF207D884A609E81F5E     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.1            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" root      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" *A731AEBFB621E354CD41BAF207D884A609E81F5E     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" %                       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" root      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" *A731AEBFB621E354CD41BAF207D884A609E81F5E     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------+------+-------------------------------------------+\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" rows "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])])])])])]),s._v(" "),t("h3",{attrs:{id:"dockerfile"}},[s._v("dockerfile")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[s._v("\n#build ssh images\n#\n#VERSION        1.0\nFROM ubuntu:latest\nRUN apt-get update\nRUN adduser -disabled-password zbsilent \n# 开始安装\nRUN apt-get -y install nodejs && \\\napt-get -y install npm  \n# 切换淘宝镜像\nRUN npm install -g cnpm --registry=https://registry.npm.taobao.org \n# 安装VIM \nRUN apt-get -y install vim\n# 安装VUE\nRUN cnpm install vue && \\\ncnpm install -g @vue/cli  \n# 安装ssh\nRUN apt-get install -y openssh-server\nRUN echo 'root:root' | chpasswd\nRUN sed -i 's/PermitRootLogin without-password/PermitRootLogin yes/' /etc/ssh/sshd_config\n# SSH login fix. Otherwise user is kicked off after login\nRUN sed -ri 's/^PermitRootLogin\\s+.*/PermitRootLogin yes/' /etc/ssh/sshd_config\nRUN sed -ri 's/UsePAM yes/#UsePAM yes/g' /etc/ssh/sshd_config\n\nRUN mkdir /var/run/sshd\n#EXPOSE 映射端口\nEXPOSE 22\n# zsh\nRUN apt-get update && apt-get install -y \\\n    zsh \\\n    git-core && rm -rf /var/lib/apt/lists/*\nRUN git clone https://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh \\\n    && cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc \\\n    && chsh -s /bin/zsh\n# RUN mkdir /home/vue3\n# WORKDIR /home/vue3\n# RUN vue create vue3-pro\n#Start ssh Service\nCMD [\"/usr/sbin/sshd\", \"-D\"]\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);