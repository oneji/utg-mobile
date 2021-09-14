import { TasksStackScreens } from '../enums';

export type TasksStackParamList = {
  [TasksStackScreens.Tasks]: undefined;
  [TasksStackScreens.TaskDetails]: {
    id: number;
  };
  [TasksStackScreens.TaskInProgress]: {
    id: number;
  };
};
