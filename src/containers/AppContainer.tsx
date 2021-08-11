import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { colors, fonts, layout } from '../theme';

import Divider from '../ui-kit/Divider';

const AppContainer: FC = () => {
  return (
    <NavigationContainer>
      <View
        style={{
          ...layout.screenContainer,
          padding: 20,
          backgroundColor: colors.white,
        }}
      >
        <Text style={fonts.paragraphRegular}>Компоненты</Text>
        <Divider />
      </View>
    </NavigationContainer>
  );
};

export default AppContainer;

const styles = StyleSheet.create({});
