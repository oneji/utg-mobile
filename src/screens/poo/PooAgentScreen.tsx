import React, { FC, useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, layout } from '../../theme';

import { ContainerWithButton } from '../../ui-kit/Containers';
import { WeatherLabel } from '../../components/Labels';
import { TaskStepper } from '../../components/Tasks';
import { TouchableLabel } from '../../ui-kit/Labels';
import { SimpleList } from '../../ui-kit/Lists';
import { PooAgentScreenProps } from '../../navigation/props';
import { PooAgentReportRu } from './components';
import Paper from '../../ui-kit/Paper';
import Tab from '../../ui-kit/Tab';
import IconRadioButton from '../../ui-kit/IconRadionButton';
import Icon from '../../ui-kit/Icon';

import { PooStackScreens } from '../../navigation/enums';
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

const PooAgentScreen: FC<PooAgentScreenProps> = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(stepperSteps[0].key);
  const [weather, setWeather] = useState<WeatherEnum>(null);
  const [poo, setPoo] = useState<PooEnum>(null);
  const [pooStageType, setPooStageType] = useState<PooStageTypeEnum>(null);

  useEffect(() => {
    navigation.setOptions({
      cardStyle: {
        backgroundColor: pooStageType === PooStageTypeEnum.TwoStage ? colors.transparent : colors.white,
      },
    });
  }, [pooStageType]);

  const handleMoveNext = useCallback(() => {
    const currentIdx = stepperSteps.findIndex(step => step.key === currentStep);

    if (currentIdx + 1 < stepperSteps.length) {
      setCurrentStep(stepperSteps[currentIdx + 1].key);
    } else {
      navigation.navigate(PooStackScreens.PooSign);
    }
  }, [currentStep]);

  return (
    <>
      <TaskStepper steps={stepperSteps} currentKey={currentStep} />

      <ContainerWithButton
        buttonLabel={currentStep === stepperSteps[2].key ? 'Получить подпись заказчика' : 'Далее'}
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
            <View style={{ padding: 20, backgroundColor: colors.white }}>
              <Text style={fonts.subtitleSemibold}>ПОО верха крыла</Text>
            </View>

            <IconRadioButton.Group
              inARowCount={2}
              value={pooStageType}
              onChange={(value: PooStageTypeEnum) => setPooStageType(value)}
            >
              <IconRadioButton label="1-ступенчатая" value={PooStageTypeEnum.OneStage} />
              <IconRadioButton label="2-ступенчатая" value={PooStageTypeEnum.TwoStage} />
            </IconRadioButton.Group>

            {pooStageType && (
              <Paper
                title={pooStageType === PooStageTypeEnum.TwoStage ? '1 этап' : null}
                titleStyle={fonts.paragraphSemibold}
              >
                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Концентрация раствора (Type I : Вода)</Text>

                  <TouchableLabel>30:70</TouchableLabel>
                </View>

                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Наименование</Text>

                  <TouchableLabel>PRIMER</TouchableLabel>
                </View>
              </Paper>
            )}

            {pooStageType === PooStageTypeEnum.TwoStage && (
              <Paper title="2 этап" titleStyle={fonts.paragraphSemibold}>
                <SimpleList style={{ marginBottom: 20 }}>
                  <SimpleList.Item title="Тип жидкости" value="IV" />
                  <SimpleList.Item title="Процент" value="100" />
                </SimpleList>

                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Наименование</Text>

                  <TouchableLabel>PRIMER2</TouchableLabel>
                </View>
              </Paper>
            )}
          </View>
        )}

        {currentStep === stepperSteps[2].key && (
          <View>
            <Tab sceneContainerStyle={{ backgroundColor: colors.transparent }}>
              <Tab.Item name="Ru" component={PooAgentReportRu} />
              <Tab.Item name="En" component={PooAgentReportRu} />
            </Tab>
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
