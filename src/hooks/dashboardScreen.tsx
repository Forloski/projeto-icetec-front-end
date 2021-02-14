import React, { useState, useCallback, useContext } from "react";

interface IDashboardScreenContextData {
  dashboardScreenState: number;
  storeDashboardScreen(dashboardScreen: number): void;
}

const DashboardScreenContext = React.createContext(
  {} as IDashboardScreenContextData
);

export const DashboardScreenProvider: React.FC = ({ children }) => {
  const [dashboardScreenState, setDashboardScreenState] = useState<number>(1);

  const storeDashboardScreen = useCallback(async (number) => {
    setDashboardScreenState(number);
  }, []);

  return (
    <DashboardScreenContext.Provider
      value={{ dashboardScreenState, storeDashboardScreen }}
    >
      {children}
    </DashboardScreenContext.Provider>
  );
};

export function useDashboardScreen(): IDashboardScreenContextData {
  const context = useContext(DashboardScreenContext);

  if (!context) {
    throw new Error(
      "useDashboardScreen must be used within an ScreenStateProvider"
    );
  }

  return context;
}
