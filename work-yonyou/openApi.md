# NCCloud OpenAPI

​         NCCloud OpenAPI是UAP在Restlet[^1]框架之上，选择了官方JAX-RS扩展，并且在扩展的基础上与NC进行了集成。服务商将自己的网站服务封装成一系列API（Application Programming Interface，应用编程接口）开放出去，供第三方开发者使用。



## OpenAPI使用即测试文档

Openapi做了权限控制和OAuth2安全控制。使用openapi的完整步骤如下：

1. 注册第三方应用（可以使用openapi的应用）。

   1. 访问地址：http://ip:port/nccloud/resources/opm(配置中心地址)
   2. 使用管理员登录

      ![image-20211204232540300](/Users/Reno/Library/Application Support/typora-user-images/image-20211204232540300.png)

   3. 在第三方应用注册界面注册第三应用

      ![image-20211204232841887](/Users/Reno/Library/Application Support/typora-user-images/image-20211204232841887.png)

   

   

   4. 第三方应用注册详细信息

​				 ![image-20211204233015779](/Users/Reno/Library/Application Support/typora-user-images/image-20211204233015779.png)

2. 为第三方应用关联可以使用的openapi。

   ![image-20211204233037167](/Users/Reno/Library/Application Support/typora-user-images/image-20211204233037167.png)

   ![image-20211204233055367](/Users/Reno/Library/Application Support/typora-user-images/image-20211204233055367.png)

   ![image-20211204233111448](/Users/Reno/Library/Application Support/typora-user-images/image-20211204233111448.png)

3. 获取access_token(访问openapi的安全令牌)

   1. 请求路径：http://nccloud/opm/accesstoken
   2. 参数

   |               |                                                              |
   | ------------- | ------------------------------------------------------------ |
   | grant_type    | oauth2获取token模式，client_credentials：客户端模式          |
   | client_id     | 第三方应用id，对应系统中的app_id                             |
   | client_secret | 需要对数据进行加密（非对称加密，公钥通过第三方应用的public_key获取） |
   | biz_center    | biz_center 访问的nccloud系统的账套code<b                     |
   | signature     | 请求加签，SHA256Util.getSHA256(client_id + client_secret + pubKey) |

   

4. 使用access_token访问openapi。

   1. 使用第三步获取access_token，传入请求的api，header中。

   2. 请求路径：http://ip:port/【api访问路径】

   3. 参数：

   4. > 请求头（header）
      >
      > Content-type:application/json
      >
      > Client_id:第三方应用id
      >
      > Signature:请求加签，使用请求体（requestBody）对请求进行加签					

## [OpenAPI接口示例](https://nccdev.yonyou.com/openapi/)

### 新增公司类型的业务单元

使用场景

新增公司类型的业务单元

请求类型

> POST

请求路径

>  http://ip:port/nccloud/api/riaorg/orgmanage/org/addOrgCorp

请求参数

