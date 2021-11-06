import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts, layout } from '../../../theme';

const NoTasks: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={fonts.bodyMedium}>Ничего не найдено</Text>
    </View>
  );
};

export default NoTasks;

const styles = StyleSheet.create({
  container: {
    ...layout.rowAlignCenter,
    flex: 1,
  },
});
