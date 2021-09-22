export type TaskTypes = 'ppo' | 'towing';
export type TaskStatuses = 'pending' | 'in_progress';

export type TaskSchema = {
  id?: number;
  title?: string;
  time?: string;
  location?: string;
  signDetails?: string;
  type?: TaskTypes;
  customer?: string;
  airline?: string;
  workStartDate?: string;
  additionalInfo?: string;
  borderNumber?: string;
  flight?: string;
  route?: TaskRouteSchema;
  staEta?: string;
  date?: string;
  aircraftType?: string;
  board?: string;
  mc?: number;
  arrival?: string;
  parking?: string;
  platform?: string;
  terminal?: string;
  exit?: string;
  passFact?: string;
  passAodb?: string;
  luggageFact?: string;
  luggageAodb?: string;
  status?: TaskStatuses;
};

export interface TaskGetByIdParams {
  id: number;
}

export enum TaskStatusesEnum {
  Pending = 'pending',
  InProgress = 'in_progress',
}

export enum TaskTypesEnum {
  PPO = 'ppo',
  Towing = 'towing',
}

export type TaskStepSchema = {
  order?: number;
  label?: string;
  key?: string;
};

export type TaskRouteSchema = {
  from?: string;
  to?: string;
};

export enum MaintanceTypesEnum {
  CargoMail = 'cargoMail',
  Towing = 'towing',
  PowerSupply = 'powerSupply',
  Passengers = 'passengers',
  BathroomService = 'bathroomService',
  Luggage = 'luggage',
  Ladder = 'ladder',
  Refueling = 'refueling',
  VisualInspection = 'visualInspection',
}
