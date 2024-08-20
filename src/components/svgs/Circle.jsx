import * as React from "react";
import { Svg, Path, Text } from "react-native-svg";

const SvgCircle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={68}
    height={68}
    viewBox="0 0 15 15"
  >
    <Path d="M14 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
    <Text fontSize="24" x={50} y={130 / 2} fill="white" textAnchor="middle">
      {props.text}
    </Text>
  </Svg>
);

export default SvgCircle;
