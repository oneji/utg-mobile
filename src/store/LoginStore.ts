import { action, makeObservable, observable } from 'mobx';
import { storageService, BaseService } from '../services';
import { objectKeysToCamelCase } from '../utils/formatting';
import RootStore from './RootStore';
import keycloak from '../keycloak-auth';

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
  initAuth = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { userStore } = this.rootStore;

        if (!keycloak.authenticated) {
          await this.login();

          resolve(null);
        } else {
          userStore.setUser(objectKeysToCamelCase(keycloak.userInfo));
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  @action
  login = async () => {
    await keycloak?.login();

    await storageService.setItem('@UTG_token', keycloak?.token);
    BaseService.userToken = keycloak?.token;
  };

  @action
  logout = () => {
    keycloak?.logout();
  };
}

export default LoginStore;
