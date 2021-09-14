import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { NotificationsStackScreens, TasksStackScreens } from '../enums';
import { NotificationsStackParamList, TasksStackParamList } from '../params';

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
