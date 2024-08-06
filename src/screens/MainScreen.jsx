import { Button, SafeAreaView } from "react-native";
import { View } from "react-native";

export default function MainScreen(){
    return(
        <SafeAreaView>
            <View>
                <Text></Text>
                <Text></Text>
            </View>
            <View>
                <Button>D4</Button>
                <Button>D6</Button>
                <Button>D8</Button>
                <Button>D12</Button>
                <Button>D24</Button>
                <Button>D100</Button>
            </View>
        </SafeAreaView>
    );
}