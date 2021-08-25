import React, { useState, useContext } from "react";
import useFetch from "./useFetch";
// make sure to use https
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const { loading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ loading, movies, error, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
