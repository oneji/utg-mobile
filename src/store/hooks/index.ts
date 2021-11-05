import { useStore } from '..';
import AppStore from '../AppStore';
import FlightsStore from '../FlightsStore';
import LoginStore from '../LoginStore';
import ServicesStore from '../ServicesStore';
import TasksStore from '../TasksStore';
import TreatmentsStore from '../TreatmentsStore';

export function useTasksStore(): TasksStore {
  return useStore().tasksStore;
}

export function useAppStore(): AppStore {
  return useStore().appStore;
}

export function useLoginStore(): LoginStore {
  return useStore().loginStore;
}

export function useFlightsStore(): FlightsStore {
  return useStore().flightsStore;
}

export function useServicesStore(): ServicesStore {
  return useStore().servicesStore;
}

export function useTreatmentsStore(): TreatmentsStore {
  return useStore().treatmentsStore;
}
