import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { CustomHeader, CustomContent } from '../../components';

const HomePage = (props) => {
	const { navigation } = props;

	return (
		<CustomContent Header={<CustomHeader centerComponent="首页" />}>
			<Text>Home!</Text>
			<Button
				title="去登录页"
				containerStyle={{
					marginTop: 150,
					marginLeft: 16,
					marginRight: 16
				}}
				onPress={() => navigation.navigate('Login')}
			/>
		</CustomContent>
	);
};

export default HomePage;
