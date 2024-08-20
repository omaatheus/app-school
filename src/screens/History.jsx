import { useContext } from "react";
import { FlatList } from "react-native";
import { Text } from "react-native-paper";
import { HistoryContext } from "../context/History";
import DiceListItem from "../components/DiceListItem";

export default function History() {
  const { history } = useContext(HistoryContext);

  console.log(history);

  return (
    <FlatList
      data={history}
      renderItem={({ item }) => (
        <DiceListItem
          dice={item.dice}
          side={item.side}
          rolled_at={item.rolled_at}
        />
      )}
    />
  );
}
