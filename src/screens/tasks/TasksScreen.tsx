import React, { FC } from 'react';
import { View, StyleSheet, Text, Dimensions, Animated } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors, fonts } from '../../theme';

import NoSignTasks from '../../components/Tasks/NoSignTasks';
import ScrollViewContainer from '../../ui-kit/Containers/ScrollViewContainer';

import { BaseScreenProps } from '../../navigation/props';
import { noSignTasks } from '../../services/data/mocks/tasks';

const Tab = createMaterialTopTabNavigator();

const CurrentTasks = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1 }}>
    <Text style={fonts.paragraphBold}>ЗДЕСЬ БУДЕТ КАЛЕНДАРЬ С ТЕКУЩИМИ ЗАЯВКАМИ</Text>
  </View>
);

const RequestsScreen: FC<BaseScreenProps> = () => {
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

export default RequestsScreen;
