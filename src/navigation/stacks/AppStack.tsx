import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fonts, colors } from '../../theme';

import { AppStackScreens } from '../enums';
import { HomeScreen } from '../../screens';

import HomeScreenHeader from '../../components/HomeScreenHeader';

const Stack = createNativeStackNavigator();

const AppStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppStackScreens.Home}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
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
          header: props => <HomeScreenHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export const APP_STACK = 'AppStack';

export default AppStack;
