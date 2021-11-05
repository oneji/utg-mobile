import { GET } from '../../utils';
import BaseService, { RestServiceRequestOptions } from '../BaseService';
import { ApiRequestResponse, FlightModel, GetServicesByFlightIdRequestParams } from '../data';

enum ServicesEndpoints {
  GetByFlightId = 'GetServicesByFlightId',
}

export class ServicesService extends BaseService {
  basePath = '/clients/Service/';

  getByFlightId = async (
    params: GetServicesByFlightIdRequestParams,
    options: RequestInit = {},
    requestOptions: RestServiceRequestOptions = {}
  ): Promise<FlightModel[]> => {
    const { result }: ApiRequestResponse<FlightModel> = await this.send(
      GET,
      `id=${params.id}`,
      ServicesEndpoints.GetByFlightId,
      options,
      requestOptions
    );

    return result;
  };
}

const flightsService = new ServicesService();

export default flightsService;
