/**
 * @format
 */
import { AppRegistry, UIManager } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

// 要在Android上使用LayoutAnimation需开启
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent(appName, () => App);
