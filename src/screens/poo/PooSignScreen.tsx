import React, { FC, useCallback } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { colors, fonts } from '../../theme';

import { ContainerWithButton } from '../../ui-kit/Containers';
import { FormGroup } from '../../ui-kit/Forms';
import TextInput from '../../ui-kit/TextInput';

import { useFormik } from 'formik';
import { showMessage } from 'react-native-flash-message';
import { useTreatmentsStore } from '../../store/hooks';
import { observer } from 'mobx-react-lite';
import * as Yup from 'yup';

interface PooSignFormValues {
  signedPosition: string;
  signedFIO: string;
}

const PooSignFormValidationSchema: Yup.SchemaOf<PooSignFormValues> = Yup.object().shape({
  signedPosition: Yup.string().required(),
  signedFIO: Yup.string().required(),
});

const PooSignScreen: FC = () => {
  const { loading, updateDeicingTreament, deicingTreatmentFormValues } = useTreatmentsStore();

  // UTG-TODO: Get proper treatment ID
  const handleFinish = useCallback(({ signedFIO, signedPosition }: PooSignFormValues) => {
    updateDeicingTreament({
      ...deicingTreatmentFormValues,
      id: 10,
      isSigned: true,
      signedPosition,
      signedFIO,
    });
  }, []);

  const { values, errors, touched, handleChange, handleSubmit } = useFormik<PooSignFormValues>({
    initialValues: {
      signedPosition: '',
      signedFIO: '',
    },
    validationSchema: PooSignFormValidationSchema,
    onSubmit: handleFinish,
  });

  return (
    <ContainerWithButton
      buttonLabel="Сохранить"
      onButtonPress={handleSubmit}
      buttonProps={{
        loading: loading,
      }}
    >
      <Text style={styles.hintText}>
        Оставляя свою подпись вы соглашаетесь с отчетом по рейсу как заказчик и подтверждаете, что Технологическая карта
        обслуживания ВС заполнена верно, и услуги были оказаны в полном объеме, и что вы не имеете претензий к
        исполнителю
      </Text>

      <FormGroup>
        <TextInput
          label="Должность"
          value={values.signedPosition}
          onChangeText={handleChange('signedPosition')}
          status={errors.signedPosition && touched.signedPosition ? 'error' : 'default'}
        />
      </FormGroup>

      <FormGroup>
        <TextInput
          label="ФИО"
          value={values.signedFIO}
          onChangeText={handleChange('signedFIO')}
          status={errors.signedFIO && touched.signedFIO ? 'error' : 'default'}
        />
      </FormGroup>

      <FormGroup style={{ marginTop: 30, alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/sign.png')}
          style={{
            width: '80%',
            height: 130,
          }}
          resizeMode="contain"
        />
      </FormGroup>
    </ContainerWithButton>
  );
};

export default observer(PooSignScreen);

const styles = StyleSheet.create({
  hintText: {
    ...fonts.smallRegular,
    color: colors.gray.primary,
    marginBottom: 15,
  },
});
