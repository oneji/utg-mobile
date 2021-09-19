import React, { FC, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { MaintenanceItems } from '../../components/Maintenance';
import { ScrollViewContainer } from '../../ui-kit/Containers';
import { Button } from '../../ui-kit/Buttons';
import SpinnerLoading from '../../ui-kit/SpinnerLoading';
import Switch from '../../ui-kit/Switch';
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

  const TKO = () => (
    <View style={{ padding: 20 }}>
      <MaintenanceItems>
        <MaintenanceItems.Item
          title="Буксировка"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={
            <Button
              compact
              onPress={() => navigation.navigate(TasksStackScreens.Maintenance, { type: MaintanceTypesEnum.Towing })}
            >
              Старт
            </Button>
          }
          departureAction={
            <Button
              compact
              onPress={() => navigation.navigate(TasksStackScreens.Maintenance, { type: MaintanceTypesEnum.Towing })}
            >
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Груз / почта"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={
            <Button
              compact
              onPress={() => navigation.navigate(TasksStackScreens.Maintenance, { type: MaintanceTypesEnum.CargoMail })}
            >
              Старт
            </Button>
          }
          departureAction={
            <Button
              compact
              onPress={() => navigation.navigate(TasksStackScreens.Maintenance, { type: MaintanceTypesEnum.CargoMail })}
            >
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Установка ВС на МС"
          arrivalTime="23:41"
          arrivalAction={<Switch value={false} onChange={() => true} />}
        />

        <MaintenanceItems.Item
          title="Колодки"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={<Switch value={false} onChange={() => true} />}
          departureAction={<Switch value={false} onChange={() => true} />}
        />

        <MaintenanceItems.Item
          title="Внешний осмотр"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={<Switch value={false} onChange={() => true} />}
          departureAction={<Switch value={false} onChange={() => true} />}
        />

        <MaintenanceItems.Item
          title="Электропитание"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={
            <Button
              compact
              onPress={() =>
                navigation.navigate(TasksStackScreens.Maintenance, { type: MaintanceTypesEnum.PowerSupply })
              }
            >
              Старт
            </Button>
          }
          departureAction={
            <Button
              compact
              onPress={() =>
                navigation.navigate(TasksStackScreens.Maintenance, { type: MaintanceTypesEnum.PowerSupply })
              }
            >
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Обслуживание санузлов"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={
            <Button compact onPress={() => {}}>
              Старт
            </Button>
          }
          departureAction={
            <Button compact onPress={() => {}}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Работа ООПК, таможни"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={
            <Button compact onPress={() => {}}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Трап"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={<Switch value={false} onChange={() => true} />}
          departureAction={<Switch value={false} onChange={() => true} />}
        />
      </MaintenanceItems>
    </View>
  );

  const Services = () => (
    <MaintenanceItems style={{ padding: 20 }}>
      <MaintenanceItems.Item
        title="Кислород"
        arrivalAction={
          <Button compact onPress={() => {}}>
            Старт
          </Button>
        }
        departureAction={
          <Button compact onPress={() => {}}>
            Старт
          </Button>
        }
      />

      <MaintenanceItems.Item
        title="Азот"
        arrivalAction={
          <Button compact onPress={() => {}}>
            Старт
          </Button>
        }
        departureAction={
          <Button compact onPress={() => {}}>
            Старт
          </Button>
        }
      />

      <MaintenanceItems.Item
        title="Подогрев"
        arrivalAction={<Switch value={false} onChange={() => true} />}
        departureAction={<Switch value={false} onChange={() => true} />}
      />

      <MaintenanceItems.Item
        title="Охлаждение"
        hideArrivalAction
        infoContainerStyle={{
          alignItems: 'flex-start',
          paddingLeft: 0,
        }}
        departureAction={
          <Button compact onPress={() => {}}>
            Старт
          </Button>
        }
      />

      <MaintenanceItems.Item
        title="УВЗ"
        hideArrivalAction
        infoContainerStyle={{
          alignItems: 'flex-start',
          paddingLeft: 0,
        }}
        departureAction={<Switch value={false} onChange={() => true} />}
      />

      <MaintenanceItems.Item
        title="Продувка водяной системы"
        hideArrivalAction
        infoContainerStyle={{
          alignItems: 'flex-start',
          paddingLeft: 0,
        }}
        departureAction={
          <Button compact onPress={() => {}}>
            Старт
          </Button>
        }
      />

      <MaintenanceItems.Item
        title="Слив топлива"
        hideArrivalAction
        infoContainerStyle={{
          alignItems: 'flex-start',
          paddingLeft: 0,
        }}
        departureAction={
          <Button compact onPress={() => {}}>
            Старт
          </Button>
        }
      />
    </MaintenanceItems>
  );

  if (loading) return <SpinnerLoading />;

  return (
    <ScrollViewContainer noPadding>
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

      <View style={{ padding: 20 }}>
        <Button onPress={() => {}}>Приступить к выполнению</Button>
      </View>
    </ScrollViewContainer>
  );
};

export default observer(TaskInProgressScreen);

const styles = StyleSheet.create({});
