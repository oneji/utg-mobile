import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { TaskSchema } from '../../../services/data';
import TaskItem from '../TaskItem';

export interface NoSignTasksProps {
  items: TaskSchema[];
}

const NoSignTasks: FC<NoSignTasksProps> = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map(item => (
        <TaskItem key={item.id} item={item} />
      ))}
    </View>
  );
};

export default NoSignTasks;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});
