import { action, makeObservable, observable } from 'mobx';
import { NotificationAlertProps } from '../ui-kit/Alerts/NotificationAlert';
import { DefaultNotificationAlertProps } from '../utils';
import RootStore from './RootStore';

export class AppStore {
  rootStore: RootStore = null;

  @observable
  loading: boolean = true;

  @observable
  notificationAlert: NotificationAlertProps = DefaultNotificationAlertProps;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this);
  }

  @action
  setLoading = (state: boolean) => {
    this.loading = state;
  };

  @action
  showNotificationAlert = ({ visible = true, ...otherParams }: NotificationAlertProps) => {
    this.notificationAlert = {
      ...otherParams,
      visible: true,
    };
  };

  @action
  hideNotificationAlert = () => {
    this.notificationAlert = DefaultNotificationAlertProps;
  };
}

export default AppStore;
