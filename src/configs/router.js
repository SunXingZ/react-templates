import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Avatar, Icon, ListItem, Button } from 'react-native-elements';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as DeviceConfigs from './device';

import { DrawerPages, StackPages } from '../pages';

const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();

const AppTransitionConfig = () => {
	let config = TransitionPresets.DefaultTransition;
	const platform = DeviceConfigs.platform;
	if (platform == 'ios') {
		config = TransitionPresets.SlideFromRightIOS;
	}
	if (platform == 'android') {
		config = TransitionPresets.ScaleFromCenterAndroid;
	}
	return config || {};
};

const DrawerMenus = [
	{
		name: '我的',
		icon: 'person',
		page: 'Mine',
		rightTitle: ''
	},
	{
		name: '设置',
		icon: 'settings',
		page: 'Settings',
		rightTitle: ''
	}
];

const DrawerHeaderStyles = StyleSheet.create({
	container: {
		paddingTop: 30,
		paddingBottom: 30,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 18,
		color: '#666666',
		paddingTop: 15
	}
});

const DrawerHeader = () => {
	return (
		<View style={DrawerHeaderStyles.container}>
			<Avatar
				size="large"
				source={{
					uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
				}}
				showEditButton
			/>
			<Text style={DrawerHeaderStyles.title}>Drawer Template!</Text>
		</View>
	);
};

const DrawerContent = (props) => {
	const { navigation } = props;
	return (
		<SafeAreaView>
			<ScrollView>
				<DrawerHeader />
				{DrawerMenus.map((menu) => {
					return (
						<ListItem
							key={menu.name}
							leftIcon={<Icon name={menu.icon} />}
							rightIcon={<Icon name="arrow-forward" />}
							title={menu.name}
							onPress={() => navigation.navigate(menu.page)}
						/>
					);
				})}
				<Button
					title="退出登录"
					containerStyle={{
						marginLeft: 16,
						marginRight: 16,
						marginTop: 150
					}}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

const DrawerScreen = () => {
	return (
		<Drawer.Navigator
			initialRouteName="Home"
			drawerPosition="left"
			drawerType="front"
			drawerStyle={{
				backgroundColor: '#ffffff'
			}}
			screenOptions={({ route }) => ({})}
			drawerContent={(props) => <DrawerContent {...props} />}>
			{DrawerPages.map((item) => {
				return (
					<Drawer.Screen
						name={item.name}
						key={item.name}
						component={item.page}
						options={{
							title: item.title || ''
						}}
					/>
				);
			})}
		</Drawer.Navigator>
	);
};

const RootScreen = () => {
	return (
		<RootStack.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				...AppTransitionConfig()
			})}>
			<RootStack.Screen name="Drawer" component={DrawerScreen} />
			{StackPages.map((item) => {
				return (
					<RootStack.Screen
						name={item.name}
						key={item.name}
						component={item.page}
						options={{
							title: item.title || ''
						}}
					/>
				);
			})}
		</RootStack.Navigator>
	);
};

function AppRouter(props) {
	return (
		<NavigationContainer {...props}>
			<RootScreen />
		</NavigationContainer>
	);
}

export default AppRouter;
