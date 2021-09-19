import React, { FC } from 'react';
import { StyleSheet, View, ViewProps, ScrollViewProps } from 'react-native';

import ScrollViewContainer from './ScrollViewContainer';
import { Button } from '../Buttons';
import { colors } from '../../theme';
import { ButtonProps } from '../Buttons/Button';

export interface ContainerWithButtonProps extends ViewProps {
  scrollViewProps?: ScrollViewProps;
  onButtonPress?: () => void;
  buttonLabel?: string;
  buttonProps?: ButtonProps;
}

const ContainerWithButton: FC<ContainerWithButtonProps> = ({
  children,
  style,
  scrollViewProps,
  buttonProps,
  buttonLabel = 'Сохранить',
  onButtonPress = () => {},
  ...otherProps
}) => {
  return (
    <View style={[styles.container, style]} {...otherProps}>
      <ScrollViewContainer {...scrollViewProps}>{children}</ScrollViewContainer>

      <View style={styles.buttonContainer}>
        <Button onPress={onButtonPress} {...buttonProps}>
          {buttonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ContainerWithButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
});
