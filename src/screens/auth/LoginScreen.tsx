import React, { FC, useEffect } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { layout } from '../../theme';

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
import { useKeycloak } from '../../keycloak';

interface LoginFormValues {
  login: string;
  password: string;
}

const LoginFormValidationSchema: Yup.SchemaOf<LoginFormValues> = Yup.object().shape({
  login: Yup.string().required(),
  password: Yup.string().required(),
});

const LoginScreen: FC<LoginScreenProps> = ({ navigation, route }) => {
  const { token } = route.params;
  const { keycloak, initialized } = useKeycloak();

  const initAuth = async () => {
    console.log({
      keycloak,
      initialized,
      token,
    });

    keycloak
      .init({
        onLoad: 'login-required',
      })
      .then((auth: boolean) => {
        console.log({
          auth,
        });

        if (!auth) {
          keycloak
            ?.login()
            .then((response: any) => {
              console.log('LOGGED INNNN', {
                response,
              });
            })
            .catch(err => console.log(err));
        }
      });
  };

  useEffect(() => {
    initAuth();
  }, []);

  const { values, errors, touched, handleSubmit, handleChange } = useFormik<LoginFormValues>({
    initialValues: {
      login: 'fcking',
      password: 'keycloak',
    },
    validationSchema: LoginFormValidationSchema,
    onSubmit: () => initAuth(),
  });

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.logoContainer}>
          <Icon name="logo" color="#343D4F" width={300} height={66} />
        </View>

        <View style={styles.formContainer}>
          <FormGroup>
            <Text>{`Welcome ${keycloak?.authenticated} - ${keycloak?.token}!`}</Text>
          </FormGroup>

          <FormGroup>
            <TextInput
              label="Логин"
              value={values.login}
              onChangeText={handleChange('login')}
              status={errors.login && touched.login ? 'error' : 'default'}
              leftIcon={<Icon name="user" />}
            />
          </FormGroup>

          <FormGroup>
            <TextInput
              label="Пароль"
              value={values.password}
              onChangeText={handleChange('password')}
              status={errors.password && touched.password ? 'error' : 'default'}
              password
              leftIcon={<Icon name="lock" />}
            />
          </FormGroup>

          <FormGroup>
            <TextLink onPress={() => navigation.navigate(AuthStackScreens.PasswordReset)}>Забыли пароль?</TextLink>
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
    flex: 1,
    paddingHorizontal: 50,
    paddingTop: 108,
    paddingBottom: 200,
  },
  logoContainer: {
    ...layout.alignCenter,
    marginBottom: 50,
  },
  formContainer: {
    marginBottom: 60,
  },
});
