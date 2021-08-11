import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const AppContainer: FC = () => {
  return (
    <NavigationContainer>
      <View
        style={{
          padding: 20,
        }}
      ></View>
    </NavigationContainer>
  );
};

export default AppContainer;

const styles = StyleSheet.create({});
