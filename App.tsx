import React, { FC } from 'react';
import AppContainer from './src/containers/AppContainer';
import { Provider as PaperProvider } from 'react-native-paper';

const App: FC = () => {
  return (
    <PaperProvider>
      <AppContainer />
    </PaperProvider>
  );
};

export default App;
