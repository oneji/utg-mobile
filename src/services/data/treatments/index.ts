import { TaskStatusesEnum, TreatmentStagesEnum, TreatmentTypesEnum, WeatherEnum } from '..';

export interface TreatmentModel {
  temperature: number;
  weather: WeatherEnum;
  threatmentStage: number;
  stageConcentration: string;
  firstTitle: string;
  liquidType: string;
  percent: number;
  secondTitle: string;
  status: TaskStatusesEnum;
  treatmentType: TreatmentTypesEnum;
}

export interface GetDeicingTreatmentByIdRequestParams {
  treatmentId: number;
  cityId: number;
}

export interface UpdateDeicingTreatmentRequestBody {
  id: number;
  threatmentStage: TreatmentStagesEnum;
  stageConcentration: string;
  firstTitle: string;
  liquidType: string;
  percent: number;
  secondTitle: string;
  isSigned: boolean;
  treatmentType: TreatmentTypesEnum;
  signedPosition: string;
  signedFIO: string;
  weatherType: string;
  status: TaskStatusesEnum;
}
