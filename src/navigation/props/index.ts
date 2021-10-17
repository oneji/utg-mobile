import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AuthStackScreens, NotificationsStackScreens, PooStackScreens, TasksStackScreens } from '../enums';
import { AuthStackParamList, NotificationsStackParamList, PooStackParamList, TasksStackParamList } from '../params';

export type BaseRouteProp = RouteProp<{}, never>;
export type BaseNavigationProp = StackNavigationProp<{}, never>;
export type BaseScreenProps = {
  route: BaseRouteProp;
  navigation: BaseNavigationProp;
};

// Tasks
export type TasksScreenRouteProp = RouteProp<TasksStackParamList, TasksStackScreens.Tasks>;
export type TasksScreenNavigationProp = StackNavigationProp<TasksStackParamList, TasksStackScreens.Tasks>;
export type TasksScreenProps = {
  route: TasksScreenRouteProp;
  navigation: TasksScreenNavigationProp;
};

export type TaskDetailsScreenRouteProp = RouteProp<TasksStackParamList, TasksStackScreens.TaskDetails>;
export type TaskDetailsScreenNavigationProp = StackNavigationProp<TasksStackParamList, TasksStackScreens.TaskDetails>;
export type TaskDetailsScreenProps = {
  route: TaskDetailsScreenRouteProp;
  navigation: TaskDetailsScreenNavigationProp;
};

export type TaskReportScreenRouteProp = RouteProp<TasksStackParamList, TasksStackScreens.TaskReport>;
export type TaskReportScreenNavigationProp = StackNavigationProp<TasksStackParamList, TasksStackScreens.TaskReport>;
export type TaskReportScreenProps = {
  route: TaskReportScreenRouteProp;
  navigation: TaskReportScreenNavigationProp;
};

export type MaintenanceScreenRouteProp = RouteProp<TasksStackParamList, TasksStackScreens.Maintenance>;
export type MaintenanceScreenNavigationProp = StackNavigationProp<TasksStackParamList, TasksStackScreens.Maintenance>;
export type MaintenanceScreenProps = {
  route: MaintenanceScreenRouteProp;
  navigation: MaintenanceScreenNavigationProp;
};

// Notifications
export type NotificationsScreenRouteProp = RouteProp<
  NotificationsStackParamList,
  NotificationsStackScreens.Notifications
>;
export type NotificationsScreenNavigationProp = StackNavigationProp<
  NotificationsStackParamList,
  NotificationsStackScreens.Notifications
>;
export type NotificationsScreenProps = {
  route: NotificationsScreenRouteProp;
  navigation: NotificationsScreenNavigationProp;
};

// POO
export type PooAgentScreenRouteProp = RouteProp<PooStackParamList, PooStackScreens.PooAgent>;
export type PooAgentScreenNavigationProp = StackNavigationProp<PooStackParamList, PooStackScreens.PooAgent>;
export type PooAgentScreenProps = {
  route: PooAgentScreenRouteProp;
  navigation: PooAgentScreenNavigationProp;
};

export type PooEnterTransportNumberScreenRouteProp = RouteProp<
  PooStackParamList,
  PooStackScreens.PooEnterTransportNumber
>;
export type PooEnterTransportNumberScreenNavigationProp = StackNavigationProp<
  PooStackParamList,
  PooStackScreens.PooEnterTransportNumber
>;
export type PooEnterTransportNumberScreenProps = {
  route: PooEnterTransportNumberScreenRouteProp;
  navigation: PooEnterTransportNumberScreenNavigationProp;
};

// Auth
export type LoginScreenRouteProp = RouteProp<AuthStackParamList, AuthStackScreens.Login>;
export type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList, AuthStackScreens.Login>;
export type LoginScreenProps = {
  route: LoginScreenRouteProp;
  navigation: LoginScreenNavigationProp;
};

export type PhoneScreenRouteProp = RouteProp<AuthStackParamList, AuthStackScreens.Login>;
export type PhoneScreenNavigationProp = StackNavigationProp<AuthStackParamList, AuthStackScreens.Login>;
export type PhoneScreenProps = {
  route: PhoneScreenRouteProp;
  navigation: PhoneScreenNavigationProp;
};

export type PinCodeScreenRouteProp = RouteProp<AuthStackParamList, AuthStackScreens.Login>;
export type PinCodeScreenNavigationProp = StackNavigationProp<AuthStackParamList, AuthStackScreens.Login>;
export type PinCodeScreenProps = {
  route: PinCodeScreenRouteProp;
  navigation: PinCodeScreenNavigationProp;
};
