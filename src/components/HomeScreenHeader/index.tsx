import React, { FC } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { ParamListBase, Route } from '@react-navigation/native';
import { NativeStackNavigationOptions, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { layout } from '../../theme';

import Icon from '../../ui-kit/Icon';
import UserAvatar from '../User/UserAvatar';

export interface HomeScreenHeaderProps {
  back?: {
    title: string;
  };
  options: NativeStackNavigationOptions;
  route: Route<string, object>;
  navigation: NativeStackNavigationProp<ParamListBase, string>;
}

const HEADER_LEFT_SIZE = 26;

const HomeScreenHeader: FC<HomeScreenHeaderProps> = ({ options }) => {
  return (
    <View style={[styles.container, options.headerStyle]}>
      <View
        style={{
          width: HEADER_LEFT_SIZE,
          height: HEADER_LEFT_SIZE,
        }}
      />

      <View style={styles.logoContainer}>
        <Icon name="logo" />
      </View>

      {/* TODO: Right user avatar press handler */}
      <UserAvatar onPress={() => {}} />
    </View>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  container: {
    ...layout.rowSpaceBetween,
    paddingHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    height: 50,
  },
  logoContainer: {
    ...layout.rowAlignCenter,
    flexGrow: 1,
  },
});
