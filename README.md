# Welcome to native-bottom-tabs 👋

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> 这是一个使用 react-native + react-navigation + react-native-elements + redux + axios 开发的底部 tabs 布局的 app 模版项
> 目

## 模版预览

<img src="https://raw.githubusercontent.com/SunXingZ/react-templates/master/bottom_tabs_preview/31585803617_.pic.jpg" width="30%"><img src="https://raw.githubusercontent.com/SunXingZ/react-templates/master/bottom_tabs_preview/41585803618_.pic.jpg" width="30%"><img src="https://raw.githubusercontent.com/SunXingZ/react-templates/master/bottom_tabs_preview/51585803618_.pic.jpg" width="30%">

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
│   ├── tabs
│   ├── tabs-tvOS
│   ├── tabs-tvOSTests
│   ├── tabs.xcodeproj
│   ├── tabs.xcworkspace
│   └── tabsTests
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

-   [x] 全局配置主题风格
-   [x] mockjs 测试数据
-   [x] 基于底部 tabs 布局的路由配置
-   [x] AsyncStorage 本地数据缓存
-   [x] prettier 统一代码风格并在提交代码前自动格式化
-   [x] eslint 检查代码规范
-   [ ] 支持 webp 格式
-   [ ] 添加首次安装的欢迎页
-   [ ] 通过脚手架一键配置启动页
-   [ ] native 端和 js 异常处理和上报
-   [ ] 性能监控
-   [ ] 热更新服务
-   [ ] 极光应用统计埋点
-   [ ] 极光消息推送
-   [ ] 配置 axios
-   [ ] 集成 redux

## 使用方式

```
1、下载项目

git clone -b native-bottom-tabs https://github.com/SunXingZ/react-templates.git projectName

2、安装依赖

cd projectName
yarn install

3、(可选)重命名项目 newName 项目名称 bundleIdentifier 包名(android)

npx react-native-rename <newName> -b <bundleIdentifier>

4、启动项目

yarn run ios  // 初次运行需要先cd ios目录下执行一次pod install
or
yarn run android // 请确保已经按照react-native官方文档配置好安卓开发环境
```

## 常用命令

```
打包
iOS => 使用Xcode打包
android => cd android && ./gradlew assembleRelease // 需要提前配置签名文件

生成bundle文件 bundle-output 和 assets-dest的输出目录需要提前创建
iOS => react-native bundle --entry-file index.js --bundle-output bundle/ios/main.jsbundle --platform ios --assets-dest bundle/ios --dev false --reset-cache true
android => react-native bundle --entry-file index.js --bundle-output bundle/android/index.android.bundle --platform android --assets-dest bundle/android --dev false --reset-cache true

检查iOS工程是否包含idfa
cd ios && grep -r advertisingIdentifier .
```

## 作者

👤 **孙行者**

-   Github: [@SunXingZ](https://github.com/SunXingZ)

## 🤝 贡献

欢迎提出建议和贡献代码！<br />通过 Issue 报告 bug 或进行咨询。
[issues page](https://github.com/SunXingZ/react-templates/issues).

## 支持一下

如果你觉得这个项目对你有帮助，记得点一下 ⭐️ 哦!
