import { Button, SafeAreaView, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { styles } from "./styles";
import DiceButton from "../../components/DiceButton";
import { useContext, useState } from "react";
import Quote from "../../components/Quote";
import { HistoryContext } from "../../context/History";

export default function MainScreen() {
  const [diceResult, setDiceResult] = useState();
  // importando o global state
  const { history, setHistory } = useContext(HistoryContext);

  console.log(history);
  /**
   *
   * @param {number} x
   * @returns {number}
   * @description -- sortei um número entre 1 e X e retorna o valor sorteado
   *
   *  */

  function rollDice(x) {
    // Roll from 1 to X
    const diceRoll = {
      dice: Math.floor(Math.random() * x) + 1,
      sides: x,
      rolled_at: new Date().toLocaleString(), // Data e hora atual
    };
    // coloque o que já tinha no history e adicione a nova rolagem
    setHistory([...history, diceRoll]);
    setDiceResult(diceRoll.dice);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {diceResult ? (
          <Text style={styles.title}>{diceResult}</Text>
        ) : (
          <Quote />
        )}
      </View>

      <View style={styles.footer}>
        <View style={styles.ContainerDiv}>
          <View style={styles.div}>
            <DiceButton rollDice={() => rollDice(2)} dices="d2" />
            <DiceButton rollDice={() => rollDice(4)} dices="d4" />
            <DiceButton rollDice={() => rollDice(6)} dices="d6" />
            <DiceButton rollDice={() => rollDice(8)} dices="d8" />
          </View>

          <View style={styles.div}>
            <DiceButton rollDice={() => rollDice(10)} dices="d10" />
            <DiceButton rollDice={() => rollDice(12)} dices="d12" />
            <DiceButton rollDice={() => rollDice(20)} dices="d20" />
            <DiceButton rollDice={() => rollDice(100)} dices="d100" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
