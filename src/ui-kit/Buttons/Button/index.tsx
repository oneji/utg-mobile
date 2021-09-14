import React, { FC, useCallback } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { StyleSheet, Text, TouchableWithoutFeedbackProps } from 'react-native';

import { TouchableRipple } from 'react-native-paper';
import { colors, fonts, layout } from '../../../theme';

export interface ButtonProps extends TouchableWithoutFeedbackProps {
  children: string;
  variant?: 'primary' | 'success' | 'danger' | 'secondary';
  compact?: boolean;
}

const Button: FC<ButtonProps> = ({ children, variant = 'primary', onPress, style, compact, ...otherProps }) => {
  const getButtonStyles = useCallback(() => {
    const bgColorsMap = {
      primary: colors.blue.primary,
      success: colors.green.primary,
      danger: colors.red.primary,
      secondary: colors.gray.light,
    };
    const styleObject: StyleProp<ViewStyle> = {
      ...styles.button,
      backgroundColor: bgColorsMap[variant],
      height: compact ? 35 : 50,
      ...(style as object),
    };

    return styleObject;
  }, [variant, style]);

  const getButtonTextStyles = useCallback(() => {
    const textStyle: StyleProp<TextStyle> = {
      ...fonts.paragraphBold,
      color: variant === 'secondary' ? colors.black : colors.white,
    };

    return textStyle;
  }, [variant]);

  return (
    <TouchableRipple borderless style={getButtonStyles()} onPress={onPress} {...otherProps}>
      <Text style={getButtonTextStyles()}>{children}</Text>
    </TouchableRipple>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    ...layout.rowAlignCenter,
    flex: 1,
    borderRadius: 50,
  },
});
