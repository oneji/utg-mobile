import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, layout } from '../theme';

import Icon from '../ui-kit/Icon';
import Widget from '../components/Widget';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Widget label="Задачи на сегодня" counter={10} icon={<Icon name="sticker" />} onPress={() => {}} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    ...layout.screenContainer,
    backgroundColor: colors.background,
  },
});
