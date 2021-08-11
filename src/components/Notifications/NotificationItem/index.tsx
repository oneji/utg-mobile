import React, { FC } from 'react';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, layout } from '../../../theme';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

import MaterialDesignIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface NotificationItemProps {
  read?: boolean;
  title: string;
  date: string;
}

const NotificationItem: FC<NotificationItemProps> = ({ read = false, title, date }) => {
  const parsedDate = parseISO(date);

  const renderIcon = useCallback(() => {
    return (
      <View
        style={{
          ...styles.iconContainer,
          backgroundColor: read ? colors.gray.secondary : colors.red.primary,
        }}
      >
        <MaterialDesignIcon name="bell-ring" color={read ? colors.gray.primary : colors.white} size={24} />
      </View>
    );
  }, []);

  return (
    <View
      style={{
        ...styles.container,
        elevation: read ? 0 : 20,
      }}
    >
      {renderIcon()}

      <View style={{ flexGrow: 1 }}>
        <Text style={fonts.paragraphSemibold}>{title}</Text>
        <Text style={styles.date}>
          {`${format(parsedDate, 'd MMM y', { locale: ru })} в ${format(parsedDate, 'HH:mm', { locale: ru })}`}
        </Text>
      </View>
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    ...layout.rowAlignItemsCenter,
    padding: 15,

    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 5,
  },
  iconContainer: {
    ...layout.rowAlignCenter,
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 15,
  },
  date: {
    ...fonts.smallSemibold,
    color: colors.gray.primary,
    marginTop: 3,
  },
});
