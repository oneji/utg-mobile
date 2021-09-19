import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { ContainerWithButton } from '../../ui-kit/Containers';
import { ImagePicker, FormGroup } from '../../ui-kit/Forms';

const FeedbackScreen: FC = () => {
  return (
    <ContainerWithButton>
      <FormGroup>
        <ImagePicker />
      </FormGroup>
    </ContainerWithButton>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({});
