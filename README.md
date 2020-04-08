# Welcome to webapp-template 👋
[![Build With antd-mobile](https://img.shields.io/badge/build-antd--mobile-green.svg)](https://mobile.ant.design)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]()

> 这是一个使用react + react-router-dom + antd mobile + redux + axios开发的移动端webapp模版项目

## 模版预览
<img src="https://raw.githubusercontent.com/SunXingZ/react-templates/master/webapp_preview/home.png" width="30%"><img src="https://raw.githubusercontent.com/SunXingZ/react-templates/master/webapp_preview/mine.png" width="30%"><img src="https://raw.githubusercontent.com/SunXingZ/react-templates/master/webapp_preview/login.png" width="30%">

## 项目结构

```
├── LICENSE
├── README.md
├── config-overrides.js
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.js
│   ├── App.less
│   ├── App.test.js
│   ├── assets                          # 资源目录
│   ├── components                      # 公共业务组件目录
│   ├── configs                         # 应用配置目录
│   ├── hooks                           # 自定义hooks
│   ├── index.js                        # 入口文件
│   ├── index.less
│   ├── logo.svg
│   ├── pages                           # 页面目录
│   ├── redux                           # redux相关配置
│   ├── requests                        # 接口服务
│   ├── serviceWorker.js
│   ├── setupTests.js
│   └── utils                           # 工具库
└── yarn.lock
```

## 功能清单

- [x] 全局配置主题风格
- [x] 路由配置和鉴权
- [x] 路由懒加载
- [x] 基于 rem 的布局方案
- [x] 集成 react-use
- [x] mockjs 测试数据
- [x] better-scroll 页面滚动
- [x] prettier 统一代码风格并在提交代码前自动格式化
- [x] eslint 检查代码规范
- [ ] 配置 axios
- [ ] 集成 redux
- [ ] js 异常处理和上报
- [ ] 性能监控
- [ ] 应用统计埋点

## 使用方式

```
1、下载项目
git clone -b webapp https://github.com/SunXingZ/react-templates.git projectName

2、安装依赖
cd projectName 
yarn install

3、启动项目
yarn run start
```

## 作者

👤 **孙行者**

* Github: [@SunXingZ](https://github.com/SunXingZ)

## 🤝 贡献

欢迎提出建议和贡献代码！<br />通过 Issue 报告 bug 或进行咨询。 [issues page](https://github.com/SunXingZ/react-templates/issues). 

## 支持一下

如果你觉得这个项目对你有帮助，记得点一下⭐️哦!