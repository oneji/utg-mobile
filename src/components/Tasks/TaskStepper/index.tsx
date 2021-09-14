import React, { FC, useEffect } from 'react';
import { StyleSheet, Text, View, ViewProps } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { TaskStepSchema } from '../../../services/data';
import { InProgressTaskStepsEnum } from '../../../store/TasksStore';
import { colors, fonts, layout } from '../../../theme';
import Badge from '../../../ui-kit/Badge';

export interface TaskStepperProps extends ViewProps {
  steps: TaskStepSchema[];
  currentKey: InProgressTaskStepsEnum;
}

const TaskStepper: FC<TaskStepperProps> = ({ steps = [], currentKey, children, style, ...otherProps }) => {
  const currentStep = steps?.find(step => step.key === currentKey);
  const progress = (steps?.indexOf(currentStep) + 1) / steps?.length;

  const getPreviousSteps = () => {
    return steps?.filter((step, idx) => idx < steps.indexOf(currentStep));
  };

  const getNextSteps = () => {
    return steps?.filter((step, idx) => idx > steps.indexOf(currentStep));
  };

  useEffect(() => {
    getPreviousSteps();
    getNextSteps();
  }, [steps]);

  return (
    <View style={[styles.container, style]} {...otherProps}>
      <View style={styles.contentContainer}>
        <View style={styles.current}>
          {getPreviousSteps()?.length > 0 ? (
            <View style={styles.otherSteps}>
              {getPreviousSteps()?.map(prevStep => (
                <Badge
                  key={`${prevStep.key}_${prevStep.order}`}
                  variant="success"
                  style={{
                    marginRight: 8,
                  }}
                >
                  {prevStep.order}
                </Badge>
              ))}
            </View>
          ) : null}

          <Badge>{currentStep?.order}</Badge>
          <Text style={styles.currentStepText}>{currentStep?.label}</Text>
        </View>

        {getNextSteps()?.length > 0 ? (
          <View style={styles.otherSteps}>
            {getNextSteps()?.map((nextStep, idx) => (
              <Badge
                key={`${nextStep.key}_${nextStep.order}`}
                variant="secondary"
                style={{
                  marginLeft: 8,
                }}
              >
                {nextStep.order}
              </Badge>
            ))}
          </View>
        ) : null}
      </View>

      <ProgressBar progress={progress} color={colors.red.primary} style={{ height: 3 }} />
    </View>
  );
};

export default TaskStepper;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  contentContainer: {
    ...layout.rowSpaceBetween,
    padding: 15,
  },
  current: {
    ...layout.rowAlignItemsCenter,
  },
  currentStepText: {
    ...fonts.smallSemibold,
    color: colors.white,
    marginLeft: 10,
  },
  otherSteps: {
    ...layout.rowAlignCenter,
  },
});
