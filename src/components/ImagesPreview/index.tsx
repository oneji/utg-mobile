import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { fonts, layout } from '../../theme';

import { ImageAsset } from '../../services/data';

export interface ImagesPreviewProps {
  title?: string;
  items: ImageAsset[];
}

const ImagesPreview: FC<ImagesPreviewProps> = ({ title, items }) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}

      <View style={styles.imagesContainer}>
        {items.map((file: ImageAsset) => (
          <View style={{ marginRight: 20 }} key={file.id}>
            <Image
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

            {file.comment && (
              <>
                <Text style={fonts.paragraphRegular}>Комментарий</Text>
                <Text style={fonts.paragraphSemibold}>{file.comment}</Text>
              </>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default ImagesPreview;

const styles = StyleSheet.create({
  container: {},
  title: {
    ...fonts.paragraphRegular,
    marginBottom: 10,
  },
  imagesContainer: {
    ...layout.rowAlignItemsCenter,
    flexWrap: 'wrap',
  },
});
