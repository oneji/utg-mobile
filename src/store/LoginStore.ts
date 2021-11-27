import { action, makeObservable, observable } from 'mobx';
import keycloak from '../keycloak-auth';
import { objectKeysToCamelCase } from '../utils/formatting';
import RootStore from './RootStore';

export class LoginStore {
  rootStore: RootStore = null;

  @observable
  loading: boolean = true;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this);
  }

  @action
  setLoading = async (state: boolean) => {
    this.loading = state;
  };

  @action
  login = () => {
    const { userStore } = this.rootStore;

    if (!keycloak?.authenticated) {
      keycloak?.login();
    } else {
      userStore.setUser(objectKeysToCamelCase(keycloak.userInfo));
    }
  };

  @action
  logout = () => {
    keycloak?.logout();
  };
}

export default LoginStore;
