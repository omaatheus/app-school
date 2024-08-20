import { Button } from "react-native-paper";

export default function DiceButton({ dice, roll }) {
  return <Button onPress={roll}>{dice}</Button>;
}
