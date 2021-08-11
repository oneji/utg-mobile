import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Switch from '../ui-kit/Switch';
import { useState } from 'react';
import { colors } from '../theme';

const AppContainer: FC = () => {
  const [state, setState] = useState(false);

  return (
    <NavigationContainer>
      <View
        style={{
          padding: 20,
        }}
      >
        <Switch value={state} onChange={() => setState(prev => !prev)} />
      </View>
    </NavigationContainer>
  );
};

export default AppContainer;

const styles = StyleSheet.create({});
