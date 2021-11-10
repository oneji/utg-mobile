import { action, makeObservable, observable } from 'mobx';
import { NotificationAlertProps } from '../ui-kit/Alerts/NotificationAlert';
import RootStore from './RootStore';

export type Theme = 'dark' | 'light';

export class AppStore {
  rootStore: RootStore = null;

  @observable
  loading: boolean = true;

  @observable
  notificationAlert: NotificationAlertProps = {
    visible: false,
    type: 'success',
    message: null,
  };

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
    this.notificationAlert = {
      ...this.notificationAlert,
      visible: false,
    };
  };
}

export default AppStore;
