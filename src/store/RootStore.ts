import TasksStore from './TasksStore';
import AppStore from './AppStore';

class RootStore {
  tasksStore = null;
  appStore = null;

  constructor() {
    this.tasksStore = new TasksStore(this);
    this.appStore = new AppStore(this);
  }
}

export const rootStore = new RootStore();

export default RootStore;
