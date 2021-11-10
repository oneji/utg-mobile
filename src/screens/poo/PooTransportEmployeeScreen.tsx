import React, { FC, useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, layout } from '../../theme';

import { FormGroup, ImagePicker } from '../../ui-kit/Forms';
import { Button } from '../../ui-kit/Buttons';
import { ContainerWithButton } from '../../ui-kit/Containers';
import { WeatherLabel } from '../../components/Labels';
import { TaskStepper } from '../../components/Tasks';
import { PooTransportEmployeeScreenProps } from '../../navigation/props';
import Icon from '../../ui-kit/Icon';
import TextInput from '../../ui-kit/TextInput';
import Switch from '../../ui-kit/Switch';
import SpinnerLoading from '../../ui-kit/SpinnerLoading';

import { ImageAsset, TaskStatusesEnum, TaskStepSchema } from '../../services/data';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { InlineAlert } from '../../ui-kit/Alerts';
import { showMessage } from 'react-native-flash-message';
import { useTreatmentsStore, useUserStore } from '../../store/hooks';
import { TREATMENT_NAMES, WEATHER_NAMES } from '../../utils';
import { observer } from 'mobx-react';

const stepperSteps: TaskStepSchema[] = [
  { order: 1, label: 'Текущие условия', key: 'currentConditions' },
  { order: 2, label: 'Результат', key: 'result' },
];

interface PooResultsFormValues {
  spentWater: number;
  spentLiquidOne: number;
  spentLiquidFour: number;
  receiptPhotos: ImageAsset[];
  isPooProcedureCorrect: boolean;
  isAfterPooCheckDone: boolean;
}

const PooResultsValidationSchema: Yup.SchemaOf<PooResultsFormValues> = Yup.object()
  .shape({
    spentWater: Yup.number().required(),
    spentLiquidOne: Yup.number().required(),
    spentLiquidFour: Yup.number().required(),
    receiptPhotos: Yup.array().nullable(),
    isPooProcedureCorrect: Yup.bool().oneOf([true]),
    isAfterPooCheckDone: Yup.bool().oneOf([true]),
  })
  .defined();

const PooTrasportEmployeeScreen: FC<PooTransportEmployeeScreenProps> = ({ navigation, route }) => {
  const { deicingTreatmentId } = route.params;
  const {
    controlLoading,
    loading,
    deicingTreatment,
    getDeicingTreamentById,
    startDeicingTreament,
    updateDeicingTreament,
    stopDeicingTreament,
  } = useTreatmentsStore();
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

          const {
            spentLiquidFour,
            spentWater,
            spentLiquidOne,
            isAfterPooCheckDone,
            isPooProcedureCorrect,
            receiptPhotos,
          } = values;

          updateDeicingTreament({
            ...deicingTreatment,
            treatmentCompleted: isAfterPooCheckDone,
            treatmentIsChecked: isPooProcedureCorrect,
            images: receiptPhotos.map(img => ({
              url: img.base64,
              comment: img.comment,
            })),
            spentWater,
            spentLiquidOne,
            spentLiquidFour,
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
      spentWater: null,
      spentLiquidOne: null,
      spentLiquidFour: null,
      receiptPhotos: [],
      isAfterPooCheckDone: false,
      isPooProcedureCorrect: false,
    },
    onSubmit: handleMoveNext,
  });

  if (loading) return <SpinnerLoading />;

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
        buttonProps={{
          loading: controlLoading,
        }}
      >
        {currentStep === stepperSteps[0].key && (
          <View>
            <View style={{ paddingHorizontal: 20 }}>
              <WeatherLabel
                degree={deicingTreatment?.temperature}
                extended
                condition={WEATHER_NAMES[deicingTreatment?.weather]}
              />

              <View
                style={{
                  paddingVertical: 30,
                }}
              >
                <View
                  style={{
                    ...layout.rowAlignItemsCenter,
                    paddingVertical: 20,
                    borderTopWidth: 0.5,
                    borderBottomWidth: 0.5,
                    borderColor: colors.gray.primary,
                  }}
                >
                  <View style={layout.alignCenter}>
                    <Icon name="airplaneWingTopHighlighted" />
                    <Text style={{ ...fonts.paragraphRegular, marginTop: 15 }}>
                      {TREATMENT_NAMES[deicingTreatment?.treatmentType]}
                    </Text>
                  </View>

                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={{ ...fonts.paragraphSemibold, marginBottom: 20 }}>1-ступенчатая</Text>

                    <View style={layout.rowSpaceBetween}>
                      <Text style={fonts.paragraphRegular}>{`Type ${deicingTreatment?.liquidType}: Вода`}</Text>
                      <Text style={fonts.paragraphSemibold}>{deicingTreatment?.stageConcentration}</Text>
                    </View>
                  </View>
                </View>

                {deicingTreatment?.status === TaskStatusesEnum.Pending ||
                deicingTreatment?.status === TaskStatusesEnum.InProgress ? (
                  <View style={{ ...layout.rowSpaceBetween, marginTop: 25 }}>
                    <Text style={{ ...fonts.paragraphRegular, flexGrow: 1 }}>Таймер</Text>

                    <View style={{ flexBasis: '30%' }}>
                      <Button
                        loading={controlLoading}
                        compact
                        onPress={() => {
                          if (deicingTreatment?.status === TaskStatusesEnum.Pending) {
                            startDeicingTreament(deicingTreatmentId);
                            handleMoveNext();
                          } else {
                            stopDeicingTreament(deicingTreatmentId);
                          }
                        }}
                      >
                        {deicingTreatment?.status === TaskStatusesEnum.Pending ? 'Старт' : 'Стоп'}
                      </Button>
                    </View>
                  </View>
                ) : null}
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
                label="Вода (л)"
                value={values.spentWater?.toString()}
                onChangeText={handleChange('spentWater')}
                status={errors.spentWater ? 'error' : 'default'}
                keyboardType="numeric"
              />
            </FormGroup>

            <FormGroup>
              <TextInput
                label="Тип I (л)"
                value={values.spentLiquidOne?.toString()}
                onChangeText={handleChange('spentLiquidOne')}
                status={errors.spentLiquidOne ? 'error' : 'default'}
                keyboardType="numeric"
              />
            </FormGroup>

            <FormGroup>
              <TextInput
                label="Тип IV (л)"
                value={values.spentLiquidFour?.toString()}
                onChangeText={handleChange('spentLiquidFour')}
                status={errors.spentLiquidFour ? 'error' : 'default'}
                keyboardType="numeric"
              />
            </FormGroup>

            <FormGroup>
              <ImagePicker
                label="Фото чека"
                onSelect={(images: ImageAsset[]) => setFieldValue('receiptPhotos', images)}
              />
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

export default observer(PooTrasportEmployeeScreen);

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
