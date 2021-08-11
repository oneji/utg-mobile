import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { colors, layout } from '../theme';

import Icon from '../ui-kit/Icon';

const AppContainer: FC = () => {
  return (
    <NavigationContainer>
      <View
        style={{
          ...layout.screenContainer,
          padding: 20,
          backgroundColor: colors.background,
        }}
      >
        <Icon name="logo" />
      </View>
    </NavigationContainer>
  );
};

export default AppContainer;

const styles = StyleSheet.create({});
