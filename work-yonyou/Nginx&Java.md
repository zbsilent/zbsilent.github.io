# 项目部署说明

_说明:该项目前端基于React框架开发，后端采用SpringCloud微服务框架开发_。



## 前端部署

### Nginx服务配置

```xml
server {
        listen       7004; # 前端服务端口
        server_name  http://127.0.0.1; # 前端服务访问IP地址

        root D:\devtools\iot-react-app; # 项目目录
        index index.html;

        location / {
          try_files $uri $uri/ @router;
          index index.html;
        }
        
        location @router {
          rewrite ^.*$ /index.html last;
        }
        
        error_page   500 502 503 504  /50x.html;
          location = /50x.html {
            root   html;
        }
        # 服务转发地址
        location /api/ {
          proxy_pass http://ip:port/;
        }

}
```





1. 项目补丁文件 xxx.zip 解压后，放入D:\devtools\iot-react-app目录；
2. 启动Nginx ，即控制台 `cd c:\devtools\nginx-x　　　start nginx`
3. 访问服务http://127.0.0.1:7004



## 后端服务部署

1. 安装JDK1.8环境变量
2. 将后端服务补丁放入 c:\devtools\service目录中
3. 启动控制台`cd c:\devtools\service `目录，首先启动注册中心 `java -jar 注册中心文件名.jar`
4. 访问服务注册中心 http://127.0.0.1:7001 检查服务注册中心是否启动
5. 启动 `java -jar 微服务.jar` 刷新服务注册中心 http://127.0.0.1:7001 检查服务注册中心是否注册服务





