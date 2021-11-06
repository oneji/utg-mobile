import { DirectionsEnum, TaskStatusesEnum, TaskTypesEnum } from '..';

export interface ServiceModel {
  id?: number;
  number?: number;
  title?: string;
  startTime?: string;
  endTime?: string;
  status?: TaskStatusesEnum;
  count?: number;
  comment?: string;
  responsible?: string;
  isCompleted?: boolean;
  direction?: DirectionsEnum;
  taskType: TaskTypesEnum;
}
