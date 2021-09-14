import React, { FC, useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StoreProvider } from './src/store';

import SplashScreen from 'react-native-splash-screen';
import AppContainer from './src/containers/AppContainer';

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <StoreProvider>
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
