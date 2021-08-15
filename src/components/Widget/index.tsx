import React, { FC, ReactNode } from 'react';
import { useCallback } from 'react';
import { StyleProp, TextStyle, TouchableWithoutFeedback, ViewProps, ViewStyle } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, layout } from '../../theme';
import Badge from '../../ui-kit/Badge';

export interface WidgetProps extends ViewProps {
  label: string;
  counter?: number;
  icon: ReactNode;
  labelStyle?: StyleProp<TextStyle>;
  counterStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const Widget: FC<WidgetProps> = ({ label, counter, icon, labelStyle, counterStyle, onPress }) => {
  const renderCounter = useCallback(() => {
    return counter ? (
      <View style={styles.counterContainer}>
        <Badge
          variant="success"
          style={{
            ...(counterStyle as object),
            minWidth: 40,
          }}
        >
          {counter}
        </Badge>
      </View>
    ) : null;
  }, [counter]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {icon}

        <Text style={[styles.label, labelStyle]}>{label}</Text>

        {renderCounter()}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Widget;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: colors.blue.dark,
    borderRadius: 18,
    minHeight: 150,
    marginBottom: 10,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  counterContainer: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  label: {
    ...fonts.titleBold,
    color: colors.white,
    flexShrink: 1,
  },
});
