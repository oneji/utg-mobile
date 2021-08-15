import React, { FC, useCallback } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewProps, ViewStyle } from 'react-native';
import { colors, fonts, layout } from '../../theme';

export interface BadgeProps extends ViewProps {
  children: string | number;
  variant?: 'primary' | 'success' | 'danger' | 'secondary';
}

const Badge: FC<BadgeProps> = ({ children, variant = 'primary', style, ...otherProps }) => {
  const getStyle = useCallback(() => {
    const bgColorsMap = {
      primary: colors.blue.primary,
      success: colors.green.primary,
      danger: colors.red.primary,
      secondary: colors.gray.light,
    };
    const styleObject: StyleProp<ViewStyle> = {
      ...styles.container,
      ...(style as object),
      backgroundColor: bgColorsMap[variant],
    };

    return styleObject;
  }, [variant, style]);

  return (
    <View style={getStyle()} {...otherProps}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    ...layout.rowAlignCenter,
    borderRadius: 50,
    minWidth: 24,
    minHeight: 24,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    ...fonts.smallBold,
    color: colors.white,
  },
});
