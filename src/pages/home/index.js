import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { CustomHeader, CustomContent } from '../../components';

const HomePage = (props) => {
	const { navigation } = props;

	return (
		<CustomContent
			Header={
				<CustomHeader
					leftComponent={{
						icon: 'menu',
						color: '#fff',
						onPress: navigation.toggleDrawer
					}}
					centerComponent="首页"
				/>
			}>
			<Text>Home!</Text>
		</CustomContent>
	);
};

export default HomePage;
