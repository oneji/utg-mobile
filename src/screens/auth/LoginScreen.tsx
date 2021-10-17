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
import { LoginScreenProps } from '../../navigation/props';
import { AuthStackScreens } from '../../navigation/enums';

interface LoginFormValues {
  login: string;
  password: string;
}

const LoginFormValidationSchema: Yup.SchemaOf<LoginFormValues> = Yup.object().shape({
  login: Yup.string().required(),
  password: Yup.string().required(),
});

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
  const { values, errors, handleSubmit, handleChange } = useFormik<LoginFormValues>({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: LoginFormValidationSchema,
    onSubmit: () => navigation.navigate(AuthStackScreens.Phone),
  });

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.logoContainer}>
          <Icon name="logo" color="#343D4F" width={300} height={66} />
        </View>

        <View style={styles.formContainer}>
          <FormGroup>
            <TextInput
              label="Логин"
              value={values.login}
              onChangeText={handleChange('login')}
              status={errors.login ? 'error' : 'default'}
              leftIcon={<Icon name="user" />}
            />
          </FormGroup>

          <FormGroup>
            <TextInput
              label="Пароль"
              value={values.password}
              onChangeText={handleChange('password')}
              status={errors.password ? 'error' : 'default'}
              password
              leftIcon={<Icon name="lock" />}
            />
          </FormGroup>

          <FormGroup>
            <TextLink onPress={() => {}}>Забыли пароль?</TextLink>
          </FormGroup>
        </View>

        <View>
          <Button onPress={handleSubmit}>Войти</Button>
        </View>
      </View>
    </View>
  );
};

export default observer(LoginScreen);

const styles = StyleSheet.create({
  container: {
    ...layout.alignCenter,
    flex: 1,
    paddingHorizontal: 70,
  },
  logoContainer: {
    ...layout.alignCenter,
    marginBottom: 50,
  },
  formContainer: {
    marginBottom: 60,
  },
});
