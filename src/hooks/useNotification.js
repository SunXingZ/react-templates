import { useEffect, useState } from 'react';
import { NativeAppEventEmitter } from 'react-native';
import Getui from '@sunxingzhe/react-native-getui';
import { DeviceConfigs } from '../configs';

const useNotification = () => {
	const [clientid, setClientid] = useState('');
	const [notification, setNotification] = useState({
		count: 0,
		unread: 0,
		data: []
	});

	useEffect(() => {
		let clickRemoteNotification = null;
		let receiveRemoteNotification = null;

		Getui.clientId((clientid) => {
			setClientid(clientid);
		});

		if (DeviceConfigs.platform == 'ios') {
			clickRemoteNotification = NativeAppEventEmitter.addListener('GT_CLICK_REMOTE_NOTIFICATION', (response) => {
				setNotification((oldState) => ({
					...oldState,
					count: oldState.count++,
					data: oldState.data.push({ type: 'click', response })
				}));
			});
		}

		receiveRemoteNotification = NativeAppEventEmitter.addListener('GT_RECEIVE_REMOTE_NOTIFICATION', (response) => {
			setNotification((oldState) => ({
				count: oldState.count++,
				unread: oldState.unread++,
				data: oldState.data.push({ type: 'receive', response })
			}));
		});

		return () => {
			clickRemoteNotification && clickRemoteNotification.remove();
			receiveRemoteNotification && receiveRemoteNotification.remove();
		};
	}, []);

	return {
		clientid,
		notification
	};
};

export default useNotification;
