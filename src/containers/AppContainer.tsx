import React, { FC } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { colors } from '../theme';

import { AppStack } from '../navigation/stacks';
import { APP_STACK } from '../navigation/stacks/AppStack';
import RequestsStack, { TASKS_STACK } from '../navigation/stacks/TasksStack';

enableScreens();
const Stack = createStackNavigator();

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
        <Stack.Screen name={TASKS_STACK} component={RequestsStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;

const styles = StyleSheet.create({});
