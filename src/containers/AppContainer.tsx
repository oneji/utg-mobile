import React, { FC, useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { colors, fonts } from '../theme';

import {
  AppStack,
  TasksStack,
  APP_STACK,
  TASKS_STACK,
  POO_STACK,
  PooStack,
  AUTH_STACK,
  AuthStack,
} from '../navigation/stacks';
import FlashMessage from 'react-native-flash-message';
import { AuthStackScreens } from '../navigation/enums';
import { isReadyRef, navigationRef } from '../navigation/RootNavigation';
import { useUserStore } from '../store/hooks';
import SpinnerLoading from '../ui-kit/SpinnerLoading';
import { observer } from 'mobx-react';

enableScreens();
const Stack = createStackNavigator();

const AppContainer: FC = () => {
  const { loading, getUserInfoById } = useUserStore();

  const linking: LinkingOptions = {
    prefixes: ['clients://'],
    config: {
      screens: {
        [AUTH_STACK]: {
          screens: {
            [AuthStackScreens.PasswordReset]: {
              path: 'home',
            },
          },
        },
      },
    },
  };

  useEffect(() => {
    // UTG-TODO: Update getting user info by token
    getUserInfoById(9);
  }, []);

  if (loading) return <SpinnerLoading />;

  return (
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      onReady={() => {
        (isReadyRef as any).current = true;
      }}
    >
      <StatusBar backgroundColor={colors.background} barStyle="light-content" />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name={AUTH_STACK} component={AuthStack} /> */}
        <Stack.Screen name={APP_STACK} component={AppStack} />
        <Stack.Screen name={TASKS_STACK} component={TasksStack} />
        <Stack.Screen name={POO_STACK} component={PooStack} />
      </Stack.Navigator>

      {/* Notification */}
      <FlashMessage position="top" floating textStyle={fonts.paragraphRegular} titleStyle={fonts.paragraphRegular} />
    </NavigationContainer>
  );
};

export default observer(AppContainer);

const styles = StyleSheet.create({});
