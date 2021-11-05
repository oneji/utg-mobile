import React, { FC, useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StoreProvider } from './src/store';

import SplashScreen from 'react-native-splash-screen';
import AppContainer from './src/containers/AppContainer';
import { ReactNativeKeycloakProvider } from '@react-keycloak/native';
import keycloak from './src/keycloak';

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const handleOnEvent = (event: any, error: any) => {
    console.log('onKeycloakEvent', {
      error,
      event,
    });
  };

  return (
    <ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{
        redirectUri: 'clients://home', // 'https://clients.dev.utg.group',
        inAppBrowserOptions: {
          // For iOS check: https://github.com/proyecto26/react-native-inappbrowser#ios-options
          // For Android check: https://github.com/proyecto26/react-native-inappbrowser#android-options
        },
      }}
      onEvent={handleOnEvent}
      onTokens={tokens => console.log({ tokens })}
    >
      <StoreProvider>
        <PaperProvider>
          <AppContainer />
        </PaperProvider>
      </StoreProvider>
    </ReactNativeKeycloakProvider>
  );
};

export default App;
