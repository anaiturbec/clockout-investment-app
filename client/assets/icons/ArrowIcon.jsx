import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default function ArrowIcon({ color, height, width, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      color={color}
      height={height}
      width={width}
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </Svg>
  );
}
