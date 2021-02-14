import React from "react";

import { AuthProvider } from "./auth";
import { ToastProvider } from "./toast";
import { CandidateProvider } from "./candidates";
import { DashboardScreenProvider } from "./dashboardScreen";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <CandidateProvider>
        <DashboardScreenProvider>{children}</DashboardScreenProvider>
      </CandidateProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
