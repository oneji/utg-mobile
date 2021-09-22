import React, { FC } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../../theme';

export interface SimpleListItemProps {
  title: string;
  value: string;
  titleStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
  hideBorder?: boolean;
}

const SimpleListItem: FC<SimpleListItemProps> = ({ title, value, titleStyle, valueStyle, hideBorder }) => {
  return (
    <View
      style={{
        ...styles.container,
        borderBottomWidth: !hideBorder ? 1 : 0,
      }}
    >
      <Text style={[fonts.paragraphRegular, titleStyle]}>{title}</Text>
      <Text style={[styles.value, valueStyle]}>{value}</Text>
    </View>
  );
};

export default SimpleListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomColor: colors.gray.secondary,
    borderBottomWidth: 1,
  },
  value: {
    ...fonts.paragraphSemibold,
    flexShrink: 1,
  },
});
