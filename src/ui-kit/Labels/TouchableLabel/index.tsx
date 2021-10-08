import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, layout } from '../../../theme';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface TouchableLabelProps {
  children: string;
}

const TouchableLabel: FC<TouchableLabelProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={fonts.paragraphSemibold}>
          {children}
        </Text>

        <MaterialIcon name="chevron-right" color={colors.gray.primary} size={24} />
      </View>
    </View>
  );
};

export default TouchableLabel;

const styles = StyleSheet.create({
  container: {
    ...layout.rowAlignCenter,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.gray.primary,
    minWidth: 150,
  },
  innerContainer: {
    ...layout.rowSpaceBetween,
    paddingHorizontal: 15,
    flex: 1,
  },
});
