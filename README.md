# Welcome to native-drawer 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> 这是一个使用react-native + react-navigation + react-native-elements + redux + axios开发的抽屉式布局的app模版项目

## 模版预览
<img src="https://github.com/SunXingZ/react-templates/blob/master/drawer_preview/31585750245_.pic.jpg" width="30%"><img src="https://github.com/SunXingZ/react-templates/blob/master/drawer_preview/41585750245_.pic.jpg" width="30%"><img src="https://github.com/SunXingZ/react-templates/blob/master/drawer_preview/51585789781_.pic.jpg" width="30%">

## 项目结构
```
├── App.js
├── LICENSE
├── README.md
├── __tests__
│   └── App-test.js
├── android                             # android工程目录
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   └── settings.gradle
├── app.json
├── babel.config.js
├── index.js
├── ios                                 # iOS工程目录
│   ├── Podfile
│   ├── Podfile.lock
│   ├── Pods
│   ├── drawer
│   ├── drawer-tvOS
│   ├── drawer-tvOSTests
│   ├── drawer.xcodeproj
│   ├── drawer.xcworkspace
│   └── drawerTests
├── metro.config.js
├── package.json
├── src
│   ├── assets                          # 资源目录
│   ├── components                      # 公共业务组件目录
│   ├── configs                         # 应用配置目录
│   ├── hooks                           # 自定义hooks
│   ├── pages                           # 页面目录
│   ├── redux                           # redux相关配置
│   ├── requests                        # 接口服务
│   └── utils                           # 工具库
└── yarn.lock
```

## 功能清单

1. 热更新服务
2. 极光应用统计
3. 极光消息推送
4. mockjs测试数据
5. 配置axios
6. 集成redux
7. 全局配置主题风格
8. native端和js异常处理
9. 基于抽屉式布局的路由配置
10. AsyncStorage本地数据缓存
...

## 使用方式

```
下载项目
git clone -b native-drawer https://github.com/SunXingZ/react-templates.git projectName

安装依赖
cd projectName 
yarn install

启动项目
yarn run ios  // 初次运行需要先cd ios目录下执行一次pod install
or
yarn run android // 请确保已经按照react-native官方文档配置好安卓开发环境
```

## 作者

👤 **孙行者**

* Github: [@SunXingZ](https://github.com/SunXingZ)

## 🤝 贡献

欢迎提出建议和贡献代码！<br />通过 Issue 报告 bug 或进行咨询。 [issues page](https://github.com/SunXingZ/react-templates/issues). 

## 支持一下

如果你觉得这个项目对你有帮助，记得点一下⭐️哦!