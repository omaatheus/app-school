// Context API
import React, { createContext, useState } from "react";

export const HistoryContext = createContext(); // Cria um "contexto"
// Contexto é um objeto que contém um valor que é passado para todos os componentes filhos
// Dentro da árvore de componentes sem a necessidade de passar props manualmente em cada nível.

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  // O valor inicial do estado é um array vazio
  // O estado é atualizado com a função setHistory

  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};
