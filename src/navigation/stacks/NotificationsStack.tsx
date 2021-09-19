import React, { FC } from 'react';
import { colors } from '../../theme';
import { fontFamilyRegular } from '../../theme/fonts';
import { createStackNavigator } from '@react-navigation/stack';

import { BackButton } from '../../ui-kit/Buttons';

import { NotificationsStackScreens } from '../enums';
import { NotificationDetailsScreen, NotificationsScreen } from '../../screens/notifications';
import { NotificationsStackParamList } from '../params';
import { IconButton } from 'react-native-paper';

const Stack = createStackNavigator<NotificationsStackParamList>();

const NotificationsStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={NotificationsStackScreens.Notifications}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontSize: 16,
          fontFamily: fontFamilyRegular,
        },
        headerLeft: ({ onPress }) => <BackButton onPress={onPress} />,
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Stack.Screen
        name={NotificationsStackScreens.Notifications}
        component={NotificationsScreen}
        options={{
          title: 'Экстренное оповещение',
          headerLeft: null,
        }}
      />

      <Stack.Screen
        name={NotificationsStackScreens.NotificationDetails}
        component={NotificationDetailsScreen}
        options={{
          title: 'Экстренное оповещение',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.red.primary,
          },
          headerLeft: ({ onPress }) => (
            <IconButton
              icon="close"
              onPress={onPress}
              size={24}
              style={{
                borderRadius: 100,
              }}
              color={colors.white}
            />
          ),
        }}
        initialParams={{
          id: null,
        }}
      />
    </Stack.Navigator>
  );
};

export const NOTIFICATIONS_STACK = 'NotificationsStack';

export default NotificationsStack;
