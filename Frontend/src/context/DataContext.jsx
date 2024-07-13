import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataList, setDataList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [historyList, setHistoryList] = useState([]);

  return (
    <DataContext.Provider
      value={{
        dataList,
        setDataList,
        favoriteList,
        setFavoriteList,
        historyList,
        setHistoryList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};