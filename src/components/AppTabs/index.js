import React from "react";
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import "./index.less";

const homeIcon = require("../../assets/icons/home.png");
const homeSelectedIcon = require("../../assets/icons/home_selected.png");
const mineIcon = require("../../assets/icons/mine.png");
const mineSelectedIcon = require("../../assets/icons/mine_selected.png");

const AppTabsConfigs = [
  {
    title: "首页",
    path: "/home",
    icon: homeIcon,
    selectedIcon: homeSelectedIcon
  },
  {
    title: "我的",
    path: "/mine",
    icon: mineIcon,
    selectedIcon: mineSelectedIcon
  }
];

const TabIcon = (props) => {
  const { url } = props;
  return (
    <div
      style={{
        width: '22px',
        height: '22px',
        background: `url(${url}) center center /  21px 21px no-repeat`
      }}
    />
  )
};

TabIcon.propTypes = {
 url: PropTypes.string.isRequired
};

const AppTabs = React.memo(({ history }) => {
  const { location } = history;
  let hiddenTab = AppTabsConfigs.findIndex((tab) => tab.path === location.pathname) > -1 ? false : true;

  return (
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#FF8C00"
      barTintColor="white"
      hidden={hiddenTab}
      noRenderContent
    >
      {
        AppTabsConfigs.map((tab) => {
          return (
            <TabBar.Item
              title={tab.title}
              key={tab.path}
              icon={<TabIcon url={tab.icon} />}
              selectedIcon={<TabIcon url={tab.selectedIcon} />}
              selected={location.pathname === tab.path}
              onPress={() => {
                history.push(tab.path);
              }}
            />
          )
        })
      }
    </TabBar>
  )
});

AppTabs.propTypes = {};

export default withRouter(AppTabs);