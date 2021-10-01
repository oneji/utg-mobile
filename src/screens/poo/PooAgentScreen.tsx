import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WeatherLabel } from '../../components/Labels';
import { TaskStepper } from '../../components/Tasks';
import { TaskStepSchema } from '../../services/data';
import { fonts } from '../../theme';
import { ContainerWithButton } from '../../ui-kit/Containers';
import Icon from '../../ui-kit/Icon';
import IconRadioButton from '../../ui-kit/IconRadionButton';
import Paper from '../../ui-kit/Paper';

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

enum PooTypesEnum {
  WingTop = 'wingTop',
  StabilizerTop = 'stabilizerTop',
  Keel = 'keel',
  Fuselage = 'fuselage',
  WingBottom = 'wingBottom',
  StabilizerBottom = 'stabilizerBottom',
}

const PooAgentScreen: FC = () => {
  const [currentStep, setCurrentStep] = useState(stepperSteps[0].key);
  const [weather, setWeather] = useState<WeatherEnum>(WeatherEnum.Foggy);
  const [poo, setPoo] = useState<PooTypesEnum>(null);

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
      >
        <WeatherLabel degree={-27} />

        <IconRadioButton.Group value={weather} onChange={(value: WeatherEnum) => setWeather(value)}>
          <IconRadioButton label="Туман / иней" value={WeatherEnum.Foggy} icon={<Icon name="foggyWeather" />} />
          <IconRadioButton label="Дождь / морось" value={WeatherEnum.Rainy} icon={<Icon name="rainyWeather" />} />
          <IconRadioButton
            label="Снег / снежные гранулы / крупа"
            value={WeatherEnum.Snowy}
            icon={<Icon name="snowyWeather" />}
          />
        </IconRadioButton.Group>

        <View style={{ marginVertical: 15 }}>
          <Text style={fonts.subtitleSemibold}>Выбор ПОО</Text>

          <IconRadioButton.Group inARowCount={2} value={poo} onChange={(value: PooTypesEnum) => setPoo(value)}>
            <IconRadioButton
              label="Верх крыла"
              value={PooTypesEnum.WingTop}
              icon={<Icon name="airplaneWingTopHighlighted" />}
            />
            <IconRadioButton
              label="Верх стабилизатора"
              value={PooTypesEnum.StabilizerTop}
              icon={<Icon name="airplaneStabilizerTopHighlighted" />}
            />
            <IconRadioButton label="Киль" value={PooTypesEnum.Keel} icon={<Icon name="airplaneKeelHighlighted" />} />
            <IconRadioButton
              label="Фюзеляж"
              value={PooTypesEnum.Fuselage}
              icon={<Icon name="airplaneFuselageHighlighted" />}
            />
            <IconRadioButton
              label="Низ крыла"
              value={PooTypesEnum.WingBottom}
              icon={<Icon name="airplaneWingBottomHighlighted" />}
            />
            <IconRadioButton
              label="Низ стабилизатора"
              value={PooTypesEnum.StabilizerBottom}
              icon={<Icon name="airplaneStabilizerBottomHighlighted" />}
            />
          </IconRadioButton.Group>
        </View>
      </ContainerWithButton>
    </>
  );
};

export default PooAgentScreen;

const styles = StyleSheet.create({});
