Spring项目部署须知



```yml
invoice:
  downLoadExcelPath: /Users/Reno/
  appId: commontesterCA
  # 正式环境https://fapiao.yonyoucloud.com */
  domain: https://yesfp.yonyoucloud.com
  keyPath: TaxCloud/src/main/resources/certificate/pro22.pfx
  passWord: password
  downLoadFilePath: /Users/Reno

```



java -jar platform.jar --picket.pushUrl="http://192.168.1.110:8080/api/eventHappen”



nohup java -jar xxxx.jar –