import { useStore } from '..';
import AppStore from '../AppStore';
import TasksStore from '../TasksStore';

export function useTasksStore(): TasksStore {
  return useStore().tasksStore;
}

export function useAppStore(): AppStore {
  return useStore().appStore;
}
