import { MaintanceTypesEnum } from '../../services/data';
import {
  FeedbackStackScreens,
  NotificationsStackScreens,
  PhotofixationStackScreens,
  TasksStackScreens,
} from '../enums';

export type TasksStackParamList = {
  [TasksStackScreens.Tasks]: undefined;
  [TasksStackScreens.TaskDetails]: {
    id: number;
  };
  [TasksStackScreens.TaskInProgress]: {
    id: number;
  };
  [TasksStackScreens.Maintenance]: {
    type: MaintanceTypesEnum;
  };
  [TasksStackScreens.TaskReport]: {
    id: number;
  };
  [TasksStackScreens.TaskReportSign]: {
    id: number;
  };
};

export type NotificationsStackParamList = {
  [NotificationsStackScreens.Notifications]: undefined;
  [NotificationsStackScreens.NotificationDetails]: {
    id: number;
  };
};

export type FeedbackStackParamList = {
  [FeedbackStackScreens.Feedback]: undefined;
};

export type PhotofixationStackParamList = {
  [PhotofixationStackScreens.Photofixation]: undefined;
};
