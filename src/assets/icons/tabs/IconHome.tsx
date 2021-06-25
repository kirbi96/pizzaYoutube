import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IIconProps {
  sizeX?: number;
  sizeY?: number;
  color?: string;
}

export const IconHome = ({sizeX, sizeY, color}: IIconProps) => {
  return (
    <Svg
      width={sizeX || 24}
      height={sizeY || 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12 20l-7.32-9.15c-.333-.416-.5-.624-.544-.874-.044-.25.04-.503.208-1.008l.744-2.233c.44-1.32.66-1.98 1.184-2.357C6.796 4 7.492 4 8.883 4h6.234c1.391 0 2.087 0 2.61.378.525.377.745 1.037 1.185 2.357l.744 2.233c.168.505.252.757.208 1.008-.045.25-.211.458-.544.874L12 20z"
        fill={color || '#7E869E'}
      />
      <Path
        d="M12 20l-7.32-9.15c-.333-.416-.5-.624-.544-.874-.044-.25.04-.503.208-1.008l.744-2.233c.44-1.32.66-1.98 1.184-2.357C6.796 4 7.492 4 8.883 4h6.234c1.391 0 2.087 0 2.61.378.525.377.745 1.037 1.185 2.357l.744 2.233c.168.505.252.757.208 1.008-.045.25-.211.458-.544.874L12 20zm0 0l3.5-11M12 20L8.5 9m11 1l-4-1m0 0L14 5m1.5 4h-7M10 5L8.5 9m0 0l-4 1"
        stroke="#fff"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </Svg>
  );
};
