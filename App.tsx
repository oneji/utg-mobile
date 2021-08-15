import React, { FC } from 'react';
import AppContainer from './src/containers/AppContainer';
import { Provider as PaperProvider } from 'react-native-paper';
import { StoreProvider } from './src/store';

const App: FC = () => {
  return (
    <StoreProvider>
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
