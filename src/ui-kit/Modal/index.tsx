import React, { FC } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal as RNModal,
  ActivityIndicator,
  ModalProps as RNModalProps,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { colors, fonts } from '../../theme';
import { Button } from '../Buttons';
import { BlurView } from '@react-native-community/blur';

export interface ModalProps extends RNModalProps {
  visible: boolean;
  title?: string;
  children?: React.ReactNode;
  showCancel?: boolean;
  cancelButtonText?: string;
  showConfirm?: boolean;
  confirmButtonText?: string;
  bodyContainerStyle?: StyleProp<ViewStyle>;

  onCancelButtonPress?: () => void;
  onConfirmButtonPress?: () => void;
  onShowCallback?: () => void;
  onDissmissCallback?: () => void;
  onBackdropPress?: () => void;
}

const Modal: FC<ModalProps> = ({
  visible = false,
  title = null,
  children,
  showCancel = false,
  showConfirm = true,
  bodyContainerStyle,
  cancelButtonText = 'Отмена',
  confirmButtonText = 'Продолжить',

  onCancelButtonPress = () => null,
  onConfirmButtonPress = () => null,
  onShowCallback = () => null,
  onDissmissCallback = () => null,
  onBackdropPress = () => null,
  ...otherProps
}) => {
  if (visible) {
    return (
      <RNModal
        transparent
        animationType="fade"
        visible={visible}
        onShow={onShowCallback}
        onDismiss={onDissmissCallback}
        {...otherProps}
      >
        <TouchableWithoutFeedback onPress={onBackdropPress}>
          <View style={styles.wrapper}>
            <BlurView style={styles.blurView} blurType="dark" blurAmount={3} overlayColor={colors.blurColor} />

            <View style={styles.body}>
              <View style={styles.box}>
                {title && <Text style={styles.title}>{title}</Text>}

                <View style={bodyContainerStyle}>{children}</View>

                {showCancel && showConfirm ? (
                  <View style={styles.buttonsBlock}>
                    {showCancel && (
                      <Button onPress={onCancelButtonPress} compact>
                        {cancelButtonText}
                      </Button>
                    )}

                    {showConfirm && (
                      <Button onPress={onConfirmButtonPress} compact>
                        {confirmButtonText}
                      </Button>
                    )}
                  </View>
                ) : null}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </RNModal>
    );
  }

  return <View />;
};

export default Modal;

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    zIndex: 9999,
  },
  blurView: {
    flex: 1,
    zIndex: 99999,
  },
  body: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 99999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '85%',
    paddingVertical: 10,
  },
  title: {
    ...fonts.titleRegular,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  buttonsBlock: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 12,
  },
  confirmButton: {
    marginLeft: 8,
  },
});
