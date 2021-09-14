import { action, makeObservable, observable } from 'mobx';
import RootStore from './RootStore';

export type Theme = 'dark' | 'light';

export class AppStore {
  rootStore: RootStore = null;

  @observable
  loading: boolean = true;

  @observable
  theme: Theme = 'light';

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this);
  }

  @action
  setTheme = async (theme: Theme) => {
    this.theme = theme;
  };

  @action
  setLoading = async (state: boolean) => {
    this.loading = state;
  };
}

export default AppStore;
