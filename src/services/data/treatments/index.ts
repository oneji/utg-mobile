import { TaskStatusesEnum, TreatmentStagesEnum, TreatmentTypesEnum, WeatherEnum } from '..';

export interface TreatmentModel {
  id?: number;
  temperature?: number;
  weather?: WeatherEnum;
  threatmentStage?: TreatmentStagesEnum;
  stageConcentration?: string;
  firstTitle?: string;
  liquidType?: string;
  percent?: number;
  secondTitle?: string;
  status?: TaskStatusesEnum;
  treatmentType?: TreatmentTypesEnum;
  isSigned?: boolean;
  signedPosition?: string;
  signedFIO?: string;
  weatherType?: string;
  treatmentCompleted?: boolean;
  treatmentIsChecked?: boolean;
  images?: TreatmentImage[];
  spentWater?: number;
  spentLiquidOne?: number;
  spentLiquidFour?: number;
}

export interface TreatmentImage {
  url: string;
  comment: string;
}

export interface GetDeicingTreatmentByIdRequestParams {
  treatmentId: number;
  cityId: number;
}

export interface UpdateDeicingTreatmentRequestBody {
  id?: number;
  threatmentStage?: TreatmentStagesEnum;
  stageConcentration?: string;
  firstTitle?: string;
  liquidType?: string;
  percent?: number;
  secondTitle?: string;
  isSigned?: boolean;
  treatmentType?: TreatmentTypesEnum;
  signedPosition?: string;
  signedFIO?: string;
  weatherType?: string;
  status?: TaskStatusesEnum;
  treatmentCompleted?: boolean;
  treatmentIsChecked?: boolean;
  images?: TreatmentImage[];
  spentWater?: number;
  spentLiquidOne?: number;
  spentLiquidFour?: number;
}

export interface StartDeicingTreatmentRequestBody {
  treatmentId: number;
}
