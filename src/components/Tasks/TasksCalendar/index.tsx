import React, { FC, useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fontFamilyBold } from '../../../theme';

import { TaskItem } from '..';

import { TaskSchema } from '../../../services/data';
import { getDayTimes } from '../../../utils';
import { useNavigation } from '@react-navigation/native';
import { TasksStackScreens } from '../../../navigation/enums';

export interface TasksCalendarProps {
  tasks: TaskSchema[];
}

const TasksCalendar: FC<TasksCalendarProps> = ({ tasks }) => {
  const navigation = useNavigation();
  const times = getDayTimes();
  const [formattedTasks, setFormattedTasks] = useState([]);

  useEffect(() => {
    setFormattedTasks(tasks);
  }, [tasks]);

  const handleOnTaskItemPress = useCallback(
    (id: number) => {
      const taskItem = tasks.find(item => item.id === id);
      const screenToNavigate =
        taskItem.status === 'pending' ? TasksStackScreens.TaskDetails : TasksStackScreens.TaskInProgress;

      if (taskItem) {
        navigation.navigate(screenToNavigate, {
          id,
        });
      }
    },
    [tasks]
  );

  return (
    <View style={styles.container}>
      {times.map(time => (
        <View style={styles.timeContainer} key={time}>
          <View style={{ flexBasis: '15%' }}>
            <Text style={styles.timeText}>{time}</Text>
          </View>

          {Math.random() > 0.5 ? (
            <View style={styles.tasksContainer}>
              {formattedTasks.map(item => (
                <TaskItem key={item.id} item={item} onPress={handleOnTaskItemPress} />
              ))}
            </View>
          ) : (
            <View
              style={{
                height: 1,
                backgroundColor: colors.gray.light,
                flexGrow: 1,
                marginLeft: 20,
                alignSelf: 'center',
              }}
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default TasksCalendar;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },
  timeText: {
    fontSize: 11,
    fontFamily: fontFamilyBold,
    color: colors.gray.primary,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 20,
  },
  tasksContainer: {
    paddingRight: 20,
    flexGrow: 1,
  },
});
