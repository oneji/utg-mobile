import { action, makeObservable, observable, runInAction, toJS } from 'mobx';
import { showMessage } from 'react-native-flash-message';
import { navigate } from '../navigation/RootNavigation';
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
  controlLoading: boolean = false;

  @observable
  deicingTreatment: TreatmentModel = null;

  @observable
  deicingTreatmentUpdateReason: string = null;

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
  setDeicingTreatmentUpdateReason = async (reason: string) => {
    this.deicingTreatmentUpdateReason = reason;
  };

  @action
  setControlLoading = async (state: boolean) => {
    this.controlLoading = state;
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
    const { appStore } = this.rootStore;

    try {
      this.setControlLoading(true);

      await treatmentsService.updateDeicingTreatment({
        ...body,
        editReason: this.deicingTreatmentUpdateReason,
        status: this.deicingTreatment ? this.deicingTreatment?.status : body.status,
      });

      appStore.showNotificationAlert({
        type: 'success',
        message: 'Успешно сохранено',
      });
    } catch (error) {
      // Global error handler
    } finally {
      this.setControlLoading(false);
    }
  };

  @action
  startDeicingTreament = async (id: number) => {
    try {
      this.setControlLoading(true);

      await treatmentsService.startDeicingTreatment({
        treatmentId: id,
      });
    } catch (error) {
      // Global error handler
    } finally {
      this.setControlLoading(false);
    }
  };

  @action
  stopDeicingTreament = async (id: number) => {
    try {
      this.setControlLoading(true);

      await treatmentsService.stopDeicingTreatment({
        treatmentId: id,
      });
    } catch (error) {
      // Global error handler
    } finally {
      this.setControlLoading(false);
    }
  };
}

export default TreatmentsStore;
