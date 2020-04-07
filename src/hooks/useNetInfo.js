import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

const useNetInfo = () => {
	const [state, setState] = useState({
		type: null,
		isConnected: true,
		isInternetReachable: false,
		isWifiEnabled: false,
		details: null
	});
	let isMount = true;

	useEffect(() => {
		let unsubscribeNetInfo = null;

		const handleNetConnectChange = (state) => {
			isMount && setState(state);
		};
		unsubscribeNetInfo = NetInfo.addEventListener(handleNetConnectChange);

		return () => {
			isMount = false;
			if (unsubscribeNetInfo) {
				unsubscribeNetInfo();
			}
		};
	}, []);

	return state;
};

export default useNetInfo;
