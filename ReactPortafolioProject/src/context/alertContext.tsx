import React, { createContext, useContext, useState, ReactNode } from "react";

type AlertType = "success" | "error";

interface AlertState {
  isOpen: boolean;
  type: AlertType;
  message: string;
}

interface AlertContextValue extends AlertState {
  onOpen: (type: AlertType, message: string) => void;
  onClose: () => void;
}

const defaultAlertState: AlertState = {
  isOpen: false,
  type: "success",
  message: "",
};

const AlertContext = createContext<AlertContextValue | undefined>(undefined);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AlertState>(defaultAlertState);

  const onOpen = (type: AlertType, message: string) => setState({ isOpen: true, type, message });
  const onClose = () => setState(defaultAlertState);

  return (
    <AlertContext.Provider value={{ ...state, onOpen, onClose }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = (): AlertContextValue => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }
  return context;
};
