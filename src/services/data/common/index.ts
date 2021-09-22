export type DocumentSchema = {
  id?: number;
  mimetype?: string;
  link?: string;
  name?: string;
  thumbnail?: string;
  size?: number;
};

export enum WeightUnitsEnum {
  KG = 'kg',
  LB = 'lb',
}
export type WeightUnit = WeightUnitsEnum.KG | WeightUnitsEnum.LB;
