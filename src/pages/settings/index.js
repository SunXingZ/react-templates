import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { CustomHeader, CustomContent } from '../../components';

const SettingsPage = (props) => {
	const { navigation } = props;
	return (
		<CustomContent Header={<CustomHeader centerComponent="设置" />}>
			<Text>SettingsPage!</Text>
		</CustomContent>
	);
};

export default SettingsPage;
