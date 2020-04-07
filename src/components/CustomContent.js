import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { AppConfigs } from '../configs';
import { StateScreen } from './index';
import { useNetInfo } from '../hooks';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff'
	},
	content: {
		flex: 1,
		backgroundColor: '#f6f7f9'
	}
});

const CustomContent = (props) => {
	const { Header = null, contentStyle = {}, containerStyle = {}, ...args } = props;
	let initErrorConfigs = {};
	const [error, setError] = useState(false);
	const [errorConfigs, setErrorConfigs] = useState(initErrorConfigs);
	const netInfo = useNetInfo();

	useEffect(() => {
		setError(!netInfo.isConnected);
		if (!netInfo.isConnected) {
			setErrorConfigs({
				image: AppConfigs.app_network_error,
				text: '网络连接似乎断开了...',
				buttonText: '刷新',
				buttonHandle: () => {
					alert('刷新');
				}
			});
		} else {
			setErrorConfigs(initErrorConfigs);
		}
	}, [netInfo.isConnected]);

	const onScrollEndDrag = (e) => {
		console.log(e);
	};

	return (
		<View style={[styles.container, containerStyle]}>
			{Header ? Header : null}
			{error ? (
				<StateScreen
					image={errorConfigs.image}
					text={errorConfigs.text}
					buttonText={errorConfigs.buttonText}
					onButtonPress={errorConfigs.buttonHandle}
				/>
			) : (
				<ScrollView {...args} style={[styles.content, contentStyle]} onScrollEndDrag={onScrollEndDrag}>
					{props.children}
				</ScrollView>
			)}
		</View>
	);
};

export default CustomContent;