| 参数名称           | 是否必输 | 类型    | 示例值             | 说明                                                         |
| :----------------- | :------: | :------ | :----------------- | :----------------------------------------------------------- |
| ufinterface        |    是    | Map     |                    | 接口参数                                                     |
| account            |    是    | String  | develop            | 账套编码                                                     |
| billtype           |    是    | String  | orgunit            | 单据类型                                                     |
| groupcode          |    是    | String  | TEST               | 集团编码                                                     |
| isexchange         |    否    | String  | Y                  | 是否使用NC翻译                                               |
| replace            |    否    | String  | Y                  | 是否允许更新                                                 |
| roottag            |    是    | String  | bill               | 根标签                                                       |
| sender             |    是    | String  | default            | 发送方编码                                                   |
| orgcode            |    否    | String  | rootorg            | 组织编码，一般不需要添加                                     |
| id                 |    否    | String  | 88888888           | 当前类型单据对应的id，如果填写要求唯一；如果不写系统自动生成一个 |
| bill               |    否    | Map     |                    | 表单                                                         |
| billhead           |    否    | Map     |                    | 表头                                                         |
| address            |    是    | Map     |                    | 地址                                                         |
| code               |    是    | String  | pfxx_group_address | 公司地址码                                                   |
| country            |    是    | String  | CN                 | 国家                                                         |
| detailinfo         |    否    | String  | 又一次上演帽子戏法 | 详细信息                                                     |
| postcode           |    否    | String  | 274700             | 邮编                                                         |
| orgvo              |    是    | Map     |                    | 业务单元                                                     |
| address            |    是    | String  | test               | 地址                                                         |
| code               |    是    | String  | 555771             | 编码                                                         |
| countryzone        |    否    | String  | CN                 | 国家地区                                                     |
| creationtime       |    否    | String  | 1111               | 创建时间                                                     |
| creator            |    否    | String  | 1111               | 创建人                                                       |
| enablestate        |    是    | String  | 2                  | 启用状态 1=未启用，2=已启用，3=已停用，                      |
| memo               |    否    | String  | aaa                | 说明                                                         |
| mnecode            |    是    | String  | 555771             | 助记码                                                       |
| name               |    是    | String  | 555771             | 名称                                                         |
| ncindustry         |    是    | String  | 0                  | 所属UAP行业                                                  |
| pk_fatherorg       |    是    | String  | 1                  | 上级业务单元                                                 |
| pk_format          |    否    | String  | aaa                | 数据格式                                                     |
| pk_group           |    是    | String  | TEST               | 所属集团                                                     |
| pk_org             |    否    | String  | 啊啊啊             | 组织主键                                                     |
| principal          |    否    | String  | 啊啊啊             | 负责人                                                       |
| shortname          |    否    | String  | 555771             | 简称                                                         |
| tel                |    否    | String  | 17353662511        | 电话                                                         |
| pk_accperiodscheme |    是    | String  | 1                  | 当前周期方案                                                 |
| pk_currtype        |    是    | String  | HKD                | 当前类型                                                     |
| pk_exratescheme    |    是    | String  | 1                  | 汇率类型                                                     |
| corp               |    否    | Map     |                    | 公司                                                         |
| begindate          |    是    | String  | 40668.681087963    | 业务开始日期                                                 |
| briefintro         |    否    | String  | a哈哈哈            | 简介                                                         |
| chargedeptcode     |    是    | String  | pf_hyw             | 上级主管部门编码                                             |
| chargedeptname     |    否    | String  | 1                  | 上级主管部门名称                                             |
| code               |    否    | String  | 1                  | 公司编码                                                     |
| corptype           |    否    | String  | 1                  | 单位类型                                                     |
| createdate         |    是    | String  | 40668.681087963    | 公司成立时间                                                 |
| disorder           |    否    | Integer | 1                  | 显示顺序                                                     |
| ecotype            |    否    | String  | 1                  | 经济类型                                                     |
| email1             |    否    | String  | a                  | 电子邮件1                                                    |
| email2             |    否    | String  | a                  | 电子邮件2                                                    |
| email3             |    否    | String  | a                  | 电子邮件3                                                    |
| enablestate        |    否    | Integer | 2                  | 启用状态                                                     |
| enddate            |    是    | String  | 40668.681087963    | 业务终止日期                                                 |
| fax1               |    否    | String  | a                  | 传真1                                                        |
| fax2               |    否    | String  | a                  | 传真2                                                        |
| idnumber           |    是    | String  | agggg              | 法人身份证号码                                               |
| industry           |    否    | String  | 1                  | 所属行业                                                     |
| innercode          |    否    | String  | 1                  | 编码级次                                                     |
| isgroupcorp        |    否    | Boolean | Y                  | 是否集团公司                                                 |
| legalbodycode      |    否    | String  | 1                  | 法人代表                                                     |
| linkman1           |    是    | String  | a                  | 联系人1                                                      |
| linkman2           |    是    | String  | a                  | 联系人2                                                      |
| linkman3           |    是    | String  | a                  | 联系人3                                                      |
| maxinnercode       |    否    | String  | 1                  | 内部编码下级最大值                                           |
| mnecode            |    否    | String  | 1                  | 助记码                                                       |
| name               |    否    | String  | 1                  | 公司名称                                                     |
| ownersharerate     |    是    | Double  | 0.56               | 所有权份额                                                   |
| phone1             |    否    | String  | 110                | 电话1                                                        |
| phone2             |    否    | String  | 22                 | 电话2                                                        |
| phone3             |    否    | String  | 33                 | 电话3                                                        |
| pk_corpkind        |    否    | String  | 1                  | 公司类别                                                     |
| pk_fatherorg       |    是    | String  | 1                  | 上级公司                                                     |
| pk_group           |    否    | String  | 1                  | 所属集团                                                     |
| pk_org             |    否    | String  | 1                  | 所属组织                                                     |
| pk_vid             |    否    | String  | 1                  | 版本主键                                                     |
| postaddr           |    是    | String  | 山东省郓城县       | 通讯地址                                                     |
| regcapital         |    是    | Double  | 45                 | 注册资本                                                     |
| region             |    否    | String  | 1                  | 行政区划                                                     |
| shortname          |    否    | String  | 1                  | 公司简称                                                     |
| taxpayertype       |    否    | Integer | 0                  | 纳税人类型                                                   |
| unitdistinction    |    否    | String  | 0                  | 单位级别                                                     |
| url                |    是    | String  | a                  | Web网址                                                      |
| venddate           |    否    | String  | 1                  | 版本失效日期                                                 |
| vname              |    否    | String  | 1                  | 版本名称                                                     |
| vno                |    否    | String  | 1                  | 版本号                                                       |
| vstartdate         |    否    | String  | 1                  | 版本生效日期                                                 |
| zipcode            |    是    | String  | 274714             | 邮政编码                                                     |
| financeorg         |    否    | Map     |                    | 财务组织                                                     |
| adminorg           |    否    | Map     |                    | 人力组织                                                     |
| pk_fatherorg       |    否    | String  | 1                  | 父级组织主键                                                 |

