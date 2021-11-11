import React, { FC, useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StoreProvider } from './src/store';

import SplashScreen from 'react-native-splash-screen';
import AppContainer from './src/containers/AppContainer';
import { ErrorBoundary } from './src/components/Errors';

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ErrorBoundary>
      <StoreProvider>
        <PaperProvider>
          <AppContainer />
        </PaperProvider>
      </StoreProvider>
    </ErrorBoundary>
  );
};

export default App;
