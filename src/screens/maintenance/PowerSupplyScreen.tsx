import { useFormik } from 'formik';
import React, { FC, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { colors, fonts, layout } from '../../theme';
import { Button } from '../../ui-kit/Buttons';
import { ContainerWithButton } from '../../ui-kit/Containers';
import { FormGroup } from '../../ui-kit/Forms';
import Switch from '../../ui-kit/Switch';
import TextInput from '../../ui-kit/TextInput';

interface PowerSupplyFormValues {
  stationary: boolean;
  mobile: boolean;
  numbers: Array<{
    number: number;
  }>;
  additionalInfo: string;
}

const PowerSupplyScreen: FC = () => {
  // TODO: Connect validation
  const { values, handleChange, handleSubmit, setFieldValue } = useFormik<PowerSupplyFormValues>({
    initialValues: {
      stationary: false,
      mobile: false,
      numbers: [
        {
          number: null,
        },
      ],
      additionalInfo: '',
    },
    onSubmit: (values: PowerSupplyFormValues) => {
      console.log({
        values,
      });
    },
  });

  const handleAddFormItem = useCallback(() => {
    setFieldValue('numbers', [
      ...values.numbers,
      {
        number: '',
      },
    ]);
  }, [values.numbers]);

  return (
    <ContainerWithButton onButtonPress={handleSubmit}>
      <Text style={styles.title}>Прилет</Text>

      <View style={styles.listItem}>
        <Switch
          label="Стационарный"
          value={values.stationary}
          onChange={() => setFieldValue('stationary', !values.stationary)}
        />
      </View>

      <View style={styles.listItem}>
        <Switch label="Передвижной" value={values.mobile} onChange={() => setFieldValue('mobile', !values.mobile)} />
      </View>

      <FormGroup>
        <TextInput
          label="№"
          keyboardType="numeric"
          value={values.numbers[0]?.number?.toString()}
          onChangeText={handleChange('numbers[0].number')}
        />
      </FormGroup>

      <View style={layout.alignCenter}>
        <IconButton
          icon="plus"
          size={45}
          onPress={handleAddFormItem}
          style={{
            backgroundColor: colors.gray.secondary,
            padding: 0,
            margin: 0,
            width: 45,
            height: 45,
            marginBottom: 15,
          }}
          color={colors.white}
        />
      </View>

      {values.numbers.length > 1 &&
        values.numbers.map((number, idx) => {
          if (idx > 0) {
            return (
              <View style={{ marginBottom: 15 }} key={`power-supply-${idx}`}>
                <View style={{ ...layout.rowSpaceBetween, marginBottom: 15 }}>
                  <Text style={fonts.paragraphRegular}>Источник электропитания {idx + 1}</Text>

                  <Button compact onPress={() => {}}>
                    Старт
                  </Button>
                </View>

                <TextInput
                  label="№"
                  value={number.number?.toString()}
                  onChangeText={handleChange(`numbers[${idx}].number`)}
                  keyboardType="numeric"
                />
              </View>
            );
          }
        })}

      <FormGroup>
        <TextInput
          label="Дополнительная информация"
          value={values.additionalInfo}
          onChangeText={handleChange('additionalInfo')}
        />
      </FormGroup>
    </ContainerWithButton>
  );
};

export default PowerSupplyScreen;

const styles = StyleSheet.create({
  title: {
    ...fonts.subtitleBold,
    marginBottom: 20,
  },
  listItem: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray.primary,
    paddingVertical: 15,
  },
});
