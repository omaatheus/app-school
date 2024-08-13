import { Button, SafeAreaView, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default function MainScreen(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.phrase}>
                    <Text style={styles.quote}>"It must be a poor life that achieves freedom from fear."</Text>
                    <Text style={styles.author}>Aldo Leopold</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.ContainerDiv}>
                <View style={styles.div}>
                    <Button  title="D2" style={styles.button}></Button>
                    <Button  title="D4" style={styles.button}></Button>
                    <Button title="D6" style={styles.button}></Button>
                    <Button title="D8" style={styles.button}></Button>
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