import { action, makeObservable, observable, runInAction, toJS } from 'mobx';
import { showMessage } from 'react-native-flash-message';
import { DeicingTreatmentFormValues } from '../screens/poo/PooAgentScreen';
import { treatmentsService } from '../services';
import {
  FlightModel,
  GetDeicingTreatmentByIdRequestParams,
  TreatmentModel,
  UpdateDeicingTreatmentRequestBody,
} from '../services/data';
import RootStore from './RootStore';

export class TreatmentsStore {
  rootStore: RootStore = null;

  @observable
  loading: boolean = false;

  @observable
  deicingTreatment: TreatmentModel = null;

  @observable
  deicingTreatmentFormValues: DeicingTreatmentFormValues = null;

  @observable
  deicingTreatments: FlightModel[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this);
  }

  @action
  setLoading = async (state: boolean) => {
    this.loading = state;
  };

  @action
  syncDeicingTreatmentFormValues = async (values: DeicingTreatmentFormValues) => {
    this.deicingTreatmentFormValues = values;
  };

  @action
  getDeicingTreaments = async () => {
    const { appStore } = this.rootStore;

    try {
      appStore.setLoading(true);

      const data = await treatmentsService.getDeicingTreatments();

      console.log({
        data: toJS(data),
      });

      runInAction(() => {
        this.deicingTreatments = data;
      });
    } catch (error) {
      // Global error handler
    } finally {
      appStore.setLoading(false);
    }
  };

  @action
  getDeicingTreamentById = async (params: GetDeicingTreatmentByIdRequestParams) => {
    try {
      this.setLoading(true);

      const data = await treatmentsService.getById(params);

      console.log({
        data: toJS(data),
      });

      runInAction(() => {
        this.deicingTreatment = data;
      });
    } catch (error) {
      // Global error handler
    } finally {
      this.setLoading(false);
    }
  };

  @action
  updateDeicingTreament = async (body: UpdateDeicingTreatmentRequestBody) => {
    try {
      this.setLoading(true);

      await treatmentsService.updateDeicingTreatment(body);

      showMessage({
        type: 'success',
        icon: 'auto',
        message: 'Успешно завершено, подпись есть',
        position: 'center',
      });
    } catch (error) {
      // Global error handler
    } finally {
      this.setLoading(false);
    }
  };
}

export default TreatmentsStore;
