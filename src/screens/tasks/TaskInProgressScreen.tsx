import React, { FC, useEffect, useCallback } from 'react';
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

  const handleNavigate = useCallback((type: MaintanceTypesEnum) => {
    navigation.navigate(TasksStackScreens.Maintenance, { type });
  }, []);

  const TKO = () => (
    <View style={{ padding: 20 }}>
      <MaintenanceItems>
        <MaintenanceItems.Item
          title="Буксировка"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={
            <Button compact onPress={() => handleNavigate(MaintanceTypesEnum.Towing)}>
              Старт
            </Button>
          }
          departureAction={
            <Button compact onPress={() => handleNavigate(MaintanceTypesEnum.Towing)}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Груз / почта"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={
            <Button compact onPress={() => handleNavigate(MaintanceTypesEnum.CargoMail)}>
              Старт
            </Button>
          }
          departureAction={
            <Button compact onPress={() => handleNavigate(MaintanceTypesEnum.CargoMail)}>
              Старт
            </Button>
          }
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
          onInfoPress={() => handleNavigate(MaintanceTypesEnum.VisualInspection)}
        />

        <MaintenanceItems.Item
          title="Электропитание"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={
            <Button compact onPress={() => handleNavigate(MaintanceTypesEnum.PowerSupply)}>
              Старт
            </Button>
          }
          departureAction={
            <Button compact onPress={() => handleNavigate(MaintanceTypesEnum.PowerSupply)}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Пассажиры"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={
            <Button compact onPress={() => handleNavigate(MaintanceTypesEnum.Passengers)}>
              Старт
            </Button>
          }
          departureAction={
            <Button compact onPress={() => handleNavigate(MaintanceTypesEnum.Passengers)}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Обслуживание санузлов"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={
            <Button compact onPress={() => handleNavigate(MaintanceTypesEnum.BathroomService)}>
              Старт
            </Button>
          }
          departureAction={
            <Button compact onPress={() => handleNavigate(MaintanceTypesEnum.BathroomService)}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Багаж"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={
            <Button compact onPress={() => handleNavigate(MaintanceTypesEnum.Luggage)}>
              Старт
            </Button>
          }
          departureAction={
            <Button compact onPress={() => handleNavigate(MaintanceTypesEnum.Luggage)}>
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
          onInfoPress={() => handleNavigate(MaintanceTypesEnum.Ladder)}
        />

        <MaintenanceItems.Item
          title="Заправка топливом"
          departureTime="23:41 - 23:51"
          departureAction={
            <Button compact onPress={() => handleNavigate(MaintanceTypesEnum.Refueling)}>
              Старт
            </Button>
          }
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
