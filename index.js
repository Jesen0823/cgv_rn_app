/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import App from './src/navigation/index';
//import App from './src/demo/react-native-tab-view-demo';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
