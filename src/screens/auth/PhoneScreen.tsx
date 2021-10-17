import React, { FC } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, layout } from '../../theme';

import { Button } from '../../ui-kit/Buttons';
import { FormGroup } from '../../ui-kit/Forms';
import Icon from '../../ui-kit/Icon';
import TextInput from '../../ui-kit/TextInput';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { observer } from 'mobx-react';
import { TextLink } from '../../ui-kit/Links';

interface PhoneFormValues {
  phone: string;
}

const PhoneFormValidationSchema: Yup.SchemaOf<PhoneFormValues> = Yup.object().shape({
  phone: Yup.string().required(),
});

const PhoneScreen: FC = () => {
  const { values, errors, handleSubmit, handleChange } = useFormik<PhoneFormValues>({
    initialValues: {
      phone: '',
    },
    validationSchema: PhoneFormValidationSchema,
    onSubmit: () => {},
  });

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.logoContainer}>
          <Icon name="logo" color="#343D4F" width={300} height={66} />
        </View>

        <View style={styles.formContainer}>
          <FormGroup style={styles.confirmTextContainer}>
            <Text style={fonts.paragraphRegular}>Подтверждение учетной записи</Text>
          </FormGroup>

          <FormGroup>
            <TextInput
              label="Номер телефона"
              value={values.phone}
              onChangeText={handleChange('phone')}
              status={errors.phone ? 'error' : 'default'}
              leftIcon={<Icon name="phone" />}
              keyboardType="numeric"
              mask={'+7 ([000]) [000] - [00] - [00]'}
            />
          </FormGroup>

          <FormGroup>
            <Text style={{ ...fonts.extraSmallRegular, color: colors.gray.primary }}>
              Введите номер мобильного телефона для получения SMS-кода
            </Text>
          </FormGroup>
        </View>

        <View>
          <Button onPress={handleSubmit}>Получить код</Button>
        </View>
      </View>
    </View>
  );
};

export default observer(PhoneScreen);

const styles = StyleSheet.create({
  container: {
    ...layout.alignCenter,
    flex: 1,
    paddingHorizontal: 70,
  },
  confirmTextContainer: {
    ...layout.alignCenter,
    marginTop: 5,
    marginBottom: 30,
  },
  logoContainer: {
    ...layout.alignCenter,
  },
  formContainer: {
    marginBottom: 60,
  },
});
