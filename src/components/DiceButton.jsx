import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";
import SvgCircle from "../components/svgs/Circle";
import SvgTriangle from "../components/svgs/Triangle";
import SvgSquare from "../components/svgs/Square";
import SvgDiamond from "../components/svgs/Diamond";

export default function DiceButton({ dices, rollDice }) {
  let SvgComponent;

  if (dices.includes("d2")) {
    SvgComponent = SvgCircle;
  } else if (dices.includes("d4")) {
    SvgComponent = SvgTriangle;
  } else if (dices.includes("d6")) {
    SvgComponent = SvgSquare;
  } else {
    SvgComponent = SvgDiamond;
  }

  return (
    <TouchableOpacity onPress={rollDice} style={styles.button}>
      <SvgComponent text={dices} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "25%",
    maxWidth: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
