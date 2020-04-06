import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import BScroll from "better-scroll";
import "./index.less";

const AppContainer = React.memo((props) => {

  useEffect(() => {
    new BScroll('.app_container', {
      scrollY: true
    });
  }, []);

  return (
    <div className="app_container">
      <div>
        <WingBlank size="md">
          <WhiteSpace size="md" />
            {props.children}
          <WhiteSpace size="md" />
        </WingBlank>
      </div>
    </div>
  )
});

AppContainer.propTypes = {
  children: PropTypes.node
};

export default withRouter(AppContainer);