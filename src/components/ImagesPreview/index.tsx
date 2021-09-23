import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { fonts } from '../../theme';

import { ImageAsset } from '../../services/data';

export interface ImagesPreviewProps {
  title?: string;
  items: ImageAsset[];
}

const ImagesPreview: FC<ImagesPreviewProps> = ({ title, items }) => {
  return (
    <View>
      {title && <Text style={styles.title}>{title}</Text>}

      {items.map((file: ImageAsset) => (
        <Image
          key={file.id}
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
