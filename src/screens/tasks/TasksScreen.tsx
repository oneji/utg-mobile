import React, { FC, useEffect } from 'react';
import { RefreshControl, StyleSheet } from 'react-native';

import { ScrollViewContainer } from '../../ui-kit/Containers';
import SpinnerLoading from '../../ui-kit/SpinnerLoading';

import { TasksScreenProps } from '../../navigation/props';
import { observer } from 'mobx-react';
import { useFlightsStore } from '../../store/hooks';
import { TasksCalendar } from '../../components/Tasks';

const TasksScreen: FC<TasksScreenProps> = () => {
  const { loading, flights, getFlightsByTkoId } = useFlightsStore();

  useEffect(() => {
    getFlightsByTkoId(1);
  }, []);

  if (loading) return <SpinnerLoading />;

  return (
    <ScrollViewContainer
      noPadding
      refreshControl={<RefreshControl refreshing={loading} onRefresh={() => getFlightsByTkoId(1)} />}
    >
      <TasksCalendar items={flights} />
    </ScrollViewContainer>
  );
};

const styles = StyleSheet.create({});

export default observer(TasksScreen);
