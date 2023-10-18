import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function DeclineIcon({ width, height, color, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      color={color}
      fill="none"
      viewBox="0 0 28 24"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M23.921 10.64l-1.848.764 2.517 6.086-11.216-4.654 2.327-5.607a1 1 0 00-.54-1.307L1.716.343.949 2.19l12.522 5.196-2.327 5.607a1 1 0 00.54 1.307l12.14 5.037-6.087 2.517.765 1.848 9.24-3.822-3.82-9.24z"
      ></Path>
    </Svg>
  );
}
