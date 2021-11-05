import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { turnOnApiGlobalErrorHandling } from './src/services/errors';

import App from './App';
import BaseService from './src/services/BaseService';

import config from './src/config';

const startApp = async () => {
  turnOnApiGlobalErrorHandling();

  BaseService.apiPath = config.apiUrl;

  AppRegistry.registerComponent(appName, () => App);
};

export default startApp;
