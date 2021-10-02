import React, { FC, useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts } from '../../theme';

import { ContainerWithButton } from '../../ui-kit/Containers';
import { WeatherLabel } from '../../components/Labels';
import { TaskStepper } from '../../components/Tasks';
import Icon from '../../ui-kit/Icon';
import IconRadioButton from '../../ui-kit/IconRadionButton';

import { TaskStepSchema } from '../../services/data';
import Icons from '../../ui-kit/Icon/types';

const stepperSteps: TaskStepSchema[] = [
  { order: 1, label: 'Текущие условия', key: 'currentConditions' },
  { order: 2, label: 'Тип ПОО', key: 'pooType' },
  { order: 3, label: 'Отчет', key: 'report' },
];

enum WeatherEnum {
  Foggy = 'foggy',
  Rainy = 'rainy',
  Snowy = 'snowy',
}

enum PooEnum {
  WingTop = 'wingTop',
  StabilizerTop = 'stabilizerTop',
  Keel = 'keel',
  Fuselage = 'fuselage',
  WingBottom = 'wingBottom',
  StabilizerBottom = 'stabilizerBottom',
}

enum PooStageTypeEnum {
  OneStage = 'oneStage',
  TwoStage = 'twoStage',
}

const weatherButtons = [
  { label: 'Туман / иней', value: WeatherEnum.Foggy, icon: 'foggyWeather' },
  { label: 'Дождь / морось', value: WeatherEnum.Rainy, icon: 'rainyWeather' },
  { label: 'Снег / снежные гранулы / крупа', value: WeatherEnum.Snowy, icon: 'snowyWeather' },
];

const pooButtons = [
  { label: 'Верх крыла', value: PooEnum.WingTop, icon: 'airplaneWingTopHighlighted' },
  { label: 'Верх стабилизатора', value: PooEnum.StabilizerTop, icon: 'airplaneStabilizerTopHighlighted' },
  { label: 'Киль', value: PooEnum.Keel, icon: 'airplaneKeelHighlighted' },
  { label: 'Фюзеляж', value: PooEnum.Fuselage, icon: 'airplaneFuselageHighlighted' },
  { label: 'Низ крыла', value: PooEnum.WingBottom, icon: 'airplaneWingBottomHighlighted' },
  { label: 'Низ стабилизатора', value: PooEnum.StabilizerBottom, icon: 'airplaneStabilizerBottomHighlighted' },
];

const PooAgentScreen: FC = () => {
  const [currentStep, setCurrentStep] = useState(stepperSteps[0].key);
  const [weather, setWeather] = useState<WeatherEnum>(null);
  const [poo, setPoo] = useState<PooEnum>(null);
  const [pooStageType, setPooStageType] = useState<PooStageTypeEnum>(null);

  const handleMoveNext = useCallback(() => {
    const currentIdx = stepperSteps.findIndex(step => step.key === currentStep);

    if (currentIdx + 1 < stepperSteps.length) {
      setCurrentStep(stepperSteps[currentIdx + 1].key);
    }
  }, [currentStep]);

  return (
    <>
      <TaskStepper steps={stepperSteps} currentKey={currentStep} />

      <ContainerWithButton
        buttonLabel="Далее"
        scrollViewProps={{
          contentContainerStyle: {
            padding: 0,
          },
        }}
        onButtonPress={handleMoveNext}
      >
        {currentStep === stepperSteps[0].key && (
          <View>
            <View style={{ paddingHorizontal: 20 }}>
              <WeatherLabel degree={-27} />
            </View>

            <IconRadioButton.Group value={weather} onChange={(value: WeatherEnum) => setWeather(value)}>
              {weatherButtons.map(item => (
                <IconRadioButton
                  key={item.value}
                  label={item.label}
                  value={item.value}
                  icon={<Icon name={item.icon as keyof Icons} />}
                />
              ))}
            </IconRadioButton.Group>

            <View style={{ padding: 20 }}>
              <Text style={fonts.subtitleSemibold}>Выбор ПОО</Text>
            </View>

            <IconRadioButton.Group inARowCount={2} value={poo} onChange={(value: PooEnum) => setPoo(value)}>
              {pooButtons.map(item => (
                <IconRadioButton
                  key={item.value}
                  label={item.label}
                  value={item.value}
                  icon={<Icon name={item.icon as keyof Icons} />}
                />
              ))}
            </IconRadioButton.Group>
          </View>
        )}

        {currentStep === stepperSteps[1].key && (
          <View>
            <View style={{ padding: 20 }}>
              <Text style={fonts.subtitleSemibold}>Выбор ПОО</Text>
            </View>

            <IconRadioButton.Group
              inARowCount={2}
              value={pooStageType}
              onChange={(value: PooStageTypeEnum) => setPooStageType(value)}
            >
              <IconRadioButton label="1-ступенчатая" value={PooStageTypeEnum.OneStage} />
              <IconRadioButton label="2-ступенчатая" value={PooStageTypeEnum.TwoStage} />
            </IconRadioButton.Group>
          </View>
        )}
      </ContainerWithButton>
    </>
  );
};

export default PooAgentScreen;

const styles = StyleSheet.create({});
