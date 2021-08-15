import BaseService from '../BaseService';
import { showMessage } from 'react-native-flash-message';

const ERROR_HTTP_STATUS_CODES: number[] = [422, 401, 426, 413, 400, 404, 449];

/**
 * Turn on API gloval error handling
 */
export function turnOnApiGlobalErrorHandling() {
  let errorMessage = '';

  BaseService.commonErrorHandlers.push((error, status) => {
    if (ERROR_HTTP_STATUS_CODES.includes(status) && error) {
      errorMessage = error;
    } else {
      errorMessage = 'Неизвестная ошибка на сервере';
    }

    showMessage({
      type: 'danger',
      icon: 'auto',
      message: 'Ошибка',
      description: errorMessage,
    });
  });
}

/**
 * Show default toast with an error
 */
export function showUnhandledErrorToast() {
  showMessage({
    type: 'danger',
    icon: 'auto',
    message: 'Ошибка',
    description: 'Неизвестная ошибка на сервере',
  });
}
