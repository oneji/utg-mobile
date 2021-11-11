import React, { FC, useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fontFamilyBold } from '../../../theme';

import { TaskItem } from '..';

import { FlightModel, TaskStatusesEnum, UserRolesEnum } from '../../../services/data';
import { getDayTimes, isInTheSameTime } from '../../../utils';
import { useNavigation } from '@react-navigation/native';
import { PooStackScreens, TasksStackScreens } from '../../../navigation/enums';
import { format } from 'date-fns';
import { TaskDetailsScreenNavigationProp } from '../../../navigation/props';
import { useUserStore } from '../../../store/hooks';
import { POO_STACK } from '../../../navigation/stacks';
import NoDataFound from '../../NoDataFound';

export interface TasksCalendarProps {
  items: FlightModel[];
  hideTime?: boolean;
}

const TasksCalendar: FC<TasksCalendarProps> = ({ items, hideTime }) => {
  const navigation = useNavigation<TaskDetailsScreenNavigationProp>();
  const times = getDayTimes();
  const { user } = useUserStore();
  const [formattedTasks, setFormattedTasks] = useState([]);

  useEffect(() => {
    const formattedFlights = [];

    times.forEach(time => {
      if (items.length) {
        formattedFlights.push({
          time,
          items: items.filter(item =>
            isInTheSameTime(time, format(new Date(item.flightDate || item.startPlan), 'HH:mm'))
          ),
        });
      }
    });

    setFormattedTasks(formattedFlights);
  }, [items]);

  const handleOnTaskItemPress = useCallback(
    (id: number, numberOfFlight: string) => {
      const taskItem = items.find(item => item.id === id);

      if (user.role === UserRolesEnum.WorkerTKO) {
        const screenToNavigate =
          taskItem.status === TaskStatusesEnum.Pending
            ? TasksStackScreens.TaskDetails
            : TasksStackScreens.TaskInProgress;
        if (taskItem) {
          navigation.navigate(screenToNavigate, {
            id,
            numberOfFlight,
          });
        }
      } else if (user.role === UserRolesEnum.WorkerInCar) {
        navigation.navigate(POO_STACK as any, {
          screen: PooStackScreens.PooTransportEmployee,
          params: {
            numberOfFlight: taskItem.numberOfFlight,
            deicingTreatmentId: taskItem?.id,
          },
        });
      }
    },
    [items]
  );

  return (
    <View style={{ paddingLeft: items.length ? 20 : 0, flex: 1 }}>
      {formattedTasks.length ? (
        formattedTasks.map(item =>
          item.items.length ? (
            <View style={styles.timeContainer} key={item.time}>
              <View style={{ flexBasis: '15%' }}>{!hideTime && <Text style={styles.timeText}>{item.time}</Text>}</View>

              <View style={styles.tasksContainer}>
                {item.items.map((item: FlightModel) => (
                  <TaskItem key={item.id} item={item} onPress={handleOnTaskItemPress} />
                ))}
              </View>
            </View>
          ) : null
        )
      ) : (
        <NoDataFound />
      )}
    </View>
  );
};

export default TasksCalendar;

const styles = StyleSheet.create({
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
