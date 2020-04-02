import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import { CustomHeader, CustomContent } from "../../components";

const MinePage = (props) => {
  const { navigation } = props;
  return (
    <CustomContent
      Header={
        <CustomHeader
          centerComponent="我的"
        />
      }
    >
      <Text>Mine!</Text>
    </CustomContent>
  )
}

export default MinePage;