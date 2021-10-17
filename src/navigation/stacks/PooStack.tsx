import React, { FC } from 'react';
import { colors } from '../../theme';
import { fontFamilyRegular } from '../../theme/fonts';
import { createStackNavigator } from '@react-navigation/stack';

import { BackButton } from '../../ui-kit/Buttons';

import { PooStackScreens } from '../enums';
import {
  PooAgentScreen,
  PooEnterTransportNumberScreen,
  PooSignScreen,
  PooTransportEmployeeScreen,
} from '../../screens/poo';
import { PooStackParamList } from '../params';

const Stack = createStackNavigator<PooStackParamList>();

const PooStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={PooStackScreens.PooEnterTransportNumber}
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
        name={PooStackScreens.PooAgent}
        component={PooAgentScreen}
        options={({ route }) => ({
          title: `ПОО ВС рейс ID ${route.params.id}`,
          headerTitleAlign: 'center',
        })}
        initialParams={{
          id: 232,
        }}
      />

      <Stack.Screen
        name={PooStackScreens.PooSign}
        component={PooSignScreen}
        options={{
          title: 'Подпись заказчика',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name={PooStackScreens.PooEnterTransportNumber}
        component={PooEnterTransportNumberScreen}
        options={{
          title: 'ПОО номер машины',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name={PooStackScreens.PooTransportEmployee}
        component={PooTransportEmployeeScreen}
        options={({ route }) => ({
          title: `ПОО ВС рейс ID ${route.params.id}`,
          headerTitleAlign: 'center',
        })}
        initialParams={{
          id: 232,
        }}
      />
    </Stack.Navigator>
  );
};

export const POO_STACK = 'PooStack';

export default PooStack;
