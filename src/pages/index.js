import { ComponentLoader } from "components";

import Layout from "./layout";

const Home = ComponentLoader(() => import("./home"));
const Mine = ComponentLoader(() => import("./mine"));
const About = ComponentLoader(() => import("./mine/about"));
const Login = ComponentLoader(() => import("./login"));

const PagesConfigs = [
  {
    name: "登录",
    path: "/login",
    auth: false,
    component: Login
  },
  {
    name: "首页",
    path: "/home",
    auth: false,
    component: Home
  },
  {
    name: "我的",
    path: "/mine",
    auth: true,
    component: Mine
  },
  {
    name: "关于我们",
    path: "/mine/about",
    auth: true,
    component: About
  }
]

export {
  PagesConfigs,
  Layout
};