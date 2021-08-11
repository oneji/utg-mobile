import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Sticker = (props: SvgProps) => {
  return (
    <Svg width={42} height={40} viewBox="0 0 42 40" fill="none" {...props}>
      <Path
        d="M37.834 1.249A1.041 1.041 0 0036.68.335l-.009.001-8.957 1.054L1.26 4.502a1.041 1.041 0 00-.919 1.14l3.125 33.327c.05.536.502.946 1.041.944h.119l36.452-4.166a1.042 1.042 0 00.914-1.167L37.835 1.249z"
        fill="#FFE082"
      />
    </Svg>
  );
};

export default Sticker;
