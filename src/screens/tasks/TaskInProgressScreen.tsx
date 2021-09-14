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

const TaskInProgressScreen: FC<TaskDetailsScreenProps> = ({ route }) => {
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
          leftTime="23:41"
          rightTime="23:41"
          leftAction={
            <Button compact onPress={() => {}}>
              Старт
            </Button>
          }
          rightAction={
            <Button compact onPress={() => {}}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Установка ВС на МС"
          leftTime="23:41"
          leftAction={<Switch value={false} onChange={() => true} />}
        />

        <MaintenanceItems.Item
          title="Колодки"
          leftTime="23:41"
          rightTime="23:41"
          leftAction={<Switch value={false} onChange={() => true} />}
          rightAction={<Switch value={false} onChange={() => true} />}
        />

        <MaintenanceItems.Item
          title="Внешний осмотр"
          leftTime="23:41"
          rightTime="23:41"
          leftAction={<Switch value={false} onChange={() => true} />}
          rightAction={<Switch value={false} onChange={() => true} />}
        />

        <MaintenanceItems.Item
          title="Работа САБ"
          leftTime="23:41"
          rightTime="23:41"
          leftAction={
            <Button compact onPress={() => {}}>
              Старт
            </Button>
          }
          rightAction={
            <Button compact onPress={() => {}}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Работа ООПК, таможни"
          leftTime="23:41"
          rightTime="23:41"
          leftAction={
            <Button compact onPress={() => {}}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Трап"
          leftTime="23:41"
          rightTime="23:41"
          leftAction={<Switch value={false} onChange={() => true} />}
          rightAction={<Switch value={false} onChange={() => true} />}
        />
      </MaintenanceItems>
    </View>
  );

  const Services = () => (
    <MaintenanceItems style={{ padding: 20 }}>
      <MaintenanceItems.Item
        title="Кислород"
        leftAction={
          <Button compact onPress={() => {}}>
            Старт
          </Button>
        }
        rightAction={
          <Button compact onPress={() => {}}>
            Старт
          </Button>
        }
      />

      <MaintenanceItems.Item
        title="Азот"
        leftAction={
          <Button compact onPress={() => {}}>
            Старт
          </Button>
        }
        rightAction={
          <Button compact onPress={() => {}}>
            Старт
          </Button>
        }
      />

      <MaintenanceItems.Item
        title="Подогрев"
        leftAction={<Switch value={false} onChange={() => true} />}
        rightAction={<Switch value={false} onChange={() => true} />}
      />

      <MaintenanceItems.Item
        title="Охлаждение"
        hideLeftAction
        infoContainerStyle={{
          alignItems: 'flex-start',
          paddingLeft: 0,
        }}
        rightAction={
          <Button compact onPress={() => {}}>
            Старт
          </Button>
        }
      />

      <MaintenanceItems.Item
        title="УВЗ"
        hideLeftAction
        infoContainerStyle={{
          alignItems: 'flex-start',
          paddingLeft: 0,
        }}
        rightAction={<Switch value={false} onChange={() => true} />}
      />

      <MaintenanceItems.Item
        title="Продувка водяной системы"
        hideLeftAction
        infoContainerStyle={{
          alignItems: 'flex-start',
          paddingLeft: 0,
        }}
        rightAction={
          <Button compact onPress={() => {}}>
            Старт
          </Button>
        }
      />

      <MaintenanceItems.Item
        title="Слив топлива"
        hideLeftAction
        infoContainerStyle={{
          alignItems: 'flex-start',
          paddingLeft: 0,
        }}
        rightAction={
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
