import { Button, SafeAreaView, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { styles } from "./styles";
import DiceButton from "../../components/DiceButton";
import { useState } from "react";
export default function MainScreen(){

    const [diceResult, setDiceResult] = useState('null')

    /**
     * 
     * @param {number} x
     * @returns {number}
     * @description -- sortei um número entre 1 e X e retorna o valor sorteado
     * 
     *  */ 


    function rollDice(x){
        setDiceResult((Math.random() * 10).toFixed(1))  //Tofixed=> quantas casas decimais aparece

        
    }

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
                        <DiceButton
                            rollDice={ () => rollDice(2)} //Sempre que o evento acontecer, executa a função
                            dices={'d2'}
                            svg="1"
                        />
                        <DiceButton
                            rollDice={ () => rollDice(2)}
                            dices={'d4'}
                            svg="2"
                        />
                        <DiceButton
                            rollDice={ () => rollDice(2)}
                            dices={'d6'}
                            svg="3"
                        />

                        <DiceButton
                            rollDice={ () => rollDice(2)}
                            dices={'d8'}
                            svg="1"
                        />
                    </View>
                    
                    <View style={styles.div}>
                        <DiceButton
                            rollDice={ () => rollDice(2)}
                            dices={'d10'}
                        />
                        <DiceButton
                            rollDice={ () => rollDice(2)}
                            dices={'d12'}
                        />
                        <DiceButton
                            rollDice={ () => rollDice(2)}
                            dices={'d20'}
                        />
                        <DiceButton
                            rollDice={ () => rollDice(2)}
                            dices={'d100'}
                        />

                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}