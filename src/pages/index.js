import LoginPage from "./login";

import HomePage from "./home";
import MinePage from "./mine";
import SettingsPage from "./settings"

const DrawerPages = [
  {
    name: "Home",
    title: "首页",
    page: HomePage
  }
];

const StackPages = [
  {
    name: "Login",
    title: "登录",
    page: LoginPage
  },
  {
    name: "Mine",
    title: "我的",
    page: MinePage
  },
  {
    name: "Settings",
    title: "设置",
    page: SettingsPage
  }
];

export {
  DrawerPages,
  StackPages
}