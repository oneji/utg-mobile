import { PooStackScreens } from '../../navigation/enums';
import { POO_STACK } from '../../navigation/stacks';
import { ServiceModel, TaskTypesEnum } from '../../services/data';

interface NavigationObject {
  screen: string;
  params?: object;
}

export default (item: ServiceModel): NavigationObject => {
  if (!item) {
    return {
      screen: '',
    };
  }

  const navObj = {
    [TaskTypesEnum.DeicingTreatment]: {
      screen: POO_STACK,
      params: {
        screen: PooStackScreens.PooAgent,
        params: {
          id: item.id,
        },
      },
    },
  };

  return navObj[item.taskType];
};
