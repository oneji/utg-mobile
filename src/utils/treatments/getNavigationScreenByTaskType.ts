import { PooStackScreens } from '../../navigation/enums';
import { POO_STACK } from '../../navigation/stacks';
import { ServiceModel, TaskStatusesEnum, TaskTypesEnum, UserRolesEnum } from '../../services/data';

interface NavigationObject {
  screen: string;
  params?: object;
}

export default (item: ServiceModel, userRole: UserRolesEnum): NavigationObject => {
  if (!item) {
    return {
      screen: '',
    };
  }

  const navObj = {
    [TaskTypesEnum.DeicingTreatment]: {
      screen: POO_STACK,
      params: {
        screen:
          item.status === TaskStatusesEnum.Done && userRole === UserRolesEnum.WorkerTKO
            ? PooStackScreens.PooAgentResults
            : PooStackScreens.PooAgent,
        params: {
          id: item.id,
          deicingTreatmentId: item.id,
        },
      },
    },
  };

  return navObj[item.taskType];
};
