import { Button, SafeAreaView, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default function MainScreen(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text></Text>
                <Text></Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.ContainerDiv}>
                <View style={styles.div}>
                    <Button  title="D2"></Button>
                    <Button  title="D4"></Button>
                    <Button title="D6"></Button>
                    <Button title="D8"></Button>
                </View>
                    <View style={styles.div}>
                    <Button title="D10"></Button>
                    <Button title="D12"></Button>
                    <Button title="D20"></Button>
                    <Button title="D100"></Button>
                </View>
                </View>
            </View>
        </SafeAreaView>
    );
}