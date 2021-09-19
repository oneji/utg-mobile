import React, { useState, useCallback, ReactNode, Fragment } from 'react';
import { View, Text, StyleSheet, ViewProps, Image } from 'react-native';
import { colors, fonts, layout } from '../../../theme';

import { IconButton, TouchableRipple } from 'react-native-paper';
import Modal from '../../Modal';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Asset, ImageLibraryOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';

export interface ImagePickerProps extends ViewProps {
  title?: string;
  uploadButton?: ReactNode;
  onSelect?: (files: Asset[]) => void;
}

const options: ImageLibraryOptions = { mediaType: 'photo' };

const ImagePicker = ({ title = 'Добавить фото', style, onSelect, ...otherProps }: ImagePickerProps) => {
  const [files, setFiles] = useState([]);
  const [modal, setModal] = useState(false);

  const handleTakePicturePress = useCallback((): void => {
    setModal(false);

    launchCamera(options, response => {
      if (response.didCancel) return;

      addAssetsCb(response.assets);
    });
  }, [files]);

  const handleFromGalleryPress = useCallback((): void => {
    setModal(false);

    launchImageLibrary(options, response => {
      if (response.didCancel) return;

      addAssetsCb(response.assets);
    });
  }, [files]);

  const addAssetsCb = useCallback(
    (assets: Asset[]) => {
      if (assets) {
        setFiles(prevFiles => [...prevFiles, ...assets]);
      }
    },
    [files]
  );

  return (
    <Fragment>
      <View
        style={{
          ...styles.container,
          justifyContent: files.length > 0 ? 'flex-start' : 'space-between',
        }}
        {...otherProps}
      >
        {files.length === 0 ? (
          <Text style={fonts.paragraphRegular}>{title}</Text>
        ) : (
          files.map((file: Asset) => (
            <Image
              key={file.fileName}
              source={{
                uri: file.uri,
              }}
              style={{
                width: 100,
                height: 100,
                marginRight: 10,
                marginBottom: 10,
              }}
              resizeMode="cover"
            />
          ))
        )}

        <View style={layout.alignCenter}>
          <IconButton
            icon="plus"
            size={35}
            onPress={() => setModal(true)}
            style={{
              backgroundColor: colors.gray.secondary,
              padding: 0,
              margin: 0,
              width: 35,
              height: 35,
            }}
            color={colors.white}
          />
        </View>
      </View>

      <Modal
        onBackdropPress={() => setModal(false)}
        visible={modal}
        showConfirm={false}
        bodyContainerStyle={{ padding: 0 }}
      >
        <TouchableRipple rippleColor={colors.blue.light} onPress={handleTakePicturePress}>
          <View style={styles.listItem}>
            <MaterialIcon name="camera" size={26} color={colors.gray.primary} />
            <Text style={styles.listText}>Сделать фото</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple rippleColor={colors.blue.light} onPress={handleFromGalleryPress}>
          <View style={styles.listItem}>
            <MaterialIcon name="image" size={26} color={colors.gray.primary} />
            <Text style={styles.listText}>Выбрать из галереи</Text>
          </View>
        </TouchableRipple>
      </Modal>
    </Fragment>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  container: {
    ...layout.rowAlignItemsCenter,
    flexWrap: 'wrap',
  },
  title: {
    marginBottom: 16,
  },
  listItem: {
    ...layout.rowAlignItemsCenter,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  listText: {
    ...fonts.paragraphMedium,
    color: colors.black,
    flexGrow: 1,
    marginLeft: 24,
  },
});
