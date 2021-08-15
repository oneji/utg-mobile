import React, { FC } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from '../theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppStack } from '../navigation/stacks';
import { APP_STACK } from '../navigation/stacks/AppStack';

const Stack = createNativeStackNavigator();

const AppContainer: FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.background} barStyle="light-content" />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={APP_STACK} component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;

const styles = StyleSheet.create({});
