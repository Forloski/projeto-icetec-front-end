import React from "react";

import { AuthProvider } from "./auth";
import { ToastProvider } from "./toast";
import { CandidateProvider } from "./candidates";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <CandidateProvider>{children}</CandidateProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
