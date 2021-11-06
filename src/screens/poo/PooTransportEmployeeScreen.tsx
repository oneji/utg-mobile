import React, { FC, useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, layout } from '../../theme';

import { FormGroup, ImagePicker } from '../../ui-kit/Forms';
import { Button } from '../../ui-kit/Buttons';
import { ContainerWithButton } from '../../ui-kit/Containers';
import { WeatherLabel } from '../../components/Labels';
import { TaskStepper } from '../../components/Tasks';
import { PooAgentScreenProps, PooTransportEmployeeScreenProps } from '../../navigation/props';
import Icon from '../../ui-kit/Icon';
import TextInput from '../../ui-kit/TextInput';
import Switch from '../../ui-kit/Switch';

import { PooStackScreens } from '../../navigation/enums';
import { ImageAsset, TaskStepSchema } from '../../services/data';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { InlineAlert } from '../../ui-kit/Alerts';
import { showMessage } from 'react-native-flash-message';
import { useTreatmentsStore } from '../../store/hooks';

const stepperSteps: TaskStepSchema[] = [
  { order: 1, label: 'Текущие условия', key: 'currentConditions' },
  { order: 2, label: 'Результат', key: 'result' },
];

interface PooResultsFormValues {
  water: string;
  typeI: string;
  typeIV: string;
  receiptPhotos: ImageAsset[];
  isPooProcedureCorrect: boolean;
  isAfterPooCheckDone: boolean;
}

const PooResultsValidationSchema: Yup.SchemaOf<PooResultsFormValues> = Yup.object()
  .shape({
    water: Yup.string().required(),
    typeI: Yup.string().required(),
    typeIV: Yup.string().required(),
    receiptPhotos: Yup.array().nullable(),
    isPooProcedureCorrect: Yup.bool().oneOf([true]),
    isAfterPooCheckDone: Yup.bool().oneOf([true]),
  })
  .defined();

