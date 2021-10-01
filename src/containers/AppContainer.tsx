import React, { FC } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { colors, fonts } from '../theme';

import { AppStack, TasksStack, APP_STACK, TASKS_STACK, POO_STACK, PooStack } from '../navigation/stacks';
import FlashMessage from 'react-native-flash-message';

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
        <Stack.Screen name={TASKS_STACK} component={TasksStack} />
        <Stack.Screen name={POO_STACK} component={PooStack} />
      </Stack.Navigator>

      {/* Notification */}
      <FlashMessage position="top" floating textStyle={fonts.paragraphRegular} titleStyle={fonts.paragraphRegular} />
    </NavigationContainer>
  );
};

export default AppContainer;

const styles = StyleSheet.create({});
