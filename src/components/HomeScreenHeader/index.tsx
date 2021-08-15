import React, { FC } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { colors, layout } from '../../theme';

import Icon from '../../ui-kit/Icon';
import UserAvatar from '../User/UserAvatar';

import { StackHeaderProps } from '@react-navigation/stack/lib/typescript/src/types';

const HEADER_LEFT_SIZE = 26;

const HomeScreenHeader: FC<StackHeaderProps> = () => {
  return (
    <View style={styles.container}>
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
    backgroundColor: colors.background,
  },
  logoContainer: {
    ...layout.rowAlignCenter,
    flexGrow: 1,
  },
});
