import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MaintenanceItems } from '../../../../components/Maintenance';
import { Button } from '../../../../ui-kit/Buttons';
import Switch from '../../../../ui-kit/Switch';

import { MaintanceTypesEnum } from '../../../../services/data';
import { FormGroup } from '../../../../ui-kit/Forms';
import TextInput from '../../../../ui-kit/TextInput';
import { ScrollViewContainer } from '../../../../ui-kit/Containers';
import { useNavigation } from '@react-navigation/core';
import { TaskDetailsScreenNavigationProp } from '../../../../navigation/props';
import { POO_STACK } from '../../../../navigation/stacks/PooStack';

interface TkoTabProps {
  onNavigate: (type: MaintanceTypesEnum) => void;
}

const TkoTab: FC<TkoTabProps> = ({ onNavigate }) => {
  const navigation = useNavigation<TaskDetailsScreenNavigationProp>();
  const [additionalInfo, setAdditionalInfo] = useState('');

  return (
    <ScrollViewContainer>
      <MaintenanceItems>
        <MaintenanceItems.Item
          title="Буксировка"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.Towing)}>
              Старт
            </Button>
          }
          departureAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.Towing)}>
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
          onInfoPress={() => onNavigate(MaintanceTypesEnum.VisualInspection)}
        />

        <MaintenanceItems.Item
          title="Работа САБ"
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
          arrivalTime="23:41 - 23:45"
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
          onInfoPress={() => onNavigate(MaintanceTypesEnum.Ladder)}
        />

        <MaintenanceItems.Item
          title="Электропитание"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.PowerSupply)}>
              Старт
            </Button>
          }
          departureAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.PowerSupply)}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Пассажиры"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.Passengers)}>
              Старт
            </Button>
          }
          departureAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.Passengers)}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Багаж"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.Luggage)}>
              Старт
            </Button>
          }
          departureAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.Luggage)}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Груз / почта"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.CargoMail)}>
              Старт
            </Button>
          }
          departureAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.CargoMail)}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Бортпитание"
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
          title="Уборка ВС"
          arrivalTime="23:41 - 23:45"
          arrivalAction={
            <Button compact onPress={() => {}}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Заправка топливом"
          departureTime="23:41 - 23:51"
          departureAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.Refueling)}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Обслуживание санузлов"
          arrivalTime="23:41"
          departureTime="23:41"
          arrivalAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.BathroomService)}>
              Старт
            </Button>
          }
          departureAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.BathroomService)}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Обслуживание водяной системы"
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
          title="Прибытие экипажа"
          departureTime="23:41"
          departureAction={<Switch value={false} onChange={() => true} />}
          onInfoPress={() => {}}
        />

        <MaintenanceItems.Item
          title="Предварительная готовность"
          departureTime="23:41"
          departureAction={<Switch value={false} onChange={() => true} />}
          onInfoPress={() => {}}
        />

        <MaintenanceItems.Item
          title="Готовность ВС к посадке"
          departureTime="23:41"
          departureAction={<Switch value={false} onChange={() => true} />}
          onInfoPress={() => {}}
        />

        <MaintenanceItems.Item
          title="Доставка документов"
          departureTime="23:41"
          departureAction={<Switch value={false} onChange={() => true} />}
          onInfoPress={() => {}}
        />

        <MaintenanceItems.Item
          title="Отправление ВС"
          departureTime="23:41"
          departureAction={<Switch value={false} onChange={() => true} />}
          onInfoPress={() => {}}
        />

        <MaintenanceItems.Item
          title="Работа ИТС"
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
          title="ПОО"
          departureTime="23:41"
          departureAction={<Switch value={false} onChange={() => true} />}
          onInfoPress={() => navigation.navigate(POO_STACK as any)}
        />
      </MaintenanceItems>

      <FormGroup>
        <TextInput label="Дополнительная информация" value={additionalInfo} onChangeText={setAdditionalInfo} />
      </FormGroup>

      <Button onPress={() => {}}>Приступить к выполнению</Button>
    </ScrollViewContainer>
  );
};

export default TkoTab;

const styles = StyleSheet.create({});
