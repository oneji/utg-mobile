import React, { FC, useState, useCallback, ReactNode, useEffect } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ViewProps,
  TextStyle,
} from 'react-native';
import { colors, fonts, layout } from '../../../theme';

import { Dialog } from './components';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import _ from 'lodash';

export type SelectItem = {
  title?: string;
  subtitle?: string;
  value?: string | number;
  enabled?: boolean;
};

export interface SelectProps extends ViewProps {
  label?: string;
  value: string | number | null;
  items: SelectItem[];
  valueStyle?: StyleProp<TextStyle>;
  itemTitleStyle?: StyleProp<TextStyle>;
  itemSubtitleStyle?: StyleProp<TextStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  onSelect: (value: string | number, index: number) => void;
  renderItem?: (item: SelectItem) => ReactNode;
  renderSelectedItem?: (item: SelectItem) => ReactNode;
}

const Select: FC<SelectProps> = ({
  label,
  value,
  items = [],
  style,
  valueStyle,
  itemTitleStyle,
  itemSubtitleStyle,
  itemStyle,

  onSelect,
  renderItem,
  renderSelectedItem,
  ...otherProps
}) => {
  const [isShowed, setIsShowed] = useState(false);

  const getValueText = () => {
    return items.find(i => i.value === value).title || 'Выберите...';
  };

  const handleSelect = (value: string | number, index: number) => {
    onSelect(value, index);
    setIsShowed(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => setIsShowed(true)}>
      <View style={styles.container} {...otherProps}>
        <View>
          {label && <Text style={styles.label}>{label}</Text>}

          <View style={[styles.box, style]}>
            <Text numberOfLines={1} style={[fonts.paragraphMedium, valueStyle]}>
              {getValueText()}
            </Text>
          </View>
        </View>

        <MaterialIcon name="chevron-right" color={colors.gray.primary} size={24} />

        {items.length > 0 ? (
          <Dialog
            visible={isShowed}
            items={items}
            itemStyle={itemStyle}
            titleStyle={itemTitleStyle}
            subtitleStyle={itemSubtitleStyle}
            onSelect={(value, index) => handleSelect(value, index)}
            renderItem={renderItem}
          />
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: {
    ...layout.rowSpaceBetween,
    borderWidth: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    flexShrink: 1,
    borderColor: colors.gray.primary,
  },
  label: {
    ...fonts.extraSmallSemibold,
    color: colors.gray.primary,
    marginBottom: 4,
  },
  box: {
    ...layout.rowSpaceBetween,
    width: '100%',
  },
});
