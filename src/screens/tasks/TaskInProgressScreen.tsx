import React, { FC, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

import { ScrollViewContainer } from '../../ui-kit/Containers';
import { TkoTab, ServicesTab } from './components';
import SpinnerLoading from '../../ui-kit/SpinnerLoading';
import Tab from '../../ui-kit/Tab';

import { observer } from 'mobx-react';
import { useTasksStore } from '../../store/hooks';
import { TaskDetailsScreenProps } from '../../navigation/props';
import { TasksStackScreens } from '../../navigation/enums';
import { MaintanceTypesEnum } from '../../services/data';

const TaskInProgressScreen: FC<TaskDetailsScreenProps> = ({ navigation, route }) => {
  const { id } = route.params;
  const { loading, getTaskById } = useTasksStore();

  useEffect(() => {
    getTaskById(id);
  }, []);

  const handleNavigate = useCallback((type: MaintanceTypesEnum) => {
    navigation.navigate(TasksStackScreens.Maintenance, { type });
  }, []);

  const TKO = () => <TkoTab onNavigate={handleNavigate} />;
  const Services = () => <ServicesTab onNavigate={handleNavigate} />;

  if (loading) return <SpinnerLoading />;

  return (
    <Tab>
      <Tab.Item
        name="TKO"
        component={TKO}
        options={{
          tabBarLabel: 'ТКО',
        }}
      />

      <Tab.Item
        name="Services"
        component={Services}
        options={{
          tabBarLabel: 'Услуги',
        }}
      />
    </Tab>
  );
};

export default observer(TaskInProgressScreen);

const styles = StyleSheet.create({});
