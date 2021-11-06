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
import { useFlightsStore } from '../../store/hooks';

const Stack = createStackNavigator<PooStackParamList>();

const PooStack: FC = () => {
  const { currentFlight } = useFlightsStore();

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
          title: `ПОО ВС рейс ID ${currentFlight.numberOfFlight}`,
          headerTitleAlign: 'center',
        })}
        initialParams={{
          id: null,
        }}
      />

      <Stack.Screen
        name={PooStackScreens.PooSign}
        component={PooSignScreen}
        options={{
          title: 'Подпись заказчика',
          headerTitleAlign: 'center',
        }}
        initialParams={{
          id: null,
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
          title: `ПОО ВС рейс ID ${route.params.numberOfFlight}`,
          headerTitleAlign: 'center',
        })}
        initialParams={{
          numberOfFlight: '',
          deicingTreatmentId: null,
        }}
      />
    </Stack.Navigator>
  );
};

export const POO_STACK = 'PooStack';

export default PooStack;
