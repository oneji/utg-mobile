import { useStore } from '..';
import AppStore from '../AppStore';
import LoginStore from '../LoginStore';
import TasksStore from '../TasksStore';

export function useTasksStore(): TasksStore {
  return useStore().tasksStore;
}

export function useAppStore(): AppStore {
  return useStore().appStore;
}

export function useLoginStore(): LoginStore {
  return useStore().loginStore;
}
