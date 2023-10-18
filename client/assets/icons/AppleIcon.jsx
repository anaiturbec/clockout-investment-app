import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export default function AppleIcon({ width, height, color, ...props }) {
  return (
    <Svg
      width={width}
      height={height}
      color={color}
      fill="none"
      viewBox="0 0 55 55"
      {...props}
    >
      <Circle cx="27.5" cy="27.5" r="27.5" fill="#34373A"></Circle>
      <Path
        fill="#fff"
        d="M36.548 40.335c-1.756 1.702-3.673 1.433-5.518.627-1.953-.824-3.745-.86-5.805 0-2.58 1.11-3.942.788-5.483-.627C11 31.323 12.29 17.599 22.215 17.097c2.418.125 4.102 1.326 5.518 1.433 2.114-.43 4.139-1.666 6.396-1.505 2.706.215 4.748 1.29 6.092 3.225-5.59 3.35-4.264 10.715.86 12.775-1.021 2.688-2.347 5.357-4.551 7.328l.018-.018zM27.554 16.99c-.269-3.996 2.974-7.292 6.7-7.615.52 4.623-4.192 8.063-6.7 7.615z"
      ></Path>
    </Svg>
  );
}
