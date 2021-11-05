import React, { FC, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, layout } from '../../../theme';
import { format } from 'date-fns';

import { IconLabel } from '../../../ui-kit/Labels';
import Badge from '../../../ui-kit/Badge';

import { FlightModel, TaskStatusesEnum } from '../../../services/data';
import { TouchableWithoutFeedback } from '@gorhom/bottom-sheet';
import { getFlightStatus } from '../../../utils';

export interface TaskItemProps {
  item: FlightModel;
  onPress: (id: number, numberOfFlight: string) => void;
}

const TaskItem: FC<TaskItemProps> = ({ item, onPress }) => {
  const parsedTime = new Date(item.flightDate);

  return (
    <TouchableWithoutFeedback onPress={() => onPress(item.id, item.numberOfFlight)}>
      <View style={styles.container}>
        <View style={{ ...layout.rowSpaceBetween, marginBottom: 20 }}>
          <Text style={styles.smallGray}>ID {item.numberOfFlight}</Text>

          {item.status !== TaskStatusesEnum.Pending ? (
            <Badge variant="success">{getFlightStatus(item.status)}</Badge>
          ) : null}
        </View>

        <Text style={styles.title}>{item.title}</Text>

        <View style={layout.rowAlignItemsCenter}>
          <IconLabel icon="clock-time-four" textStyle={{ marginRight: 10 }}>
            {format(parsedTime, 'HH:mm')}
          </IconLabel>

          {item.airplane && <IconLabel icon="map-marker-circle">{item.airplane}</IconLabel>}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderLeftWidth: 5,
    padding: 15,
    elevation: 5,
    backgroundColor: colors.white,
    marginBottom: 15,
    borderLeftColor: colors.blue.primary,
  },
  smallGray: {
    ...fonts.smallSemibold,
    color: colors.gray.primary,
  },
  title: {
    ...fonts.paragraphSemibold,
    marginBottom: 5,
  },
  signDetailsContainer: {
    ...layout.rowAlignItemsCenter,
    marginTop: 15,
  },
});
