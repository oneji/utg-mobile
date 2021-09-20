import { Dimensions } from 'react-native';

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
