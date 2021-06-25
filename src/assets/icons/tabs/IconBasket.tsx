import * as React from 'react';
import Svg, {Ellipse, Path} from 'react-native-svg';

interface IIconProps {
  sizeX?: number;
  sizeY?: number;
  color?: string;
}

export const IconBasket = ({sizeX, sizeY, color}: IIconProps) => {
  return (
    <Svg
      width={sizeX || 24}
      height={sizeY || 24}
      viewBox="0 0 24 24"
      fill="none">
      <Ellipse
        cx={12}
        cy={7}
        rx={7}
        ry={3}
        stroke={color || '#fff'}
        strokeLinecap="round"
      />
      <Path
        d="M5 7l1.996 10.98a.068.068 0 00.019.035v0a7.05 7.05 0 009.97 0v0a.068.068 0 00.019-.036L19 7"
        stroke={color || '#fff'}
        strokeLinecap="round"
      />
    </Svg>
  );
};
