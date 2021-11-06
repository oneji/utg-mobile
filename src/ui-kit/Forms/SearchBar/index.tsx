import React, { FC, useCallback, useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { colors, fonts, layout } from '../../../theme';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableRipple } from 'react-native-paper';

export interface SearchBarProps extends TextInputProps {}

const SearchBar: FC<SearchBarProps> = ({ style, ...otherProps }) => {
  const [value, setValue] = useState('');

  const handleClear = useCallback(() => {
    setValue('');
  }, []);

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
          onChangeText={(value: string) => setValue(value)}
          placeholder="Бортовой номер/Номер рейса"
          placeholderTextColor={colors.violet.primary}
          style={[styles.input, style]}
          numberOfLines={1}
          {...otherProps}
        />
      </View>

      {value.length ? (
        <TouchableRipple onPress={handleClear} borderless style={{ borderRadius: 100, padding: 2 }}>
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
