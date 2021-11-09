import { action, makeObservable, observable, runInAction, toJS } from 'mobx';
import { TasksStackScreens } from '../navigation/enums';
import { TasksStackParamList } from '../navigation/params';
import { navigate } from '../navigation/RootNavigation';
import { flightsService } from '../services';
import { AcceptFlightRequestParams, FlightModel, GetFlightByTkoIdRequestParams } from '../services/data';
import RootStore from './RootStore';

export class FlightsStore {
  rootStore: RootStore = null;

  @observable
  loading: boolean = true;

  @observable
  flights: FlightModel[] = [];

  @observable
  currentFlight: FlightModel = null;

  @observable
  showResults: boolean = true;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this);
  }

  @action
  setLoading = async (state: boolean) => {
    this.loading = state;
  };

  @action
  setShowResults = async (state: boolean) => {
    this.showResults = state;
  };

  @action
  getFlightsByTkoId = async ({ id, search = '' }: GetFlightByTkoIdRequestParams) => {
    const { appStore } = this.rootStore;

    try {
      appStore.setLoading(true);

      const data = await flightsService.getByTkoId({
        id,
        search,
      });

      runInAction(() => {
        this.flights = toJS(data);
        this.showResults = true;
      });
    } catch (error) {
      // Global error handler
    } finally {
      appStore.setLoading(false);
    }
  };

  @action
  getFlightById = async (id: number) => {
    try {
      this.setLoading(true);

      const data = await flightsService.getById({
        id,
      });

      console.log(data);

      runInAction(() => {
        this.currentFlight = toJS(data);
      });
    } catch (error) {
      // Global error handler
    } finally {
      this.setLoading(false);
    }
  };

  @action
  acceptFlight = async (data: AcceptFlightRequestParams) => {
    try {
      this.setLoading(true);

      await flightsService.acceptFlight(data);

      const { id, numberOfFlight } = this.currentFlight;

      console.log({
        id,
        numberOfFlight,
      });

      navigate(TasksStackScreens.TaskInProgress, {
        id,
        numberOfFlight,
      });
    } catch (error) {
      // Global error handler
    } finally {
      this.setLoading(false);
    }
  };
}

export default FlightsStore;
