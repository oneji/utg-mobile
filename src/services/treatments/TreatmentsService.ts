import { GET, PUT } from '../../utils';
import BaseService, { RestServiceRequestOptions } from '../BaseService';
import {
  ApiRequestResponse,
  FlightModel,
  GetDeicingTreatmentByIdRequestParams,
  TreatmentModel,
  UpdateDeicingTreatmentRequestBody,
} from '../data';

enum TreatmentsEndpoints {
  GetDeicingTreatments = 'GetDeicingTreatments',
  GetById = 'GetDeIcingTreatmentById',
  UpdateDeicingTreatment = 'UpdateDeicingTreatment',
}

export class TreatmentsService extends BaseService {
  basePath = '/clients/Treatment/';

  getDeicingTreatments = async (
    options: RequestInit = {},
    requestOptions: RestServiceRequestOptions = {}
  ): Promise<FlightModel[]> => {
    const data: ApiRequestResponse<FlightModel> = await this.send(
      GET,
      ``,
      TreatmentsEndpoints.GetDeicingTreatments,
      options,
      requestOptions
    );

    return data.result;
  };

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
    console.log({
      body,
    });

    const data = await this.send(
      PUT,
      ``,
      TreatmentsEndpoints.UpdateDeicingTreatment,
      { ...options, body: JSON.stringify(body) },
      requestOptions
    );

    return data;
  };
}

const treatmentsService = new TreatmentsService();

export default treatmentsService;
