import { action, makeObservable, observable, runInAction, toJS } from 'mobx';
import { usersService } from '../services';
import { UserModel } from '../services/data';
import RootStore from './RootStore';

export class UserStore {
  rootStore: RootStore = null;

  @observable
  loading: boolean = true;

  @observable
  user: UserModel = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this);
  }

  @action
  setLoading = async (state: boolean) => {
    this.loading = state;
  };

  @action
  getUserInfoById = async (id: number) => {
    try {
      this.setLoading(true);

      const data = await usersService.getById({ id });

      console.log({
        user: data,
      });

      runInAction(() => {
        this.user = data;
      });
    } catch (error) {
      // Global error handler
    } finally {
      this.setLoading(false);
    }
  };
}

export default UserStore;
