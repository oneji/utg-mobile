import React, { FC } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { colors, fonts, layout } from '../../../theme';

import { TouchableRipple } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface SearchBarProps extends TextInputProps {
  onClear: () => void;
}

const SearchBar: FC<SearchBarProps> = ({ style, value, onChangeText, onClear, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <MaterialIcon name="magnify" size={24} color={colors.violet.primary} />

      <View
        style={{
          flex: 1,
        }}
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Бортовой номер/Номер рейса"
          placeholderTextColor={colors.violet.primary}
          style={[styles.input, style]}
          numberOfLines={1}
          {...otherProps}
        />
      </View>

      {value.length ? (
        <TouchableRipple onPress={onClear} borderless style={{ borderRadius: 100, padding: 2 }}>
          <MaterialIcon name="close" size={24} color={colors.violet.primary} />
        </TouchableRipple>
      ) : null}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    ...layout.rowSpaceBetween,
    backgroundColor: colors.violet.secondary,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    ...fonts.paragraphRegular,
    paddingVertical: 0,
    color: colors.violet.primary,
  },
});
