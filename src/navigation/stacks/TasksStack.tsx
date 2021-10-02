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
} from '../../screens/tasks';
import { BaseScreenProps } from '../props';
import { TasksStackParamList } from '../params';
import { getMaintenanceItemNameByType } from '../../utils';
import { MaintenanceScreen } from '../../screens/maintenance';
import { IconButton, Searchbar } from 'react-native-paper';
import { useTasksStore } from '../../store/hooks';
import { observer } from 'mobx-react-lite';
import { Text, View } from 'react-native';
import { SearchBar } from '../../ui-kit/Forms';

const Stack = createStackNavigator<TasksStackParamList>();

const TasksStack: FC<BaseScreenProps> = () => {
  const { isSearchEnabled, setIsSearchEnabled } = useTasksStore();

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
          headerTitle: ({ style, tintColor }) => {
            return isSearchEnabled ? (
              <SearchBar />
            ) : (
              <Text
                style={{
                  ...(style as object),
                  color: tintColor,
                }}
              >
                Задачи
              </Text>
            );
          },
          headerLeft: () => {
            return (
              isSearchEnabled && (
                <IconButton
                  icon="arrow-left"
                  onPress={() => setIsSearchEnabled(false)}
                  size={24}
                  style={{
                    borderRadius: 100,
                  }}
                  color={colors.violet.primary}
                />
              )
            );
          },
          headerRight: () => {
            return (
              !isSearchEnabled && (
                <IconButton
                  icon="magnify"
                  onPress={() => setIsSearchEnabled(true)}
                  size={24}
                  style={{
                    borderRadius: 100,
                  }}
                  color={colors.violet.primary}
                />
              )
            );
          },
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
