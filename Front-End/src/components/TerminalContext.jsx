import React, { createContext, useState } from "react";

export const TerminalContext = createContext();

export const TerminalProvider = ({ children }) => {
  const [terminals, setTerminals] = useState({
    mininet: [1],
    ryuController: [1],
  });

  return (
    <TerminalContext.Provider value={{ terminals, setTerminals }}>
      {children}
    </TerminalContext.Provider>
  );
};
