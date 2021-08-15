export type TaskTypes = 'ppo' | 'towing';

export type TaskSchema = {
  id?: number;
  title?: string;
  time?: string;
  location?: string;
  status?: string;
  signDetails?: string;
  type?: TaskTypes;
};

export enum TaskStatusesEnum {
  Pending = 'pending',
  InProgress = 'in_progress',
}

export enum TaskTypesEnum {
  PPO = 'ppo',
  Towing = 'towing',
}
