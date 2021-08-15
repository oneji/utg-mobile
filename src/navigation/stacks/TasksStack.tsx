import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { fonts, colors } from '../../theme';

import BackButton from '../../ui-kit/Buttons/BackButton';

import { TasksStackScreens } from '../enums';
import { TasksScreen } from '../../screens/tasks';
import { BaseScreenProps } from '../props';

const Stack = createStackNavigator();

const TasksStack: FC<BaseScreenProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName={TasksStackScreens.Tasks}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          elevation: 0, // Убрать тени Android
          shadowOpacity: 0, // Убрать тени IOS
        },
        headerTintColor: colors.white,
        headerTitleStyle: fonts.titleRegular,
        headerLeft: ({ onPress }) => <BackButton onPress={onPress} />,
      }}
    >
      <Stack.Screen
        name={TasksStackScreens.Tasks}
        component={TasksScreen}
        options={{
          title: 'Задачи',
        }}
      />
    </Stack.Navigator>
  );
};

export const TASKS_STACK = 'TasksStack';

export default TasksStack;