请求参数示例

```json
{
  "ufinterface": {
    "billtype": "orgunit",
    "sender": "default",
    "orgcode": "rootorg",
    "replace": "Y",
    "bill": {
      "billhead": {
        "address": {
          "country": "CN",
          "code": "pfxx_group_address",
          "postcode": "274700",
          "detailinfo": "又一次上演帽子戏法"
        },
        "corp": {
          "pk_group": "1",
          "enablestate": "2",
          "begindate": "40668.681087963",
          "code": "1",
          "idnumber": "agggg",
          "chargedeptcode": "pf_hyw",
          "phone2": "22",
          "createdate": "40668.681087963",
          "phone3": "33",
          "industry": "1",
          "innercode": "1",
          "phone1": "110",
          "pk_org": "1",
          "email3": "a",
          "email2": "a",
          "unitdistinction": "0",
          "email1": "a",
          "isgroupcorp": "Y",
          "venddate": "1",
          "maxinnercode": "1",
          "fax2": "a",
          "fax1": "a",
          "ecotype": "1",
          "legalbodycode": "1",
          "pk_vid": "1",
          "briefintro": "a哈哈哈",
          "regcapital": "45",
          "linkman1": "a",
          "linkman3": "a",
          "linkman2": "a",
          "mnecode": "1",
          "vstartdate": "1",
          "shortname": "1",
          "url": "a",
          "pk_corpkind": "1",
          "zipcode": "274714",
          "pk_fatherorg": "1",
          "disorder": "1",
          "enddate": "40668.681087963",
          "vname": "1",
          "corptype": "1",
          "postaddr": "山东省郓城县",
          "chargedeptname": "1",
          "vno": "1",
          "name": "1",
          "taxpayertype": "0",
          "ownersharerate": "0.56",
          "region": "1"
        },
        "adminorg": {
          "pk_fatherorg": "1"
        },
        "orgvo": {
          "pk_group": "TEST",
          "pk_exratescheme": "1",
          "enablestate": "2",
          "creator": "1111",
          "address": "test",
          "code": "555771",
          "pk_format": "aaa",
          "pk_currtype": "HKD",
          "memo": "aaa",
          "ncindustry": "0",
          "mnecode": "555771",
          "countryzone": "CN",
          "shortname": "555771",
          "pk_org": "啊啊啊",
          "principal": "啊啊啊",
          "pk_accperiodscheme": "1",
          "pk_fatherorg": "1",
          "name": "555771",
          "tel": "17353662511",
          "creationtime": "1111"
        }
      }
    },
    "roottag": "bill",
    "isexchange": "Y",
    "id": "88888888",
    "account": "develop",
    "groupcode": "TEST"
  }
}
```



返回参数

| 参数名称   | 是否必返回 | 类型    | 示例值 | 说明                       |
| :--------- | :--------: | :------ | :----- | :------------------------- |
| success    |     否     | Boolean |        | 请求是否成功               |
| data       |     否     | Map     |        | 请求返回的实际值，是个json |
| code       |     否     | String  |        | 错误码                     |
| message    |     否     | String  |        | 返回消息                   |
| errorStack |     否     | String  |        | 错误堆栈                   |

返回结果示例

```json
{
  "success": false,
  "data": null,
  "code": "1000000001",
  "message": "无法获得数据源,账套:develop",
  "errorStack": null
}
```

错误码解释

