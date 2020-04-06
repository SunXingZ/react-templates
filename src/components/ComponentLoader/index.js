import React from "react";
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { ActivityIndicator } from 'antd-mobile';

const ComponentLoader = (loadFn) => {
  if (typeof loadFn !== "function") {
    return null;
  }
  return loadable(loadFn, {
    fallback: <ActivityIndicator toast text="加载中..." /> // 页面懒加载动画
  });
}

ComponentLoader.propTypes = {
  loadFn: PropTypes.func.isRequired
};

export default ComponentLoader;