import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const AppContainer: FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.text}>Hello</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign: 'center',
  },
});
