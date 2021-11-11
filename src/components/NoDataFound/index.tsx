import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, layout } from '../../theme';

import MaterialDesignIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const NoDataFound: FC = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <MaterialDesignIcon name="folder-information-outline" size={30} color={colors.black} />
      </View>

      <Text style={fonts.bodyMedium}>Ничего не найдено</Text>
    </View>
  );
};

export default NoDataFound;

const styles = StyleSheet.create({
  container: {
    ...layout.alignCenter,
    flex: 1,
  },
});
