import React, { FC, useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StoreProvider } from './src/store';

import SplashScreen from 'react-native-splash-screen';
import AppContainer from './src/containers/AppContainer';
import { ReactNativeKeycloakProvider } from '@react-keycloak/native';
import keycloak from './src/keycloak';
import { ErrorBoundary } from './src/components/Errors';

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const handleOnEvent = (event: any, error: any) => {};

  return (
    <ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{
        redirectUri: 'clients://home', // 'https://clients.dev.utg.group',
      }}
      onEvent={handleOnEvent}
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
