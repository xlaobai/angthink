AngThink
===============

## 项目介绍
AngThink是一套基于Angular + Thinkphp的前后端分离框架。
实现了一般后台所需要的功能模块

## 主要适用技术栈
* 后端框架：ThinkPHP 5.0.x/ThinkPHP 5.1.x
* 前端MVVM框架：Angular 7
* 代码风格检测：Tslint
* UI框架：NG-ZORRO

> AngThink的运行环境要求PHP5.6以上。

详细开发文档参考 [ThinkPHP5完全开发手册](http://www.kancloud.cn/manual/thinkphp5)

## 系统功能

* 登录、退出登录			--未完成		
* 修改密码、记住密码		--未完成
* 菜单管理					--未完成
* 系统参数					--未完成
* 权限节点					--未完成
* 岗位管理					--未完成
* 部门管理					--未完成
* 用户组管理				--未完成
* 用户管理					--未完成

### Demo

演示地址：

用户名：

密码：


### 开发依赖

* Angular <https://angular.io/>
* NG-ZORRO  <https://ng.ant.design/>


## 数据交互

数据交互通过httpClient以及RESTful架构来实现

用户校验通过登录返回的auth_key放在header

值得注意的一点是：跨域的情况下，会有预请求OPTION的情况

附上接口文档：<http://api.vuethink.com>

## Server搭建
服务端使用的框架为thinkphp5.搭建前请确保拥有lamp/lnmp/wamp环境。

集成环境推荐使用phpstudy：<http://www.phpstudy.net/>
或者phpset：<http://www.phpset.cn/>

这里所说的搭建其实就是把server框架放入WEB运行环境，并使用80端口。

导入服务端根文件夹数据库文件install.sql，(数据库内用户表账号root,数据库名vuethink，密码123456)并修改config/database.php配置文件。

* PHP >= 5.6.0
* PDO PHP Extension
* MBstring PHP Extension
* CURL PHP Extension

服务端开发手册请参考：<http://www.kancloud.cn/manual/thinkphp5/118003>

当访问 <http://localhost>, 出现“vuethink接口”即代表后端接口搭建成功。

## 服务端重写配置
```
请参考[ThinPHP重写](https://www.kancloud.cn/manual/thinkphp5_1/353955)
```


### 前端搭建
```
请参考frontEnd里的README文件
```
