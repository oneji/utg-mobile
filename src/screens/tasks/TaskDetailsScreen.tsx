import React, { FC, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { ScrollViewContainer } from '../../ui-kit/Containers';
import { Button } from '../../ui-kit/Buttons';
import { SimpleList } from '../../ui-kit/Lists';
import SpinnerLoading from '../../ui-kit/SpinnerLoading';
import Tab from '../../ui-kit/Tab';

import { useTasksStore } from '../../store/hooks';
import { observer } from 'mobx-react';
import { TaskDetailsScreenProps } from '../../navigation/props';

const TaskDetailsScreen: FC<TaskDetailsScreenProps> = ({ route }) => {
  const { id } = route.params;
  const { loading, currentTask, getTaskById } = useTasksStore();

  const ArrivalList = () => {
    return (
      <View style={{ padding: 20 }}>
        <SimpleList style={{ marginBottom: 12 }}>
          <SimpleList.Item title="Рейс" value={currentTask?.flight} />
          <SimpleList.Item title="Маршрут" value={`${currentTask?.route.from}-${currentTask?.route.to}`} />
          <SimpleList.Item title="STA / ETA" value={currentTask?.staEta} />
          <SimpleList.Item title="Тип ВС" value={currentTask?.aircraftType} />
          <SimpleList.Item title="Борт" value={currentTask?.board} />
          <SimpleList.Item title="MC" value={currentTask?.mc.toString()} />
          <SimpleList.Item title="Прилет" value={currentTask?.arrival} />
          <SimpleList.Item title="Стоянка" value={currentTask?.parking} />
          <SimpleList.Item title="Перрон" value={currentTask?.platform} />
          <SimpleList.Item title="Терминал" value={currentTask?.terminal} />
          <SimpleList.Item title="Выход" value={currentTask?.exit} />
          <SimpleList.Item title="Пасс факт" value={currentTask?.passFact} />
          <SimpleList.Item title="Пасс AODB" value={currentTask?.passAodb} />
          <SimpleList.Item title="Груз/багаж факт" value={currentTask?.luggageFact} />
          <SimpleList.Item title="Груз/багаж AODB" value={currentTask?.luggageAodb} hideBorder />
        </SimpleList>
      </View>
    );
  };

  useEffect(() => {
    getTaskById(id);
  }, []);

  if (loading) return <SpinnerLoading />;

  return (
    <ScrollViewContainer noPadding>
      <Tab>
        <Tab.Item
          name="ArrivalList"
          component={ArrivalList}
          options={{
            tabBarLabel: 'Прилёт',
          }}
        />

        <Tab.Item
          name="DepartureList"
          component={ArrivalList}
          options={{
            tabBarLabel: 'Вылет',
          }}
        />
      </Tab>

      <View style={{ padding: 20 }}>
        <Button onPress={() => {}}>Приступить к выполнению</Button>
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
