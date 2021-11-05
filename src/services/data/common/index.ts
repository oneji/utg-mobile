import { Asset } from 'react-native-image-picker';

export type DocumentSchema = {
  id?: number;
  mimetype?: string;
  link?: string;
  name?: string;
  thumbnail?: string;
  size?: number;
};

export interface ImageAsset extends Asset {
  id: number;
  comment: string;
}

export enum WeightUnitsEnum {
  KG = 'kg',
  LB = 'lb',
}
export type WeightUnit = WeightUnitsEnum.KG | WeightUnitsEnum.LB;

export enum TreatmentTypesEnum {
  None = 'None',
  WingTop = 'WingTop',
  StabilizerTop = 'StabilizerTop',
  Keel = 'Keel',
  Fuselage = 'Fuselage',
  WingBottom = 'WingBottom',
  StabilizerBottom = 'StabilizerBottom',
}

export enum TreatmentStagesEnum {
  None = 'None',
  OneStage = 'OneStage',
  TwoStages = 'TwoStages',
}

export enum TaskTypesEnum {
  None = 'None',
  DeicingTreatment = 'DeicingTreatment',
}

export enum DirectionsEnum {
  None = 'None',
  Reversal = 'Reversal',
  Arrival = 'Arrival',
  Departure = 'Departure',
}

export interface ApiRequestResponse<T> {
  result: T[];
  total: number;
}

export enum WeatherEnum {
  Foggy = 'Foggy',
  Rainy = 'Rainy',
  Snowy = 'Snowy',
}
