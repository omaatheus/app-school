import * as React from "react";
import { Svg, Path, Text } from "react-native-svg";

const SvgDiamond = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    viewBox="0 0 15 15"
    {...props}
  >
    <Path d="M7.037 1.201 2.125 6.7a.48.48 0 0 0-.124.3q-.008.165.096.3l4.91 6.46c.055.074.13.135.215.177a.64.64 0 0 0 .556 0 .6.6 0 0 0 .216-.177l4.91-6.46a.45.45 0 0 0 .095-.3.48.48 0 0 0-.124-.3L7.963 1.201a.6.6 0 0 0-.208-.148.64.64 0 0 0-.718.148" />
    <Text fontSize="24" x={50} y={130 / 2} fill="white" textAnchor="middle">
      {props.text}
    </Text>
  </Svg>
);

export default SvgDiamond;
