import { MaintanceTypesEnum } from '../../services/data';
import {
  AuthStackScreens,
  FeedbackStackScreens,
  NotificationsStackScreens,
  PhotofixationStackScreens,
  PooStackScreens,
  TasksStackScreens,
} from '../enums';

export type TasksStackParamList = {
  [TasksStackScreens.Tasks]: undefined;
  [TasksStackScreens.TaskDetails]: {
    id: number;
    numberOfFlight: string;
  };
  [TasksStackScreens.TaskInProgress]: {
    id: number;
    numberOfFlight: string;
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

export type PooStackParamList = {
  [PooStackScreens.PooAgent]: {
    id: number;
  };
  [PooStackScreens.PooSign]: {
    id: number;
  };
  [PooStackScreens.PooEnterTransportNumber]: undefined;
  [PooStackScreens.PooTransportEmployee]: {
    numberOfFlight: string;
    deicingTreatmentId: number;
  };
};

export type AuthStackParamList = {
  [AuthStackScreens.Login]: undefined;
  [AuthStackScreens.Phone]: undefined;
  [AuthStackScreens.PinCode]: {
    navigateTo: string;
  };
  [AuthStackScreens.PasswordReset]: undefined;
  [AuthStackScreens.NewPassword]: undefined;
};
