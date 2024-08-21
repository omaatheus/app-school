import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { height, width } from "../constants/measures";

export default function DiceListItem({ dice, side, rolled_at }) {
  return (
    <View style={styles.item}>
      <View style={styles.box}>
        <Text style={styles.text}>{dice}</Text>
      </View>
      <Text style={styles.text}>{side}</Text>
      <Text style={styles.text}>{rolled_at}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: width,
    height: height * 0.1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#0a0",
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: "#f090c0",
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
});
