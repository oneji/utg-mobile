import React, { FC, useCallback } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { colors, fonts } from '../../theme';

import { ContainerWithButton } from '../../ui-kit/Containers';
import { FormGroup } from '../../ui-kit/Forms';
import TextInput from '../../ui-kit/TextInput';

import { useFormik } from 'formik';
import { useTreatmentsStore } from '../../store/hooks';
import { observer } from 'mobx-react-lite';
import * as Yup from 'yup';
import { PooSignScreenProps } from '../../navigation/props';
import Modal from '../../ui-kit/Modal';
import { NotificationAlert } from '../../ui-kit/Alerts';

interface PooSignFormValues {
  signedPosition: string;
  signedFIO: string;
}

const PooSignFormValidationSchema: Yup.SchemaOf<PooSignFormValues> = Yup.object().shape({
  signedPosition: Yup.string().required(),
  signedFIO: Yup.string().required(),
});

const PooSignScreen: FC<PooSignScreenProps> = ({ route }) => {
  const { id } = route.params;
  const { controlLoading, loading, updateDeicingTreament, deicingTreatmentFormValues } = useTreatmentsStore();

  const handleFinish = useCallback(({ signedFIO, signedPosition }: PooSignFormValues) => {
    updateDeicingTreament({
      ...deicingTreatmentFormValues,
      id,
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
        loading: controlLoading,
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
