import React, { FC, useCallback } from 'react';
import { StyleSheet, Text, View, ViewProps, ViewStyle } from 'react-native';
import { colors, fonts, layout } from '../../../theme';

import MaterialDesignIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface InlineAlertProps extends ViewProps {
  children: string;
  type: 'success' | 'danger' | 'info' | 'warning';
}

const InlineAlert: FC<InlineAlertProps> = ({ children, type, style, ...otherProps }) => {
  const getContainerStyle = useCallback(() => {
    const bgColorsMap = {
      success: colors.green.light,
      danger: colors.red.light,
      info: colors.blue.light,
      warning: colors.orange.light,
    };
    const containerStyle: ViewStyle = {
      backgroundColor: bgColorsMap[type],
      ...styles.container,
      ...(style as object),
    };

    return containerStyle;
  }, [type]);

  const renderIcon = useCallback(() => {
    const iconOptions = {
      success: {
        name: 'checkbox-marked-circle-outline',
        color: colors.green.primary,
      },
      danger: {
        name: 'alert-circle',
        color: colors.red.primary,
      },
      info: {
        name: 'information-outline',
        color: colors.blue.primary,
      },
      warning: {
        name: 'alert',
        color: colors.orange.primary,
      },
    };

    return <MaterialDesignIcon {...iconOptions[type]} size={24} />;
  }, [type]);

  return (
    <View style={getContainerStyle()} {...otherProps}>
      {renderIcon()}

      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default InlineAlert;

const styles = StyleSheet.create({
  container: {
    ...layout.rowAlignItemsCenter,
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  text: {
    ...fonts.smallSemibold,
    marginLeft: 14,
    flexShrink: 1,
  },
});
