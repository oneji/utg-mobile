import React, { FC, ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
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

  onInfoPress?: () => void;
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

  onInfoPress = () => {},
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

      <TouchableWithoutFeedback onPress={onInfoPress}>
        <View style={[styles.infoContainer, infoContainerStyle]}>
          <Text
            style={{
              ...styles.title,
              textAlign: hideArrivalAction ? 'left' : 'center',
            }}
          >
            {title}
          </Text>

          <View style={styles.timeContainer}>
            {/* Arrival time */}
            <View>
              {arrivalTime && (
                <Text style={styles.timeText}>
                  <MaterialIcon name="clock-time-five" color={colors.gray.primary} style={{ marginRight: 5 }} />
                  {arrivalTime}
                </Text>
              )}
            </View>

            <View>
              {/* Departure time */}
              {departureTime && (
                <Text style={styles.timeText}>
                  <MaterialIcon name="clock-time-five" color={colors.gray.primary} style={{ marginRight: 5 }} />
                  {departureTime}
                </Text>
              )}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

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
    ...layout.rowAlignCenter,
    paddingVertical: 12,
    borderBottomColor: colors.gray.primary,
  },
  infoContainer: {
    alignItems: 'center',
    flexBasis: '50%',
    flexGrow: 1,
    borderWidth: 1,
  },
  actionContainer: {
    flexBasis: '25%',
  },
  timeContainer: {
    ...layout.rowSpaceBetween,
    marginTop: 3,
    width: '100%',
    paddingHorizontal: 15,
  },
  timeText: {
    ...fonts.extraSmallMedium,
    color: colors.gray.primary,
  },
  title: {
    ...fonts.smallRegular,
    width: '100%',
  },
});