| 错误码     | 解析                 |
| :--------- | :------------------- |
| 1000000000 | 操作成功             |
| 1000000001 | 业务异常             |
| 1000000002 | 校验异常             |
| 1000000003 | 运行时异常           |
| 1000000004 | 数据库异常           |
| 1000000005 | 业务锁失败异常       |
| 1000000006 | 锁失败异常           |
| 1000000007 | 业务数据版本冲突异常 |
| 1000000008 | 系统安全异常         |
| 1000000009 | 传递性异常           |
| 1000000010 | 未知异常             |
| 1000000011 | 重复登录异常         |
| 1000000012 | 会话失效异常         |
| 1000000013 | 安全公钥缺失         |

### 新增库存组织类型的业务单元



使用场景

新增库存组织类型的业务单元

请求类型

> POST

请求路径

> http://ip:port/nccloud/api/riaorg/orgmanage/org/addOrgStock

---

请求参数

| 参数名称           | 是否必输 | 类型   | 示例值             | 说明                                                         |
| ------------------ | -------- | ------ | ------------------ | ------------------------------------------------------------ |
| ufinterface        | 是       | Map    |                    | 接口参数                                                     |
| account            | 是       | String | develop            | 账套编码                                                     |
| billtype           | 是       | String | orgunit            | 单据类型                                                     |
| groupcode          | 是       | String | TEST               | 集团编码                                                     |
| isexchange         | 否       | String | Y                  | 是否使用NC翻译                                               |
| replace            | 否       | String | Y                  | 是否允许更新                                                 |
| roottag            | 是       | String | bill               | 根标签                                                       |
| sender             | 是       | String | default            | 发送方编码                                                   |
| orgcode            | 否       | String | rootorg            | 组织编码，一般不需要添加                                     |
| id                 | 否       | String | 88888888           | 当前类型单据对应的id，如果填写要求唯一；如果不写系统自动生成一个 |
| bill               | 否       | Map    |                    | 表单                                                         |
| billhead           | 否       | Map    |                    | 表头                                                         |
| address            | 是       | Map    |                    | 地址                                                         |
| code               | 是       | String | pfxx_group_address | 公司地址码                                                   |
| country            | 是       | String | CN                 | 国家                                                         |
| detailinfo         | 否       | String | 又一次上演帽子戏法 | 详细信息                                                     |
| postcode           | 否       | String | 274700             | 邮编                                                         |
| orgvo              | 是       | Map    |                    | 业务单元                                                     |
| address            | 是       | String | test               | 地址                                                         |
| code               | 是       | String | 555771             | 编码                                                         |
| countryzone        | 否       | String | CN                 | 国家地区                                                     |
| creationtime       | 否       | String | 1111               | 创建时间                                                     |
| creator            | 否       | String | 1111               | 创建人                                                       |
| enablestate        | 是       | String | 2                  | 启用状态 1=未启用，2=已启用，3=已停用，                      |
| memo               | 否       | String | aaa                | 说明                                                         |
| mnecode            | 是       | String | 555771             | 助记码                                                       |
| name               | 是       | String | 555771             | 名称                                                         |
| ncindustry         | 是       | String | 0                  | 所属UAP行业                                                  |
| pk_fatherorg       | 是       | String | 1                  | 上级业务单元                                                 |
| pk_format          | 否       | String | aaa                | 数据格式                                                     |
| pk_group           | 是       | String | TEST               | 所属集团                                                     |
| pk_org             | 否       | String | 啊啊啊             | 组织主键                                                     |
| principal          | 否       | String | 啊啊啊             | 负责人                                                       |
| shortname          | 否       | String | 555771             | 简称                                                         |
| tel                | 否       | String | 17353662511        | 电话                                                         |
| pk_accperiodscheme | 是       | String | 1                  | 当前周期方案                                                 |
| pk_currtype        | 是       | String | HKD                | 当前类型                                                     |
| pk_exratescheme    | 是       | String | 1                  | 汇率类型                                                     |
| stockorg           | 否       | Map    |                    | 库存类型业务单元                                             |
| isfactory          | 否       | String | Y                  | 是否工厂，Y/N，默认Y                                         |
| pk_financeorg      | 否       | String | 1.1                | 默认财务组织                                                 |

----

请求参数示例

