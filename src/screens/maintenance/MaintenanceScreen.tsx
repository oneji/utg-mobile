import React, { FC, Fragment } from 'react';
import { StyleSheet } from 'react-native';

import { MaintenanceScreenProps } from '../../navigation/props';
import { MaintanceTypesEnum } from '../../services/data';
import { CargoMailScreen, PowerSupplyScreen, TowingScreen, PassengersScreen } from '.';

const MaintenanceScreen: FC<MaintenanceScreenProps> = ({ route }) => {
  const { type } = route.params;

  return (
    <Fragment>
      {type === MaintanceTypesEnum.CargoMail && <CargoMailScreen />}
      {type === MaintanceTypesEnum.Towing && <TowingScreen />}
      {type === MaintanceTypesEnum.PowerSupply && <PowerSupplyScreen />}
      {type === MaintanceTypesEnum.Passengers && <PassengersScreen />}
    </Fragment>
  );
};

export default MaintenanceScreen;

const styles = StyleSheet.create({});
