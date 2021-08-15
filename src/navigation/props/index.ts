import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RequestsStackScreens } from '../enums';
import { RequestsStackParamList } from '../params';

export type BaseRouteProp = RouteProp<{}, never>;
export type BaseNavigationProp = StackNavigationProp<{}, never>;
export type BaseScreenProps = {
  route: BaseRouteProp;
  navigation: BaseNavigationProp;
};

// Requests
export type RequestsScreenRouteProp = RouteProp<RequestsStackParamList, RequestsStackScreens.Requests>;
export type RequestsScreenNavigationProp = StackNavigationProp<RequestsStackParamList, RequestsStackScreens.Requests>;
export type RequestsScreenProps = {
  route: RequestsScreenRouteProp;
  navigation: RequestsScreenNavigationProp;
};
