import React, { FC, useCallback, useEffect } from 'react';
import { RefreshControl, StyleSheet } from 'react-native';

import { ScrollViewContainer } from '../../ui-kit/Containers';
import SpinnerLoading from '../../ui-kit/SpinnerLoading';

import { TasksScreenProps } from '../../navigation/props';
import { observer } from 'mobx-react';
import { useAppStore, useFlightsStore, useTreatmentsStore, useUserStore } from '../../store/hooks';
import { TasksCalendar } from '../../components/Tasks';
import { UserRolesEnum } from '../../services/data';
import { useFocusEffect } from '@react-navigation/core';

const TasksScreen: FC<TasksScreenProps> = () => {
  const { user } = useUserStore();
  const { loading } = useAppStore();
  const { flights, getFlightsByTkoId } = useFlightsStore();
  const { deicingTreatments, getDeicingTreaments } = useTreatmentsStore();

  // UTG-TODO: If role WorkerInCard request -> clients/Treatment/GetDeicingTreatments

  useFocusEffect(
    useCallback(() => {
      // TKO ID === User ID
      if (user?.role === UserRolesEnum.WorkerTKO) {
        getFlightsByTkoId({
          id: user?.id,
        });
      } else if (user?.role === UserRolesEnum.WorkerInCar) {
        getDeicingTreaments();
      }
    }, [])
  );

  if (loading) return <SpinnerLoading />;

  return (
    <ScrollViewContainer
      noPadding
      refreshControl={<RefreshControl refreshing={loading} onRefresh={() => getFlightsByTkoId({ id: user?.id })} />}
    >
      {user.role === UserRolesEnum.WorkerTKO && <TasksCalendar items={flights} />}
      {user.role === UserRolesEnum.WorkerInCar && <TasksCalendar items={deicingTreatments} />}
    </ScrollViewContainer>
  );
};

const styles = StyleSheet.create({});

export default observer(TasksScreen);
