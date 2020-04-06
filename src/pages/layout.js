import React from 'react';
import { AppTabs } from "components";

const Layout = (props) => {
  const { children = null } = props;
  return (
    <>
      {children}
      <AppTabs />
    </>
  )
}

export default Layout;