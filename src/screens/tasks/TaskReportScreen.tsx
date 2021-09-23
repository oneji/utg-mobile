import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Tab from '../../ui-kit/Tab';

const TaskReportScreen: FC = () => {
  return (
    <Tab>
      <Tab.Item
        name="Ru"
        component={View}
        options={{
          tabBarLabel: 'Ru',
        }}
      />

      <Tab.Item
        name="En"
        component={View}
        options={{
          tabBarLabel: 'En',
        }}
      />
    </Tab>
  );
};

export default TaskReportScreen;

const styles = StyleSheet.create({});
