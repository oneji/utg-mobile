import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { turnOnApiGlobalErrorHandling } from './src/services/errors';

import App from './App';

const startApp = async () => {
  turnOnApiGlobalErrorHandling();

  AppRegistry.registerComponent(appName, () => App);
};

export default startApp;
