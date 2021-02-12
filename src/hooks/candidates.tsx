import React, { useState, useCallback, useContext } from "react";
import api from "../services/apiClient";

export interface ICandidate {
  id: string;
  name: string;
  age: number;
  email: string;
  linkedinUrl: string;
  technologies: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface ICandidateContextData {
  candidatesState: ICandidate[];
  readAll(): void;
}

const defaultState: ICandidate[] = [];

const CandidatesContext = React.createContext({} as ICandidateContextData);

export const CandidateProvider: React.FC = ({ children }) => {
  const [candidatesState, setCandidates] = useState<ICandidate[]>(defaultState);

  const readAll = useCallback(async () => {
    const response = await api.get<ICandidate[]>("candidates/all");
    console.log("teste");
    const candidates = response.data;

    setCandidates(candidates);
  }, []);

  const create = useCallback(async (candidate) => {
    await api.post<ICandidate>("candidates", candidate);
  }, []);

  return (
    <CandidatesContext.Provider value={{ candidatesState, readAll }}>
      {children}
    </CandidatesContext.Provider>
  );
};

export function useCandidates(): ICandidateContextData {
  const context = useContext(CandidatesContext);

  if (!context) {
    throw new Error("useToast must be used within an ToastProvider");
  }

  return context;
}
