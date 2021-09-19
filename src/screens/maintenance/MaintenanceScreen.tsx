import React, { FC, Fragment } from 'react';
import { StyleSheet } from 'react-native';

import { CargoMail, Towing } from '../../components/Maintenance';

import { MaintenanceScreenProps } from '../../navigation/props';
import { MaintanceTypesEnum } from '../../services/data';

const MaintenanceScreen: FC<MaintenanceScreenProps> = ({ route }) => {
  const { type } = route.params;

  return (
    <Fragment>
      {type === MaintanceTypesEnum.CargoMail && <CargoMail />}
      {type === MaintanceTypesEnum.Towing && <Towing />}
    </Fragment>
  );
};

export default MaintenanceScreen;

const styles = StyleSheet.create({});
