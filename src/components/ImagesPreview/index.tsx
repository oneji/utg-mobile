import React, { FC } from 'react';
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { fonts, layout } from '../../theme';

import { ImageAsset } from '../../services/data';

export interface ImagesPreviewProps {
  title?: string;
  items: ImageAsset[];
  containerStyle?: StyleProp<ViewStyle>;
  showComments?: boolean;
  showCommentsLabel?: boolean;
  isBase64?: boolean;
}

const ImagesPreview: FC<ImagesPreviewProps> = ({
  title,
  items,
  containerStyle,
  showComments = true,
  showCommentsLabel = true,
  isBase64 = false,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {title && <Text style={styles.title}>{title}</Text>}

      <View style={styles.imagesContainer}>
        {items.map((file: ImageAsset) => (
          <View style={{ marginRight: 20 }} key={file.id}>
            <Image
              source={{
                uri: isBase64 ? `data:image/jpeg;base64,${file.uri}` : file.uri,
              }}
              style={{
                width: 100,
                height: 100,
                marginRight: 10,
                marginBottom: 10,
              }}
              resizeMode="cover"
            />

            {file.comment && showComments ? (
              <View style={{ marginBottom: 10 }}>
                {showCommentsLabel && <Text style={fonts.paragraphRegular}>Комментарий</Text>}
                <Text style={fonts.paragraphSemibold}>{file.comment}</Text>
              </View>
            ) : null}
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
