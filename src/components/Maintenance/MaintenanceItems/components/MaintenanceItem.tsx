import React, { FC, ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, fonts, layout } from '../../../../theme';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface MaintenanceItemProps {
  title: string;

  leftAction?: ReactNode;
  rightAction?: ReactNode;

  leftTime?: string;
  rightTime?: string;

  hideLeftAction?: boolean;
  hideRightAction?: boolean;

  leftActionContainerStyle?: StyleProp<ViewStyle>;
  rightActionContainerStyle?: StyleProp<ViewStyle>;
  infoContainerStyle?: StyleProp<ViewStyle>;

  hideBorder?: boolean;
}

const MaintenanceItem: FC<MaintenanceItemProps> = ({
  title,
  leftAction,
  rightAction,

  leftTime,
  rightTime,

  hideLeftAction = false,
  hideRightAction = false,

  leftActionContainerStyle,
  rightActionContainerStyle,
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
      {/* Left action */}
      {!hideLeftAction && (
        <View style={[styles.actionContainer, leftActionContainerStyle]}>{leftAction && leftAction}</View>
      )}

      <View style={[styles.infoContainer, infoContainerStyle]}>
        <Text style={fonts.paragraphRegular}>{title}</Text>

        <View style={styles.timeContainer}>
          {leftTime && (
            <Text style={styles.timeText}>
              <MaterialIcon name="clock-time-five" color={colors.gray.primary} style={{ marginRight: 5 }} />
              {leftTime}
            </Text>
          )}

          {rightTime && (
            <Text style={styles.timeText}>
              <MaterialIcon name="clock-time-five" color={colors.gray.primary} style={{ marginRight: 5 }} />
              {rightTime}
            </Text>
          )}
        </View>
      </View>

      {/* Right action */}
      {!hideRightAction && (
        <View style={[styles.actionContainer, rightActionContainerStyle]}>{rightAction && rightAction}</View>
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
