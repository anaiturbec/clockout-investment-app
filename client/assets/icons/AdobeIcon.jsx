import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export default function AdobeIcon({ color, width, height, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      color={color}
      fill="none"
      viewBox="0 0 55 55"
      {...props}
    >
      <Circle cx="27.5" cy="27.5" r="27.5" fill="#E30000"></Circle>
      <Path
        fill="#fff"
        d="M22.983 35.64h4.286l2.698 5.303h3.916L27.5 24.216 22.983 35.64zm-10.9-22.015v27.75l11.44-27.75h-11.44zm19.24 0l11.594 27.457V13.625H31.323z"
      ></Path>
    </Svg>
  );
}