```json
{
  "ufinterface": {
    "billtype": "orgunit",
    "sender": "default",
    "orgcode": "rootorg",
    "replace": "Y",
    "bill": {
      "billhead": {
        "address": {
          "country": "CN",
          "code": "pfxx_group_address",
          "postcode": "274700",
          "detailinfo": "又一次上演帽子戏法"
        },
        "stockorg": {
          "isfactory": "Y",
          "pk_financeorg": "1.1"
        },
        "orgvo": {
          "pk_group": "TEST",
          "pk_exratescheme": "1",
          "enablestate": "2",
          "creator": "1111",
          "address": "test",
          "code": "555771",
          "pk_format": "aaa",
          "pk_currtype": "HKD",
          "memo": "aaa",
          "ncindustry": "0",
          "mnecode": "555771",
          "countryzone": "CN",
          "shortname": "555771",
          "pk_org": "啊啊啊",
          "principal": "啊啊啊",
          "pk_accperiodscheme": "1",
          "pk_fatherorg": "1",
          "name": "555771",
          "tel": "17353662511",
          "creationtime": "1111"
        }
      }
    },
    "roottag": "bill",
    "isexchange": "Y",
    "id": "88888888",
    "account": "develop",
    "groupcode": "TEST"
  }
}
```

---

返回参数

| 参数名称   | 是否必返回 | 类型    | 示例值 | 说明                       |
| ---------- | ---------- | ------- | ------ | -------------------------- |
| success    | 否         | Boolean |        | 请求是否成功               |
| data       | 否         | Map     |        | 请求返回的实际值，是个json |
| code       | 否         | String  |        | 错误码                     |
| message    | 否         | String  |        | 返回消息                   |
| errorStack | 否         | String  |        | 错误堆栈                   |

----

返回结果示例

```json
{
  "success": false,
  "data": null,
  "code": "1000000001",
  "message": "无法获得数据源,账套:develop",
  "errorStack": null
}
```

错误码解释

| 错误码     | 解析                 |
| :--------- | :------------------- |
| 1000000000 | 操作成功             |
| 1000000001 | 业务异常             |
| 1000000002 | 校验异常             |
| 1000000003 | 运行时异常           |
| 1000000004 | 数据库异常           |
| 1000000005 | 业务锁失败异常       |
| 1000000006 | 锁失败异常           |
| 1000000007 | 业务数据版本冲突异常 |
| 1000000008 | 系统安全异常         |
| 1000000009 | 传递性异常           |
| 1000000010 | 未知异常             |
| 1000000011 | 重复登录异常         |
| 1000000012 | 会话失效异常         |
| 1000000013 | 安全公钥缺失         |

### 新增一个人员

使用场景

新增一个人员

请求类型

> POST

请求路径

> http://ip:port/nccloud/api/uapbd/psndocmanage/psndoc/add

请求参数

