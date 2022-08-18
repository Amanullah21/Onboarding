import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const circleCount = (data) => {
    setCount(data);
  };
  
  return (
    <Context.Provider
      value={{
        count,
        circleCount,
      }}
    >
      {children}
    </Context.Provider>
  );
};
