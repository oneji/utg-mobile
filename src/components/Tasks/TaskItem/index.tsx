import React, { FC, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, layout } from '../../../theme';
import { format } from 'date-fns';

import IconLabel from '../../../ui-kit/Labels/IconLabel';
import Badge from '../../../ui-kit/Badge';

import { TaskSchema, TaskStatusesEnum, TaskTypesEnum } from '../../../services/data';

export interface RequestItemProps {
  item: TaskSchema;
}

const RequestItem: FC<RequestItemProps> = ({ item }) => {
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
    <View
      style={{
        ...styles.container,
        borderLeftWidth: 5,
        borderLeftColor: getTypeColor(),
      }}
    >
      <View style={{ ...layout.rowSpaceBetween, marginBottom: 20 }}>
        <Text style={styles.smallGray}>№ {item.id}</Text>

        <Badge>{getFormattedStatus()}</Badge>
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
  );
};

export default RequestItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderLeftColor: colors.blue.primary,
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
