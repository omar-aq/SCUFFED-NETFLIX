import React, { useContext, useEffect, useState } from "react";

const url =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=5f6f66ecf0ea50a8ea1e45b50350c04f";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movies, steMovies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        steMovies(data.results);
      });
  }, []);

  return (
    <AppContext.Provider value={{ movies }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
