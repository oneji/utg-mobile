import { action, makeObservable, observable } from 'mobx';
import RootStore from './RootStore';

const TEST_USERNAME = 'admin';
const TEST_PASSWORD = 'admin';

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
  login = async credentials => {
    console.log({
      credentials,
    });
  };
}

export default LoginStore;
