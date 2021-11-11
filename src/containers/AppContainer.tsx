import React, { FC, useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { colors } from '../theme';

import { AppStack, TasksStack, APP_STACK, TASKS_STACK, POO_STACK, PooStack, AUTH_STACK } from '../navigation/stacks';
import { AuthStackScreens } from '../navigation/enums';
import { isReadyRef, navigationRef } from '../navigation/RootNavigation';
import { useAppStore, useUserStore } from '../store/hooks';
import SpinnerLoading from '../ui-kit/SpinnerLoading';
import { observer } from 'mobx-react';
import { NotificationAlert } from '../ui-kit/Alerts';

enableScreens();
const Stack = createStackNavigator();

const AppContainer: FC = () => {
  const { notificationAlert } = useAppStore();
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
    const WORKER_TKO = 2;
    const WORKER_IN_CAR = 9;
    getUserInfoById(WORKER_TKO);
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
        <Stack.Screen name={POO_STACK} component={PooStack} />
        <Stack.Screen name={TASKS_STACK} component={TasksStack} />
      </Stack.Navigator>

      {/* Notification */}
      <NotificationAlert {...notificationAlert} position="top" />
    </NavigationContainer>
  );
};

export default observer(AppContainer);

const styles = StyleSheet.create({});
