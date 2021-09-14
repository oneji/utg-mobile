import React, { FC, useEffect, useCallback } from 'react';
import { StyleSheet } from 'react-native';

import { ScrollViewContainer } from '../../ui-kit/Containers';
import SpinnerLoading from '../../ui-kit/SpinnerLoading';
import TaskItem from '../../components/Tasks/TaskItem';

import { TasksScreenProps } from '../../navigation/props';
import { observer } from 'mobx-react';
import { useTasksStore } from '../../store/hooks';
import { TasksStackScreens } from '../../navigation/enums';

const TasksScreen: FC<TasksScreenProps> = ({ navigation }) => {
  const { loading, noSignTasks, getNoSignTasks } = useTasksStore();

  useEffect(() => {
    getNoSignTasks();
  }, []);

  const handleOnTaskItemPress = useCallback(
    (id: number) => {
      const taskItem = noSignTasks.find(item => item.id === id);

      if (taskItem) {
        navigation.navigate(
          taskItem.status === 'pending' ? TasksStackScreens.TaskDetails : TasksStackScreens.TaskInProgress,
          {
            id,
          }
        );
      }
    },
    [noSignTasks]
  );

  if (loading) return <SpinnerLoading />;

  return (
    <ScrollViewContainer>
      {noSignTasks.map(item => (
        <TaskItem key={item.id} item={item} onPress={handleOnTaskItemPress} />
      ))}
    </ScrollViewContainer>
  );
};

const styles = StyleSheet.create({});

export default observer(TasksScreen);