| 参数名称     | 是否必输 | 类型      | 示例值                         | 说明                        |
| :----------- | :------: | :-------- | :----------------------------- | :-------------------------- |
| ufinterface  |    是    | Map       |                                | 接口                        |
| billtype     |    是    | String    | psndoc                         | 单据类型                    |
| isexchange   |    是    | String    | Y                              | 是否使用NC翻译：一般默认为Y |
| replace      |    是    | String    | Y                              | 是否允许更新：一般默认为Y   |
| sender       |    是    | String    | default                        | 发送方编码                  |
| bill         |    是    | Map       |                                | 单据                        |
| billhead     |    是    | Map       |                                | 单据头                      |
| birthdate    |    是    | String    | 2000-01-01                     | 出生日期                    |
| code         |    是    | String    | 0003                           | 人员编码                    |
| email        |    否    | String    | 0003                           | 电子邮件                    |
| enablestate  |    是    | String    | 1=未启用，2=已启用，3=已停用， | 启用状态                    |
| firstname    |    否    | String    | 0003                           | 名                          |
| homephone    |    否    | String    | 0003                           | 家庭电话                    |
| id           |    是    | String    | 0003                           | 证件号                      |
| idtype       |    是    | String    | 0003                           | 证件类型                    |
| joinworkdate |    是    | String    | 2000-01-01                     | 参加工作日期                |
| lastname     |    是    | String    | 0003                           | 姓                          |
| mnecode      |    是    | String    | 0003                           | 助记码                      |
| mobile       |    是    | String    | 0003                           | 手机                        |
| name         |    是    | String    | 0003                           | 姓名                        |
| nickname     |    是    | String    | 0003                           | 昵称                        |
| officephone  |    否    | String    | 0003                           | 办公电话                    |
| pk_group     |    是    | String    | 0003                           | 所属集团                    |
| pk_org       |    是    | String    | 0003                           | 所属业务单元                |
| sex          |    是    | String    | 1=男，2=女，                   | 性别                        |
| usedname     |    否    | String    |                                | 曾用名                      |
| def1         |    否    | String    |                                | 自定义项                    |
| def2         |    否    | String    |                                | 自定义项                    |
| def3         |    否    | String    |                                | 自定义项                    |
| def4         |    否    | String    |                                | 自定义项                    |
| def5         |    否    | String    |                                | 自定义项                    |
| def6         |    否    | String    |                                | 自定义项                    |
| def7         |    否    | String    |                                | 自定义项                    |
| def8         |    否    | String    |                                | 自定义项                    |
| def9         |    否    | String    |                                | 自定义项                    |
| def10        |    否    | String    |                                | 自定义项                    |
| def11        |    否    | String    |                                | 自定义项                    |
| def12        |    否    | String    |                                | 自定义项                    |
| def13        |    否    | String    |                                | 自定义项                    |
| def14        |    否    | String    |                                | 自定义项                    |
| def15        |    否    | String    |                                | 自定义项                    |
| def16        |    否    | String    |                                | 自定义项                    |
| def17        |    否    | String    |                                | 自定义项                    |
| def18        |    否    | String    |                                | 自定义项                    |
| def19        |    否    | String    |                                | 自定义项                    |
| def20        |    否    | String    |                                | 自定义项                    |
| addressvo    |    否    | Map       |                                | 家庭地址                    |
| city         |    是    | String    | 001                            | 城市                        |
| code         |    是    | String    | 002                            | 编码                        |
| country      |    是    | String    | 003                            | 国家                        |
| detailinfo   |    是    | String    | 004                            | 地址详址                    |
| postcode     |    是    | String    | 005                            | 邮政编码                    |
| province     |    是    | String    | 006                            | 省份                        |
| vsection     |    是    | String    | 007                            | 县区                        |
| psnjobs      |    是    | Array     |                                | 工作信息                    |
| item         |    否    | Map       |                                | item                        |
| enddutydate  |    是    | String    | 2000-01-01                     | 任职结束日期                |
| indutydate   |    是    | String    | 2000-01-01                     | 任职开始日期                |
| ismainjob    |    是    | UFBoolean | Y                              | 主职                        |
| jobname      |    否    | String    | 003                            | 职务称谓                    |
| pk_dept      |    是    | String    | 004                            | 所在部门                    |
| pk_group     |    是    | String    | 005                            | 所属集团                    |
| pk_job       |    否    | String    | 006                            | 职务                        |
| pk_org       |    是    | String    | 007                            | 任职业务单元                |
| pk_post      |    是    | String    | 008                            | 岗位                        |
| pk_psncl     |    是    | String    | 009                            | 人员类别                    |
| psncode      |    是    | String    | 010                            | 员工编号                    |
| showorder    |    否    | Integer   | 011                            | 人员顺序                    |
| account      |    是    | String    | ncc_0224                       | 账套                        |
| groupcode    |    是    | String    | T2                             | 集团编码                    |

请求参数示例

```json
{
  "ufinterface": {
    "billtype": "psndoc",
    "sender": "default",
    "replace": "Y",
    "bill": {
      "billhead": {
        "pk_group": "0003",
        "enablestate": "1=未启用，2=已启用，3=已停用，",
        "firstname": "0003",
        "birthdate": "2000-01-01",
        "code": "0003",
        "homephone": "0003",
        "sex": "1=男，2=女，",
        "mobile": "0003",
        "mnecode": "0003",
        "addressvo": {
          "country": "003",
          "code": "002",
          "province": "006",
          "city": "001",
          "vsection": "007",
          "postcode": "005",
          "detailinfo": "004"
        },
        "lastname": "0003",
        "pk_org": "0003",
        "joinworkdate": "2000-01-01",
        "idtype": "0003",
        "psnjobs": [
          {
            "item": {
              "pk_group": "005",
              "enddutydate": "2000-01-01",
              "pk_dept": "004",
              "indutydate": "2000-01-01",
              "pk_job": "006",
              "ismainjob": "Y",
              "pk_post": "008",
              "pk_psncl": "009",
              "psncode": "010",
              "jobname": "003",
              "pk_org": "007",
              "showorder": "011"
            }
          }
        ],
        "name": "0003",
        "nickname": "0003",
        "id": "0003",
        "officephone": "0003",
        "email": "0003"
      }
    },
    "isexchange": "Y",
    "account": "ncc_0224",
    "groupcode": "T2"
  }
}
```



返回参数

| 参数名称   | 是否必返回 | 类型    | 示例值 | 说明                       |
| :--------- | :--------: | :------ | :----- | :------------------------- |
| success    |     是     | Boolean |        | 请求是否成功               |
| data       |     是     | Map     |        | 请求返回的实际值，是个json |
| code       |     是     | String  |        | 错误码                     |
| message    |     否     | String  |        | 返回消息                   |
| errorStack |     否     | String  |        | 错误堆栈                   |

