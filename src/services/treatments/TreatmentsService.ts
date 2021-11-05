import { GET, PUT } from '../../utils';
import BaseService, { RestServiceRequestOptions } from '../BaseService';
import { GetDeicingTreatmentByIdRequestParams, TreatmentModel, UpdateDeicingTreatmentRequestBody } from '../data';

enum TreatmentsEndpoints {
  GetById = 'GetDeIcingTreatmentById',
  UpdateDeicingTreatment = 'UpdateDeicingTreatment',
}

export class TreatmentsService extends BaseService {
  basePath = '/clients/Treatment/';

  getById = async (
    params: GetDeicingTreatmentByIdRequestParams,
    options: RequestInit = {},
    requestOptions: RestServiceRequestOptions = {}
  ): Promise<TreatmentModel> => {
    const data: TreatmentModel = await this.send(
      GET,
      `TreatmentId=${params.treatmentId}&CityId=${params.cityId}`,
      TreatmentsEndpoints.GetById,
      options,
      requestOptions
    );

    return data;
  };

  updateDeicingTreatment = async (
    body: UpdateDeicingTreatmentRequestBody,
    options: RequestInit = {},
    requestOptions: RestServiceRequestOptions = {}
  ): Promise<void> => {
    const data = await this.send(
      PUT,
      ``,
      TreatmentsEndpoints.UpdateDeicingTreatment,
      { ...options, body: JSON.stringify(body) },
      requestOptions
    );

    console.log('updateDeicingTreatment()', { data });

    return data;
  };
}

const treatmentsService = new TreatmentsService();

export default treatmentsService;
