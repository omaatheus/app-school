import { styles } from "../screens/styles";
import { View, Text } from "react-native";
import { useState, useCallback, useEffect } from "react";
import { getRandomQuotes } from "../http/quoteManager";

export default function Quote() {
  const [quote, setQuote] = useState({
    content: 'Eu amo o Matheus',
    author: 'Isoca'
  })

  async function quotesResponse() {
    const apiQuote = await getRandomQuotes()
    setQuote({
      content: apiQuote[0].content,
      author: apiQuote[0].author,
    })
    
  }

  useEffect(() => {
    quotesResponse()
  }, [])
  return (
    <View style={styles.phrase}>
      <Text style={styles.quote}>
        {quote.content}
      </Text>
      <Text style={styles.author}>{quote.author}</Text>
    </View>
  );
}
