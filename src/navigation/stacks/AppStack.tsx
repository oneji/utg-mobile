import React, { FC } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../theme';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabbarButton } from '../../ui-kit/Buttons';

import { AppStackScreens } from '../enums';
import TasksStack from './TasksStack';
import NotificationsStack from './NotificationsStack';
import FeedbackStack from './FeedbackStack';

const Tab = createBottomTabNavigator();

const getIconName = (routeName: string): string => {
  const iconsMap = {
    [AppStackScreens.TasksStack]: 'format-list-bulleted',
    [AppStackScreens.PhotofixationStack]: 'camera',
    [AppStackScreens.NotificationsStack]: 'bell-ring',
    [AppStackScreens.FeedbackStack]: 'pencil',
  };

  return iconsMap[routeName] ?? 'help-circle-outline';
};

interface Options {
  tabBarLabel: string;
  title: string;
}

const getTabBarLabel = (options: Options, routeName: string): string => {
  if (options.tabBarLabel !== undefined) {
    return options.tabBarLabel;
  } else {
    return options.title !== undefined ? options.title : routeName;
  }
};

const renderTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) return null;

  return (
    <View
      style={{
        borderTopWidth: 0.5,
        borderTopColor: colors.gray.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.white,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label: string = getTabBarLabel(options, route.name);
        const iconName: string = getIconName(route.name);
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabbarButton
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            label={label}
            icon={iconName}
            key={index}
          />
        );
      })}
    </View>
  );
};

const AppStack: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string = getIconName(route.name);

          return <Icon name={iconName} color={color} size={24} />;
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: colors.white,
        activeTintColor: colors.blue.primary,
        tabStyle: {
          padding: 10,
          backgroundColor: colors.white,
        },
        style: {
          height: 70,
          backgroundColor: colors.white,
        },
      }}
      tabBar={renderTabBar}
    >
      <Tab.Screen name={AppStackScreens.TasksStack} component={TasksStack} options={{ tabBarLabel: 'Задачи' }} />

      <Tab.Screen
        name={AppStackScreens.PhotofixationStack}
        component={TasksStack}
        options={{ tabBarLabel: 'Фотофиксация' }}
      />

      <Tab.Screen
        name={AppStackScreens.NotificationsStack}
        component={NotificationsStack}
        options={{ tabBarLabel: 'Оповещения' }}
      />

      <Tab.Screen
        name={AppStackScreens.FeedbackStack}
        component={FeedbackStack}
        options={{ tabBarLabel: 'Обратная связь' }}
      />
    </Tab.Navigator>
  );
};

export const APP_STACK = 'AppStack';

export default AppStack;
