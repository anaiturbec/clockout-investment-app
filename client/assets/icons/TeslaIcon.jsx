import React from 'react';
import Svg, { Circle, ClipPath, Defs, G, Path } from 'react-native-svg';

export default function TeslaIcon({ width, height, color, ...props }) {
  return (
    <Svg
      width={width}
      height={height}
      color={color}
      fill="none"
      viewBox="0 0 55 55"
      {...props}
    >
      <Circle cx="27.5" cy="27.5" r="27.5" fill="#D82626"></Circle>
      <G clipPath="url(#clip0_125_215)">
        <Path
          fill="#fff"
          d="M27 22.256l2.887-3.53s4.953.104 9.883 2.396C38.508 23.03 36 23.966 36 23.966c-.17-1.679-1.346-2.088-5.079-2.088L27 44l-3.945-22.127c-3.71 0-4.886.413-5.057 2.09 0 0-2.504-.927-3.767-2.834 4.929-2.293 9.882-2.399 9.882-2.399L27 22.256l-.005.002H27v-.002zm0-4.55c3.984-.034 8.547.617 13.216 2.66.624-1.128.784-1.627.784-1.627-5.104-2.025-9.884-2.722-14-2.739-4.116.017-8.896.712-14 2.74 0 0 .227.613.784 1.63 4.669-2.05 9.232-2.696 13.216-2.667v.004z"
        ></Path>
      </G>
      <Defs>
        <ClipPath id="clip0_125_215">
          <Path
            fill="#fff"
            d="M0 0H28V28H0z"
            transform="translate(13 16)"
          ></Path>
        </ClipPath>
      </Defs>
    </Svg>
  );
}
