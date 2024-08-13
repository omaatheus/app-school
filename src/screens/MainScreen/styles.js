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
        justifyContent: 'flex-end',
        padding: 35,

    },

    phrase:{
        alignItems: 'center',
    },

    quote:{
        color: "#707070",
        fontSize: 13,
        fontWeight: '300',
        
    },

    author:{
        color: '#707070',
        marginTop: 10,
        fontSize: 13,
    },

    footer: {
        width: width,
        height: height * 0.45,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F3F5',
    },
    div: {
        width: width * 0.8,
        height: height * 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    ContainerDiv: {
        width: width * 0.9,
        height: height * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '15%'
    },

    button:{
        marginLeft: 1,
    },
})