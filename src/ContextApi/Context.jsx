import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);
  const [Uname, setUName] = useState("User");

  const circleCount = (data) => {
    setCount(data);
  };
  const UserName = (data) => {
    setUName(data);
  };

  const setDarkTheme = () => {
    setTheme(!theme);
  };

  return (
    <Context.Provider
      value={{
        count,
        circleCount,
        theme,
        setDarkTheme,
        Uname,
        UserName,
      }}
    >
      {children}
    </Context.Provider>
  );
};
