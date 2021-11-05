export enum UserRolesEnum {
  None = 0,
  Dispatcher = 1,
  WorkerTKO = 2,
  Client = 3,
  WorkerInCar = 4,
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
