import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Asset } from 'react-native-image-picker';
import { fonts } from '../../theme';

export interface ImagesPreviewProps {
  title?: string;
  items: Asset[];
}

const ImagesPreview: FC<ImagesPreviewProps> = ({ title, items }) => {
  return (
    <View>
      {title && <Text style={styles.title}>{title}</Text>}

      {items.map((file: Asset) => (
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
      ))}
    </View>
  );
};

export default ImagesPreview;

const styles = StyleSheet.create({
  title: {
    ...fonts.paragraphRegular,
    marginBottom: 10,
  },
});
