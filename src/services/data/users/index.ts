export enum UserRolesEnum {
  None = 'None',
  Dispatcher = 'Dispatcher',
  WorkerTKO = 'WorkerTKO',
  Client = 'Client',
  WorkerInCar = 'WorkerInCar',
}

export interface UserModel {
  id?: number;
  name?: string;
  surname?: string;
  patronymic?: string;
  fio?: string;
  role?: UserRolesEnum;
  dismissalDate?: string;
  isDeleted?: boolean;
}
