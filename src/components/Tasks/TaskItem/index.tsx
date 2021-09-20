import React, { FC, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, layout } from '../../../theme';
import { format } from 'date-fns';

import { IconLabel } from '../../../ui-kit/Labels';
import Badge from '../../../ui-kit/Badge';

import { TaskSchema, TaskStatusesEnum, TaskTypesEnum } from '../../../services/data';
import { TouchableWithoutFeedback } from '@gorhom/bottom-sheet';

export interface RequestItemProps {
  item: TaskSchema;
  onPress: (id: number) => void;
}

const RequestItem: FC<RequestItemProps> = ({ item, onPress }) => {
  const parsedTime = new Date(item.time);

  const getFormattedStatus = useCallback(() => {
    const statusesMap = {
      [TaskStatusesEnum.Pending]: 'В ожидании',
      [TaskStatusesEnum.InProgress]: 'В работе',
    };

    return statusesMap[item.status];
  }, [item.status]);

  const getTypeColor = useCallback(() => {
    const typesMap = {
      [TaskTypesEnum.PPO]: colors.blue.primary,
      [TaskTypesEnum.Towing]: colors.orange.primary,
    };

    return typesMap[item.type];
  }, [item.type]);

  return (
    <TouchableWithoutFeedback onPress={() => onPress(item.id)}>
      <View
        style={{
          ...styles.container,

          borderLeftColor: getTypeColor(),
        }}
      >
        <View style={{ ...layout.rowSpaceBetween, marginBottom: 20 }}>
          <Text style={styles.smallGray}>№ {item.id}</Text>

          <Badge variant="success">{getFormattedStatus()}</Badge>
        </View>

        <Text style={styles.title}>{item.title}</Text>

        <View style={layout.rowAlignItemsCenter}>
          <IconLabel icon="clock-time-four" textStyle={{ marginRight: 10 }}>
            {format(parsedTime, 'HH:mm')}
          </IconLabel>

          <IconLabel icon="map-marker-circle">{item.location}</IconLabel>
        </View>

        {item.signDetails && (
          <View style={styles.signDetailsContainer}>
            <Badge>{item.signDetails}</Badge>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RequestItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderLeftWidth: 5,
    padding: 15,
    elevation: 5,
    backgroundColor: colors.white,
    marginBottom: 15,
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
