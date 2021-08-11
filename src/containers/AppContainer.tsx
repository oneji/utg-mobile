import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { colors, fonts, layout } from '../theme';

import Divider from '../ui-kit/Divider';
import NotificationItem from '../components/Notifications/NotificationItem';

const AppContainer: FC = () => {
  return (
    <NavigationContainer>
      <View
        style={{
          ...layout.screenContainer,
          padding: 20,
          backgroundColor: colors.white,
        }}
      >
        <Text style={fonts.paragraphRegular}>Компоненты</Text>
        <Divider />

        <NotificationItem title="Начался ураган!" date="2021-05-27T18:21:00" />
      </View>
    </NavigationContainer>
  );
};

export default AppContainer;

const styles = StyleSheet.create({});
