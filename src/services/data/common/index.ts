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
