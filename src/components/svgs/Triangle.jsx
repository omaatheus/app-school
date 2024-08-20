import * as React from "react";
import { Svg, Path, Text } from "react-native-svg"; // Adjust the import based on your environment

const Triangle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    viewBox="0 0 100 100"
  >
    <Path d="M50 15L90 85H10z" fill="#000" />

  </Svg>
);

export default Triangle;
