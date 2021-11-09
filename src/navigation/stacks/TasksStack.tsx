import React, { FC } from 'react';
import { colors } from '../../theme';
import { fontFamilyRegular } from '../../theme/fonts';
import { createStackNavigator } from '@react-navigation/stack';

import { BackButton } from '../../ui-kit/Buttons';

import { TasksStackScreens } from '../enums';
import {
  TaskDetailsScreen,
  TaskInProgressScreen,
  TasksScreen,
  TaskReportScreen,
  TaskReportSignScreen,
  TasksSearchScreen,
} from '../../screens/tasks';
import { BaseScreenProps } from '../props';
import { TasksStackParamList } from '../params';
import { getMaintenanceItemNameByType } from '../../utils';
import { MaintenanceScreen } from '../../screens/maintenance';
import { IconButton } from 'react-native-paper';
import { useTasksStore, useUserStore } from '../../store/hooks';
import { observer } from 'mobx-react-lite';
import { Text } from 'react-native';
import { SearchBar } from '../../ui-kit/Forms';
import { UserRolesEnum } from '../../services/data';

const Stack = createStackNavigator<TasksStackParamList>();

const TasksStack: FC<BaseScreenProps> = ({ navigation }) => {
  const { isSearchEnabled, setIsSearchEnabled } = useTasksStore();
  const { user } = useUserStore();

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
          headerRight: () => {
            return !isSearchEnabled && user?.role === UserRolesEnum.WorkerTKO ? (
              <IconButton
                icon="magnify"
                onPress={() => navigation.navigate(TasksStackScreens.TasksSearch as any)}
                size={24}
                style={{
                  borderRadius: 100,
                }}
                color={colors.violet.primary}
              />
            ) : null;
          },
        }}
      />

      <Stack.Screen
        name={TasksStackScreens.TasksSearch}
        component={TasksSearchScreen}
        options={{
          headerLeft: ({ onPress }) => (
            <IconButton
              icon="arrow-left"
              onPress={onPress}
              size={24}
              style={{
                borderRadius: 100,
              }}
              color={colors.violet.primary}
            />
          ),
          headerRight: null,
        }}
      />

      <Stack.Screen
        name={TasksStackScreens.TaskDetails}
        component={TaskDetailsScreen}
        options={({ route }) => ({
          title: `Рейс ID ${route.params.numberOfFlight}`,
          headerTitleAlign: 'center',
        })}
        initialParams={{
          id: null,
          numberOfFlight: '',
        }}
      />

      <Stack.Screen
        name={TasksStackScreens.TaskInProgress}
        component={TaskInProgressScreen}
        options={({ route }) => ({
          title: `Рейс ID ${route.params.numberOfFlight}`,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            width: '100%',
            fontSize: 16,
            fontFamily: fontFamilyRegular,
          },
        })}
        initialParams={{
          id: null,
          numberOfFlight: '',
        }}
      />

      <Stack.Screen
        name={TasksStackScreens.Maintenance}
        component={MaintenanceScreen}
        options={({ route }) => ({
          title: `${getMaintenanceItemNameByType(route.params.type)}`,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            width: '100%',
            fontSize: 16,
            fontFamily: fontFamilyRegular,
          },
        })}
        initialParams={{
          type: null,
        }}
      />

      <Stack.Screen
        name={TasksStackScreens.TaskReport}
        component={TaskReportScreen}
        options={({ route }) => ({
          title: `Отчет по рейсу ID ${route.params.id}`,
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

      <Stack.Screen
        name={TasksStackScreens.TaskReportSign}
        component={TaskReportSignScreen}
        options={({ route }) => ({
          title: `Отчет по рейсу ID ${route.params.id}`,
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

export default observer(TasksStack);
