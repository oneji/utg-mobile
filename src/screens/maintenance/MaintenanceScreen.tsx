import React, { FC, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { CargoMail } from '../../components/Maintenance';

import { MaintenanceScreenProps } from '../../navigation/props';
import { MaintanceTypesEnum } from '../../services/data';

const MaintenanceScreen: FC<MaintenanceScreenProps> = ({ route }) => {
  const { type } = route.params;

  return <Fragment>{type === MaintanceTypesEnum.CargoMail && <CargoMail />}</Fragment>;
};

export default MaintenanceScreen;

const styles = StyleSheet.create({});
