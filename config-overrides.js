const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addWebpackPlugin,
  addLessLoader
} = require('customize-cra');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const packageJson = require('./package.json');

const theme = packageJson.theme || {};

module.exports = override(
  fixBabelImports('import', { // 按需加载antd-mobile组件
    libraryName: 'antd-mobile',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme,
    localIdentName: '[local]--[hash:base64:5]' // 自定义 CSS Modules 的 localIdentName
  }),
  addWebpackPlugin(new ProgressBarPlugin({
    complete: "█",
    format: `${chalk.green('Building')} [ ${chalk.green(':bar')} ] ':msg:' ${chalk.bold('(:percent)')}`,
    clear: true
  })),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    'actions': path.resolve(__dirname, 'src/actions'),
    'assets': path.resolve(__dirname, 'src/assets'),
    'components': path.resolve(__dirname, 'src/components'),
    'configs': path.resolve(__dirname, 'src/configs'),
    'pages': path.resolve(__dirname, 'src/pages'),
    'reducers': path.resolve(__dirname, 'src/reducers'),
    'router': path.resolve(__dirname, 'src/router'),
    'service': path.resolve(__dirname, 'src/service'),
    'store': path.resolve(__dirname, 'src/store'),
    'utils': path.resolve(__dirname, 'src/utils')
  })
);