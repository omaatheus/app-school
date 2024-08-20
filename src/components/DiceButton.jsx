import { TouchableOpacity, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

import Triangle from '../assets/triangle.svg'



export default function DiceButton({dices, rollDice, svg}){
    return(
        <TouchableOpacity onPress={rollDice}>

            {svg === 1 ?
            <Triangle>
            <Text>{dices}</Text>    
            </Triangle>
             :
            <Text>1</Text>
            }
            {svg === 2 ? 
            <Text>{dices}</Text> :
            <Text>ERRO</Text>
            }
            {svg === 3 ? 
            <Text>{dices}</Text> :
            <Text>ERRO</Text>
            }
            {svg === 4 ? 
            <Text>{dices}</Text> :
            <Text>ERRO</Text>
            }
            {svg === 5 ? 
            <Text>{dices}</Text> :
            <Text>ERRO</Text>
            }
            {svg === 6 ? 
            <Text>{dices}</Text> :
            <Text>ERRO</Text>
            }
            {svg === 7 ? 
            <Text>{dices}</Text> :
            <Text>ERRO</Text>
            }
            {svg === 8 ? 
            <Text>{dices}</Text> :
            <Text>ERRO</Text>
            }
            
         </TouchableOpacity>
    )
}

//Adapter é um design paterno    <Text>{dices}</Text>
const styles = StyleSheet.create({
    button: {
        width: '20%',
        maxWidth: 72,
        backgroundColor: 'blue',
        borderWidth: 1,
    }, 
})