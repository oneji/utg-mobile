import React, { FC, ReactElement, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { ScrollViewContainer } from '../../ui-kit/Containers';
import { Button } from '../../ui-kit/Buttons';
import { SimpleList } from '../../ui-kit/Lists';
import SpinnerLoading from '../../ui-kit/SpinnerLoading';
import Tab from '../../ui-kit/Tab';

import { useFlightsStore } from '../../store/hooks';
import { observer } from 'mobx-react';
import { TaskDetailsScreenProps } from '../../navigation/props';
import { DirectionsEnum, TaskStatusesEnum } from '../../services/data';
import { format } from 'date-fns';

const TaskDetailsScreen: FC<TaskDetailsScreenProps> = ({ route }) => {
  const { id } = route.params;
  const { loading, currentFlight, getFlightById, acceptFlight } = useFlightsStore();

  useEffect(() => {
    getFlightById(id);
  }, []);

  const DataList = () => {
    return (
      <View style={{ padding: 20 }}>
        <SimpleList style={{ marginBottom: 12 }}>
          <SimpleList.Item title="Рейс" value={currentFlight?.numberOfFlight} />
          <SimpleList.Item title="Маршрут" value={currentFlight?.route} />
          <SimpleList.Item title="STA / ETA" value={currentFlight?.sta} />
          {currentFlight?.flightDate && (
            <SimpleList.Item title="Дата" value={format(new Date(currentFlight?.flightDate), 'd.MM.y')} />
          )}
          <SimpleList.Item title="Тип ВС" value={currentFlight?.airplaneType} />
          <SimpleList.Item title="Борт" value={currentFlight?.airplane} />
          <SimpleList.Item title="MC" value={currentFlight?.ms} />
          <SimpleList.Item title="Перрон" value={currentFlight?.platform} />
          <SimpleList.Item title="Терминал" value={currentFlight?.terminal} />
          <SimpleList.Item title="Выход" value={currentFlight?.exit ? currentFlight?.exit : '-'} />
          <SimpleList.Item title="Пасс факт" value={currentFlight?.passiveFact} />
          <SimpleList.Item title="Пасс AODB" value={currentFlight?.passiveAODB} />
          <SimpleList.Item title="Груз/багаж факт" value={currentFlight?.cargoFact} />
          <SimpleList.Item title="Груз/багаж AODB" value={currentFlight?.cargoAO} hideBorder />
        </SimpleList>
      </View>
    );
  };

  const ArrivalDataList = (): ReactElement => {
    if (currentFlight?.direction === DirectionsEnum.Departure) return <View />;

    return <DataList />;
  };

  const DepartureDataList = (): ReactElement => {
    if (currentFlight?.direction === DirectionsEnum.Arrival) return <View />;

    return <DataList />;
  };

  const handleAddRequest = () => {
    acceptFlight({
      flightId: id,
      userId: 1,
    });
  };

  if (loading) return <SpinnerLoading />;

  return (
    <ScrollViewContainer noPadding>
      <Tab>
        <Tab.Item
          name="ArrivalList"
          component={ArrivalDataList}
          options={{
            tabBarLabel: 'Прилёт',
          }}
        />

        <Tab.Item
          name="DepartureList"
          component={DepartureDataList}
          options={{
            tabBarLabel: 'Вылет',
          }}
        />
      </Tab>

      <View style={{ padding: 20 }}>
        {currentFlight?.status === TaskStatusesEnum.Pending && (
          <Button onPress={handleAddRequest}>Приступить к выполнению</Button>
        )}
      </View>
    </ScrollViewContainer>
  );
};

export default observer(TaskDetailsScreen);

const styles = StyleSheet.create({
  buttonsContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});
