import React from 'react';
import { Icon } from "react-native-elements";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as DeviceConfigs from "./device";

import { TabPages, StackPages } from "../pages";

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const AppTransitionConfig = () => {
  let config = TransitionPresets.DefaultTransition;
  const platform = DeviceConfigs.platform;
  if (platform == "ios") {
    config = TransitionPresets.SlideFromRightIOS;
  }
  if (platform == "android") {
    config = TransitionPresets.ScaleFromCenterAndroid;
  }
  return config || {};
}

const tabsImageComponent = (route, focused, color, size) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = `ios-home`;
  } else if (route.name === 'Mine') {
    iconName = `ios-person`;
  }

  return <Icon name={iconName} size={size} color={color} type="ionicon" />;
}

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => tabsImageComponent(route, focused, color, size),
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showIcon: true,
        allowFontScaling: false
      }}
      lazy={false}
    >
      {
        TabPages.map((item) => {
          return (
            <Tab.Screen
              name={item.name}
              key={item.name}
              component={item.page}
              options={{
                title: item.title || ""
              }}
            />
          )
        })
      }
    </Tab.Navigator>
  )
}

const RootScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        ...AppTransitionConfig()
      })}
    >
      <RootStack.Screen name="Tab" component={TabScreen} />
      {
        StackPages.map((item) => {
          return (
            <RootStack.Screen
              name={item.name}
              key={item.name}
              component={item.page}
              options={{
                title: item.title || ""
              }}
            />
          )
        })
      }
    </RootStack.Navigator>
  )
};

function AppRouter(props) {
  return (
    <NavigationContainer
      {...props}
    >
      <RootScreen />
    </NavigationContainer>
  )
}

export default AppRouter;