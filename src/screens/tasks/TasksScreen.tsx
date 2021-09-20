import React, { FC, useEffect, useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ScrollViewContainer } from '../../ui-kit/Containers';
import SpinnerLoading from '../../ui-kit/SpinnerLoading';
import TaskItem from '../../components/Tasks/TaskItem';

import { TasksScreenProps } from '../../navigation/props';
import { observer } from 'mobx-react';
import { useTasksStore } from '../../store/hooks';
import { TasksStackScreens } from '../../navigation/enums';
import { colors, fontFamilyRegular, layout } from '../../theme';
import { TasksCalendar } from '../../components/Tasks';

const times = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
  '00:00',
];

const TasksScreen: FC<TasksScreenProps> = ({ navigation }) => {
  const { loading, noSignTasks, getNoSignTasks } = useTasksStore();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getNoSignTasks();
  }, []);

  if (loading) return <SpinnerLoading />;

  return (
    <ScrollViewContainer noPadding>
      <TasksCalendar tasks={noSignTasks} />
    </ScrollViewContainer>
  );
};

const styles = StyleSheet.create({});

export default observer(TasksScreen);
