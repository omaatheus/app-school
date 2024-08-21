import * as React from "react";
import { Svg, Path, Text } from "react-native-svg";

const SvgSquare = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    viewBox="0 0 15 15"
  >
    <Path d="M13 14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1" />

  </Svg>
);

export default SvgSquare;
