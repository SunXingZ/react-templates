import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { CustomHeader, CustomContent } from '../../components';

const MinePage = (props) => {
	const { navigation } = props;
	return (
		<CustomContent Header={<CustomHeader centerComponent="我的" />}>
			<Text>Mine!</Text>
			<Button
				title="去设置页"
				containerStyle={{
					marginTop: 150,
					marginLeft: 16,
					marginRight: 16
				}}
				onPress={() => navigation.navigate('Settings')}
			/>
		</CustomContent>
	);
};

export default MinePage;
