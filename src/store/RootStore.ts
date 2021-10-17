import TasksStore from './TasksStore';
import AppStore from './AppStore';
import LoginStore from './LoginStore';

class RootStore {
  tasksStore = null;
  appStore = null;
  loginStore = null;

  constructor() {
    this.tasksStore = new TasksStore(this);
    this.appStore = new AppStore(this);
    this.loginStore = new LoginStore(this);
  }
}

export const rootStore = new RootStore();

export default RootStore;
