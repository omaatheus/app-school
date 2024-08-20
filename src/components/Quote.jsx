import { styles } from "../screens/styles";
import { View, Text } from "react-native";

export default function Quote() {
  return (
    <View style={styles.phrase}>
      <Text style={styles.quote}>
        "It must be a poor life that achieves freedom from fear."
      </Text>
      <Text style={styles.author}>Aldo Leopold</Text>
    </View>
  );
}
