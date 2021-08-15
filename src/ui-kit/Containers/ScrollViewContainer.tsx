import React, { FC } from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

const ScrollViewContainer: FC<ScrollViewProps> = ({ children, ...otherProps }) => {
  return (
    <ScrollView contentContainerStyle={{ padding: 8 }} showsVerticalScrollIndicator={false} {...otherProps}>
      {children}
    </ScrollView>
  );
};

export default ScrollViewContainer;
