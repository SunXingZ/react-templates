const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addWebpackPlugin,
  addLessLoader,
  setWebpackTarget
} = require('customize-cra');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const packageJson = require('./package.json');

const theme = packageJson.theme || {};

const pathResolve = (dir) => {
  return path.join(__dirname, dir);
}

module.exports = override(
  setWebpackTarget('web'),
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
    '@': pathResolve("src"),
    'actions': pathResolve("./src/actions"),
    'assets': pathResolve("./src/assets"),
    'components': pathResolve("./src/components"),
    'configs': pathResolve("./src/configs"),
    'pages': pathResolve("./src/pages"),
    'reducers': pathResolve("./src/reducers"),
    'requests': pathResolve("./src/requests"),
    'store': pathResolve("./src/store"),
    'utils': pathResolve("./src/utils")
  }),
);