const PooAgentScreen: FC<PooTransportEmployeeScreenProps> = ({ navigation, route }) => {
  const { deicingTreatmentId } = route.params;
  const { getDeicingTreamentById, deicingTreatment } = useTreatmentsStore();
  const [currentStep, setCurrentStep] = useState(stepperSteps[0].key);

  useEffect(() => {
    getDeicingTreamentById({
      treatmentId: deicingTreatmentId,
      cityId: 473021,
    });
  }, []);

  useEffect(() => {
    if (currentStep === stepperSteps[1].key) {
      navigation.setOptions({
        title: 'ПОО итоги',
      });
    }
  }, [currentStep]);

  const handleMoveNext = async () => {
    const currentIdx = stepperSteps.findIndex(step => step.key === currentStep);

    if (currentIdx + 1 < stepperSteps.length) {
      setCurrentStep(stepperSteps[currentIdx + 1].key);
    } else {
      await PooResultsValidationSchema.validate(values, {
        abortEarly: false,
      })
        .then(values => {
          console.log({
            values,
          });

          showMessage({
            type: 'success',
            message: 'Успешно',
            icon: 'auto',
            position: 'center',
          });
        })
        .catch((error: Yup.ValidationError) => {
          error.inner.forEach(innerError => {
            setFieldError(innerError.path, innerError.message);
          });
        });
    }
  };

  const { values, errors, handleChange, handleSubmit, setFieldValue, setFieldError } = useFormik<PooResultsFormValues>({
    initialValues: {
      water: '',
      typeI: '113 Ltr',
      typeIV: '0 Ltr',
      receiptPhotos: [],
      isAfterPooCheckDone: false,
      isPooProcedureCorrect: false,
    },
    onSubmit: handleMoveNext,
  });

  return (
    <>
      <TaskStepper steps={stepperSteps} currentKey={currentStep} />

      <ContainerWithButton
        buttonLabel={currentStep === stepperSteps[1].key ? 'Сохранить' : 'Далее'}
        scrollViewProps={{
          contentContainerStyle: {
            padding: 0,
          },
        }}
        onButtonPress={handleSubmit}
      >
        {currentStep === stepperSteps[0].key && (
          <View>
            <View style={{ paddingHorizontal: 20 }}>
              <WeatherLabel degree={deicingTreatment?.temperature} extended condition="Туман / иней" />

              <View
                style={{
                  paddingVertical: 30,
                }}
              >
                <View
                  style={{
                    ...layout.rowSpaceBetween,
                    paddingVertical: 20,
                    borderTopWidth: 0.5,
                    borderBottomWidth: 0.5,
                    borderColor: colors.gray.primary,
                  }}
                >
                  <View style={layout.alignCenter}>
                    <Icon name="airplaneWingTopHighlighted" />
                    <Text style={{ ...fonts.paragraphRegular, marginTop: 15 }}>Верх крыла</Text>
                  </View>

                  <View>
                    <Text style={{ ...fonts.paragraphSemibold, marginBottom: 20 }}>1-ступенчатая</Text>

                    <View style={layout.rowSpaceBetween}>
                      <Text style={fonts.paragraphRegular}>Type I : Вода</Text>
                      <Text style={fonts.paragraphSemibold}>30:70</Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    ...layout.rowSpaceBetween,
                    paddingVertical: 20,
                    borderTopWidth: 0.5,
                    borderBottomWidth: 0.5,
                    borderColor: colors.gray.primary,
                  }}
                >
                  <View style={layout.alignCenter}>
                    <Icon name="airplaneStabilizerTopHighlighted" />
                    <Text style={{ ...fonts.paragraphRegular, marginTop: 15 }}>Верх стабилизатора</Text>
                  </View>

                  <View>
                    <Text style={{ ...fonts.paragraphSemibold, marginBottom: 20 }}>1-ступенчатая</Text>

                    <View style={layout.rowSpaceBetween}>
                      <Text style={fonts.paragraphRegular}>Type I : Вода</Text>
                      <Text style={fonts.paragraphSemibold}>30:70</Text>
                    </View>
                  </View>
                </View>

                <View style={{ ...layout.rowSpaceBetween, marginTop: 25 }}>
                  <Text style={{ ...fonts.paragraphRegular, flexGrow: 1 }}>Таймер</Text>

                  <View style={{ flexBasis: '30%' }}>
                    <Button compact>Старт</Button>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}

        {currentStep === stepperSteps[1].key && (
          <View style={{ padding: 20, backgroundColor: colors.white }}>
            {errors.isAfterPooCheckDone ? (
              <InlineAlert type="danger">
                Подтвердите выполнение ПОО выбранной процедуре и выполнение проверки после ПОО
              </InlineAlert>
            ) : null}

            {errors.isPooProcedureCorrect ? (
              <InlineAlert type="danger">Подтвердите выполнение ПОО выбранной процедуре</InlineAlert>
            ) : null}

            <FormGroup>
              <TextInput
                label="Water"
                value={values.water}
                onChangeText={handleChange('water')}
                status={errors.water ? 'error' : 'default'}
              />
            </FormGroup>

            <FormGroup>
              <TextInput
                label="Type I"
                value={values.typeI}
                onChangeText={handleChange('typeI')}
                status={errors.typeI ? 'error' : 'default'}
              />
            </FormGroup>

            <FormGroup>
              <TextInput
                label="Type IV"
                value={values.typeIV}
                onChangeText={handleChange('typeIV')}
                status={errors.typeIV ? 'error' : 'default'}
              />
            </FormGroup>

            <FormGroup>
              <ImagePicker label="Фото чека" onSelect={(images: ImageAsset[]) => setFieldValue('photos', images)} />
            </FormGroup>

            <FormGroup style={{ borderTopWidth: 0.5, borderColor: colors.gray.primary, paddingVertical: 15 }}>
              <Switch
                label="ПОО  выполнена в соответствии с выбранной процедурой "
                value={values.isPooProcedureCorrect}
                onChange={() => setFieldValue('isPooProcedureCorrect', !values.isPooProcedureCorrect)}
              />
            </FormGroup>

            <FormGroup style={{ borderTopWidth: 0.5, borderColor: colors.gray.primary, paddingVertical: 15 }}>
              <Switch
                label="Проверка после проведения ПОО выполнена"
                value={values.isAfterPooCheckDone}
                onChange={() => setFieldValue('isAfterPooCheckDone', !values.isAfterPooCheckDone)}
              />
            </FormGroup>
          </View>
        )}
      </ContainerWithButton>
    </>
  );
};

export default PooAgentScreen;

const styles = StyleSheet.create({
  labelContainer: {
    ...layout.rowSpaceBetween,
    marginBottom: 15,
  },
  label: {
    ...fonts.paragraphRegular,
    flexShrink: 1,
  },
});
