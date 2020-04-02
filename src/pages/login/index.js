import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import { CustomHeader, CustomContent } from "../../components";

const LoginPage = (props) => {
  const { navigation } = props;
  return (
    <CustomContent
      Header={
        <CustomHeader
          centerComponent="登录"
        />
      }
    >
      <Text>Login!</Text>
    </CustomContent>
  )
}

export default LoginPage;