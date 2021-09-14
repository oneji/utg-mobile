import { GET, HTTPMethod } from '../utils';
import combinedMocks from './data/mocks/combinedMocks';

export class HTTPRequestError extends Error {
  // Error text from the server
  error: string;
  // Http status if request was OK
  status: number;
  // Original request error
  originalError: Error;
  // Data that was received with the incorrect http status
  originalData: any;

  constructor(error: string, status?: number, originalError?: Error, originalData?: any) {
    super(error);
    this.error = error;
    this.status = status;
    this.originalError = originalError;
    this.originalData = originalData;
  }
}

export interface RestServiceRequestOptions {
  // Turn off global options transformation
  withoutOptionsMiddlewares?: boolean;
  // Turn off the global error handler
  withoutErrorHandlers?: boolean;
}

export default class BaseService {
  // Global url for all services that inherit this class
  static apiPath = '/';

  static commonOptionsMiddlewares: Array<(options: RequestInit) => RequestInit> = [
    options => ({
      ...options,
      // For auth
      credentials: 'include',
      mode: 'cors',
      headers: {
        ...options.headers,
        // Working with JSON
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }),
  ];
  static commonErrorHandlers: Array<(error: string, status?: number) => void> = [];

  // Здесь можно указать кастомный путь для конкретного инстанса сервиса
  customApiPath: string = '';

  // Дополнительный путь к конкретному endpoint
  basePath: string = '';

  /**
   * Make HTTP request
   *
   * @param method http method
   * @param params query string for GET request
   * @param subPath additional path for the service: `${apiPath}/${this.basePath}/${subPath}`
   * @param options http request params
   * @param requestOptions additional params for service
   */
  send = async (
    method: HTTPMethod = GET,
    params: string = '',
    subPath: string = '',
    options: RequestInit = {},
    requestOptions: RestServiceRequestOptions = {}
  ): Promise<any> => {
    const errorHandlers = BaseService.commonErrorHandlers;

    let computedOptions: RequestInit = {
      method,
    };

    computedOptions = {
      ...computedOptions,
      ...options,
    };

    const url = `${this.customApiPath || BaseService.apiPath}${this.basePath}${subPath}${params ? `?${params}` : ''}`;

    let response: Response;
    try {
      response = await fetch(url, computedOptions);
    } catch (error) {
      if (!requestOptions.withoutErrorHandlers) {
        errorHandlers.forEach(handler => handler(error.message));
      }

      throw new HTTPRequestError(error.message, null, error);
    }

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      // Возможно сервер прислал читаемую ошибку
      let message = '';
      let errorData = null;
      try {
        errorData = await response.json();
        if (errorData.message) {
          message = errorData.message;
        } else if (errorData.error && typeof errorData.error === 'string') {
          // В некоторых старых запросах заполняется поле "error"
          message = errorData.error;
        }
      } catch (e) {
        // Все таки не прислал
      }

      if (!requestOptions.withoutErrorHandlers) {
        errorHandlers.forEach(handler => handler(message, response.status));
      }

      throw new HTTPRequestError(message, response.status, null, errorData);
    }
  };

  /**
   * Make fake http request and return mock data
   *
   * TODO: Get rid of this method when real API is available
   */
  sendFake = async (
    mockDataObject: string = null,
    // This params are the same as above to make migration easy
    method: HTTPMethod = GET,
    params: string = '',
    subPath: string = '',
    options: RequestInit = {},
    requestOptions: RestServiceRequestOptions = {}
  ) => {
    const errorHandlers = BaseService.commonErrorHandlers;

    try {
      return combinedMocks[mockDataObject];
    } catch (error) {
      if (!requestOptions.withoutErrorHandlers) {
        errorHandlers.forEach(handler => handler(error.message));
      }

      throw new HTTPRequestError(error.message, null, error);
    }
  };
}