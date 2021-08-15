import React, { FC, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors, fonts } from '../../theme';

import NoSignTasks from '../../components/Tasks/NoSignTasks';
import ScrollViewContainer from '../../ui-kit/Containers/ScrollViewContainer';
import SpinnerLoading from '../../ui-kit/SpinnerLoading';

import { BaseScreenProps } from '../../navigation/props';
import { observer } from 'mobx-react';
import { useTasksStore } from '../../store/hooks';

const Tab = createMaterialTopTabNavigator();

const CurrentTasks = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ ...fonts.paragraphBold, textAlign: 'center' }}>ЗДЕСЬ БУДЕТ КАЛЕНДАРЬ С ТЕКУЩИМИ ЗАЯВКАМИ</Text>
  </View>
);

const TasksScreen: FC<BaseScreenProps> = () => {
  const { loading, noSignTasks, getNoSignTasks } = useTasksStore();

  useEffect(() => {
    getNoSignTasks();
  }, []);

  if (loading) return <SpinnerLoading />;

  const NoSignTasksWithItems = () => <NoSignTasks items={noSignTasks} />;

  return (
    <ScrollViewContainer contentContainerStyle={{ padding: 0, minHeight: '100%' }}>
      <Tab.Navigator
        initialLayout={{
          width: Dimensions.get('window').width,
        }}
        sceneContainerStyle={{
          flexGrow: 1,
        }}
        tabBarOptions={{
          indicatorStyle: {
            backgroundColor: colors.blue.primary,
          },
          labelStyle: {
            ...fonts.paragraphMedium,
            textTransform: 'capitalize',
          },
          style: {
            backgroundColor: colors.background,
          },
          activeTintColor: colors.white,
          inactiveTintColor: colors.violet.primary,
        }}
      >
        <Tab.Screen
          name="CurrentTasks"
          component={CurrentTasks}
          options={{
            tabBarLabel: 'Текущие',
          }}
        />

        <Tab.Screen
          name="NoSignTasks"
          component={NoSignTasksWithItems}
          options={{
            tabBarLabel: 'Без подписи',
          }}
        />
      </Tab.Navigator>
    </ScrollViewContainer>
  );
};

const styles = StyleSheet.create({});

export default observer(TasksScreen);