返回结果示例

```json
{
  "success": false,
  "data": null,
  "code": "1000000001",
  "message": " 无法获得数据源,账套:ncc_0224",
  "errorStack": ""
}
```

错误码解释

| 错误码     | 解析                 |
| :--------- | :------------------- |
| 1000000000 | 操作成功             |
| 1000000001 | 业务异常             |
| 1000000002 | 校验异常             |
| 1000000003 | 运行时异常           |
| 1000000004 | 数据库异常           |
| 1000000005 | 业务锁失败异常       |
| 1000000006 | 锁失败异常           |
| 1000000007 | 业务数据版本冲突异常 |
| 1000000008 | 系统安全异常         |
| 1000000009 | 传递性异常           |
| 1000000010 | 未知异常             |
| 1000000011 | 重复登录异常         |
| 1000000012 | 会话失效异常         |
| 1000000013 | 安全公钥缺失         |

### 修改一个人员



使用场景

修改一个人员

请求类型

> POST

请求路径

> http://ip:port/nccloud/api/uapbd/psndocmanage/psndoc/update

请求参数

| 参数名称     | 是否必输 | 类型      | 示例值                         | 说明                        |
| :----------- | :------: | :-------- | :----------------------------- | :-------------------------- |
| ufinterface  |    是    | Map       |                                | 接口                        |
| billtype     |    是    | String    | psndoc                         | 单据类型                    |
| isexchange   |    是    | String    | Y                              | 是否使用NC翻译：一般默认为Y |
| replace      |    是    | String    | Y                              | 是否允许更新：一般默认为Y   |
| sender       |    是    | String    | default                        | 发送方编码                  |
| bill         |    是    | Map       |                                | 单据                        |
| billhead     |    是    | Map       |                                | 单据头                      |
| birthdate    |    是    | String    | 2000-01-01                     | 出生日期                    |
| code         |    是    | String    | 0003                           | 人员编码                    |
| email        |    否    | String    | 0003                           | 电子邮件                    |
| enablestate  |    是    | String    | 1=未启用，2=已启用，3=已停用， | 启用状态                    |
| firstname    |    否    | String    | 0003                           | 名                          |
| homephone    |    否    | String    | 0003                           | 家庭电话                    |
| id           |    是    | String    | 0003                           | 证件号                      |
| idtype       |    是    | String    | 0003                           | 证件类型                    |
| joinworkdate |    是    | String    | 2000-01-01                     | 参加工作日期                |
| lastname     |    是    | String    | 0003                           | 姓                          |
| mnecode      |    是    | String    | 0003                           | 助记码                      |
| mobile       |    是    | String    | 0003                           | 手机                        |
| name         |    是    | String    | 0003                           | 姓名                        |
| nickname     |    是    | String    | 0003                           | 昵称                        |
| officephone  |    否    | String    | 0003                           | 办公电话                    |
| pk_group     |    是    | String    | 0003                           | 所属集团                    |
| pk_org       |    是    | String    | 0003                           | 所属业务单元                |
| sex          |    是    | String    | 1=男，2=女，                   | 性别                        |
| usedname     |    否    | String    |                                | 曾用名                      |
| def1         |    否    | String    |                                | 自定义项                    |
| def2         |    否    | String    |                                | 自定义项                    |
| def3         |    否    | String    |                                | 自定义项                    |
| def4         |    否    | String    |                                | 自定义项                    |
| def5         |    否    | String    |                                | 自定义项                    |
| def6         |    否    | String    |                                | 自定义项                    |
| def7         |    否    | String    |                                | 自定义项                    |
| def8         |    否    | String    |                                | 自定义项                    |
| def9         |    否    | String    |                                | 自定义项                    |
| def10        |    否    | String    |                                | 自定义项                    |
| def11        |    否    | String    |                                | 自定义项                    |
| def12        |    否    | String    |                                | 自定义项                    |
| def13        |    否    | String    |                                | 自定义项                    |
| def14        |    否    | String    |                                | 自定义项                    |
| def15        |    否    | String    |                                | 自定义项                    |
| def16        |    否    | String    |                                | 自定义项                    |
| def17        |    否    | String    |                                | 自定义项                    |
| def18        |    否    | String    |                                | 自定义项                    |
| def19        |    否    | String    |                                | 自定义项                    |
| def20        |    否    | String    |                                | 自定义项                    |
| addressvo    |    否    | Map       |                                | 家庭地址                    |
| city         |    是    | String    | 001                            | 城市                        |
| code         |    是    | String    | 002                            | 编码                        |
| country      |    是    | String    | 003                            | 国家                        |
| detailinfo   |    是    | String    | 004                            | 地址详址                    |
| postcode     |    是    | String    | 005                            | 邮政编码                    |
| province     |    是    | String    | 006                            | 省份                        |
| vsection     |    是    | String    | 007                            | 县区                        |
| psnjobs      |    是    | Array     |                                | 工作信息                    |
| item         |    否    | Map       |                                | item                        |
| enddutydate  |    是    | String    | 2000-01-01                     | 任职结束日期                |
| indutydate   |    是    | String    | 2000-01-01                     | 任职开始日期                |
| ismainjob    |    是    | UFBoolean | Y                              | 主职                        |
| jobname      |    否    | String    | 003                            | 职务称谓                    |
| pk_dept      |    是    | String    | 004                            | 所在部门                    |
| pk_group     |    是    | String    | 005                            | 所属集团                    |
| pk_job       |    否    | String    | 006                            | 职务                        |
| pk_org       |    是    | String    | 007                            | 任职业务单元                |
| pk_post      |    是    | String    | 008                            | 岗位                        |
| pk_psncl     |    是    | String    | 009                            | 人员类别                    |
| psncode      |    是    | String    | 010                            | 员工编号                    |
| showorder    |    否    | Integer   | 011                            | 人员顺序                    |
| account      |    是    | String    | ncc_0224                       | 账套                        |
| groupcode    |    是    | String    | T2                             | 集团编码                    |

