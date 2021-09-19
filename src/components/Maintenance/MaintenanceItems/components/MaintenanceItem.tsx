import React, { FC, ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, fonts, layout } from '../../../../theme';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface MaintenanceItemProps {
  title: string;

  arrivalAction?: ReactNode;
  departureAction?: ReactNode;

  arrivalTime?: string;
  departureTime?: string;

  hideArrivalAction?: boolean;
  hideDepartureAction?: boolean;

  arrivalActionContainerStyle?: StyleProp<ViewStyle>;
  departureActionContainerStyle?: StyleProp<ViewStyle>;
  infoContainerStyle?: StyleProp<ViewStyle>;

  hideBorder?: boolean;
}

const MaintenanceItem: FC<MaintenanceItemProps> = ({
  title,
  arrivalAction,
  departureAction,

  arrivalTime,
  departureTime,

  hideArrivalAction = false,
  hideDepartureAction = false,

  arrivalActionContainerStyle,
  departureActionContainerStyle,
  infoContainerStyle,

  hideBorder = false,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        borderBottomWidth: !hideBorder ? 0.5 : 0,
      }}
    >
      {/* Arrival action */}
      {!hideArrivalAction && (
        <View style={[styles.actionContainer, arrivalActionContainerStyle]}>{arrivalAction && arrivalAction}</View>
      )}

      <View style={[styles.infoContainer, infoContainerStyle]}>
        <Text style={fonts.paragraphRegular}>{title}</Text>

        <View style={styles.timeContainer}>
          {/* Arrival time */}
          {arrivalTime && (
            <Text style={styles.timeText}>
              <MaterialIcon name="clock-time-five" color={colors.gray.primary} style={{ marginRight: 5 }} />
              {arrivalTime}
            </Text>
          )}

          {/* Departure time */}
          {departureTime && (
            <Text style={styles.timeText}>
              <MaterialIcon name="clock-time-five" color={colors.gray.primary} style={{ marginRight: 5 }} />
              {departureTime}
            </Text>
          )}
        </View>
      </View>

      {/* Departure action */}
      {!hideDepartureAction && (
        <View style={[styles.actionContainer, departureActionContainerStyle]}>
          {departureAction && departureAction}
        </View>
      )}
    </View>
  );
};

export default MaintenanceItem;

const styles = StyleSheet.create({
  container: {
    ...layout.rowSpaceBetween,
    paddingVertical: 12,
    borderBottomColor: colors.gray.primary,
  },
  infoContainer: {
    paddingHorizontal: 15,
    alignItems: 'center',
    flexGrow: 1,
  },
  actionContainer: {
    flexBasis: '25%',
  },
  timeContainer: {
    ...layout.rowSpaceBetween,
    marginTop: 3,
  },
  timeText: {
    ...fonts.extraSmallMedium,
    color: colors.gray.primary,
  },
});
