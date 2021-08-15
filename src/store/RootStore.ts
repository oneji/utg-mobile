import TasksStore from './TasksStore';

class RootStore {
  tasksStore = null;

  constructor() {
    this.tasksStore = new TasksStore(this);
  }
}

export const rootStore = new RootStore();

export default RootStore;
