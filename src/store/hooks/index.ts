import { useStore } from '..';
import TasksStore from '../TasksStore';

export function useTasksStore(): TasksStore {
  return useStore().tasksStore;
}
