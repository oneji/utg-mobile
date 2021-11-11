import React, { FC, ReactNode, useCallback, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import { TouchableRipple } from 'react-native-paper';
import { BlurView } from '@react-native-community/blur';

import _ from 'lodash';
import { colors, fonts, layout } from '../../../../../theme';
import { SelectItem } from '../..';

export interface DialogProps {
  visible: boolean;
  items: SelectItem[];
  itemStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  searchable?: boolean;
  onSelect: (value: number | string, idx: number) => void;
  onShowCallback?: () => void;
  onDissmissCallback?: () => void;
  onSearch?: (searchText: string) => void;
  renderItem?: (item: SelectItem) => ReactNode;
}

const Dialog: FC<DialogProps> = ({
  itemStyle,
  visible = false,
  items = [],
  titleStyle,
  subtitleStyle,
  onSelect = () => null,
  onShowCallback = () => null,
  onDissmissCallback = () => null,
  renderItem,
}) => {
  const handleItemPress = useCallback((item: SelectItem, idx: number): void => {
    if (_.isUndefined(item.enabled)) {
      onSelect(item.value, idx);
    } else if (item.enabled !== false) {
      onSelect(item.value, idx);
    }
  }, []);

  const renderItems = useCallback((): ReactNode => {
    return items.map((item, idx) => (
      <TouchableRipple
        rippleColor={colors.blue.light}
        onPress={() => handleItemPress(item, idx)}
        key={`dialog-item-${item.value}-${idx}`}
      >
        {!renderItem ? (
          <View style={[styles.item, itemStyle]}>
            <Text
              numberOfLines={1}
              style={{
                ...fonts.paragraphRegular,
                ...(titleStyle as object),
              }}
            >
              {item.title}
            </Text>

            {item.subtitle && (
              <Text numberOfLines={1} style={[styles.subtitle, subtitleStyle]}>
                {item.subtitle}
              </Text>
            )}
          </View>
        ) : (
          <View style={[styles.item, itemStyle]}>{renderItem(item)}</View>
        )}
      </TouchableRipple>
    ));
  }, [items]);

  return (
    <Modal transparent animationType="fade" visible={visible} onShow={onShowCallback} onDismiss={onDissmissCallback}>
      <View style={styles.wrapper}>
        <BlurView style={styles.blurView} blurType="dark" blurAmount={5} overlayColor={colors.blurColor} />

        <TouchableWithoutFeedback>
          <View style={styles.body}>
            <View style={styles.box}>
              <ScrollView>{renderItems()}</ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export default Dialog;

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
    ...layout.alignCenter,
    zIndex: 99999,
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 8,
    zIndex: 100000,
    width: '85%',
    maxHeight: '60%',
    paddingVertical: 8,
    position: 'relative',
    borderWidth: 1,
  },
  item: {
    padding: 16,
  },
  subtitle: {
    ...fonts.smallRegular,
    color: colors.gray.primary,
    marginTop: 5,
  },
  searchbarContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray.primary,
    paddingLeft: 16,
  },
});
