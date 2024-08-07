import { StyleSheet } from "react-native";
import { width, height } from "../../constants/measures";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',        

    },
    
    header: {
        width: width,
        height: height * 0.8,
        backgroundColor: 'red',
    },
    footer: {
        width: width,
        height: height * 0.45,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    div: {
        width: width * 0.8,
        height: height * 0.1,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    ContainerDiv: {
        width: width * 0.9,
        height: height * 0.25,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '15%'
    },
})