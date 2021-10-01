import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import { fonts, layout } from '../../../theme';

export interface WeatherLabelProps {
  degree: number;
  weatherLabelStyle?: StyleProp<TextStyle>;
  temperatureLabelStyle?: StyleProp<TextStyle>;
  degreeLabelStyle?: StyleProp<TextStyle>;
}

const WeatherLabel: FC<WeatherLabelProps> = ({
  degree,
  weatherLabelStyle,
  temperatureLabelStyle,
  degreeLabelStyle,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[fonts.subtitleSemibold, weatherLabelStyle]}>Погода</Text>

      <View style={layout.rowAlignItemsCenter}>
        <Text style={[styles.temperatureLabel, temperatureLabelStyle]}>Температура</Text>
        <Text style={[fonts.bodySemibold, degreeLabelStyle]}>{degree} °C</Text>
      </View>
    </View>
  );
};

export default WeatherLabel;

const styles = StyleSheet.create({
  container: {
    ...layout.rowSpaceBetween,
    paddingVertical: 10,
  },
  temperatureLabel: {
    ...fonts.paragraphRegular,
    marginRight: 20,
  },
});
