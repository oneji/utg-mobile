import React, { FC, useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StoreProvider } from './src/store';

import SplashScreen from 'react-native-splash-screen';
import AppContainer from './src/containers/AppContainer';
import { ErrorBoundary } from './src/components/Errors';

import { ReactNativeKeycloakProvider } from './src/keycloak';
import keycloak from './src/keycloak-auth';

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{
        redirectUri: 'myapp://homepage',
        inAppBrowserOptions: {},
      }}
      onEvent={(event, error) => {
        console.log('onKeycloakEvent', event, error);
      }}
    >
      <ErrorBoundary>
        <StoreProvider>
          <PaperProvider>
            <AppContainer />
          </PaperProvider>
        </StoreProvider>
      </ErrorBoundary>
    </ReactNativeKeycloakProvider>
  );
};

export default App;
