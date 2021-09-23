import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { MaintenanceItems } from '../../../../components/Maintenance';
import { Button } from '../../../../ui-kit/Buttons';
import Switch from '../../../../ui-kit/Switch';

import { MaintanceTypesEnum } from '../../../../services/data';
import { FormGroup } from '../../../../ui-kit/Forms';
import TextInput from '../../../../ui-kit/TextInput';
import { ScrollViewContainer } from '../../../../ui-kit/Containers';
import { useNavigation } from '@react-navigation/native';
import { TaskDetailsScreenNavigationProp } from '../../../../navigation/props';
import { TasksStackScreens } from '../../../../navigation/enums';

interface ServicesTabProps {
  onNavigate: (type: MaintanceTypesEnum) => void;
}

const ServicesTab: FC<ServicesTabProps> = ({ onNavigate }) => {
  const navigation = useNavigation<TaskDetailsScreenNavigationProp>();
  const [additionalInfo, setAdditionalInfo] = useState('');

  return (
    <ScrollViewContainer>
      <MaintenanceItems>
        <MaintenanceItems.Item
          title="Кислород"
          arrivalAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.Oxygen)}>
              Старт
            </Button>
          }
          departureAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.Oxygen)}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Азот"
          arrivalAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.Nitrogen)}>
              Старт
            </Button>
          }
          departureAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.Nitrogen)}>
              Старт
            </Button>
          }
        />

        <MaintenanceItems.Item
          title="Подогрев"
          arrivalAction={<Switch value={false} onChange={() => true} />}
          departureAction={<Switch value={false} onChange={() => true} />}
          onInfoPress={() => onNavigate(MaintanceTypesEnum.Heating)}
        />

        <MaintenanceItems.Item
          title="Охлаждение"
          hideArrivalAction
          infoContainerStyle={{
            alignItems: 'flex-start',
            paddingLeft: 0,
          }}
          departureAction={
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.Cooling)}>
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
          onInfoPress={() => onNavigate(MaintanceTypesEnum.UVZ)}
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
            <Button compact onPress={() => onNavigate(MaintanceTypesEnum.FuelDraining)}>
              Старт
            </Button>
          }
        />
      </MaintenanceItems>

      <FormGroup>
        <TextInput label="Дополнительная информация" value={additionalInfo} onChangeText={setAdditionalInfo} />
      </FormGroup>

      <Button onPress={() => navigation.navigate(TasksStackScreens.TaskReport, { id: 232 })}>Перейти к отчету</Button>
    </ScrollViewContainer>
  );
};

export default ServicesTab;

const styles = StyleSheet.create({});
