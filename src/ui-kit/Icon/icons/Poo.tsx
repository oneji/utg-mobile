import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Poo: React.FC<SvgProps> = props => {
  return (
    <Svg width={145} height={67} fill="none" {...props}>
      <Path d="M2 38.336h46.584a2 2 0 012 2v18.482a2 2 0 01-2 2H2a2 2 0 01-2-2V40.336a2 2 0 012-2z" fill="#D7E0E9" />
      <Path
        d="M67.474 40.061a2 2 0 00-1.76-.986L52.55 39.3a2 2 0 00-1.966 2v17.516a2 2 0 002 2h18.482a2 2 0 002-2V50.12a2 2 0 00-.276-1.013l-5.315-9.046z"
        fill="#D7E0E9"
      />
      <Path
        d="M53.674 67a4.777 4.777 0 110-9.555 4.777 4.777 0 010 9.555zM25.572 67a4.777 4.777 0 110-9.555 4.777 4.777 0 010 9.555zM13.77 67a4.777 4.777 0 110-9.555 4.777 4.777 0 010 9.555z"
        fill="#D7E0E9"
      />
      <Path
        d="M50.5 33v8M.5 33v8M8.491 33.277v7.307M16.921 33.277v7.307M50 36.5H1M51 33.5H0M25.352 33.277v7.307M33.783 33.277v7.307M42.213 33.277v7.307"
        stroke="#D7E0E9"
      />
      <Path
        d="M74.09 11.085L6.66 38.51c-.786.32-.557 1.489.292 1.489a.772.772 0 00.288-.056l63.4-25.478a2 2 0 01.746-.145h15.248a1.691 1.691 0 000-3.383H74.843c-.258 0-.514.05-.753.148z"
        fill="#D7E0E9"
      />
      <Path
        d="M73.633 2v8a2 2 0 002 2h8.755c1.692 0 2.62-1.969 1.543-3.273l-6.604-8A2 2 0 0077.785 0h-2.152a2 2 0 00-2 2z"
        fill="#D7E0E9"
      />
      <Path
        d="M141.955 10.94L84.83 9.863a1 1 0 00-.917 1.44l.244.5a1 1 0 00.898.559h56.887a.715.715 0 00.303-.068c.68-.32.462-1.34-.29-1.354z"
        fill="#D7E0E9"
      />
      <Path
        d="M91.874 10.677l.413-3.935 47.127 1.124 3.587 3.632M124.651 7.586v3.934M139.5 7.586v3.934M109.357 7.023v3.935M93.233 7.023v3.935"
        stroke="#D7E0E9"
      />
    </Svg>
  );
};

export default Poo;
