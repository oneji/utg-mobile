import React from 'react';
import { SvgProps } from 'react-native-svg';

import * as icons from './icons';
import Icons from './types';

import MaterialDesignIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface CustomIconProps extends SvgProps {
  name: keyof Icons;
}

export default ({ name, ...otherProps }: CustomIconProps) => {
  const CustomIcon = icons[name];

  if (!icons[name]) return <MaterialDesignIcon name="help" />;

  return <CustomIcon {...otherProps} />;
};
