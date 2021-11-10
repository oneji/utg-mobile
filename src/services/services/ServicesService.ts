import { GET } from '../../utils';
import BaseService, { RestServiceRequestOptions } from '../BaseService';
import {
  ApiRequestResponse,
  GetImagesRequestParams,
  GetServicesByFlightIdRequestParams,
  PhotofixationImage,
  ServiceModel,
} from '../data';

enum ServicesEndpoints {
  GetByFlightId = 'GetServicesByFlightId',
  GetImages = 'GetImages',
}

export class ServicesService extends BaseService {
  basePath = '/clients/Service/';

  getByFlightId = async (
    params: GetServicesByFlightIdRequestParams,
    options: RequestInit = {},
    requestOptions: RestServiceRequestOptions = {}
  ): Promise<ServiceModel[]> => {
    const { result }: ApiRequestResponse<ServiceModel> = await this.send(
      GET,
      `id=${params.id}`,
      ServicesEndpoints.GetByFlightId,
      options,
      requestOptions
    );

    return result;
  };

  getImages = async (
    params: GetImagesRequestParams,
    options: RequestInit = {},
    requestOptions: RestServiceRequestOptions = {}
  ): Promise<PhotofixationImage[]> => {
    const data = await this.send(
      GET,
      `Take=${params.take}&Skip=${params.skip}`,
      ServicesEndpoints.GetImages,
      options,
      requestOptions
    );

    return data;
  };
}

const flightsService = new ServicesService();

export default flightsService;
