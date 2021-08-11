import React, { FC, useEffect, useState } from 'react';
import {
  LayoutAnimation,
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  UIManager,
  View,
} from 'react-native';
import { colors, fonts, layout } from '../../theme';

export interface SwitchProps {
  label?: string;
  value: boolean;
  disabled?: boolean;
  color?: string;
  inactiveColor?: string;
  labelStyle?: StyleProp<TextStyle>;
  onChange: () => void;
}

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Switch: FC<SwitchProps> = ({
  label,
  value,
  disabled,
  color = colors.green.primary,
  inactiveColor = colors.gray.secondary,
  labelStyle,
  onChange,
}) => {
  const [state, setState] = useState(value || false);

  useEffect(() => {
    setState(value);
  }, [value]);

  const handleOnPress = (): void => {
    setState(prevValue => !prevValue);

    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring, () => {
      onChange();
    });
  };

  return (
    <View style={layout.rowSpaceBetween}>
      {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}

      <Pressable
        onPress={handleOnPress}
        style={{
          ...styles.container,
          backgroundColor: state ? color : inactiveColor,
          alignItems: state ? 'flex-end' : 'flex-start',
        }}
      >
        <View style={styles.stateTextContainer}>
          <Text style={styles.stateText}>ON</Text>
          <Text style={styles.stateText}>OFF</Text>
        </View>
        <View style={styles.indicator} />
      </Pressable>
    </View>
  );
};

export default Switch;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 70,
    height: 34,
    borderRadius: 50,
    justifyContent: 'center',
    padding: 4,
  },
  label: {
    ...fonts.paragraphSemibold,
  },
  indicator: {
    width: 30,
    height: 30,
    backgroundColor: colors.white,
    borderRadius: 100,
    elevation: 3,
  },
  stateTextContainer: {
    ...StyleSheet.absoluteFillObject,
    ...layout.rowSpaceAround,
    borderRadius: 50,
  },
  stateText: {
    ...fonts.extraSmallBold,
    color: colors.white,
  },
});
