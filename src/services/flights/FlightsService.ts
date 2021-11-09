import { GET, POST } from '../../utils';
import BaseService, { RestServiceRequestOptions } from '../BaseService';
import { AcceptFlightRequestParams, ApiRequestResponse, FlightModel, GetFlightByTkoIdRequestParams } from '../data';

enum FlightEndpoints {
  GetByTkoId = 'GetFlightsByTkoId',
  GetById = 'GetFlight',
  AcceptFlight = 'AcceptFlight',
}

export class FlightsService extends BaseService {
  basePath = '/clients/Flight/';

  getByTkoId = async (
    params: GetFlightByTkoIdRequestParams,
    options: RequestInit = {},
    requestOptions: RestServiceRequestOptions = {}
  ): Promise<FlightModel[]> => {
    const { result }: ApiRequestResponse<FlightModel> = await this.send(
      GET,
      `id=${params.id}${params.search ? `&search=${params?.search?.toLowerCase()}` : ''}`,
      FlightEndpoints.GetByTkoId,
      options,
      requestOptions
    );

    return result;
  };

  getById = async (
    params: GetFlightByTkoIdRequestParams,
    options: RequestInit = {},
    requestOptions: RestServiceRequestOptions = {}
  ): Promise<FlightModel> => {
    const data = await this.send(GET, `id=${params.id}`, FlightEndpoints.GetById, options, requestOptions);

    return data;
  };

  acceptFlight = async (
    data: AcceptFlightRequestParams,
    options: RequestInit = {},
    requestOptions: RestServiceRequestOptions = {}
  ): Promise<void> => {
    await this.send(POST, '', FlightEndpoints.AcceptFlight, { ...options, body: JSON.stringify(data) }, requestOptions);
  };
}

const flightsService = new FlightsService();

export default flightsService;