请求参数示例

```json
{
  "ufinterface": {
    "billtype": "psndoc",
    "sender": "default",
    "replace": "Y",
    "bill": {
      "billhead": {
        "pk_group": "0003",
        "enablestate": "1=未启用，2=已启用，3=已停用，",
        "firstname": "0003",
        "birthdate": "2000-01-01",
        "code": "0003",
        "homephone": "0003",
        "sex": "1=男，2=女，",
        "mobile": "0003",
        "mnecode": "0003",
        "addressvo": {
          "country": "003",
          "code": "002",
          "province": "006",
          "city": "001",
          "vsection": "007",
          "postcode": "005",
          "detailinfo": "004"
        },
        "lastname": "0003",
        "pk_org": "0003",
        "joinworkdate": "2000-01-01",
        "idtype": "0003",
        "psnjobs": [
          {
            "item": {
              "pk_group": "005",
              "enddutydate": "2000-01-01",
              "pk_dept": "004",
              "indutydate": "2000-01-01",
              "pk_job": "006",
              "ismainjob": "Y",
              "pk_post": "008",
              "pk_psncl": "009",
              "psncode": "010",
              "jobname": "003",
              "pk_org": "007",
              "showorder": "011"
            }
          }
        ],
        "name": "0003",
        "nickname": "0003",
        "id": "0003",
        "officephone": "0003",
        "email": "0003"
      }
    },
    "isexchange": "Y",
    "account": "ncc_0224",
    "groupcode": "T2"
  }
}
```

返回参数

| 参数名称   | 是否必返回 | 类型    | 示例值 | 说明                       |
| :--------- | :--------: | :------ | :----- | :------------------------- |
| success    |     是     | Boolean |        | 请求是否成功               |
| data       |     是     | Map     |        | 请求返回的实际值，是个json |
| code       |     是     | String  |        | 错误码                     |
| message    |     否     | String  |        | 返回消息                   |
| errorStack |     否     | String  |        | 错误堆栈                   |

返回结果示例

```json
{
  "success": false,
  "data": null,
  "code": "1000000001",
  "message": "无法获得数据源,账套:ncc_0224",
  "errorStack":""
}
```

错误码解释

| 错误码     | 解析                 |
| :--------- | :------------------- |
| 1000000000 | 操作成功             |
| 1000000001 | 业务异常             |
| 1000000002 | 校验异常             |
| 1000000003 | 运行时异常           |
| 1000000004 | 数据库异常           |
| 1000000005 | 业务锁失败异常       |
| 1000000006 | 锁失败异常           |
| 1000000007 | 业务数据版本冲突异常 |
| 1000000008 | 系统安全异常         |
| 1000000009 | 传递性异常           |
| 1000000010 | 未知异常             |
| 1000000011 | 重复登录异常         |
| 1000000012 | 会话失效异常         |
| 1000000013 | 安全公钥缺失         |

----

[^1]: _Restlet项目为“建立REST概念与Java类之间的映射”提供了一个轻量级而全面的框架_

