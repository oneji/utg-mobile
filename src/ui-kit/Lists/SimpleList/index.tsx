import React, { FC } from 'react';
import { StyleSheet, View, ViewProps, Text } from 'react-native';
import { fonts } from '../../../theme';

import SimpleListItem from './components/SimpleListItem';

export interface SimpleListProps extends ViewProps {
  title?: string;
}

const SimpleList: FC<SimpleListProps> & {
  Item: typeof SimpleListItem;
} = ({ title, children, style, ...otherProps }) => {
  return (
    <View style={style} {...otherProps}>
      {title && <Text style={styles.title}>{title}</Text>}

      {children}
    </View>
  );
};

SimpleList.Item = SimpleListItem;

export default SimpleList;

const styles = StyleSheet.create({
  title: {
    ...fonts.titleBold,
    marginBottom: 15,
  },
});
