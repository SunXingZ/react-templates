import React from "react";
import { Button } from "antd-mobile";
import { AppContainer } from "components";

const Mine = (props) => {
  const { history } = props;
  return (
    <AppContainer>
      <Button type="primary" size="small" onClick={() => history.push("/mine/about")} inline>去about</Button>
      <p style={{
        height: 800,
        textAlign: "center"
      }}>mine content</p>
    </AppContainer>
  )
}

export default Mine;