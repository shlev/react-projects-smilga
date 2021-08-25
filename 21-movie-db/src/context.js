import React, { useState, useContext, useEffect } from "react";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });
  const [searchTerm, setSearchTerm] = useState("batman");

  const getMovies = async () => {
    setLoading(true);
    const url = `${API_ENDPOINT}&s=${searchTerm}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.Response === "True") {
      console.log("Update movies");
      setMovies(data.Search);
      setError({ show: false, msg: "" });
    } else {
      setError({ show: true, msg: data.Error });
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [searchTerm]);
  return (
    <AppContext.Provider
      value={{ loading, movies, error, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
