/**
 * @format
 */

import { AppRegistry } from 'react-native';
import LaunchPage from './src/page/main/launch/index'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => LaunchPage);
