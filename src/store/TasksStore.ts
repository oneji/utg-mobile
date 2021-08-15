import { action, observable } from 'mobx';
import { TaskSchema } from '../services/data';
import tasksService from '../services/tasks/TasksService';
import RootStore from './RootStore';

export class TasksStore {
  rootStore: RootStore = null;

  @observable
  loading: boolean = false;
  @observable
  noSignTasks: TaskSchema[] = [];
  @observable
  currentTask: TaskSchema = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  getNoSignTasks = async () => {
    try {
      this.loading = true;

      this.noSignTasks = await tasksService.getNoSignTasks();
    } catch (error) {
      // Global error handler

      console.log(error);
    } finally {
      this.loading = false;
    }
  };
}

export default TasksStore;
