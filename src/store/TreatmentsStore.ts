import { action, makeObservable, observable, runInAction, toJS } from 'mobx';
import { showMessage } from 'react-native-flash-message';
import { DeicingTreatmentFormValues } from '../screens/poo/PooAgentScreen';
import { treatmentsService } from '../services';
import {
  GetDeicingTreatmentByIdRequestParams,
  TreatmentModel,
  UpdateDeicingTreatmentRequestBody,
} from '../services/data';
import RootStore from './RootStore';

export class TreatmentsStore {
  rootStore: RootStore = null;

  @observable
  loading: boolean = true;

  @observable
  deicingTreatment: TreatmentModel = null;
  deicingTreatmentFormValues: DeicingTreatmentFormValues = null;

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
    console.log('syncDeicingTreatmentFormValues', {
      values,
    });

    this.deicingTreatmentFormValues = values;
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
