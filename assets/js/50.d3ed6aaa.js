(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{436:function(t,a,e){"use strict";e.r(a);var s=e(54),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("ol",[e("li",[e("p",[t._v("更新并安装依赖")]),t._v(" "),e("blockquote",[e("p",[t._v("sudo yum -y -update")]),t._v(" "),e("p",[t._v("sudo  yum -y install policycoreutils openssh-server openssh-clients postfix policycoreutils-python ca-certificates curl")])])]),t._v(" "),e("li",[e("p",[t._v("安装路径")]),t._v(" "),e("blockquote",[e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/zbsilent/imag/main/img/2022/image-20231212195128572.png",alt:"image-20231212195128572"}})])])]),t._v(" "),e("li",[e("p",[t._v("备份")]),t._v(" "),e("blockquote",[e("p",[t._v("sudo gitlab-backup create")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/zbsilent/imag/main/img/2022/image-20231212215756594.png",alt:"image-20231212215756594"}})]),t._v(" "),e("p",[t._v("使用自我管理的"),e("a",{attrs:{href:"https://so.csdn.net/so/search?q=GitLab&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitLab"),e("OutboundLink")],1),t._v("实例的组织通常依赖它来保存源代码、项目管理和操作工具。有一个有效的备份是至关重要的，这样你的数据就能在硬件故障、服务器更新失败或恶意泄露的情况下得到保护。")]),t._v(" "),e("p",[t._v("GitLab有一个内置的备份组件，可以为您的安装数据创建一个完整的存档。存档可以在运行相同GitLab版本的新服务器上恢复。")]),t._v(" "),e("p",[t._v("下面介绍如何将"),e("a",{attrs:{href:"https://docs.gitlab.com/ee/raketasks/backup_restore.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("备份设置"),e("OutboundLink")],1),t._v("为本地文件系统或Amazon S3存储桶。这些步骤用于GitLab综合版本。如果您的实例是"),e("a",{attrs:{href:"https://docs.gitlab.com/ee/raketasks/backup_restore.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("从源代码构建"),e("OutboundLink")],1),t._v("的，则需要修改GitLab CLI命令，在它们前面加上"),e("code",[t._v("bundle exec rake")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"按需备份"}},[t._v("按需备份")]),t._v(" "),e("p",[t._v("创建备份的最简单方法是使用按需创建命令。在shell中运行以下命令:")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" gitlab-backup create\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("这适用于GitLab 12.2和更新版本。旧版本应该使用替代版本:")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" gitlab-rake gitlab:backup:create\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("备份将作为tar存档保存在GitLab配置文件定义的目录中。Omnibus安装默认使用"),e("code",[t._v("/var/opt/gitlab/backups")]),t._v("。每个备份存档都以其创建时间戳和GitLab版本命名。")]),t._v(" "),e("h3",{attrs:{id:"备份包括什么"}},[t._v("备份包括什么?")]),t._v(" "),e("p",[t._v("GitLab的内置备份实用程序导出用户在GitLab实例上创建的数据。这包括GitLab数据库和磁盘上的Git存储库中的所有内容。")]),t._v(" "),e("p",[t._v("恢复备份将恢复您的项目、组、用户、问题、上传的文件附件和CI/CD作业日志。备份还包括上传到"),e("a",{attrs:{href:"https://www.howtogeek.com/devops/how-to-garbage-collect-the-gitlab-container-registry-to-free-up-storage/",target:"_blank",rel:"noopener noreferrer"}},[t._v("集成容器注册表"),e("OutboundLink")],1),t._v("的GitLab Pages网站和Docker映像。")]),t._v(" "),e("p",[t._v("不支持添加到GitLab的"),e("a",{attrs:{href:"https://www.howtogeek.com/devops/how-to-use-gitlabs-new-helm-chart-repository/",target:"_blank",rel:"noopener noreferrer"}},[t._v("包注册表"),e("OutboundLink")],1),t._v("中的包。如果您需要在不需要手动重新构建的情况下恢复包，则应该"),e("a",{attrs:{href:"https://docs.gitlab.com/ee/administration/packages/index.html#using-object-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置安装"),e("OutboundLink")],1),t._v("以将包保存到外部"),e("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("对象存储"),e("OutboundLink")],1),t._v("提供程序。")]),t._v(" "),e("h3",{attrs:{id:"创建备份计划"}},[t._v("创建备份计划")]),t._v(" "),e("p",[t._v("没有集成的机制来定义自动备份计划。您应该设置自己的cron任务来运行上面显示的备份命令。")]),t._v(" "),e("p",[t._v("执行"),e("code",[t._v("sudo crontab -e")]),t._v("命令打开root用户的crontab，在文件中添加如下内容:")]),t._v(" "),e("div",{staticClass:"language-cpp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("opt"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("gitlab"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("gitlab"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("backup create CRON"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("保存并关闭文件以应用crontab更改。这个例子将在每天晚上9点创建一个新的备份。设置CRON环境变量指示GitLab隐藏备份进度显示，这样您就不会收到带有作业输出的冗余CRON电子邮件。")]),t._v(" "),e("p",[t._v("按原样使用此任务将无限期地保留每个备份，直到手动清理它们。如果您正在运行一个包含大型项目的活动GitLab实例，那么这会快速消耗大量存储空间。")]),t._v(" "),e("p",[t._v("一个可选的配置键允许您删除旧的存档，作为备份创建脚本的一部分。打开GitLab配置文件"),e("code",[t._v("/etc/gitlab/gitlab.rb")]),t._v("搜索"),e("code",[t._v("backup_keep_time")]),t._v("，取消该行注释，并设置希望保留每个备份的秒数。")]),t._v(" "),e("div",{staticClass:"language-cpp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("gitlab_rails"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'backup_keep_time'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("432000")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("这里的备份将保留5天。每次执行备份创建命令时，GitLab都会删除备份目录中所有符合条件的存档。")]),t._v(" "),e("p",[t._v("当配置文件更改时，您需要重新配置GitLab。运行"),e("code",[t._v("sudo gitlab-ctl reconfigure")]),t._v("应用新设置。")]),t._v(" "),e("h3",{attrs:{id:"排除数据类型"}},[t._v("排除数据类型")]),t._v(" "),e("p",[t._v("有时，您可能希望使用受支持数据类型的子集运行备份。定义SKIP环境变量可以让您排除特定的操作，从而精简最终的存档。")]),t._v(" "),e("p",[t._v("环境变量接受一个以逗号分隔的数据类型列表。您可以在GitLab wiki中找到当前支持的选项。")]),t._v(" "),e("p",[t._v("以下是如何备份除容器注册表映像之外的所有内容:")]),t._v(" "),e("div",{staticClass:"language-cpp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("sudo gitlab"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("backup create SKIP"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("registry\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("排除注册表内容通常是显著降低备份大小和加快其创建速度的简单方法。如果一个团队有几个活跃的项目，每天构建多个Docker映像，那么很快就会积累千兆字节的注册表数据。将它们从备份中排除并不一定是太大的风险，因为您总是可以使用存储库中的Dockerfile重新构建映像。")]),t._v(" "),e("h3",{attrs:{id:"备份到s3"}},[t._v("备份到S3")]),t._v(" "),e("p",[t._v("GitLab可以自动将备份保存到s3兼容的对象存储提供商。取消"),e("code",[t._v("backup_upload_connection")]),t._v("行注释，并添加连接详细信息:")]),t._v(" "),e("div",{staticClass:"language-cpp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("gitlab_rails"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'backup_upload_connection'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"provider"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AWS"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"region"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eu-west-1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aws_access_key_id"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"access_key"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aws_secret_access_key"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"secret_key"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    # "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"endpoint"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://..."')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234567")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[t._v("添加您自己的访问密钥、秘密密钥和AWS区域ID以完成连接。如果连接到AWS以外的提供商，也应该设置端点字段。提供对象存储服务器的URL，以便GitLab可以上传。")]),t._v(" "),e("p",[t._v("您还必须设置"),e("code",[t._v("backup_upload_remote_directory")]),t._v("键。在配置文件中找到这一行，取消注释，并设置一个S3桶名称，将备份上传到:")]),t._v(" "),e("div",{staticClass:"language-cpp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("gitlab_rails"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'backup_upload_remote_directory'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitlab-backups'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("运行"),e("code",[t._v("sudo gitlab-ctl reconfigure")]),t._v("来应用您的更改。")]),t._v(" "),e("p",[t._v("备份创建命令现在将其存档上传到配置的S3桶。通过将备份存储在异地，这为您提供了更大的冗余，保护您免受物理硬件故障的影响。")]),t._v(" "),e("p",[t._v("注意，使用S3存储时不支持"),e("code",[t._v("backup_keep_time")]),t._v("设置。仅适用于本地存储的备份归档。您可以通过使用S3内置的"),e("a",{attrs:{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html?tag=lsmedia-10703-20&asc_refurl=https://www.howtogeek.com/devops/how-to-back-up-your-gitlab-server/",target:"_blank",rel:"noopener noreferrer"}},[t._v("过期策略"),e("OutboundLink")],1),t._v("来实现类似的功能，该策略在设定的时间段过后自动删除上传。")]),t._v(" "),e("h3",{attrs:{id:"复制备份策略"}},[t._v("复制备份策略")]),t._v(" "),e("p",[t._v("GitLab的默认备份策略是将数据连续流到tar存档。这通常工作得很好，但在非常活跃的GitLab实例上可能会出现问题。在数据到达归档之前，源目录中的数据可能会发生变化，导致tar在读取文件时跳过它并更改文件。")]),t._v(" "),e("p",[t._v("为了解决这个问题，GitLab引入了一个可选的拷贝策略。这会将所有符合条件的备份数据复制到一个临时目录，然后将复制的内容流到最终的tar归档文件中。这确保了tar不会从活动的GitLab实例中读取数据，但也有暂时增加GitLab存储消耗的副作用。备份性能也会受到明显的影响，尤其是在速度较慢的存储设备上。")]),t._v(" "),e("p",[t._v("执行backup命令时，通过设置环境变量strategy激活拷贝策略。您应该确保有足够的可用磁盘空间。GitLab将在数据类型阶段运行备份，因此您只需将最大数据类型的大小增加一倍即可。例如，如果您有5GB的Git存储库和10GB的容器注册表，那么您需要额外的10GB可用空间，而不是15GB。")]),t._v(" "),e("div",{staticClass:"language-cpp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("sudo gitlab"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("backup create STRATEGY"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("copy\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h3",{attrs:{id:"别忘了-备份你的配置文件"}},[t._v("别忘了:备份你的配置文件!")]),t._v(" "),e("p",[t._v("GitLab的备份脚本只管理用户创建的数据。还有另外两个对GitLab服务器的操作至关重要的文件。这些也必须备份，以确保实例的成功恢复。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("/etc/gitlab/gitlab.rb")]),t._v(" – 这是你的GitLab配置文件。除了最基本的安装之外，所有的安装通常都会随着时间的推移进行许多修改。备份此文件可以让您将其放入新的GitLab安装中，而不必从头开始。")]),t._v(" "),e("li",[e("code",[t._v("/etc/gitlab/gitlab-secrets.json")]),t._v(" – 该文件必须备份。它包括数据库加密密钥、用于双因素身份验证的秘密以及其他不可恢复的敏感数据。该文件放置不当可能导致任何恢复工作都无法进行，即使您有可用的可用备份存档。")])]),t._v(" "),e("p",[t._v("您可以使用另一个cron任务来备份这两个文件。它们应该从服务器上复制下来，这样在遇到硬件故障时仍然可以访问它们。")]),t._v(" "),e("h3",{attrs:{id:"结论"}},[t._v("结论")]),t._v(" "),e("p",[t._v("备份对于任何GitLab管理员都是至关重要的。软件通常对组织中的每个团队都至关重要，因此任何意外停机都可能导致严重的操作挑战。")]),t._v(" "),e("p",[t._v("GitLab提供了常规备份所需的一切。最好的方法是创建一个定期运行内置脚本的cron任务。将备份档案保存到外部对象存储，以防止硬件丢失、故障或损坏。记得手动备份你的GitLab配置和秘密文件，否则恢复过程将会非常复杂。")])])]),t._v(" "),e("li",[e("p",[t._v("下载目录及安装版本")]),t._v(" "),e("blockquote",[e("p",[t._v("/etc/gitlab/gitlabsoft")])])]),t._v(" "),e("li",[e("p",[t._v("版本")]),t._v(" "),e("blockquote",[e("p",[t._v("sudo wget https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-16.6.1-ce.0.el7.x86_64.rpm")]),t._v(" "),e("p",[t._v("rpm -ivh gitlab-ce-14.10.5-ce.0.el7.x86_64.rpm")])])]),t._v(" "),e("li",[e("p",[t._v("配置地址")]),t._v(" "),e("blockquote",[e("p",[t._v("vi /etc/gitlab/gitlab.rb\nexternal_url 'http://192.168.109.128:9090' # ===>这里一定要加上http://")])])]),t._v(" "),e("li",[e("p",[t._v("在 "),e("code",[t._v("/etc/gitlab/gitlab.rb")]),t._v(" 文件中，有许多用于各种类型日志的 "),e("code",[t._v("log_directory")]),t._v(" 键。取消注释并更新要放置在其他地方的所有日志的值：")]),t._v(" "),e("blockquote",[e("h1",{attrs:{id:"for-example"}},[t._v("For example:")]),t._v(" "),e("p",[t._v("gitlab_rails['log_directory'] = \"/var/log/gitlab/gitlab-rails\"\npuma['log_directory'] = \"/var/log/gitlab/puma\"\nregistry['log_directory'] = \"/var/log/gitlab/registry\"")])])]),t._v(" "),e("li",[e("p",[t._v("邮箱配置")]),t._v(" "),e("blockquote",[e("p",[t._v("vi /etc/gitlab/gitlab.rb")]),t._v(" "),e("p",[t._v("gitlab-rails console")]),t._v(" "),e("p",[t._v("Notify.test_email('收件人邮箱', '邮件标题', '邮件正文').deliver_now")]),t._v(" "),e("p",[t._v("Notify.test_email('mail地址', '邮件标题', '邮件正文').deliver_now")]),t._v(" "),e("p",[t._v('{:authentication=>:login,\n:user_name=>"******@163.com",\n:password=>"WZZFIXUOLHOJHFWN",\n:address=>"smtp.163.com",\n:port=>25,\n:domain=>"163.com",\n:enable_starttls_auto=>true,\n:tls=>false,\n:ca_file=>"/opt/gitlab/embedded/ssl/certs/cacert.pem",\n:open_timeout=>30,\n:read_timeout=>60}')])])]),t._v(" "),e("li",[e("p",[t._v("安装命令开放端口")]),t._v(" "),e("blockquote",[e("p",[t._v("sudo systemctl enable sshd\nsudo systemctl start sshd\nsudo firewall-cmd --permanent --add-service=http\nsudo systemctl reload firewalld")]),t._v(" "),e("p",[t._v("sudo systemctl enable postfix\nsudo systemctl start postfix")]),t._v(" "),e("p",[t._v("firewall-cmd --add-port=9081/tcp --permanent")]),t._v(" "),e("p",[t._v("firewall-cmd --add-port=25/tcp --permanent")]),t._v(" "),e("p",[t._v("systemctl restart firewalld.service")])])]),t._v(" "),e("li",[e("p",[t._v("进入查看gitlab.yml")])])]),t._v(" "),e("blockquote",[e("p",[t._v("cd /opt/gitlab/embedded/service/gitlab-rails/config")]),t._v(" "),e("p",[t._v("vi gitlab.yml  这里需要设置下载地址")])]),t._v(" "),e("ol",{attrs:{start:"11"}},[e("li",[e("p",[t._v("重启")]),t._v(" "),e("blockquote",[e("p",[t._v("gitlab-ctl reconfigure\ngitlab-ctl restart")])])]),t._v(" "),e("li",[e("p",[t._v("常用命令")]),t._v(" "),e("blockquote",[e("h1",{attrs:{id:"开启-关闭-重启-gitlab组件"}},[t._v("开启,关闭,重启: gitlab组件")]),t._v(" "),e("p",[t._v("gitlab-ctl {start|stop|restart|status} \t\t\ngitlab-ctl start\ngitlab-ctl stop\ngitlab-ctl restart\ngitlab-ctl status")]),t._v(" "),e("h1",{attrs:{id:"重载配置文件-重新编译gitlab的配置"}},[t._v("重载配置文件(重新编译gitlab的配置)")]),t._v(" "),e("p",[t._v("gitlab-ctl reconfigure")]),t._v(" "),e("h1",{attrs:{id:"验证配置文件"}},[t._v("验证配置文件")]),t._v(" "),e("p",[t._v("gitlab-ctl show-config")]),t._v(" "),e("h1",{attrs:{id:"检查gitlab"}},[t._v("检查gitlab")]),t._v(" "),e("p",[t._v("gitlab-rake gitlab:check SANITIZE=true --trace")]),t._v(" "),e("h1",{attrs:{id:"查看日志"}},[t._v("查看日志")]),t._v(" "),e("p",[t._v("gitlab-ctl tail\ngitlab-ctl tail nginx/gitlab_access.log\ngitlab-ctl tail nginx/gitlab_error.log")]),t._v(" "),e("h1",{attrs:{id:"常用目录"}},[t._v("常用目录")]),t._v(" "),e("p",[t._v("日志地址：/var/log/gitlab/   # 对应各服务的打印日志\n服务地址：/var/opt/gitlab/   # 对应各服务的主目录")])])]),t._v(" "),e("li",[e("p",[t._v("两部验证")]),t._v(" "),e("blockquote",[e("p",[t._v("https://zhuanlan.zhihu.com/p/649375110")]),t._v(" "),e("p",[t._v("GitLab的双因子认证（2FA）可以提供额外的账户安全保护。以下是启用和使用GitLab双因子认证的基本步骤：")]),t._v(" "),e("p",[t._v("一、管理员强制启用双因子认证")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/zbsilent/imag/main/img/2022/v2-45baf4108dd7bbc9098e2b30ce064b72_1440w-20231212221138369.webp",alt:"img"}})]),t._v(" "),e("p",[t._v("二、用户首次登录配置双因子")]),t._v(" "),e("p",[t._v("1、登录gitlab后会自动跳转到两步验证配置页面")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/zbsilent/imag/main/img/2022/v2-64b0086d31fca479054744d832d02a4c_1440w-20231212221132753.webp",alt:"img"}})]),t._v(" "),e("p",[t._v("2、手机下载Google Authenticator apk或者使用微信小程序")]),t._v(" "),e("p",[t._v("微信小程序搜索Authly，直接使用小程序也可以实现")]),t._v(" "),e("p",[t._v("apk下载链接: "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//pan.baidu.com/s/1SszwZ8hmaz-I-74cfQmLdw",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pan.baidu.com/s/1SszwZ8hmaz-I-74cfQmLdw"),e("OutboundLink")],1),t._v(" 密码: fuee")]),t._v(" "),e("p",[t._v("3、打开Google Authenticator 点击右下角扫描二维码，扫描后会获取到一个pin码")]),t._v(" "),e("p",[t._v("4、直接将pin码填入gitlab配置页面即可")]),t._v(" "),e("p",[t._v("三、完成配置后再次打开gitlab会调整到如下页面，直接填写对应pin码即可登录。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/zbsilent/imag/main/img/2022/v2-6d168f9eda736d158c8a1af4ca9375ce_1440w-20231212221128353.webp",alt:"img"}})])])]),t._v(" "),e("li",[e("p",[t._v("linux命令补全")]),t._v(" "),e("blockquote",[e("p",[t._v("1.查看防火墙某个端口是否开放：firewall-cmd --query-port=80/tcp")]),t._v(" "),e("p",[t._v("2.开放80端口（重启防火墙生效）：firewall-cmd --add-port=80/tcp --permanent")]),t._v(" "),e("p",[t._v("3.关闭防火墙端口80：firewall-cmd --remove-port=80/tcp --permanent")]),t._v(" "),e("p",[t._v("4.重启防火墙：systemctl restart firewalld.service")]),t._v(" "),e("p",[t._v("5.开放一段端口：firewall-cmd --zone=public --add-port=40000-45000/tcp --permanent")]),t._v(" "),e("p",[t._v("6.查看开放的端口列表：firewall-cmd --zone=public --list-ports")]),t._v(" "),e("p",[t._v("7.查看被监听（Listen）的端口：netstat -lntp")]),t._v(" "),e("p",[t._v("sudo xattr -d com.apple.quarantine /Applications/PicGo.app")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);