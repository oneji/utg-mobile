import React, { FC, useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fontFamilyBold } from '../../../theme';

import { TaskItem } from '..';

import { FlightModel, TaskStatusesEnum } from '../../../services/data';
import { getDayTimes, isInTheSameTime } from '../../../utils';
import { useNavigation } from '@react-navigation/native';
import { TasksStackScreens } from '../../../navigation/enums';
import { format } from 'date-fns';
import { TaskDetailsScreenNavigationProp } from '../../../navigation/props';

export interface TasksCalendarProps {
  items: FlightModel[];
}

const TasksCalendar: FC<TasksCalendarProps> = ({ items }) => {
  const navigation = useNavigation<TaskDetailsScreenNavigationProp>();
  const times = getDayTimes();
  const [formattedTasks, setFormattedTasks] = useState([]);

  useEffect(() => {
    const formattedFlights = [];

    times.forEach(time => {
      formattedFlights.push({
        time,
        items: items.filter(item => isInTheSameTime(time, format(new Date(item.flightDate), 'HH:mm'))),
      });
    });

    setFormattedTasks(formattedFlights);
  }, [items]);

  const handleOnTaskItemPress = useCallback(
    (id: number, numberOfFlight: string) => {
      const taskItem = items.find(item => item.id === id);

      const screenToNavigate =
        taskItem.status === TaskStatusesEnum.Pending ? TasksStackScreens.TaskDetails : TasksStackScreens.TaskInProgress;
      if (taskItem) {
        navigation.navigate(screenToNavigate, {
          id,
          numberOfFlight,
        });
      }
    },
    [items]
  );

  return (
    <View style={styles.container}>
      {formattedTasks.map(item =>
        item.items.length ? (
          <View style={styles.timeContainer} key={item.time}>
            <View style={{ flexBasis: '15%' }}>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>

            <View style={styles.tasksContainer}>
              {item.items.map(item => (
                <TaskItem key={item.id} item={item} onPress={handleOnTaskItemPress} />
              ))}
            </View>
          </View>
        ) : null
      )}
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
