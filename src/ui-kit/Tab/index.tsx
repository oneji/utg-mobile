import React, { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';
import { createMaterialTopTabNavigator, MaterialTopTabBarOptions } from '@react-navigation/material-top-tabs';

import { SCREEN_WIDTH } from '../../utils';

const MaterialTopTab = createMaterialTopTabNavigator();

export interface TabProps {
  children: ReactNode;
  options?: MaterialTopTabBarOptions;
}

const Tab: FC<TabProps> & {
  Item: typeof MaterialTopTab.Screen;
} = ({ children, options }) => {
  return (
    <MaterialTopTab.Navigator
      initialLayout={{
        width: SCREEN_WIDTH,
      }}
      sceneContainerStyle={{
        flexGrow: 1,
        backgroundColor: colors.white,
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
        ...options,
      }}
    >
      {children}
    </MaterialTopTab.Navigator>
  );
};

Tab.Item = MaterialTopTab.Screen;

export default Tab;

const styles = StyleSheet.create({});
