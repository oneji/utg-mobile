import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, layout } from '../theme';

import Icon from '../ui-kit/Icon';
import Widget from '../components/Widget';

import { BaseScreenProps } from '../navigation/props';
import { TASKS_STACK } from '../navigation/stacks/TasksStack';

const HomeScreen: FC<BaseScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Widget
        label="Задачи на сегодня"
        counter={10}
        icon={<Icon name="sticker" />}
        onPress={() => navigation.navigate(TASKS_STACK as any)}
      />
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
