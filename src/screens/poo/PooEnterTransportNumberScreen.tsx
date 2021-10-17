import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { ContainerWithButton } from '../../ui-kit/Containers';
import { FormGroup } from '../../ui-kit/Forms';
import TextInput from '../../ui-kit/TextInput';

import { useFormik } from 'formik';
import { PooEnterTransportNumberScreenProps } from '../../navigation/props';
import { PooStackScreens } from '../../navigation/enums';

interface TransportNumberFormValues {
  transportNumber: number;
  workType: string;
}

const PooEnterTransportNumberScreen: FC<PooEnterTransportNumberScreenProps> = ({ navigation }) => {
  const { values, handleChange, handleSubmit } = useFormik<TransportNumberFormValues>({
    initialValues: {
      transportNumber: 427,
      workType: 'Обработка',
    },
    onSubmit: () => navigation.navigate(PooStackScreens.PooTransportEmployee),
  });

  return (
    <ContainerWithButton onButtonPress={handleSubmit}>
      <FormGroup>
        <TextInput
          label="№ транспортного средства"
          value={values.transportNumber?.toString()}
          onChangeText={handleChange('transportNumber')}
          keyboardType="numeric"
        />
      </FormGroup>

      <FormGroup>
        <TextInput label="Вид работ" value={values.workType} onChangeText={handleChange('workType')} />
      </FormGroup>
    </ContainerWithButton>
  );
};

export default PooEnterTransportNumberScreen;

const styles = StyleSheet.create({});
