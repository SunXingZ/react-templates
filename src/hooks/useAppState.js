import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

const useAppState = () => {
	const [state, setState] = useState(AppState.currentState);
	let isMount = true;

	useEffect(() => {
		const handleAppStateChange = (nextAppState) => {
			isMount && setState(nextAppState);
		};

		AppState.addEventListener('change', handleAppStateChange);

		return () => {
			isMount = false;
			AppState.removeEventListener('change', handleAppStateChange);
		};
	}, []);

	return state;
};

export default useAppState;
