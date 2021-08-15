import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { fonts, colors } from '../../theme';

import { AppStackScreens } from '../enums';
import { HomeScreen } from '../../screens';

import HomeScreenHeader from '../../components/HomeScreenHeader';

const Stack = createStackNavigator();

const AppStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppStackScreens.Home}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          elevation: 0, // Убрать тени Android
          shadowOpacity: 0, // Убрать тени IOS
        },
        headerTitleStyle: {
          ...fonts.titleRegular,
          color: colors.white,
        },
      }}
    >
      <Stack.Screen
        name={AppStackScreens.Home}
        component={HomeScreen}
        options={{
          header: HomeScreenHeader,
        }}
      />
    </Stack.Navigator>
  );
};

export const APP_STACK = 'AppStack';

export default AppStack;
