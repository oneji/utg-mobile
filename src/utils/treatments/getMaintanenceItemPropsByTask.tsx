import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { getNavigationScreenByTaskType } from '.';
import { MaintenanceItemProps } from '../../components/Maintenance/MaintenanceItems/components/MaintenanceItem';
import { TaskDetailsScreenNavigationProp } from '../../navigation/props';
import { ServiceModel, TaskStatusesEnum, TaskTypesEnum, UserRolesEnum } from '../../services/data';
import { Button } from '../../ui-kit/Buttons';

import treatmentsStore from '../../store/TreatmentsStore';

interface TypesMap {
  [key: string]: MaintenanceItemProps;
}

export default (item: ServiceModel, userRole: UserRolesEnum) => {
  const navigation = useNavigation<TaskDetailsScreenNavigationProp>();
  const { screen, params } = getNavigationScreenByTaskType(item, userRole);

  const typesMap: TypesMap = {
    [TaskTypesEnum.DeicingTreatment]: {
      title: item.title,
      departureAction: [TaskStatusesEnum.Pending, TaskStatusesEnum.InProgress].includes(item.status) ? (
        <Button compact onPress={() => {}}>
          {item.status === TaskStatusesEnum.Pending ? 'Старт' : 'Стоп'}
        </Button>
      ) : null,
      onInfoPress: () => navigation.navigate(screen as any, params),
    },
  };

  return typesMap[item.taskType];
};
