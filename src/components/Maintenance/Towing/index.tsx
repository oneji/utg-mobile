import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { fonts } from '../../../theme';

import { ContainerWithButton } from '../../../ui-kit/Containers';
import { FormGroup } from '../../../ui-kit/Forms';

import { useFormik } from 'formik';
import TextInput from '../../../ui-kit/TextInput';

interface TowingFormValues {
  tractorNumber: string;
  additionalInfo: string;
}

const Towing: FC = () => {
  const { values, handleChange } = useFormik<TowingFormValues>({
    initialValues: {
      tractorNumber: '',
      additionalInfo: '',
    },
    onSubmit: () => {},
  });

  return (
    <ContainerWithButton>
      <Text style={styles.title}>Прилет</Text>

      <FormGroup>
        <TextInput
          label="Мест"
          value={values.tractorNumber}
          onChangeText={handleChange('commandPost.places')}
          keyboardType="numeric"
        />
      </FormGroup>

      <FormGroup>
        <TextInput
          label="Дополнительная информация"
          value={values.additionalInfo}
          onChangeText={handleChange('commandPost.additionalInfo')}
        />
      </FormGroup>
    </ContainerWithButton>
  );
};

export default Towing;

const styles = StyleSheet.create({
  title: {
    ...fonts.subtitleBold,
    marginBottom: 20,
  },
});
