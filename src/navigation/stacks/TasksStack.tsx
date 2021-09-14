import React, { FC } from 'react';
import { colors } from '../../theme';
import { fontFamilyRegular } from '../../theme/fonts';
import { createStackNavigator } from '@react-navigation/stack';

import { BackButton } from '../../ui-kit/Buttons';

import { TasksStackScreens } from '../enums';
import { TaskDetailsScreen, TaskInProgressScreen, TasksScreen } from '../../screens/tasks';
import { BaseScreenProps } from '../props';
import { TasksStackParamList } from '../params';

const Stack = createStackNavigator<TasksStackParamList>();

const TasksStack: FC<BaseScreenProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName={TasksStackScreens.Tasks}
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
        name={TasksStackScreens.Tasks}
        component={TasksScreen}
        options={{
          title: 'Задачи',
          headerLeft: null,
        }}
      />

      <Stack.Screen
        name={TasksStackScreens.TaskDetails}
        component={TaskDetailsScreen}
        options={({ route }) => ({
          title: `Рейс ID ${route.params.id}`,
          headerTitleAlign: 'center',
        })}
        initialParams={{
          id: null,
        }}
      />

      <Stack.Screen
        name={TasksStackScreens.TaskInProgress}
        component={TaskInProgressScreen}
        options={({ route }) => ({
          title: `Рейс ID ${route.params.id}`,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            width: '100%',
            fontSize: 16,
            fontFamily: fontFamilyRegular,
          },
        })}
        initialParams={{
          id: null,
        }}
      />
    </Stack.Navigator>
  );
};

export const TASKS_STACK = 'TasksStack';

export default TasksStack;
