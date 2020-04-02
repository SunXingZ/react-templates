import React from 'react';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { Header } from "react-native-elements";

const CustomHeader = (props) => {
  let {
    leftComponent = null,
    centerComponent = null,
    rightComponent = null,
    ...args
  } = props;
  const navigation = useNavigation();
  const routesLength = useNavigationState(state => state.routes.length);
  const canGoBack = routesLength > 1;

  if (leftComponent == undefined) {
    if (canGoBack) {
      leftComponent = {
        icon: "arrow-back",
        color: "#ffffff",
        onPress: navigation.goBack
      }
    }
  }

  if (typeof centerComponent == "string") {
    centerComponent = {
      text: centerComponent,
      style: {
        color: '#ffffff'
      }
    }
  }

  return (
    <Header
      {...args}
      leftComponent={leftComponent}
      centerComponent={centerComponent}
      rightComponent={rightComponent}
    />
  )
}

export default CustomHeader;