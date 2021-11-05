import { action, makeObservable, observable, runInAction, toJS } from 'mobx';
import { servicesService } from '../services';
import { ServiceModel } from '../services/data';
import RootStore from './RootStore';

export class ServicesStore {
  rootStore: RootStore = null;

  @observable
  loading: boolean = true;

  @observable
  services: ServiceModel[] = [];

  @observable
  currentService: ServiceModel = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this);
  }

  @action
  setLoading = async (state: boolean) => {
    this.loading = state;
  };

  @action
  getServicesByFlightId = async (id: number) => {
    const { flightsStore } = this.rootStore;

    try {
      this.setLoading(true);

      await flightsStore.getFlightById(id);
      const data = await servicesService.getByFlightId({
        id,
      });

      console.log({
        data: toJS(data),
      });

      runInAction(() => {
        this.services = toJS(data);
      });
    } catch (error) {
      // Global error handler
    } finally {
      this.setLoading(false);
    }
  };
}

export default ServicesStore;
