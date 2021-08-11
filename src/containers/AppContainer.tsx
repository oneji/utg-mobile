import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Button from '../ui-kit/Buttons/Button';
import Divider from '../ui-kit/Divider';

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
