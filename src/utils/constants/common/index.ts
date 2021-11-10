import { Dimensions } from 'react-native';
import { TreatmentStagesEnum, TreatmentTypesEnum, WeatherEnum } from '../../../services/data';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const getDayTimes = () => {
  const time = [];

  for (let i = 0; i < 23; i++) {
    let hour = i < 10 ? `0${i}` : i;

    time.push(`${hour}:00`);
  }

  return time;
};

export const WEATHER_NAMES = {
  [WeatherEnum.Foggy]: 'Туман / иней',
  [WeatherEnum.Rainy]: 'Дождь / морось',
  [WeatherEnum.Snowy]: 'Снег / снежные гранулы крупа',
};

export const WEATHER_NAMES_EN = {
  [WeatherEnum.Foggy]: 'Fog / frost',
  [WeatherEnum.Rainy]: 'Rain / drizzle',
  [WeatherEnum.Snowy]: 'Snow / snow pellets groats',
};

export const TREATMENT_NAMES = {
  [TreatmentTypesEnum.Fuselage]: 'Фюзеляж',
  [TreatmentTypesEnum.WingTop]: 'Верх крыла',
  [TreatmentTypesEnum.StabilizerTop]: 'Верх стабилизатора',
  [TreatmentTypesEnum.Keel]: 'Киль',
  [TreatmentTypesEnum.WingBottom]: 'Низ крыла',
  [TreatmentTypesEnum.StabilizerBottom]: 'Низ стабилизатора',
};

export const TREATMENT_NAMES_EN = {
  [TreatmentTypesEnum.Fuselage]: 'Fuselage',
  [TreatmentTypesEnum.WingTop]: 'Wing top',
  [TreatmentTypesEnum.StabilizerTop]: 'Stabilizer Top',
  [TreatmentTypesEnum.Keel]: 'Keel',
  [TreatmentTypesEnum.WingBottom]: 'Wing bottom',
  [TreatmentTypesEnum.StabilizerBottom]: 'Stabilizer bottom',
};

export const TREATMENT_STAGE_NAMES = {
  [TreatmentStagesEnum.OneStage]: '1-ступенчатая',
  [TreatmentStagesEnum.TwoStages]: '2-ступенчатая',
};

export const TREATMENT_STAGE_NAMES_EN = {
  [TreatmentStagesEnum.OneStage]: '1-stage',
  [TreatmentStagesEnum.TwoStages]: '2-stage',
};
