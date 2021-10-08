import React, { FC, useCallback } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { colors, fonts } from '../../theme';

import { ContainerWithButton } from '../../ui-kit/Containers';
import { FormGroup } from '../../ui-kit/Forms';
import TextInput from '../../ui-kit/TextInput';

import { useFormik } from 'formik';
import { showMessage } from 'react-native-flash-message';

interface ReportSignFormValues {
  occupation: string;
  name: string;
}

const TaskReportSignScreen: FC = () => {
  const handleFinish = useCallback(() => {
    showMessage({
      type: 'success',
      icon: 'auto',
      message: 'Успешно завершено, подпись есть',
      position: 'center',
    });
  }, []);

  const { values, handleChange, handleSubmit } = useFormik<ReportSignFormValues>({
    initialValues: {
      occupation: 'КВС',
      name: 'Комаров Д.С.',
    },
    onSubmit: handleFinish,
  });

  return (
    <ContainerWithButton buttonLabel="Сохранить" onButtonPress={handleSubmit}>
      <Text style={styles.hintText}>
        Оставляя свою подпись вы соглашаетесь с отчетом по рейсу как заказчик и подтверждаете, что Технологическая карта
        обслуживания ВС заполнена верно, и услуги были оказаны в полном объеме, и что вы не имеете претензий к
        исполнителю
      </Text>

      <FormGroup>
        <TextInput label="Должность" value={values.occupation} onChangeText={handleChange('occupation')} />
      </FormGroup>

      <FormGroup>
        <TextInput label="ФИО" value={values.name} onChangeText={handleChange('name')} />
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

export default TaskReportSignScreen;

const styles = StyleSheet.create({
  hintText: {
    ...fonts.smallRegular,
    color: colors.gray.primary,
    marginBottom: 15,
  },
});
